path = File.join(ARGV.fetch(0), "operating/node-alpha/authority-checked.md")
bytes = File.binread(path).sub("status: settled", "status: not-applicable")
File.binwrite(path, bytes)
