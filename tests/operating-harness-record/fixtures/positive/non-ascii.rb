# A record body may legally contain non-ASCII: the spec requires UTF-8 and NFC,
# and real records carry accented collaborator names and typographic dashes.
# Section slicing once mixed character offsets with byte offsets, so a single
# such character shifted every later section and the record was refused with a
# misleading "noncanonical header". This injects the smallest such body.
path = File.join(ARGV.fetch(0), "operating/node-alpha/observation.md")
bytes = File.binread(path).sub(
  "Node state was read without changing subject state.",
  "Node state was read without changing subject state — confirmed with Renée."
)
File.binwrite(path, bytes)
