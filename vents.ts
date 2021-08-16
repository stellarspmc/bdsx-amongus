import { CANCEL } from 'bdsx/common';
import { BlockPos, Vec3 } from "bdsx/bds/blockpos";
import { Player } from "bdsx/bds/player";
import { Block } from "bdsx/bds/block";
import { pdb } from "bdsx/core";
import { UNDNAME_NAME_ONLY } from "bdsx/dbghelp";
import { void_t, int32_t, bool_t } from "bdsx/nativetype";
import { ProcHacker } from "bdsx/prochacker";
import { Formsend } from "./util";

export function vent(plr: Player) {
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

// trapdoor hooking

const hacker = ProcHacker.load('../pdbcache.ini', ['TrapDoorBlock::use'], UNDNAME_NAME_ONLY);
pdb.close();

// hooking

const whenTrapdoorUsed = hacker.hooking("TrapDoorBlock::use", bool_t, null, Block, Player, BlockPos, int32_t)((block, plr) => {
        vent(plr);
        return false;
});