export interface Project {
	title: string;
	description: string;
	link: string;
	tags?: string[];
	year: string;
	logo?: string;
}

export const projects: Project[] = [
	{
		title: 'LetRetro',
		description: 'AI Powered Retrospective and Team Feedback Suite for IT Teams.',
		link: 'https://letretro.com',
		tags: ['SaaS', 'Product'],
		year: '2025',
		logo: '/assets/images/letretro.png'
	},
	{
		title: 'Agent Terminal',
		description:
			'A terminal that understands AI agents. Project workspaces, live process metrics, and native Claude Code + Codex support.',
		link: 'https://github.com/DaniAkash/agent-terminal',
		tags: ['Tool', 'AI Agent', 'Terminal', 'Open Source'],
		year: '2026'
	},
	{
		title: 'Prevu',
		description: 'Local first Preview social link cards instantly before deployment.',
		link: 'https://github.com/dhanushk-offl/prevu',
		tags: ['Tool', 'Rust', 'Web'],
		year: '2026',
		logo: '/assets/images/prev.png'
	},
	{
		title: 'Clynk',
		description: 'A Secure, Open-Source Clip Syncronization for Android & PC.',
		link: 'https://github.com/dhanushk-offl/clynk',
		tags: ['Tool', 'Android', 'Open Source'],
		year: '2026',
		logo: '/assets/images/clynk.png'
	},
	{
		title: 'Guro',
		description: 'A Lightweight System Monitoring and Benchmarking Package Toolkit',
		link: 'https://github.com/dhanushk-offl/guro',
		tags: ['Tool', 'Python', 'System Monitoring', 'Benchmarking'],
		year: '2025',
		logo: '/assets/images/guro.png'
	},
	{
		title: 'Hallx',
		description: 'hallx is a lightweight, model-agnostic hallucination risk engine for LLM outputs.',
		link: 'https://github.com/dhanushk-offl/hallx',
		tags: ['Tool', 'Python', 'LLM'],
		year: '2026',
		logo: '/assets/images/hallx.png'
	},
	{
		title: 'Resume Parser Agent',
		description: 'An agent skill, CLI tool, npm library, and MCP server that deeply parses resumes using the OpenResume 4-step algorithm.',
		link: 'https://github.com/dhanushk-offl/resume-parser',
		tags: ['AI Agent', 'Typescript', 'Resume Parser', 'MCP', 'ATS CLI'],
		year: '2026',
		logo: '/assets/images/resume-parser.png'
	},
	{
		title: 'Quickwash',
		description: 'Laundry Pickup & Delivery Management System for Washerman & Ironers',
		link: 'https://github.com/dhanushk-offl/quickwash/',
		tags: ['React', 'Expressjs', 'Prisma OEM', 'Fullstack'],
		year: '2025',
		logo: '/assets/images/resume-analyzer.png'
	},
	{
		title: 'Resume Analyser',
		description: 'Evaluate resume fitness for job descriptions.',
		link: 'https://github.com/dhanushk-offl/resume-analyzer',
		tags: ['AI', 'Career'],
		year: '2024',
		logo: '/assets/images/resume-analyzer.png'
	}
];
