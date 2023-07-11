export default {
    '/': [
        {
            title: 'Get Started',
            to: '/get-started/',
        },
        {
            title: 'Projects',
            collapsible: true,
            items: [
                {
                    title: "Audits",
                    to: '/audits/'
                },
                {
                    title: "Competitive vs Private Audits",
                    to: '/competitive-vs-private/'
                },

            ]

        },
        {
            title: 'Auditors',
            collapsible: true,
            items: [
                {
                    title: "auditors",
                    to: '/auditors/'
                },
                {
                    title: "rewards-and-judging",
                    to: '/rewards-and-judging/'
                },
                {
                    title: "Learning & Resources",
                    to: '/learning-and-resources/'
                }
            ],
        },
        {
            title: 'Goals & Philosophy',
            to: '/goals-and-philosophy/',
        },
        {
            title: 'Roadmap',
            to: '/roadmap/',
        }
    ],

}