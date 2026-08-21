.PHONY: help validate validate-manifest release-check protocol-check update

FILE ?= ./facework.manifest.yaml

help:
	@echo "Facework commands:"
	@echo "  make validate                              Validate default facework.manifest.yaml"
	@echo "  make validate-manifest FILE=path/to/file  Validate a custom manifest file"
	@echo "  make release-check                         Validate release number (unique, documented, increasing)"
	@echo "  make protocol-check                        Validate manifest + protocol files + skill registration + release number"
	@echo "  make update                                Check for and install updates"

validate:
	@./bin/validate-manifest

validate-manifest:
	@./bin/validate-manifest "$(FILE)"

release-check:
	@./bin/validate-release

protocol-check:
	@./bin/validate-manifest "$(FILE)"
	@for f in PROTOCOL.md COMPLIANCE.md CERTIFICATION.md facework.manifest.schema.json; do \
		if [ ! -f "$$f" ]; then \
			echo "[error] missing required protocol file: $$f"; \
			exit 1; \
		fi; \
		echo "[ok] required file present: $$f"; \
	done
	@./bin/validate-skill-registration
	@./bin/validate-release

update:
	@./bin/facework-update
