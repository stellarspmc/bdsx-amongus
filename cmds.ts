import { int16_t } from 'bdsx/nativetype';
import { ActorWildcardCommandSelector } from 'bdsx/bds/command';
import { CxxString } from 'bdsx/nativetype';
import { events } from "bdsx/event";
import { command } from "bdsx/command";
import { CommandPermissionLevel } from "bdsx/bds/command";
import { sendMessage } from "../ranks";
import { Formsend } from '../../games/form';
import { Vec3 } from 'bdsx/bds/blockpos';
import { getPercentage } from './percent';
import { Game } from './game';

var game: Game;

events.serverOpen.on(() => {
        game = Game.create(1);
        command.register("finishedtaskpersentage", "Gets the finished task percentage", CommandPermissionLevel.Operator).overload((p, o) => {
                var plr = o.getEntity();
                if (plr?.isPlayer()) {
                        sendMessage(plr, `${getPercentage(game)}%`);
                }
                return;
        }, {
                gameid: int16_t
        });
        command.register("task", "Finish task", CommandPermissionLevel.Operator).overload((p, o) => {
                for (var actor of p.plr.newResults(o)) {
                        switch (p.tasklocation) {
                                // admin
                                case "fixwiring3":
                                case "adminswipe":
                                case "admindata":
                                // cafe
                                case "cafeuploaddata":
                                // weapon
                                case "weapon":
                                case "weapondivpower":
                                case "weaponuploaddata":
                                // medbay
                                case "scan":
                                case "sample":
                                // up engine
                                case "updivpower":
                                case "fuel3":
                                // security
                                case "secudivpower":
                                // reactor
                                case "startreactor":
                                case "unlockmani":
                                        // low engine
                                case "lowdivpower":
                                case "fuel2":
                                // elect
                                case "divpower":
                                case "calib":
                                case "fixwire1":
                                case "electuploaddata":
                                // storage
                                case "fuel":
                                case "fixwire2":
                                case "rubbish2":
                                // comms
                                case "commsuploaddata":
                                case "commsdivpower":
                                // shields
                                case "pshields":
                                case "shieldsdivpower":
                                // nav
                                case "fixwire3":
                                case "stabilsteer":
                                case "navdivpower":
                                case "chartcourse":
                                case "navuploaddata":
                                // o2
                                case "o2rubbish":
                                case "o2divpower":
                        }
                }
        }, {
             tasklocation: CxxString,
             plr: ActorWildcardCommandSelector
        });
        command.register("fixsabatoge", "Fix sabatoge", CommandPermissionLevel.Operator).overload((p, o) => {
                switch (p.sabatoge) {
                        case "o2fst":
                        case "o2sec":
                        case "comms":
                        case "light":
                        case "reactor":
                        case "reactor2":
                }
        }, {
             sabatoge: CxxString
        });
        command.register("sabatoge", "Sabatoges people", CommandPermissionLevel.Operator).overload((p, o) => {
                switch (p.sabatoge) {
                        case "o2fst":
                        case "o2sec":
                        case "comms":
                        case "light":
                        case "reactor":
                        case "reactor2":
                }
        }, {
             sabatoge: CxxString
        });
        command.register("vent", "Vent to somewhere", CommandPermissionLevel.Normal).overload((p, o) => {
                var plr = o.getEntity();
                if (plr?.isPlayer()) {
                        if (plr.hasTag("imposter")) {
                                Formsend(plr.getNetworkIdentifier(), {
                                        "type": "form",
                                        "title": "Where do you eant to vent?",
                                        "content": "Choose by clicking on the button.",
                                        "buttons": [
                                                {
                                                        "text": "Upper Engine",
                                                        "image": {
                                                                "type": "url",
                                                                "data": "https://raw.githubusercontent.com/ckclol/ckclol.github.io/master/png/amogus/vents/upperengine.png"
                                                        }
                                                },{
                                                        "text": "Lower Engine",
                                                        "image": {
                                                                "type": "url",
                                                                "data": "https://raw.githubusercontent.com/ckclol/ckclol.github.io/master/png/amogus/vents/lowerengine.png"
                                                        }
                                                },{
                                                        "text": "Medbay",
                                                        "image": {
                                                                "type": "url",
                                                                "data": "https://raw.githubusercontent.com/ckclol/ckclol.github.io/master/png/amogus/vents/medbay.png"
                                                        }
                                                },{
                                                        "text": "Cafe",
                                                        "image": {
                                                                "type": "url",
                                                                "data": "https://raw.githubusercontent.com/ckclol/ckclol.github.io/master/png/amogus/vents/cafe.png"
                                                        }
                                                },{
                                                        "text": "Shields",
                                                        "image": {
                                                                "type": "url",
                                                                "data": "https://raw.githubusercontent.com/ckclol/ckclol.github.io/master/png/amogus/vents/shield.png"
                                                        }
                                                },{
                                                        "text": "Easter Egg House",
                                                        "image": {
                                                                "type": "url",
                                                                "data": "https://raw.githubusercontent.com/ckclol/ckclol.github.io/master/png/amogus/vents/egghouse.png"
                                                        }
                                                },{
                                                        "text": "Ckc's Room",
                                                        "image": {
                                                                "type": "url",
                                                                "data": "https://raw.githubusercontent.com/ckclol/ckclol.github.io/master/png/amogus/vents/roomckc.png"
                                                        }
                                                },{
                                                        "text": "Room House",
                                                        "image": {
                                                                "type": "url",
                                                                "data": "https://raw.githubusercontent.com/ckclol/ckclol.github.io/master/png/amogus/vents/roomhouse.png"
                                                        }
                                                },{
                                                        "text": "Reactor",
                                                        "image": {
                                                                "type": "url",
                                                                "data": "https://raw.githubusercontent.com/ckclol/ckclol.github.io/master/png/amogus/vents/reactor.png"
                                                        }
                                                },{
                                                        "text": "Electricity",
                                                        "image": {
                                                                "type": "url",
                                                                "data": "https://raw.githubusercontent.com/ckclol/ckclol.github.io/master/png/amogus/vents/elect.png"
                                                        }
                                                },{
                                                        "text": "Weapons",
                                                        "image": {
                                                                "type": "url",
                                                                "data": "https://raw.githubusercontent.com/ckclol/ckclol.github.io/master/png/amogus/vents/weapon.png"
                                                        }
                                                },{
                                                        "text": "O2",
                                                        "image": {
                                                                "type": "url",
                                                                "data": "https://raw.githubusercontent.com/ckclol/ckclol.github.io/master/png/amogus/vents/o2.png"
                                                        }
                                                },{
                                                        "text": "Navagation",
                                                        "image": {
                                                                "type": "url",
                                                                "data": "https://raw.githubusercontent.com/ckclol/ckclol.github.io/master/png/amogus/vents/nav.png"
                                                        }
                                                },{
                                                        "text": "Security",
                                                        "image": {
                                                                "type": "url",
                                                                "data": "https://raw.githubusercontent.com/ckclol/ckclol.github.io/master/png/amogus/vents/security.png"
                                                        }
                                                }
                                        ]
                                }, ((data) => {
                                        switch (data) {
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";
                                                case 0:
                                                        plr?.teleport(Vec3.create(0, 100, 0));
                                                        return "test";

                                        }
                                }));
                        }
                }
        }, {});
});

events.serverClose.on(() => {
        game.destruct();
});