class MockResponse {
    sent = [];
    send = data => this.sent.push(data);
}

exports.default = MockResponse;