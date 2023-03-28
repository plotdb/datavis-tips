require! <[js-yaml fs jade path]>
cwd = path.resolve process.cwd!

src = \charts/yaml/scatter.yaml
config = js-yaml.safe-load fs.read-file-sync src, \utf8

template = fs.read-file-sync \template.jade .toString!

ret = jade.render template,{filename: "template.jade", basedir: path.join(cwd)} <<< config
console.log ret
