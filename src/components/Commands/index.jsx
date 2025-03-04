import "./commands.css"

const Commands = () => {
    const categories = [
        {
            title: "",
            commands: [
                {
                    command: "!commands",
                    description:
                        "Displays a list of the bot's available commands.",
                    args: [],
                },
            ],
        },
        {
            title: "",
            commands: [
                {
                    command: "!sort",
                    description: "Run a giveaway.",
                    args: ["member"],
                },
            ],
        },
        {
            title: "",
            commands: [
                {
                    command: "!dice",
                    description:
                        "Roll a dice with X sides (where X is the number you choose).",
                    args: ["X"],
                },
            ],
        },
        {
            title: "",
            commands: [
                {
                    command: "!purge",
                    description:
                        "Delete the X most recent messages from the channel. Use with caution!",
                    args: ["X"],
                },
            ],
        },
        {
            title: "",
            commands: [
                {
                    command: "!say",
                    description: "Make the bot say something.",
                    args: ["text"],
                },
                {
                    command: "!sum",
                    description:
                        "Make the bot add two numbers and show you the result.",
                    args: ["x", "y"],
                },
            ],
        },
        {
            // title: "Weather",
            commands: [
                {
                    command: "!weather",
                    description: "Get the weather, date, and time for a city.",
                    args: ["city"],
                },
            ],
        },
        {
            // title: "Currency Conversion",
            commands: [
                {
                    command: "!convert",
                    description:
                        "Convert an amount from one currency to another.<br>Example: !convert 100 USD EUR",
                    args: ["X", "from", "to"],
                },
                {
                    command: "!dolar",
                    description: "Show USD to BRL Exchange Rate.",
                    args: [],
                },
            ],
        },
    ]

    return (
        <div className="commands-container">
            {categories.map((category, index) => (
                <div key={index} className="category">
                    <h3 className="category-title">{category.title}</h3>
                    {category.commands.map((cmd, cmdIndex) => (
                        <div className="command" key={cmdIndex}>
                            <div className="command-box">
                                {cmd.command}{" "}
                                {cmd.args.map((arg, i) => (
                                    <span key={i} className="member-tag">
                                        {arg}
                                    </span>
                                ))}
                            </div>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: cmd.description,
                                }}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Commands
