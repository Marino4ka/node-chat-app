var expect = require("expect");

var {generateMessage} = require("./message")

describe("generateMessage", () => {
	it("should generate correct message object", () => {
		var from = "Mama";
		var text = "Yeap";
		var message = generateMessage(from, text);

		expect(message).toInclude({
			from: "Mama",
			text: "Yeap"
		});
	});
});