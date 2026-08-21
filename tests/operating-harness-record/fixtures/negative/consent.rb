path = File.join(ARGV.fetch(0), "consents/counterparty-alpha.yaml")
bytes = File.binread(path).sub('tenant: "counterparty-alpha"', 'tenant: "wrong-tenant"')
File.binwrite(path, bytes)
