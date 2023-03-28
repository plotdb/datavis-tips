require! <[chokidar http fs path jade stylus markdown js-yaml colors]>
require! 'uglify-js': uglify, LiveScript: lsc


useMarkdown = true
markdown = markdown.markdown

RegExp.escape = -> it.replace /[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"

cwd = path.resolve process.cwd!
cwd-re = new RegExp RegExp.escape "#cwd#{if cwd[* - 1]=='/' => "" else \/}"

pad = -> if "#it".length < 2 => "0#it" else "#it"
now = -> new Date! |> -> 
  "[#{pad(it.getMonth! + 1)}/#{pad(it.getDate!)}" +
  " #{pad(it.getHours!)}:#{pad(it.getMinutes!)}:#{pad(it.getSeconds!)}]"

newer = (f1, f2) ->
  if !fs.exists-sync(f1) => return false
  if !fs.exists-sync(f2) => return true
  (fs.stat-sync(f1).mtime - fs.stat-sync(f2).mtime) > 0

_log = console.log
console.log = (...arg) -> _log.apply null, [now!] ++ arg
ignore-list = [/^server.ls$/, /^library.jade$/, /^\.[^/]+/, /^node_modules\//,/^assets\//]
ignore-func = (f) -> if f => ignore-list.filter(-> it.exec f.replace(cwd-re, "")replace(/^\.\/+/, ""))length else 0

type-table =
  "3gp":"video/3gpp",
  "aiff":"audio/x-aiff",
  "arj":"application/x-arj-compressed",
  "asf":"video/x-ms-asf",
  "asx":"video/x-ms-asx",
  "au":"audio/ulaw",
  "avi":"video/x-msvideo",
  "bcpio":"application/x-bcpio",
  "ccad":"application/clariscad",
  "cod":"application/vnd.rim.cod",
  "com":"application/x-msdos-program",
  "cpio":"application/x-cpio",
  "cpt":"application/mac-compactpro",
  "csh":"application/x-csh",
  "css":"text/css",
  "deb":"application/x-debian-package",
  "dl":"video/dl",
  "doc":"application/msword",
  "drw":"application/drafting",
  "dvi":"application/x-dvi",
  "dwg":"application/acad",
  "dxf":"application/dxf",
  "dxr":"application/x-director",
  "etx":"text/x-setext",
  "ez":"application/andrew-inset",
  "fli":"video/x-fli",
  "flv":"video/x-flv",
  "gif":"image/gif",
  "gl":"video/gl",
  "gtar":"application/x-gtar",
  "gz":"application/x-gzip",
  "hdf":"application/x-hdf",
  "hqx":"application/mac-binhex40",
  "html":"text/html",
  "ice":"x-conference/x-cooltalk",
  "ico":"image/x-icon",
  "ief":"image/ief",
  "igs":"model/iges",
  "ips":"application/x-ipscript",
  "ipx":"application/x-ipix",
  "jad":"text/vnd.sun.j2me.app-descriptor",
  "jar":"application/java-archive",
  "jpeg":"image/jpeg",
  "jpg":"image/jpeg",
  "js":"text/javascript",
  "json":"application/json",
  "latex":"application/x-latex",
  "lsp":"application/x-lisp",
  "lzh":"application/octet-stream",
  "m":"text/plain",
  "m3u":"audio/x-mpegurl",
  "m4v":"video/mp4",
  "man":"application/x-troff-man",
  "me":"application/x-troff-me",
  "midi":"audio/midi",
  "mif":"application/x-mif",
  "mime":"www/mime",
  "mkv":"  video/x-matrosk",
  "movie":"video/x-sgi-movie",
  "mp4":"video/mp4",
  "mp41":"video/mp4",
  "mp42":"video/mp4",
  "mpg":"video/mpeg",
  "mpga":"audio/mpeg",
  "ms":"application/x-troff-ms",
  "mustache":"text/plain",
  "nc":"application/x-netcdf",
  "oda":"application/oda",
  "ogm":"application/ogg",
  "pbm":"image/x-portable-bitmap",
  "pdf":"application/pdf",
  "pgm":"image/x-portable-graymap",
  "pgn":"application/x-chess-pgn",
  "pgp":"application/pgp",
  "pm":"application/x-perl",
  "png":"image/png",
  "pnm":"image/x-portable-anymap",
  "ppm":"image/x-portable-pixmap",
  "ppz":"application/vnd.ms-powerpoint",
  "pre":"application/x-freelance",
  "prt":"application/pro_eng",
  "ps":"application/postscript",
  "qt":"video/quicktime",
  "ra":"audio/x-realaudio",
  "rar":"application/x-rar-compressed",
  "ras":"image/x-cmu-raster",
  "rgb":"image/x-rgb",
  "rm":"audio/x-pn-realaudio",
  "rpm":"audio/x-pn-realaudio-plugin",
  "rtf":"text/rtf",
  "rtx":"text/richtext",
  "scm":"application/x-lotusscreencam",
  "set":"application/set",
  "sgml":"text/sgml",
  "sh":"application/x-sh",
  "shar":"application/x-shar",
  "silo":"model/mesh",
  "sit":"application/x-stuffit",
  "skt":"application/x-koan",
  "smil":"application/smil",
  "snd":"audio/basic",
  "sol":"application/solids",
  "spl":"application/x-futuresplash",
  "src":"application/x-wais-source",
  "stl":"application/SLA",
  "stp":"application/STEP",
  "sv4cpio":"application/x-sv4cpio",
  "sv4crc":"application/x-sv4crc",
  "svg":"image/svg+xml",
  "swf":"application/x-shockwave-flash",
  "tar":"application/x-tar",
  "tcl":"application/x-tcl",
  "tex":"application/x-tex",
  "texinfo":"application/x-texinfo",
  "tgz":"application/x-tar-gz",
  "tiff":"image/tiff",
  "tr":"application/x-troff",
  "tsi":"audio/TSP-audio",
  "tsp":"application/dsptype",
  "tsv":"text/tab-separated-values",
  "unv":"application/i-deas",
  "ustar":"application/x-ustar",
  "vcd":"application/x-cdlink",
  "vda":"application/vda",
  "vivo":"video/vnd.vivo",
  "vrm":"x-world/x-vrml",
  "wav":"audio/x-wav",
  "wax":"audio/x-ms-wax",
  "webm":"video/webm",
  "wma":"audio/x-ms-wma",
  "wmv":"video/x-ms-wmv",
  "wmx":"video/x-ms-wmx",
  "wrl":"model/vrml",
  "wvx":"video/x-ms-wvx",
  "xbm":"image/x-xbitmap",
  "xlw":"application/vnd.ms-excel",
  "xml":"text/xml",
  "xpm":"image/x-xpixmap",
  "xwd":"image/x-xwindowdump",
  "xyz":"chemical/x-pdb",
  "zip":"application/zip"

watch-path = \.

src-tree = (matcher, morpher) ->
  ret = {} <<< do
    down-hash: {}
    up-hash: {}
    matcher: -> false
    morpher: -> it
    parse: (filename) ->
      dir = path.dirname(filename)
      ret = fs.read-file-sync filename .toString!split \\n .map @matcher .filter(->it)
      if @morpher => ret = ret.map ~> path.join(dir, @morpher(it, dir))
      else ret = ret.map -> path.join(dir, it)
      @down-hash[filename] = ret
      for it in ret => if not (filename in @up-hash.[][it]) => @up-hash.[][it].push filename
    find-root: (filename) ->
      work = [filename]
      ret = []
      hash = {}
      while work.length > 0
        f = work.pop!
        if f and !hash[f] and (!@up-hash[f] or @up-hash[f].length == 0) =>
          hash[f] = 1
          ret.push f
        else if @up-hash[f] => work ++= @up-hash[f]
      ret
  ret <<< {matcher, morpher}

jade-tree = src-tree(
  (-> if /^ *include (.+)| *extends (.+)/.exec(it) => (that.1 or that.2) else null),
  ((it, dir) ->
    if /^\//.exec it =>
      rpath = dir.split(/src\/jade\/?/)[* - 1]
      if rpath => it = path.join(("../" * rpath.split(\/).length), it)
      it
    it
  )
)

styl-tree = src-tree(
  (-> if /^ *@import ('?)(.+)\1/.exec(it) => that.2 else null ),
  (-> it.replace(/(.styl)?$/, ".styl"))
)

mkdir-recurse = (f) ->
  if fs.exists-sync f => return
  parent = path.dirname(f)
  if !fs.exists-sync parent => mkdir-recurse parent
  fs.mkdir-sync f

/*
styl-tree = do
  down-hash: {}
  up-hash: {}
  parse: (filename) ->
    dir = path.dirname(filename)
    ret = fs.read-file-sync filename .toString!split \\n .map(-> /^ *@import (.+)/.exec it)filter(->it)map(->it.1)
    ret = ret.map -> path.join(dir, it.replace(/(\.styl)?$/, ".styl"))
    @down-hash[filename] = ret
    for it in ret => if not (filename in @up-hash.[][it]) => @up-hash.[][it].push filename
  find-root: (filename) ->
    work = [filename]
    ret = []
    while work.length > 0
      f = work.pop!
      if @up-hash.[][f].length == 0 => ret.push f
      else work ++= @up-hash[f]
    ret
*/
ctype = (name=null) ->
  if useMarkdown and /\.md$/.exec(name) => return \text/html
  ret = /\.([^.]+)$/.exec name
  return \application/octet-stream if not ret or not ret.1 or not type-table[ret.1]
  return type-table[ret.1]

ftype = ->
  switch
  | /\.yaml$/.exec it => "yaml"
  | /\.ls$/.exec it => "ls"
  | /\.styl/.exec it => "styl"
  | /\.jade$/.exec it => "jade"
  | otherwise => "other"

# assign functions to route-table for server side script routing
sample-cgi = (req, res) ->
  res.writeHead 200, {"Content-type": "text/html"}
  res.end "hello world!"
route-table = {"/sample-cgi": sample-cgi}

server = (req, res) ->
  req.url = req.url - /[?#].*$/
  file-path = path.resolve cwd, "static/.#{req.url}"
  if file-path.indexOf(cwd) < 0 =>
    res.writeHead 403, ctype!
    return res.end "#{req.url} forbidden"

  # custom server side script
  rel-path = file-path.replace cwd, ""
  if rel-path of route-table => return route-table[rel-path] req, res

  # directory: give index.html, or generate a list of files
  if fs.existsSync(file-path) and fs.lstatSync(file-path)isDirectory! =>
    dir = file-path.replace /\/$/,""
    file-path = "#{file-path}/index.html"
    if not fs.existsSync(file-path) =>
      files = fs.readdirSync dir
      dir = req.url.replace /\/$/,""
      res.writeHead 200, {"Content-type": \text/html}
      res.write "<h2>#{dir}<h2>\n<ul>\n"
      for it in files => res.write "<li><a href='#{dir}/#{it}'>#{it}</a></li>\n"
      return res.end \</ul>\n

  # file not exists: 404
  if not fs.existsSync(file-path) =>
    res.writeHead 404, ctype!
    return res.end "#{req.url} not found"
  console.log "[ GET ] #{file-path} (#{ctype file-path})"

  length = 0
  buf = fs.readFileSync file-path
  if useMarkdown =>
    if /\.md$/.exec(file-path) =>
      buf = markdown.toHTML(buf.toString!).toString!
      buf = [
        '<meta charset="utf-8">'
        '<link rel="stylesheet" type="text/css" href="/assets/markdown-air/air.css"></link>'
        buf
      ].join("")
      length = Buffer.byteLength buf, 'utf-8'

  res.writeHead 200, do
    "Content-Length": length or buf.length
    "Content-Type": ctype file-path
  res.end buf

log = (error, stdout, stderr) -> if "#{stdout}\n#{stderr}".trim! => console.log that
filecache = {}
update-file = ->
  if !it or /node_modules|\.swp$/.exec(it)=> return
  src = if it.0 != \/ => path.join(cwd,it) else it
  src = src.replace path.join(cwd,\/), ""
  [type,cmd,des] = [ftype(src), "",""]
  if type == \other => return
  site-config = eval(lsc.compile((fs.read-file-sync \src/ls/config.ls .toString!),{bare: true}) .toString!)
  jade-config = do
    md: markdown.toHTML
    tokey: -> it.to-lower-case!replace(' ', '-')
    toName: (key,lang) -> site-config.translation[key][lang]
    exists: -> fs.exists-sync "charts/yaml/#it.yaml" 

  choose-lang = (cfg, lang) ->
    ret = JSON.parse(JSON.stringify(cfg))
    for k of ret => if ret[k] and ret[k][lang] => ret[k] = ret[k][lang]
    ret

  lookup-key = (key) ->
    for type in site-config.key-types =>
      if (site-config[type] or []).indexOf(key) >= 0 => return key
    return null

  translate-key = (key,lang="en") ->
    ret = lookup-key key
    if !ret => return key
    return (site-config.translation[key] or {})[lang] or key

  token-to-url = (input="",lang="en") ->
    re = /\?\[([^\] ]+?)\]/g
    matches = input.match(re) or []
    for item in matches =>
      key = lookup-key item.replace(/[\?\[\]]/g, "")
      if !key => continue
      name = (site-config.translation[key] or {})[lang] or key
      input = input.replace(
        item, "[#name](/v/#key/#lang/)"
      )
    return input

  build-yaml = (src) ->
    if build-yaml.{}handler[src] => clearTimeout build-yaml.handler[src]
    build-yaml.handler[src] = ((src) ->
      setTimeout (-> _build-yaml src), 500
    ) src
  _build-yaml = (src) ->
    langs = site-config.langs
    langs = <[zh en]> # TODO only do zh to speed up.  remove this afterward
    try
      cfg = js-yaml.safe-load fs.read-file-sync src, \utf8
      cfg.id = name = (cfg.name.en or cfg.name).to-lower-case!.replace(/ /g, '-')
      for lang in langs =>
        des = "static/#lang/v/#name/index.html"
        if newer(des, src) and newer(des, "src/jade/template.jade") => continue
        _i18n = {}
        for k,v of site-config.translation => _i18n[k] = v[lang] or k
        lang-cfg = choose-lang cfg, lang
        str = JSON.stringify(lang-cfg)
        lang-cfg = JSON.parse(token-to-url str, lang)
        lang-cfg.key = lang-cfg.name
        lang-cfg.nameEN = translate-key(lang-cfg.key,"en")
        lang-cfg.name = translate-key(lang-cfg.key,lang)
        for i from 0 til lang-cfg.[]banner-config.length =>
          lang-cfg.[]banner-config[i] = (site-config.[]banner-config[i] or {}) <<< lang-cfg.[]banner-config[i]
        if lang-cfg.[]banner-config.length < site-config.[]banner-config.length =>
          for i from lang-cfg.banner-config.length til site-config.[]banner-config.length =>
            lang-cfg.banner-config.push site-config.[]banner-config[i]

        template = fs.read-file-sync \src\/jade\/template.jade .toString!
        ret = jade.render(
          template, {
            filename: path.join(cwd, "src", "jade", "template.jade")
            basedir: path.join(cwd,"src","jade/")
            lang: lang
            tourl: -> "/#lang/v/#it/"
          } <<< jade-config <<< lang-cfg <<< {_:_i18n} <<< {site: site-config, relpath: "v/#{lang-cfg.key}" }
        )
        mkdir-recurse path.dirname(des)
        fs.write-file-sync des, ret
        console.log "[BUILD] #src --> #des"

    catch e
      console.log "[ERROR] #src faield:".red
      console.log e.toString!.grey
  if type == \jade and /src\/jade\/template.jade$/.exec src =>
    files = fs.readdir-sync \charts/yaml/ .filter(->/.yaml$/.exec(it)).map -> "charts/yaml/#it"
    files.map -> build-yaml it
    return
  if type == \yaml =>
    if !/charts\/yaml/.exec src => return
    build-yaml src
    return
  if type == \ls =>
    if /src\/ls/.exec src =>
      try
        files = fs.readdir-sync \src/ls/ .map -> "src/ls/#it"
        files = files.filter -> (/\/\./.exec it) == null
        result = [uglify.minify(lsc.compile(fs.read-file-sync(file)toString!,{bare:true}),{fromString:true}).code for file in files].join("")
        des = "static/js/build.min.js"
        mkdir-recurse path.dirname(des)
        fs.write-file-sync "static/js/build.min.js", result
        console.log "[BUILD] #src --> build.min.js"
      catch
        console.log "[BUILD] #src failed: "
        console.log e.message
      return
    else =>
      if /^icon/.exec src => return
      des = src.replace /\.ls$/, ".js"
      try
        mkdir-recurse path.dirname(des)
        fs.write-file-sync(
          des,
          uglify.minify(lsc.compile(fs.read-file-sync(src)toString!,{bare:true}),{fromString:true}).code
        )
        console.log "[BUILD] #src --> #des"
      catch
        console.log "[BUILD] #src failed: "
        console.log e.message
      return


  if type == \styl =>
    try
      styl-tree.parse src
      srcs = styl-tree.find-root src
    catch
      console.log "[BUILD] #src failed: "
      console.log e.message
    logs = []
    _src = src
    if srcs => for src in srcs
      if !/src\/styl/.exec(src) => continue
      try
        des = src.replace(/src\/styl/, "static/css").replace(/\.styl$/, ".css")
        if newer(des, _src) => continue
        stylus fs.read-file-sync(src)toString!
          .set \filename, src
          # since stylus seems not provide access into nested object..
          .use (s) ->
            for k,v of site-config =>
              if Array.isArray(v) => v.sort!
              s.define k, v
          .define 'i18n', (lang,text) -> 
            return new stylus.nodes.String(site-config.translation[text.val][lang.val])
          .define 'index', (a,b) ->
            a = (a.string or a.val).split(' ')
            return new stylus.nodes.Unit(a.indexOf b.val)
          .render (e, css) ~>
            if e =>
              logs ++= [
                "[BUILD]   #src failed: "
                "  >>> #{e.name}"
                "  >>> #{e.message}"
              ]
            else =>
              mkdir-recurse path.dirname(des)
              fs.write-file-sync des, css
              logs.push "[BUILD]   #src --> #des"
      catch
        logs.push "[BUILD]   #src failed: "
        logs.push e.message
      if logs.length =>
        logs = ["[BUILD] recursive from #src:"] ++ logs
        console.log logs.join(\\n)

  if type == \jade =>
    if !/src\/jade/.exec(src) => return
    if /^\/\/- module ?/.exec(fs.read-file-sync src .toString!) => return
    lang = /src\/jade\/(..)\//.exec src
    lang = if lang => lang = lang.1 else \en
    console.log ">", src, lang
    try
      if type == \jade => jade-tree.parse src
      srcs = jade-tree.find-root src
    catch
      console.log "[BUILD] #src failed: "
      console.log e.message
    _src = src
    if srcs.indexOf(_src) < 0 and type == \jade => srcs ++= _src
    if type == \other => srcs = srcs.filter(->it != _src)
    logs = []
    if srcs => for src in srcs
      if !/src\/jade/.exec(src) => continue
      try
        relpath = src.replace(/src\/jade(\/(en|zh))?\/?/, '').replace(/\.jade/, '.html').replace(/index\.html/,'')
        des = src.replace(/src\/jade/, "static").replace(/\.jade/, ".html")
        if newer(des, _src) => continue
        desdir = path.dirname(des)
        if !fs.exists-sync(desdir) or !fs.stat-sync(desdir).is-directory! => mkdir-recurse desdir
        try
          fs.write-file-sync(des, jade.render(
            (fs.read-file-sync src .toString!),
            {filename: src, basedir: path.join(cwd,\src/jade/), lang: lang}
              <<< jade-config <<< {site: site-config, relpath: relpath}
          ))
          logs.push "[BUILD]   #src --> #des"
        catch
          logs.push "[BUILD]   #src failed: "
          logs.push e.message
      catch
        logs.push "[BUILD]   #src failed: "
        logs.push e.message
    if logs.length =>
      logs = ["[BUILD] recursive from #_src:"] ++ logs
      console.log logs.join(\\n)

watcher = chokidar.watch watch-path, ignored: ignore-func, persistent: true
  .on \add, update-file
  .on \change, update-file

http.createServer server .listen 9990, \0.0.0.0

console.log "running server on 0.0.0.0:9990"
