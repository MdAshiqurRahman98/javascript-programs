// Goal Parser Interpretation

function goalParserInterpretation(command) {
    return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
}

const command = "G()(al)";
console.log(goalParserInterpretation(command));