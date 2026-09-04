# Prompt Routing Rule

Every ready-to-copy AI handoff prompt must state its destination prominently before the prompt: `CHATGPT CHAT`, `CHATGPT WORK`, `GROK`, or `CODEX`.

Bruno must never need to infer which system receives the next prompt. Results from `CHATGPT WORK`, `GROK`, or `CODEX` return to `CHATGPT CHAT` unless a handoff explicitly states otherwise.
