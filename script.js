const projects = {

    risc: {

        category: "VLSI · RTL · FPGA",

        title: "RISC Processor Design",

        description:
            "Consolidated RISC processor development using Verilog HDL, showing progression from 8-bit to 16-bit, 32-bit and 64-bit architectures.",

        technologies: [
            "Verilog HDL",
            "RTL",
            "RISC",
            "Digital Design",
            "FPGA"
        ],

        features: [
            "Processor architecture",
            "Datapath design",
            "ALU",
            "Register file",
            "Control unit",
            "Instruction execution",
            "RTL implementation",
            "Testbench",
            "Simulation"
        ],

        architecture: `
            <div class="architecture">

                <p>PROCESSOR DEVELOPMENT</p>

                <div class="flow">

                    <span>8-BIT</span>
                    <b>→</b>
                    <span>16-BIT</span>
                    <b>→</b>
                    <span>32-BIT</span>
                    <b>→</b>
                    <span>64-BIT</span>

                </div>

                <div class="flow second">

                    <span>Architecture</span>
                    <b>→</b>
                    <span>RTL</span>
                    <b>→</b>
                    <span>Verilog</span>
                    <b>→</b>
                    <span>Testbench</span>
                    <b>→</b>
                    <span>Simulation</span>
                    <b>→</b>
                    <span>FPGA</span>

                </div>

            </div>
        `,

        github:
            "https://github.com/Dhanraj18-art/8bit-RISC-Processor-Verilog"

    },
    ahb: {

    category: "VLSI · RTL · SoC",

    title: "AHB-Like SoC Bus Architecture",

    description:
        "A modular AHB-like System-on-Chip bus architecture designed and verified in Verilog RTL using Ubuntu Linux. The project implements bus transfer sequencing, burst transactions, memory-mapped peripherals, wait-state handling, error detection and multi-master arbitration.",

    technologies: [
        "Verilog HDL",
        "RTL Design",
        "SoC Architecture",
        "Icarus Verilog",
        "GTKWave",
        "Ubuntu Linux",
        "Git & GitHub"
    ],

    features: [
        "NONSEQ and SEQ transfer handling",
        "INCR4 burst transfers",
        "HREADY-based wait-state handling",
        "Stable transfer signals during wait states",
        "Memory-mapped RAM and GPIO peripherals",
        "Address decoding",
        "HRESP-based error detection",
        "Unmapped-address detection",
        "Multi-master bus arbitration",
        "Round-robin arbitration",
        "RTL simulation and waveform verification"
    ],

    architecture: `

        <div class="architecture">

            <p>
                SYSTEM ARCHITECTURE
            </p>

            <div class="vidyut-flow">

                <div>
                    Master 0 / Master 1
                </div>

                <span>↓</span>

                <div>
                    Round-Robin Arbiter
                </div>

                <span>↓</span>

                <div class="highlight">
                    AHB-Like Bus
                </div>

                <span>↓</span>

                <div>
                    Address Decoder
                </div>

                <span>↓</span>

                <div>
                    RAM / GPIO
                </div>

                <span>↓</span>

                <div>
                    HREADY / HRESP
                </div>

            </div>

        </div>

    `,

    github: "https://github.com/Dhanraj18-art/ahb-like-soc"

}


    attendance: {

        category: "EMBEDDED · IoT",

        title: "Smart Attendance System",

        description:
            "ESP32-based RFID attendance system with automated attendance recording and audio/visual feedback.",

        technologies: [
            "ESP32",
            "RC522",
            "LCD I2C",
            "DFPlayer Mini",
            "Google Sheets"
        ],

        features: [
            "Student registration",
            "RFID identification",
            "Attendance mode",
            "LCD display",
            "Audio feedback",
            "Cloud attendance records"
        ]

    },


    vtu: {

        category: "WEB · PWA",

        title: "VTU Results PWA",

        description:
            "Progressive Web App for VTU results, SGPA calculation and CGPA calculation.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "PWA",
            "Local Storage"
        ],

        features: [
            "Result access",
            "Semester selection",
            "SGPA calculation",
            "CGPA calculation",
            "Subject marks",
            "Credits",
            "Local storage"
        ],

        github:
            "https://github.com/Dhanraj18-art/vtu-result-app",

        demo:
            "https://dhanraj18-art.github.io/vtu-result-app/"

    },


  

    vidyut: {

        category: "EMBEDDED · IoT",

        title: "Vidyut Rakshaka",

        description:
            "An IoT-based intelligent grid monitoring and protection system using a robotic system brain for sensing, processing, communication, decision-making and control.",

        technologies: [
            "ESP32",
            "Raspberry Pi Pico WH",
            "ACS712",
            "Relay",
            "ANN",
            "Blynk",
            "IoT"
        ],

        features: [
            "Electrical parameter monitoring",
            "Current sensing",
            "Abnormal-condition detection",
            "Grid protection",
            "Remote monitoring",
            "Remote control",
            "Load forecasting",
            "Wireless communication"
        ],

        architecture: `

            <div class="architecture">

                <p>
                    ROBOTIC SYSTEM ARCHITECTURE
                </p>

                <div class="vidyut-flow">

                    <div>
                        Electrical Grid / Load
                    </div>

                    <span>↓</span>

                    <div>
                        Sensors
                    </div>

                    <span>↓</span>

                    <div class="highlight">
                        Robotic System Brain
                    </div>

                    <span>↓</span>

                    <div>
                        Data Processing
                    </div>

                    <span>↓</span>

                    <div>
                        Decision Logic
                    </div>

                    <span>↓</span>

                    <div>
                        Protection / Control
                    </div>

                </div>

            </div>

        `

    }

};


