import image_1 from './projects/food_1.png'
import image_2 from './projects/food_2.png'
import image_3 from './projects/food_3.png'
import image_4 from './projects/header_img.png'
import close_icon from './cross_icon.png'
import facebook_icon from './facebook_icon.png'
import x_icon from './twitter_icon.png'
import linked_icon from './linkedin_icon.png'

export const assets = [
    image_1,
    image_2,
    image_3,
    image_4,
    close_icon,
    facebook_icon,
    linked_icon,
    x_icon
]

export const images = [
    {
        lorafloodguard: "",
        passwift: "",
        beautypala: "",
        caninecenter: "",
    }
]

export const default_links = [
    {
        github: "https://github.com/johnwaithira/",
        _projects: "https://projects.qcash.co.ke/"
    }

]

export const my_contact = [
    {
        contact_name : "Phone",
        contact_value : "+254725354504",
        contact_icon : facebook_icon,
        contact_value_link :   `tel:+254725354504`
    }
    ,
    {
        contact_name : "Email",
        contact_value : "waithirajon@gmail.com",
        contact_icon : linked_icon,
        contact_value_link :   `mailto:waithirajon@gmail.com`
    }
    ,
    {
        contact_name : "Github",
        contact_value : "johnwaithira",
        contact_icon : x_icon,
        contact_value_link :   `https://github.com/johnwaithira`

    },
    {
        contact_name : "Linkedin",
        contact_value : "/in/johnwaithira",
        contact_icon : linked_icon,
        contact_value_link :   `https://linkedin.com/in/johnwaithira`

    }
]

