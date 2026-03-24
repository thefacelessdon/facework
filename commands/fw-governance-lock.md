# /fw-governance-lock

Lock governance and ownership conditions before scaling scope.

## Sequence
1. Re-run key checks from `/fw-frequency`.
2. Run `/fw-sovereignty` for control, portability, and exit integrity.
3. Run `/contract-sync` to align docs/contracts/implementation assumptions.
4. Produce a governance lock record for downstream execution.

## Output
- `Governance lock status`
- `Sovereignty status`
- `Contract alignment status`
- `Required fixes before expansion`
