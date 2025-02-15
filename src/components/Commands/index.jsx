import "./Commands.css"

const Commands = () => {
    const commands = [
        {
            command: "!commands",
            description: "Displays a list of the bot's available commands.",
            args: [],
        },
        {
            command: "!sort",
            description:
                "Performs a draw among the provided names, separated by spaces.",
            args: ["member"],
        },
        {
            command: "!dice",
            description:
                "Roll a dice with X sides (where X is the number you choose).",
            args: ["X"],
        },
        {
            command: "!purge",
            description:
                "Deletes the X most recent messages from the channel. Use with caution!",
            args: ["X"],
        },
        {
            command: "!say",
            description: "Make the bot repeat exactly what you type.",
            args: ["text"],
        },
        {
            command: "!add",
            description:
                "Make the bot add two numbers and show you the result.",
            args: ["x", "y"],
        },
    ]

    return (
        <div className="commands-container">
            {commands.map((cmd, index) => (
                <div className="command" key={index}>
                    <div className="command-box">
                        {cmd.command}{" "}
                        {cmd.args.map((arg, i) => (
                            <span key={i} className="member-tag">
                                {arg}
                            </span>
                        ))}
                    </div>
                    <span>{cmd.description}</span>
                </div>
            ))}
        </div>
    )
}

export default Commands
