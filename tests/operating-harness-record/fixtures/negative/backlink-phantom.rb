# The other half of FW-DEC-011: object existence is what carries the provenance
# claim, so a blob id that is neither the current bytes nor an object in the cited
# repository must be refused. Otherwise "the advance produced these bytes" could
# name bytes that never existed anywhere.
store = ARGV.fetch(0)
path = File.join(store, "operating/node-alpha/observation.md")
bytes = File.binread(path)
current = bytes[/blob:([0-9a-f]{40})/, 1] or abort("no blob found in fixture")
phantom = current.sub(/\A./) { |c| c == "a" ? "b" : "a" }
File.binwrite(path, bytes.gsub("blob:#{current}", "blob:#{phantom}"))