function openModal(projectId) {

    const project =
        projects[projectId];

    const modal =
        document.getElementById(
            "projectModal"
        );

    const body =
        document.getElementById(
            "modalBody"
        );


    if (!project) return;


    body.innerHTML = `

        <p class="category">
            ${project.category}
        </p>

        <h2>
            ${project.title}
        </h2>

        <p class="modal-description">
            ${project.description}
        </p>


        <div class="modal-section">

            <h4>
                TECHNOLOGIES
            </h4>

            <div class="tags">

                ${project.technologies
            .map(
                tech =>
                    `<span>${tech}</span>`
            )
            .join("")
        }

            </div>

        </div>


        <div class="modal-section">

            <h4>
                KEY FEATURES
            </h4>

            <div class="modal-features">

                ${project.features
            .map(
                feature =>
                    `
                            <div>
                                <b>+</b>
                                ${feature}
                            </div>
                            `
            )
            .join("")
        }

            </div>

        </div>


        ${project.architecture || ""}


        <div class="modal-actions">

            ${project.github
            ? `
                    <a
                        href="${project.github}"
                        target="_blank"
                        class="btn primary"
                    >
                        GitHub ↗
                    </a>
                    `
            : ""
        }


            ${project.demo
            ? `
                    <a
                        href="${project.demo}"
                        target="_blank"
                        class="btn secondary"
                    >
                        Live Demo ↗
                    </a>
                    `
            : ""
        }

        </div>

    `;


    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";
}


function closeModal() {

    const modal =
        document.getElementById(
            "projectModal"
        );

    modal.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "";
}


document
    .getElementById("projectModal")
    .addEventListener(
        "click",
        function (event) {

            if (
                event.target === this
            ) {

                closeModal();

            }

        }
    );


document
    .getElementById("menuBtn")
    .addEventListener(
        "click",
        function () {

            document
                .getElementById("navMenu")
                .classList.toggle(
                    "show"
                );

        }
    );


/* PROJECT FILTER */

const filterButtons =
    document.querySelectorAll(
        ".filter"
    );

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    btn =>
                        btn.classList.remove(
                            "active"
                        )
                );

                this.classList.add(
                    "active"
                );


                const filter =
                    this.dataset.filter;


                projectCards.forEach(
                    card => {

                        const categories =
                            card.dataset.category;


                        if (
                            filter === "all" ||
                            categories.includes(
                                filter
                            )
                        ) {

                            card.style.display =
                                "";

                        } else {

                            card.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    }
);


/* ESC TO CLOSE MODAL */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);
