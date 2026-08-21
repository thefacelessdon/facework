path = File.join(ARGV.fetch(0), "operating/node-alpha/observation.md")
bytes = File.binread(path).sub(/blob: "blob:[0-9a-f]{40}"/, 'blob: "blob:0000000000000000000000000000000000000000"')
File.binwrite(path, bytes)
