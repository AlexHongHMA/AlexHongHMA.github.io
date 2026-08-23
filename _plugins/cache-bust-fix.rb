# The jekyll-cache-bust gem hashes "assets/_sass" to build the CSS cache-buster
# query. This theme keeps its stylesheets in "_sass", so that glob matches
# nothing, the digest is the MD5 of an empty string, and the emitted
# main.css?v= value never changes. Browsers and CDNs then serve a stale
# stylesheet indefinitely.
#
# Re-register the filter against the directories this repo actually uses. The
# last registered Liquid filter wins, and _plugins load after gems.
module Jekyll
  module CacheBustFix
    require "digest/md5"

    # purgecss.config.js is included because it changes the *output* stylesheet
    # without touching any source file. Omitting it means an edit that alters
    # what survives the purge ships under an unchanged URL, and caches never
    # refetch it.
    SOURCES = ["_sass/**/*", "assets/css/*", "purgecss.config.js"].freeze

    def bust_css_cache(file_name)
      contents = SOURCES.flat_map { |glob| Dir[glob].sort }
                        .reject { |path| File.directory?(path) }
                        .map { |path| File.read(path) }
                        .join
      [file_name, "?v=", Digest::MD5.hexdigest(contents)].join
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBustFix)