export const project_category = [
    {
        project_category_name: "HTML CSS",
        project_category_img: ""
    },
    {
        project_category_name: "FullStack",
        project_category_img: ""
    },
    {
        project_category_name: "React.js",
        project_category_img: ""
    },
    {
        project_category_name: "IOT",
        project_category_img: ""
    }
]
export const projects_list = [
    {
        id: 1,
        name: "LoraFlood Guard",
        slag: "Smart Flood Detection and Early Warning System",
        project_banner: "https://cdn.dribbble.com/userupload/24083412/file/original-f24868b2b1c0544f0d03f48c12741722.jpg?resize=400x0",
        description: `
        <p> LoraFlood Guard is an IoT-based flood monitoring and alert system that uses LoRa communication technology to detect rising water levels in flood-prone areas. It provides real-time alerts to authorities and residents, helping them take preventive measures before floods occur.</p>
        
        <h3>Key Features</h3>
        <ul>
            <li>✅ <strong>LoRa-Based Communication</strong> – Uses LoRaWAN for long-distance, low-power data transmission.</li>
            <li>✅ <strong>Real-Time Flood Monitoring</strong> – Continuously tracks water levels and sends updates.</li>
            <li>✅ <strong>Instant Alerts</strong> – Sends SMS, email, or mobile notifications when water levels exceed thresholds.</li>
            <li>✅ <strong>Data Logging & Analysis</strong> – Stores historical flood data for predictions.</li>
            <li>✅ <strong>Battery-Powered & Solar Support</strong> – Works in remote areas without needing constant power.</li>
        </ul>
        
        <h3>Technologies Used</h3>
        <p><strong>Hardware:</strong> Water level sensors, ESP32, LoRaWAN Module, Solar Power</p>
        <p><strong>Software:</strong> PHP, JavaScript, MySQL, Node.js, Python</p>
        
        <h3>Impact & Benefits</h3>
        <p>🌍 <strong>Disaster Prevention:</strong> Provides early warnings to reduce damage.</p>
        <p>🌱 <strong>Cost-Effective:</strong> Affordable and scalable for deployment in rural areas.</p>`,
        link: [
            {
                link_name: "Github",
                link_address: `${default_links[0].github}lorafloodguard`
            }
        ],
        stack: ["PHP", "HTML & CSS", "JavaScript", "C++", "USSD", "MySQL (PDO)"],
        created_at: 2024,
        category: "IOT"
    },
    {
        id: 2,
        name: "Passwift",
        slag: "Secure Online Password Manager",
        project_banner: "https://cdn.dribbble.com/users/8661175/screenshots/16442825/media/d3c1058c5aba4e724595be44dd503b2c.png?resize=400x0",
        description: `
        <p> Passwift is a secure password manager that allows users to store, manage, and retrieve their credentials safely. It eliminates the need to remember multiple passwords while ensuring high-level encryption.</p>
        
        <h3>Key Features</h3>
        <ul>
            <li>🔒 <strong>End-to-End Encryption</strong> – Uses AES-256 encryption.</li>
            <li>🔑 <strong>Master Password Protection</strong> – Ensures only the user can access their data.</li>
            <li>⚡ <strong>Auto-Fill & Auto-Save</strong> – Automatically fills login details.</li>
            <li>🛡 <strong>Two-Factor Authentication (2FA)</strong> – Adds extra security.</li>
            <li>📊 <strong>Breach Monitoring</strong> – Alerts users if credentials are leaked.</li>
        </ul>

        <h3>Technologies Used</h3>
        <p><strong>Frontend:</strong> React.js, Tailwind CSS</p>
        <p><strong>Backend:</strong> PHP (Laravel), Node.js</p>
        <p><strong>Security:</strong> AES-256 encryption, JWT authentication</p>

        <h3>Impact & Benefits</h3>
        <p>✅ <strong>Enhances Security:</strong> Helps users manage strong passwords.</p>
        <p>✅ <strong>Protects Against Hacking:</strong> Reduces credential theft and phishing risks.</p>
        `,

        link: [
            {
                link_name: "Github",
                link_address: `${default_links[0].github}passwift`
            },
            {
                link_name: "Passwift demo",
                link_address: `http://passwift.unaux.com?ref=port2025`
            }
        ],
        stack: ["PHP", "HTML & CSS", "JavaScript", "SMTP Auth", "MySQL (PDO)"],
        created_at: 2022,
        category: "FullStack"

    },
    {
        id: 3,
        name: "Beauty Parlor",
        slag: "Beauty Salon Management System",
        project_banner: "https://cdn.dribbble.com/userupload/3531262/file/original-d51ff364517f2efbf2a513b9ab5971b8.png?resize=400x0",
        description: `<p> Beauty Parlor is a salon management system that simplifies appointment scheduling, customer management, and sales tracking.</p>
        
        <h3>Key Features</h3>
        <ul>
            <li>💅 <strong>Online Appointment Booking</strong> – Clients can book salon services.</li>
            <li>📲 <strong>Automated Reminders</strong> – Reduces no-shows with SMS/email notifications.</li>
            <li>📊 <strong>Business Analytics</strong> – Tracks revenue, customer visits, and sales.</li>
            <li>💰 <strong>Inventory Management</strong> – Monitors beauty products and stock levels.</li>
        </ul>

        <h3>Technologies Used</h3>
        <p><strong>Frontend:</strong> React.js, Tailwind CSS</p>
        <p><strong>Backend:</strong> PHP (Laravel)</p>
        <p><strong>Database:</strong> MySQL (PDO)</p>

        <h3>Impact & Benefits</h3>
        <p>🎯 <strong>Boosts Revenue:</strong> Increases client retention through automation.</p>
        <p>📉 <strong>Reduces Missed Appointments:</strong> Minimizes no-shows with reminders.</p>`,

        link: [
            {
                link_name: "Github",
                link_address: `${default_links[0].github}beautypala`
            }
        ],
        stack: ["PHP", "HTML & CSS", "JavaScript", "MySQL (PDO)"],
        created_at: 2024,
        category: "FullStack"
    },
    {
        id: 4,
        name: "Canine center",
        project_banner: "https://cdn.dribbble.com/users/371199/screenshots/17219902/media/fdf6134543282b290c2f25140b228623.jpg?resize=400x0",
        slag: "Pet Clinic & Veterinary Management System",
        description: `
        <p> Canine Center is a veterinary service management system designed for pet clinics, animal shelters, and vet hospitals.</p>
        
        <h3>Key Features</h3>
        <ul>
            <li>🐶 <strong>Pet Medical Records</strong> – Stores vaccination history and prescriptions.</li>
            <li>📅 <strong>Online Vet Appointment Scheduling</strong> – Enables pet owners to book vet visits.</li>
            <li>📢 <strong>Automated Health Reminders</strong> – Notifies owners about upcoming check-ups.</li>
            <li>🏥 <strong>Emergency Vet Services</strong> – Connects pet owners to emergency care.</li>
        </ul>

        <h3>Technologies Used</h3>
        <p><strong>Frontend:</strong> React.js, Bootstrap</p>
        <p><strong>Backend:</strong> PHP (Laravel)</p>
        <p><strong>API:</strong> Google Maps (for nearby vet clinics)</p>

        <h3>Impact & Benefits</h3>
        <p>🏥 <strong>Improves Pet Healthcare:</strong> Ensures timely vaccinations and treatments.</p>
        <p>📅 <strong>Reduces Appointment Overbooking:</strong> Streamlines scheduling for vet clinics.</p>`,

        link: [
            {
                link_name: "Github",
                link_address: `${default_links[0].github}caninecenter`
            },
        ],
        stack: ["HTML & CSS", "JavaScript"],
        created_at: 2024,
        category: "HTML CSS"
    }
]