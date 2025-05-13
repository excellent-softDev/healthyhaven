var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

function showDetails(type) {
    const details = {
        iud: {
            title: "Intrauterine Device (IUD)",
            content: "An intrauterine device (IUD) is a small, T-shaped device inserted into the uterus to prevent pregnancy. It works by preventing sperm from fertilizing an egg and may also thin the uterine lining to prevent implantation. There are two main types of IUDs: Copper IUDs, which use copper to create a hostile environment for sperm, and Hormonal IUDs, which release progestin to thicken cervical mucus and suppress ovulation. Copper IUDs are hormone-free and can last up to 10 years, while hormonal IUDs can last between 3 to 7 years, depending on the brand. IUDs are over 99% effective and are a low-maintenance, long-term option for contraception. However, they require insertion and removal by a healthcare provider."
        },
        oral: {
            title: "Oral Contraceptives",
            content: "Oral contraceptives, commonly known as 'the pill,' are medications taken daily to prevent pregnancy. They contain hormones (estrogen and/or progestin) that prevent ovulation, thicken cervical mucus to block sperm, and thin the uterine lining to prevent implantation. Combination pills contain both estrogen and progestin, while progestin-only pills (mini-pills) are suitable for individuals who cannot take estrogen. Oral contraceptives are over 91% effective with typical use and can also regulate menstrual cycles, reduce acne, and alleviate symptoms of hormonal imbalances. However, they require daily adherence and may not be suitable for individuals with certain health conditions, such as a history of blood clots."
        },
        ring: {
            title: "Vaginal Ring",
            content: "The vaginal ring is a small, flexible device inserted into the vagina that releases a continuous dose of estrogen and progestin hormones. It prevents ovulation, thickens cervical mucus, and thins the uterine lining to prevent pregnancy. The ring is worn for three weeks and removed for one week to allow for a menstrual period. It is over 91% effective with typical use and offers a convenient, low-maintenance option for birth control. The ring is discreet and does not require daily attention, but it must be replaced monthly. Some users may experience side effects such as vaginal irritation or hormonal changes."
        },
        diaphragm: {
            title: "Diaphragm",
            content: "A diaphragm is a dome-shaped, silicone barrier device that is inserted into the vagina to cover the cervix and block sperm from entering the uterus. It must be used with spermicide to increase its effectiveness. Diaphragms are reusable and can be inserted up to six hours before intercourse. They are about 88% effective with typical use. Proper fitting by a healthcare provider is recommended to ensure the diaphragm works effectively. Diaphragms are hormone-free and provide a non-invasive contraceptive option, but they require consistent use and proper cleaning after each use."
        },
        implant: {
            title: "Contraceptive Implant",
            content: "The contraceptive implant is a small, flexible rod inserted under the skin of the upper arm by a healthcare provider. It releases a steady dose of progestin to prevent ovulation, thicken cervical mucus, and thin the uterine lining. The implant is over 99% effective and provides long-term protection for up to 3 to 5 years. It is a convenient, low-maintenance option for individuals seeking long-term contraception. The implant is discreet and reversible, but it may cause irregular bleeding or other hormonal side effects in some users. Removal requires a minor procedure performed by a healthcare provider."
        },
        condom: {
            title: "Condoms",
            content: "Condoms are barrier methods of contraception that prevent sperm from entering the uterus. They are available for both men (male condoms) and women (female condoms). Male condoms are worn over the penis, while female condoms are inserted into the vagina. Condoms are about 85% effective with typical use and also provide protection against sexually transmitted infections (STIs), making them a dual-purpose contraceptive method. They are widely available, affordable, and easy to use. However, condoms must be used correctly and consistently for maximum effectiveness, and some individuals may experience latex allergies or sensitivity."
        }
    };

    const detailsSection = document.getElementById("contraceptive-details");
    const title = document.getElementById("details-title");
    const content = document.getElementById("details-content");

    title.textContent = details[type].title;
    content.textContent = details[type].content;

    detailsSection.style.display = "block";
}

function hideDetails() {
    const detailsSection = document.getElementById("contraceptive-details");
    detailsSection.style.display = "none";
}

