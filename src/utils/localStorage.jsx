const admin = [{
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }, ]

    const employees =[
        {
        "id": 101,
        "email": "ayush@example.com",
        "password": "123",
        "messages" : [
            {
                "employeeMessage" : "hii",
                "adminMessage" : "hello"
            }
        ],
        "tasks": [
            {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Build Login Page",
            "taskDescription": "Create a responsive login page using React and Tailwind CSS.",
            "taskDate": "2026-07-01",
            "category": "Frontend"
            },
            {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Fix Navbar",
            "taskDescription": "Resolve mobile navigation alignment issues.",
            "taskDate": "2026-06-28",
            "category": "Frontend"
            },
            {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "API Integration",
            "taskDescription": "Connect login page with backend authentication API.",
            "taskDate": "2026-07-03",
            "category": "Backend"
            }
        ]
        },
        {
        "id": 102,
        "email": "rahul@example.com",
        "password": "123",
        "messages" : [
            {
                "employeeMessage" : "bye",
                "adminMessage" : "bii bii"
            }
        ],
        "tasks": [
            {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Database Setup",
            "taskDescription": "Configure MongoDB database for the project.",
            "taskDate": "2026-07-02",
            "category": "Database"
            },
            {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Create Collections",
            "taskDescription": "Create user and task collections.",
            "taskDate": "2026-06-27",
            "category": "Database"
            },
            {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Backup Database",
            "taskDescription": "Generate automated backup script.",
            "taskDate": "2026-06-29",
            "category": "Database"
            },
            {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Optimize Queries",
            "taskDescription": "Improve query performance using indexes.",
            "taskDate": "2026-07-05",
            "category": "Database"
            }
        ]
        },
        {
        "id": 103,
        "email": "priya@example.com",
        "password": "123",
        "messages" : [
            {
                "employeeMessage" : "ok",
                "adminMessage" : "okay"
            }
        ],
        "tasks": [
            {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Design Dashboard",
            "taskDescription": "Create dashboard UI in Figma.",
            "taskDate": "2026-07-01",
            "category": "UI/UX"
            },
            {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Color Palette",
            "taskDescription": "Finalize application color theme.",
            "taskDate": "2026-06-26",
            "category": "UI/UX"
            },
            {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Prototype Review",
            "taskDescription": "Review interactive prototype with the team.",
            "taskDate": "2026-07-04",
            "category": "UI/UX"
            },
            {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Dark Mode Design",
            "taskDescription": "Prepare dark mode design screens.",
            "taskDate": "2026-06-30",
            "category": "UI/UX"
            },
            {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Icon Set",
            "taskDescription": "Create custom icons for the dashboard.",
            "taskDate": "2026-07-06",
            "category": "Design"
            }
        ]
        },
        {
        "id": 104,
        "email": "neha@example.com",
        "password": "123",
        "messages" : [
            {
                "employeeMessage" : "gn",
                "adminMessage" : ""
            }
        ],
        "tasks": [
            {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Write Unit Tests",
            "taskDescription": "Write Jest tests for authentication module.",
            "taskDate": "2026-07-01",
            "category": "Testing"
            },
            {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Bug Verification",
            "taskDescription": "Verify resolved bugs before release.",
            "taskDate": "2026-06-29",
            "category": "QA"
            },
            {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Performance Test",
            "taskDescription": "Run performance testing on dashboard.",
            "taskDate": "2026-06-30",
            "category": "Testing"
            },
            {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Regression Testing",
            "taskDescription": "Perform regression testing after deployment.",
            "taskDate": "2026-07-05",
            "category": "QA"
            },
            {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Report Bugs",
            "taskDescription": "Document all critical bugs.",
            "taskDate": "2026-07-03",
            "category": "QA"
            },
            {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Smoke Testing",
            "taskDescription": "Complete smoke testing for the latest build.",
            "taskDate": "2026-06-25",
            "category": "Testing"
            }
        ]
        },
        {
        "id": 105,
        "email": "vikas@example.com",
        "password": "123",
        "messages" : [
            {
                "employeeMessage" : "nikal",
                "adminMessage" : "nikal nikal"
            }
        ],
        "tasks": [
            {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Deploy Application",
            "taskDescription": "Deploy the application on Vercel.",
            "taskDate": "2026-07-02",
            "category": "Deployment"
            },
            {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Environment Variables",
            "taskDescription": "Configure production environment variables.",
            "taskDate": "2026-06-27",
            "category": "DevOps"
            },
            {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "CI/CD Pipeline",
            "taskDescription": "Set up GitHub Actions for automatic deployment.",
            "taskDate": "2026-07-04",
            "category": "DevOps"
            },
            {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Server Monitoring",
            "taskDescription": "Configure uptime monitoring.",
            "taskDate": "2026-06-30",
            "category": "DevOps"
            },
            {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "SSL Configuration",
            "taskDescription": "Enable HTTPS for production server.",
            "taskDate": "2026-07-05",
            "category": "Deployment"
            },
            {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Domain Mapping",
            "taskDescription": "Connect custom domain to deployment.",
            "taskDate": "2026-06-28",
            "category": "Deployment"
            },
            {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Production Logs",
            "taskDescription": "Review application logs after deployment.",
            "taskDate": "2026-07-06",
            "category": "Monitoring"
            }
        ]
        }
    ]


    export const setLocalStorage = () => {
        localStorage.setItem("employees", JSON.stringify(employees));
        localStorage.setItem("admin", JSON.stringify(admin));
    }

    export const getLocalStorage = () => {
        const employees = JSON.parse(localStorage.getItem("employees") || []);
        const admin = JSON.parse(localStorage.getItem("admin") || []);

        return {employees, admin};
    }

