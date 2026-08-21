path = File.join(ARGV.fetch(0), "operating/node-alpha/observation.md")
bytes = File.binread(path).sub("actor: harper", "actor: intruder")
File.binwrite(path, bytes)