function showSideEffect(effect) {
    const sideEffects = {
        headaches: {
            title: "Headaches",
            description: "Headaches are a common side effect of hormonal contraceptives due to changes in hormone levels. These headaches are typically mild and temporary, often occurring during the initial adjustment period as the body adapts to the hormonal changes. In some cases, individuals who are prone to migraines may experience an increase in frequency or severity. If headaches persist or worsen, it is recommended to consult a healthcare provider to explore alternative contraceptive options."
        },
        soreThroat: {
            title: "Sore Throat",
            description: "A sore throat may occur as a result of hormonal changes or sensitivity to certain contraceptive methods. This side effect is uncommon but can be linked to dryness or irritation caused by hormonal fluctuations. In rare cases, it may also be associated with an allergic reaction to a contraceptive device or material. Staying hydrated and using soothing remedies like warm tea or lozenges can help alleviate symptoms. If the sore throat persists, seek medical advice."
        },
        vaginitis: {
            title: "Vaginitis",
            description: "Vaginitis is an inflammation or infection of the vagina that can result from hormonal changes or irritation caused by contraceptive devices. Symptoms may include itching, burning, unusual discharge, or discomfort during intercourse. Hormonal contraceptives can sometimes alter the natural pH balance of the vagina, making it more susceptible to infections like bacterial vaginosis or yeast infections. Maintaining good hygiene and consulting a healthcare provider for appropriate treatment can help manage this condition."
        },
        weightGain: {
            title: "Weight Gain",
            description: "Some individuals may experience slight weight gain while using hormonal contraceptives. This is often due to fluid retention or changes in appetite caused by the hormones. Weight gain is typically minimal and temporary, and it varies from person to person. Regular exercise and a balanced diet can help mitigate this side effect. If significant or persistent weight gain occurs, it may be worth discussing alternative contraceptive methods with a healthcare provider."
        },
        acne: {
            title: "Acne",
            description: "Hormonal contraceptives can sometimes cause acne, particularly during the initial adjustment period. However, certain types of contraceptives, such as combination pills containing estrogen and progestin, may actually help reduce acne by regulating hormone levels. For individuals prone to acne, it is important to monitor skin changes and maintain a consistent skincare routine. If acne worsens or becomes severe, consult a dermatologist or healthcare provider for guidance."
        },
        abdominalPain: {
            title: "Abdominal Pain",
            description: "Mild abdominal pain or cramping may occur as a side effect of contraceptive use, particularly with intrauterine devices (IUDs). This discomfort is usually temporary and may happen during the initial insertion of an IUD or as the body adjusts to the device. Hormonal contraceptives may also cause bloating or mild cramps due to changes in the uterine lining. If abdominal pain is severe or persistent, it is important to seek medical attention to rule out complications."
        },
        breastPain: {
            title: "Breast Pain",
            description: "Breast tenderness or pain is a common side effect of hormonal contraceptives, especially during the first few months of use. This occurs due to hormonal fluctuations that affect breast tissue. The discomfort is usually mild and temporary, resolving as the body adjusts to the contraceptive. Wearing a supportive bra and avoiding caffeine may help alleviate symptoms. If breast pain persists or is accompanied by other concerning symptoms, consult a healthcare provider."
        },
        irregularBleeding: {
            title: "Irregular Bleeding",
            description: "Irregular bleeding or spotting is a common side effect of many contraceptive methods, particularly during the initial adjustment period. Hormonal contraceptives can alter the menstrual cycle, leading to lighter or missed periods, spotting between periods, or prolonged bleeding. This side effect is usually temporary and resolves within a few months. If irregular bleeding continues or becomes heavy, it is advisable to consult a healthcare provider to ensure there are no underlying issues."
        }
    };

    const titleElement = document.getElementById("effect-title");
    const descriptionElement = document.getElementById("effect-description");

    titleElement.textContent = sideEffects[effect].title;
    descriptionElement.textContent = sideEffects[effect].description;
}

function validateAndSendEmail() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate form fields
    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Send email using mailto
    const mailtoLink = `mailto:Healthyhavenforyou@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
}