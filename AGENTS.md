# AGENTS.md

## Mandatory ESUR entry rule

**STOP before doing any ESUR work.**

The single authoritative project-status file is:

`PROJECT_STATE.md` on `KnoxiCoke/Esur22` → `main`.

Every agent — ChatGPT, Work, Grok, Codex, or another implementation/review agent — must:

1. Read the current `main/PROJECT_STATE.md` first.
2. Verify the live GitHub refs relevant to the requested task.
3. Follow the scope, Medical, Regulatory, testing, merge, preview and release rules recorded there.
4. Stop and reconcile if GitHub and `PROJECT_STATE.md` conflict.
5. After a verified milestone changes project status, update `main/PROJECT_STATE.md`.

Do not use branch-local PROJECT_STATE copies, chat memory, prior prompts, local worktrees, or handoff artifacts as the authoritative project state.

For code and refs, live GitHub remote state is authoritative. For the interpreted ESUR project status and workflow rules, `main/PROJECT_STATE.md` is authoritative.
