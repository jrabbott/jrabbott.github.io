---
name: blog-writing
description: Structure and simplify blog posts from rough notes or outlines. Use when turning ideas into a readable draft — organising sections, tightening examples, and keeping language plain.
paths: 'drafts/**, **/*.md'
---

# Blog writing

Turn rough ideas into a clear blog post. Organise first, polish second.

## Workflow

1. **Extract the spine.** From the user's notes, identify: the central claim, the counter-argument, 2–4 supporting examples, and the closing balance. Write these as one-line bullets before drafting prose.
2. **Order for a technical reader.** Definition → problem → evidence (examples) → nuance (reactive vs reckless) → practical takeaway → short close. Do not bury the thesis.
3. **Draft simply.** Write at roughly a 14-year reading level. Prefer common words. If a simpler word works, use it.
4. **Tighten examples.** Each example follows: situation → choice → outcome → one-line lesson. Cut setup that does not change the lesson.
5. **Apply writing-voice.** Read [.agents/skills/writing-voice/SKILL.md](../writing-voice/SKILL.md) and run its quick check.

## Section patterns

### Opening (2–4 short paragraphs)

- Name the concept and what it is not (e.g. PDD is not TDD).
- Acknowledge the obvious criticism in one sentence.
- State why the post exists: a balanced view, not a hot take.

### Example sections

Use a consistent subhead that names the scenario, not the moral:

- Good: "Duplication that was not really duplication"
- Weak: "Why DRY is sometimes wrong"

End each example with one sentence on what pain was avoided or what pain guided the work.

### Boundary section (reactive vs reckless)

Use a short contrast list:

- Ignoring clear warning signs
- Waiting for meaningful signals

Then give 3–4 "invest early" triggers and 1–2 "leave it alone" triggers. Keep symmetrical and scannable.

### Closing (2–3 short paragraphs)

- Restate the middle path without repeating the whole post.
- End on a concrete line, not a grand statement.

## Length

- Target 1,200–1,500 words for a technical essay with three examples.
- If over 1,800 words, cut repetition between sections before cutting examples.

## Draft file conventions

Save blog drafts under `drafts/` as markdown:

```markdown
---
title: Post title
description: One sentence for previews and SEO.
date: YYYY-MM-DD
status: draft
---

# Post title

Body...
```

Do not wire drafts into the Starlight sidebar unless asked.

## References

- Voice rules: [writing-voice/SKILL.md](../writing-voice/SKILL.md)
- Site tone examples: [src/content/docs/comms.md](src/content/docs/comms.md)
