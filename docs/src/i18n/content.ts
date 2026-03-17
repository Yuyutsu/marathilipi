export type Lang = "en" | "mr";

export function isValidLang(lang: string): lang is Lang {
  return lang === "en" || lang === "mr";
}

export const ui = {
  en: {
    siteName: "MarathiLipi",
    tagline: "Write TypeScript in Marathi",
    heroSubtitle:
      "MarathiLipi enables developers to write JavaScript and TypeScript using Marathi syntax.",
    getStarted: "Get Started",
    tryPlayground: "Try Playground",
    heroCodeTitle: "MarathiLipi",
    heroTsTitle: "TypeScript",
    nav: {
      home: "Home",
      gettingStarted: "Getting Started",
      docs: "Documentation",
      playground: "Playground",
      vscode: "VS Code Extension",
      architecture: "Architecture",
      about: "About",
    },
    sidebar: {
      languageReference: "Language Reference",
      variables: "Variables",
      controlFlow: "Control Flow",
      loops: "Loops",
      functions: "Functions",
      classes: "Classes",
      asyncAwait: "Async / Await",
      modules: "Modules",
      errorHandling: "Error Handling",
      console: "Console",
    },
    gettingStarted: {
      title: "Getting Started",
      subtitle: "Set up MarathiLipi and write your first program in minutes.",
      installTitle: "Installation",
      installDesc: "Install MarathiLipi globally using npm:",
      firstProgTitle: "Your First Program",
      firstProgDesc:
        'Create a file called hello.ml and write the following code:',
      runTitle: "Running Your Program",
      runDesc: "Execute your MarathiLipi program using the CLI:",
      cliTitle: "CLI Usage",
      cliDesc: "The MarathiLipi CLI supports the following commands:",
      cliVerboseDesc: "Print generated TypeScript before execution:",
      outputTitle: "Output",
    },
    docs: {
      title: "Documentation",
      subtitle:
        "Complete language reference for MarathiLipi keywords and syntax.",
      overviewDesc:
        "MarathiLipi provides Marathi-language equivalents for all TypeScript keywords. Select a topic from the sidebar to learn about specific language features.",
      keywordTable: "Keyword Mapping",
      marathilipiCol: "MarathiLipi",
      typescriptCol: "TypeScript",
      example: "Example",
      equivalentTs: "TypeScript Equivalent",
    },
    variables: {
      title: "Variables",
      desc: "MarathiLipi supports all three variable declaration keywords from TypeScript. Use these keywords to declare variables with different scoping and mutability rules.",
      letDesc:
        'The "let" keyword declares a block-scoped variable that can be reassigned.',
      constDesc:
        'The "const" keyword declares a block-scoped variable that cannot be reassigned after initialization.',
      varDesc:
        'The "var" keyword declares a function-scoped variable. Prefer "let" or "const" in modern code.',
    },
    controlFlow: {
      title: "Control Flow",
      desc: "Control flow statements allow you to conditionally execute blocks of code based on expressions.",
      ifElseTitle: "If / Else",
      ifElseDesc: "Use conditional statements to branch execution based on boolean expressions.",
      switchTitle: "Switch",
      switchDesc: "The switch statement evaluates an expression and matches its value against case clauses.",
    },
    loops: {
      title: "Loops",
      desc: "Loop constructs allow you to repeatedly execute blocks of code.",
      forTitle: "For Loop",
      forDesc: "Iterate a fixed number of times using a counter variable.",
      whileTitle: "While Loop",
      whileDesc: "Execute a block of code as long as a condition remains true.",
      doWhileTitle: "Do-While Loop",
      doWhileDesc: "Execute a block of code at least once, then repeat while a condition is true.",
      breakContinueTitle: "Break and Continue",
      breakContinueDesc: "Control loop execution with break and continue statements.",
    },
    functions: {
      title: "Functions",
      desc: "Functions are reusable blocks of code that perform specific tasks.",
      declareTitle: "Function Declaration",
      declareDesc: "Declare a named function using the function keyword.",
      returnTitle: "Return Values",
      returnDesc: "Use the return statement to return a value from a function.",
      yieldTitle: "Generator Functions",
      yieldDesc: "Use the yield keyword in generator functions to produce a sequence of values.",
    },
    classes: {
      title: "Classes",
      desc: "Classes provide a blueprint for creating objects with shared structure and behavior.",
      classTitle: "Class Declaration",
      classDesc: "Define a class with a constructor and methods.",
      extendsTitle: "Inheritance",
      extendsDesc: "Extend a class to create a subclass that inherits its properties and methods.",
      modifiersTitle: "Access Modifiers",
      modifiersDesc: "Control the visibility of class members using access modifiers.",
    },
    asyncAwait: {
      title: "Async / Await",
      desc: "Write asynchronous code that reads like synchronous code using async/await syntax.",
      asyncTitle: "Async Functions",
      asyncDesc: "Mark a function as asynchronous to use the await keyword inside it.",
      awaitTitle: "Await",
      awaitDesc: "Pause execution until a Promise resolves.",
    },
    modules: {
      title: "Modules",
      desc: "Organize code into reusable modules with import and export statements.",
      importTitle: "Import",
      importDesc: "Import symbols from other modules.",
      exportTitle: "Export",
      exportDesc: "Export symbols for use in other modules.",
      defaultExportTitle: "Default Export",
      defaultExportDesc: "Export a single default value from a module.",
    },
    errorHandling: {
      title: "Error Handling",
      desc: "Handle runtime errors gracefully using try-catch-finally blocks.",
      tryTitle: "Try / Catch / Finally",
      tryDesc: "Wrap potentially failing code in a try block and handle errors in catch.",
      throwTitle: "Throw",
      throwDesc: "Throw a custom error.",
    },
    consolePage: {
      title: "Console",
      desc: "Output messages to the console for debugging and information display.",
      logTitle: "Console Log",
      logDesc: "Print a message to the standard output.",
      errorTitle: "Console Error",
      errorDesc: "Print an error message.",
      warnTitle: "Console Warn",
      warnDesc: "Print a warning message.",
      infoTitle: "Console Info",
      infoDesc: "Print an informational message.",
      aliasNote: "Multiple aliases are supported for console.log:",
    },
    playground: {
      title: "Playground",
      subtitle:
        "Write MarathiLipi code and see the generated TypeScript in real time.",
      editorLabel: "MarathiLipi",
      outputLabel: "TypeScript Output",
      run: "Run",
      copy: "Copy",
      copied: "Copied",
    },
    vscode: {
      title: "VS Code Extension",
      subtitle:
        "First-class editor support for MarathiLipi in Visual Studio Code.",
      installTitle: "Installation",
      installDesc:
        "Search for \"MarathiLipi\" in the VS Code Extensions Marketplace, or install from the command line:",
      featuresTitle: "Features",
      syntaxTitle: "Syntax Highlighting",
      syntaxDesc:
        "Full syntax highlighting for all MarathiLipi keywords, strings, comments, and operators.",
      autocompleteTitle: "Autocomplete",
      autocompleteDesc:
        "Intelligent autocomplete suggestions that map English TypeScript keywords to their Marathi equivalents.",
      snippetsTitle: "Snippets",
      snippetsDesc:
        "Pre-built code snippets for common MarathiLipi patterns like if-else blocks, for loops, and function declarations.",
      fileAssocTitle: "File Association",
      fileAssocDesc:
        "Automatic language detection for .ml files with proper syntax highlighting and IntelliSense.",
    },
    architecture: {
      title: "Architecture",
      subtitle: "How MarathiLipi works under the hood.",
      overviewTitle: "Overview",
      overviewDesc:
        "MarathiLipi is a transpiler layer that converts Marathi-language source code into valid TypeScript. It is not a new programming language or runtime. It leverages the full power of the TypeScript compiler and the Node.js ecosystem.",
      flowTitle: "Transpilation Flow",
      flowSteps: [
        { label: ".ml file", desc: "MarathiLipi source code written in Marathi syntax" },
        { label: "MarathiLipi Transpiler", desc: "Keyword substitution with longest-match-first strategy" },
        { label: "TypeScript", desc: "Valid TypeScript output with all Marathi keywords replaced" },
        { label: "TypeScript Compiler", desc: "Standard tsc compilation to JavaScript" },
        { label: "JavaScript", desc: "Executable JavaScript code" },
        { label: "Node.js", desc: "Execution in the Node.js runtime" },
      ],
      keywordTitle: "Keyword Resolution",
      keywordDesc:
        "The transpiler uses a longest-match-first strategy. Multi-word phrases are matched before their component words. For example, the phrase '\u0938\u094D\u0925\u093F\u0930 \u0928\u093E\u0935' is matched as a complete phrase (const) before the individual word '\u0928\u093E\u0935' (let).",
      aliasTitle: "Alias Support",
      aliasDesc:
        "Multiple Marathi keywords can map to the same TypeScript keyword. For example, \u0926\u093E\u0916\u0935\u093E, \u0938\u093E\u0902\u0917\u093E, \u0938\u093E\u0902\u0917, and \u091B\u093E\u092A\u093E all map to console.log.",
    },
    about: {
      title: "About MarathiLipi",
      subtitle:
        "Making programming accessible in Marathi.",
      missionTitle: "Mission",
      missionDesc:
        "MarathiLipi aims to lower the barrier to programming for Marathi-speaking developers by providing a familiar linguistic interface to the TypeScript ecosystem. Code written in MarathiLipi transpiles to standard TypeScript, ensuring full compatibility with existing tools and libraries.",
      principlesTitle: "Principles",
      principles: [
        {
          title: "Accessibility",
          desc: "Enable developers to learn and write code in their native language.",
        },
        {
          title: "Compatibility",
          desc: "Produce standard TypeScript that works with all existing tools.",
        },
        {
          title: "Transparency",
          desc: "The generated TypeScript is always visible and readable.",
        },
        {
          title: "Minimalism",
          desc: "Only keywords are translated. Identifiers, strings, and logic remain unchanged.",
        },
      ],
      techTitle: "Technology",
      techDesc:
        "MarathiLipi is built with TypeScript and uses the official TypeScript compiler API for code generation and execution. The CLI, web playground, and VS Code extension provide a complete development experience.",
      openSourceTitle: "Open Source",
      openSourceDesc:
        "MarathiLipi is open source and available on GitHub under the MIT license.",
    },
    footer: {
      copyright: "MarathiLipi. Open source under MIT License.",
      github: "GitHub",
      npm: "npm",
    },
  },
  mr: {
    siteName: "मराठीलिपी",
    tagline: "मराठीत TypeScript लिहा",
    heroSubtitle:
      "मराठीलिपी विकसकांना मराठी वाक्यरचना वापरून JavaScript आणि TypeScript लिहिण्यास सक्षम करते.",
    getStarted: "सुरुवात करा",
    tryPlayground: "Playground वापरा",
    heroCodeTitle: "मराठीलिपी",
    heroTsTitle: "TypeScript",
    nav: {
      home: "मुख्यपृष्ठ",
      gettingStarted: "सुरुवात",
      docs: "दस्तऐवज",
      playground: "Playground",
      vscode: "VS Code विस्तार",
      architecture: "आर्किटेक्चर",
      about: "बद्दल",
    },
    sidebar: {
      languageReference: "भाषा संदर्भ",
      variables: "चलने (Variables)",
      controlFlow: "नियंत्रण प्रवाह (Control Flow)",
      loops: "लूप्स (Loops)",
      functions: "कार्ये (Functions)",
      classes: "वर्ग (Classes)",
      asyncAwait: "Async / Await",
      modules: "मॉड्यूल्स (Modules)",
      errorHandling: "त्रुटी हाताळणी (Error Handling)",
      console: "कन्सोल (Console)",
    },
    gettingStarted: {
      title: "सुरुवात करा",
      subtitle: "मराठीलिपी सेट करा आणि काही मिनिटांत तुमचा पहिला प्रोग्राम लिहा.",
      installTitle: "स्थापना",
      installDesc: "npm वापरून मराठीलिपी जागतिक स्तरावर स्थापित करा:",
      firstProgTitle: "तुमचा पहिला प्रोग्राम",
      firstProgDesc:
        "hello.ml नावाची फाईल तयार करा आणि खालील कोड लिहा:",
      runTitle: "तुमचा प्रोग्राम चालवा",
      runDesc: "CLI वापरून तुमचा मराठीलिपी प्रोग्राम चालवा:",
      cliTitle: "CLI वापर",
      cliDesc: "मराठीलिपी CLI खालील कमांड्स सपोर्ट करतो:",
      cliVerboseDesc: "अंमलबजावणीपूर्वी तयार केलेले TypeScript दाखवा:",
      outputTitle: "आउटपुट",
    },
    docs: {
      title: "दस्तऐवज",
      subtitle:
        "मराठीलिपी कीवर्ड्स आणि वाक्यरचनेसाठी संपूर्ण भाषा संदर्भ.",
      overviewDesc:
        "मराठीलिपी सर्व TypeScript कीवर्ड्ससाठी मराठी-भाषा समकक्ष प्रदान करते. विशिष्ट भाषा वैशिष्ट्यांबद्दल जाणून घेण्यासाठी साइडबारमधून विषय निवडा.",
      keywordTable: "कीवर्ड मॅपिंग",
      marathilipiCol: "मराठीलिपी",
      typescriptCol: "TypeScript",
      example: "उदाहरण",
      equivalentTs: "TypeScript समकक्ष",
    },
    variables: {
      title: "चलने (Variables)",
      desc: "मराठीलिपी TypeScript मधील सर्व तीन चल घोषणा कीवर्ड्सना सपोर्ट करते. भिन्न स्कोपिंग आणि अपरिवर्तनीयता नियमांसह चलने घोषित करण्यासाठी हे कीवर्ड्स वापरा.",
      letDesc:
        '"let" कीवर्ड ब्लॉक-स्कोप्ड चल घोषित करतो जे पुन्हा असाइन केले जाऊ शकते.',
      constDesc:
        '"const" कीवर्ड ब्लॉक-स्कोप्ड चल घोषित करतो जे इनिशियलायझेशननंतर पुन्हा असाइन केले जाऊ शकत नाही.',
      varDesc:
        '"var" कीवर्ड फंक्शन-स्कोप्ड चल घोषित करतो. आधुनिक कोडमध्ये "let" किंवा "const" वापरणे योग्य.',
    },
    controlFlow: {
      title: "नियंत्रण प्रवाह (Control Flow)",
      desc: "नियंत्रण प्रवाह विधाने तुम्हाला अभिव्यक्तींवर आधारित कोड ब्लॉक्स सशर्त अंमलात आणण्याची परवानगी देतात.",
      ifElseTitle: "जर / नाहीतर (If / Else)",
      ifElseDesc: "बूलियन अभिव्यक्तींवर आधारित अंमलबजावणी शाखा करण्यासाठी सशर्त विधाने वापरा.",
      switchTitle: "निवडा (Switch)",
      switchDesc: "switch विधान अभिव्यक्तीचे मूल्यमापन करते आणि त्याच्या मूल्याला case खंडांशी जुळवते.",
    },
    loops: {
      title: "लूप्स (Loops)",
      desc: "लूप रचना तुम्हाला कोड ब्लॉक्स वारंवार अंमलात आणण्याची परवानगी देतात.",
      forTitle: "पुन्हा (For Loop)",
      forDesc: "काउंटर चल वापरून निश्चित वेळा पुनरावृत्ती करा.",
      whileTitle: "जोपर्यंत (While Loop)",
      whileDesc: "अट सत्य असेपर्यंत कोड ब्लॉक अंमलात आणा.",
      doWhileTitle: "करा-जोपर्यंत (Do-While Loop)",
      doWhileDesc: "किमान एकदा कोड ब्लॉक अंमलात आणा, नंतर अट सत्य असताना पुनरावृत्ती करा.",
      breakContinueTitle: "थांब आणि पुढे (Break and Continue)",
      breakContinueDesc: "break आणि continue विधानांसह लूप अंमलबजावणी नियंत्रित करा.",
    },
    functions: {
      title: "कार्ये (Functions)",
      desc: "कार्ये विशिष्ट कार्ये करणारे पुन्हा वापरता येण्यासारखे कोड ब्लॉक्स आहेत.",
      declareTitle: "कार्य घोषणा (Function Declaration)",
      declareDesc: "function कीवर्ड वापरून नामित कार्य घोषित करा.",
      returnTitle: "परतावा मूल्ये (Return Values)",
      returnDesc: "कार्यातून मूल्य परत करण्यासाठी return विधान वापरा.",
      yieldTitle: "जनरेटर कार्ये (Generator Functions)",
      yieldDesc: "मूल्यांचा क्रम तयार करण्यासाठी जनरेटर कार्यांमध्ये yield कीवर्ड वापरा.",
    },
    classes: {
      title: "वर्ग (Classes)",
      desc: "वर्ग सामायिक संरचना आणि वर्तन असलेल्या ऑब्जेक्ट्स तयार करण्यासाठी ब्लूप्रिंट प्रदान करतात.",
      classTitle: "वर्ग घोषणा (Class Declaration)",
      classDesc: "कन्स्ट्रक्टर आणि मेथड्ससह वर्ग परिभाषित करा.",
      extendsTitle: "वारसा (Inheritance)",
      extendsDesc: "गुणधर्म आणि मेथड्स वारशाने मिळवणारा उपवर्ग तयार करण्यासाठी वर्ग विस्तारित करा.",
      modifiersTitle: "ऍक्सेस मॉडिफायर्स (Access Modifiers)",
      modifiersDesc: "ऍक्सेस मॉडिफायर्स वापरून वर्ग सदस्यांची दृश्यमानता नियंत्रित करा.",
    },
    asyncAwait: {
      title: "Async / Await",
      desc: "async/await वाक्यरचना वापरून असिंक्रोनस कोड लिहा जो सिंक्रोनस कोडसारखा वाचतो.",
      asyncTitle: "Async कार्ये",
      asyncDesc: "आत await कीवर्ड वापरण्यासाठी कार्य असिंक्रोनस म्हणून चिन्हांकित करा.",
      awaitTitle: "Await",
      awaitDesc: "Promise पूर्ण होईपर्यंत अंमलबजावणी थांबवा.",
    },
    modules: {
      title: "मॉड्यूल्स (Modules)",
      desc: "import आणि export विधानांसह कोड पुन्हा वापरता येण्यासारख्या मॉड्यूल्समध्ये व्यवस्थापित करा.",
      importTitle: "आयात (Import)",
      importDesc: "इतर मॉड्यूल्समधून चिन्हे आयात करा.",
      exportTitle: "निर्यात (Export)",
      exportDesc: "इतर मॉड्यूल्समध्ये वापरण्यासाठी चिन्हे निर्यात करा.",
      defaultExportTitle: "डीफॉल्ट निर्यात (Default Export)",
      defaultExportDesc: "मॉड्यूलमधून एकच डीफॉल्ट मूल्य निर्यात करा.",
    },
    errorHandling: {
      title: "त्रुटी हाताळणी (Error Handling)",
      desc: "try-catch-finally ब्लॉक्स वापरून रनटाइम त्रुटी सुरक्षितपणे हाताळा.",
      tryTitle: "Try / Catch / Finally",
      tryDesc: "संभाव्यतः अयशस्वी होणारा कोड try ब्लॉकमध्ये गुंडाळा आणि catch मध्ये त्रुटी हाताळा.",
      throwTitle: "फेका (Throw)",
      throwDesc: "सानुकूल त्रुटी फेका.",
    },
    consolePage: {
      title: "कन्सोल (Console)",
      desc: "डीबगिंग आणि माहिती प्रदर्शनासाठी कन्सोलवर संदेश आउटपुट करा.",
      logTitle: "Console Log",
      logDesc: "मानक आउटपुटवर संदेश प्रिंट करा.",
      errorTitle: "Console Error",
      errorDesc: "त्रुटी संदेश प्रिंट करा.",
      warnTitle: "Console Warn",
      warnDesc: "चेतावणी संदेश प्रिंट करा.",
      infoTitle: "Console Info",
      infoDesc: "माहितीपूर्ण संदेश प्रिंट करा.",
      aliasNote: "console.log साठी अनेक उपनामे समर्थित आहेत:",
    },
    playground: {
      title: "Playground",
      subtitle:
        "मराठीलिपी कोड लिहा आणि तयार केलेले TypeScript रिअल टाइममध्ये पहा.",
      editorLabel: "मराठीलिपी",
      outputLabel: "TypeScript आउटपुट",
      run: "चालवा",
      copy: "कॉपी",
      copied: "कॉपी झाले",
    },
    vscode: {
      title: "VS Code विस्तार",
      subtitle:
        "Visual Studio Code मध्ये मराठीलिपीसाठी प्रथम-श्रेणी संपादक समर्थन.",
      installTitle: "स्थापना",
      installDesc:
        'VS Code Extensions Marketplace मध्ये "MarathiLipi" शोधा, किंवा कमांड लाइनवरून स्थापित करा:',
      featuresTitle: "वैशिष्ट्ये",
      syntaxTitle: "सिंटॅक्स हायलाइटिंग",
      syntaxDesc:
        "सर्व मराठीलिपी कीवर्ड्स, स्ट्रिंग्स, कमेंट्स आणि ऑपरेटर्ससाठी पूर्ण सिंटॅक्स हायलाइटिंग.",
      autocompleteTitle: "ऑटोकम्प्लीट",
      autocompleteDesc:
        "इंग्रजी TypeScript कीवर्ड्सला त्यांच्या मराठी समकक्षांशी मॅप करणाऱ्या बुद्धिमान ऑटोकम्प्लीट सूचना.",
      snippetsTitle: "स्निपेट्स",
      snippetsDesc:
        "if-else ब्लॉक्स, for लूप्स आणि फंक्शन घोषणा यासारख्या सामान्य मराठीलिपी नमुन्यांसाठी पूर्व-निर्मित कोड स्निपेट्स.",
      fileAssocTitle: "फाईल असोसिएशन",
      fileAssocDesc:
        "योग्य सिंटॅक्स हायलाइटिंग आणि IntelliSense सह .ml फाइल्ससाठी स्वयंचलित भाषा ओळख.",
    },
    architecture: {
      title: "आर्किटेक्चर",
      subtitle: "मराठीलिपी आतून कसे कार्य करते.",
      overviewTitle: "आढावा",
      overviewDesc:
        "मराठीलिपी हा एक ट्रान्सपायलर स्तर आहे जो मराठी-भाषा स्रोत कोडला वैध TypeScript मध्ये रूपांतरित करतो. ही नवीन प्रोग्रामिंग भाषा किंवा रनटाइम नाही. ती TypeScript कंपायलर आणि Node.js इकोसिस्टमची संपूर्ण शक्ती वापरते.",
      flowTitle: "ट्रान्सपिलेशन प्रवाह",
      flowSteps: [
        { label: ".ml फाईल", desc: "मराठी वाक्यरचनेत लिहिलेला मराठीलिपी स्रोत कोड" },
        { label: "मराठीलिपी ट्रान्सपायलर", desc: "सर्वात-लांब-जुळणी-प्रथम धोरणासह कीवर्ड प्रतिस्थापन" },
        { label: "TypeScript", desc: "सर्व मराठी कीवर्ड्स बदललेले वैध TypeScript आउटपुट" },
        { label: "TypeScript कंपायलर", desc: "JavaScript मध्ये मानक tsc संकलन" },
        { label: "JavaScript", desc: "अंमलात आणता येणारा JavaScript कोड" },
        { label: "Node.js", desc: "Node.js रनटाइममध्ये अंमलबजावणी" },
      ],
      keywordTitle: "कीवर्ड रिझोल्यूशन",
      keywordDesc:
        "ट्रान्सपायलर सर्वात-लांब-जुळणी-प्रथम धोरण वापरतो. बहु-शब्द वाक्ये त्यांच्या घटक शब्दांपूर्वी जुळवली जातात. उदाहरणार्थ, 'स्थिर नाव' हा वाक्यांश संपूर्ण वाक्यांश (const) म्हणून एकट्या 'नाव' (let) शब्दापूर्वी जुळवला जातो.",
      aliasTitle: "उपनाम समर्थन",
      aliasDesc:
        "अनेक मराठी कीवर्ड्स एकाच TypeScript कीवर्डवर मॅप होऊ शकतात. उदाहरणार्थ, दाखवा, सांगा, सांग आणि छापा सर्व console.log वर मॅप होतात.",
    },
    about: {
      title: "मराठीलिपी बद्दल",
      subtitle:
        "मराठीतून प्रोग्रामिंग सुलभ करणे.",
      missionTitle: "ध्येय",
      missionDesc:
        "मराठीलिपीचे उद्दिष्ट TypeScript इकोसिस्टमला परिचित भाषिक इंटरफेस प्रदान करून मराठी-भाषिक विकसकांसाठी प्रोग्रामिंगचा अडथळा कमी करणे आहे. मराठीलिपीत लिहिलेला कोड मानक TypeScript मध्ये ट्रान्सपाइल होतो, विद्यमान साधने आणि लायब्ररींशी पूर्ण सुसंगतता सुनिश्चित करतो.",
      principlesTitle: "तत्त्वे",
      principles: [
        {
          title: "सुलभता",
          desc: "विकसकांना त्यांच्या मातृभाषेत कोड शिकण्यास आणि लिहिण्यास सक्षम करा.",
        },
        {
          title: "सुसंगतता",
          desc: "सर्व विद्यमान साधनांसह कार्य करणारे मानक TypeScript तयार करा.",
        },
        {
          title: "पारदर्शकता",
          desc: "तयार केलेले TypeScript नेहमी दृश्यमान आणि वाचनीय असते.",
        },
        {
          title: "किमानता",
          desc: "फक्त कीवर्ड्सचे भाषांतर केले जाते. ओळखकर्ते, स्ट्रिंग्स आणि तर्क अपरिवर्तित राहतात.",
        },
      ],
      techTitle: "तंत्रज्ञान",
      techDesc:
        "मराठीलिपी TypeScript ने बनवले आहे आणि कोड निर्मिती आणि अंमलबजावणीसाठी अधिकृत TypeScript कंपायलर API वापरते. CLI, वेब प्लेग्राउंड आणि VS Code विस्तार संपूर्ण विकास अनुभव प्रदान करतात.",
      openSourceTitle: "ओपन सोर्स",
      openSourceDesc:
        "मराठीलिपी ओपन सोर्स आहे आणि MIT परवान्याखाली GitHub वर उपलब्ध आहे.",
    },
    footer: {
      copyright: "मराठीलिपी. MIT परवान्याखाली ओपन सोर्स.",
      github: "GitHub",
      npm: "npm",
    },
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}
