.PHONY: help validate validate-manifest protocol-check update

FILE ?= ./facework.manifest.yaml

help:
	@echo "Facework commands:"
	@echo "  make validate                              Validate default facework.manifest.yaml"
	@echo "  make validate-manifest FILE=path/to/file  Validate a custom manifest file"
	@echo "  make protocol-check                        Validate manifest + required protocol files"
	@echo "  make update                                Check for and install updates"

validate:
	@./bin/validate-manifest

validate-manifest:
	@./bin/validate-manifest "$(FILE)"

protocol-check:
	@./bin/validate-manifest "$(FILE)"
	@for f in PROTOCOL.md COMPLIANCE.md CERTIFICATION.md facework.manifest.schema.json; do \
		if [ ! -f "$$f" ]; then \
			echo "[error] missing required protocol file: $$f"; \
			exit 1; \
		fi; \
		echo "[ok] required file present: $$f"; \
	done

update:
	@./bin/facework-update
