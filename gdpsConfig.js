// In case you wanna use a fork of GDBrowser for a GDPS or something, here are some settings you can tweak to save you some precious time
// Main endpoint (e.g. boomlings.com) should be edited in index.js
// This isn't a JSON because you can't leave comments on them, ew

module.exports = {

    endpoint: "http://boomlings.com/database/", // Server endpoint to send requests to

    params: {   // Always send this stuff to the servers
        secret: 'Wmfd2893gb7',
        gameVersion: '21',
        binaryVersion: '35',
    },

    rateLimiting: true, // Enables rate limiting to avoid api spam, feel free to disable for private use.
    ipForwarding: true, // Forwards 'x-real-ip' to the servers. (requested by robtop)
    base64descriptions: true, // Are level descriptions encoded in Base64?
    xorPasswords: true, // Are level passwords XOR encrypted?
    cacheMapPacks: true, // Caches map packs to speed up loading. Useful if they're rarely updated.
    timestampSuffix: " ago", // Suffix to add after timestamps, if any.

    // more settings soon
    // feel free to drop a PR if you're able to make gdbrowser work better with gdps'es <3

}

/* 
STUFF THAT'S BROKEN
- Comments, because of how profiles are handled
- Leaderboards
- Level descriptions, if a mix of Base64 and plain text is used
- Map packs and gauntlets


STUFF THAT I HAVEN'T TESTED
- Level leaderboards
- All POST requests (commenting, liking, etc)
*/