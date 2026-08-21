# FW-DEC-011. A closed record cites the exact bytes its advance produced. When
# canon later revises that file — legitimately, in a later release — the object
# still exists but the path no longer holds those bytes. Provenance is intact and
# the record must stay valid, with the divergence reported rather than fatal.
# Before this ruling, every closed record decayed to invalid as its evidence
# evolved, which is what put pressure on rewriting a recorded hash.
store = ARGV.fetch(0)
# Put the cited bytes in the object database, the way a commit would.
system("git", "-C", store, "add", "node-registry/node-alpha.md", out: File::NULL) || abort("git add failed")
# Then move the evidence on, as a later release does.
File.open(File.join(store, "node-registry/node-alpha.md"), "a") { |f| f.puts("\nrevised by a later release") }
