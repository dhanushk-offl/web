export interface Talk {
	date: string;
	title: string;
	event: string;
	eventLink?: string | null;
	location: string;
	video?: string | null;
	slides?: string | null;
}

export const talks: Talk[] = [
	{
		date: 'Oct 2026',
		title: 'Rethinking Infrastructure for Agentic Workloads',
		event: 'DevFest 2026 (Google Developers Group)',
		eventLink: 'https://devfest.gdgchennai.in',
		location: 'Chennai, India',
		video: null,
		slides: 'https://www.figma.com/slides/uU5mORFYbpe0O6YBKCbehG'
	},
	{
		date: 'Nov 2025',
		title: 'Advanced Streaming UI for AI Apps using React / Next.js',
		event: 'Chennaireact Meetup',
		eventLink: 'https://luma.com/g6aqpnb2',
		location: 'Chennai, India',
		video: 'https://www.youtube.com/live/0NYbRQtaYhs?si=borCzSBv2f8NqKAj&t=3168',
		slides: 'https://www.figma.com/slides/6NXNk0LF7NWG5TNe4bQ03g'
	},
	{
		date: 'Jul 2025',
		title: 'Make Your Idea from 0 to 1 with Open Source – With a Kutti Story',
		event: 'TOSS Conf. 2025',
		eventLink: 'https://tossconf25.kaniyam.com/',
		location: 'Chennai, India',
		video: null,
		slides: 'https://www.figma.com/slides/ZYg6JJP2ZZX1yuK5SKmFy2'
	},
	{
		date: 'Jan 2025',
		title: 'Democratizing High-Performance Computing with Python: Why It Matters and an Introduction to Guro',
		event: 'Chennaipy January Meetup',
		eventLink: 'https://chennaipy.org/',
		location: 'Chennai, India',
		video: null,
		slides: 'https://www.canva.com/design/DAGcveEiy5g/i3linGPiy1s8G8HIjvs1Rg/view'
	},
	{
		date: 'Aug 2024',
		title: 'Fundamentals and Development of AI: A Career Guidance Session',
		event: 'Naan Mudhalvan',
		eventLink: null,
		location: 'Virtual',
		video: null,
		slides: 'https://www.canva.com/design/DAGADqFtAbI/22acn5V7-jsStHeGNsjmHA/view'
	},
	{
		date: 'Mar 2024',
		title: 'Understanding AI Ethics and Concerns: Using AI Responsibly and Securely',
		event: 'Naan Mudhalvan TN Skills Summit 2024',
		eventLink: null,
		location: 'Chennai, India',
		video: null,
		slides: null
	},
	{
		date: 'Sep 2023',
		title: 'Leverage AI in Business and Management: Shifting Paradigms',
		event: 'TechSpark IIITB 2023',
		eventLink: null,
		location: 'Bengaluru, India',
		video: null,
		slides: null
	}
];
