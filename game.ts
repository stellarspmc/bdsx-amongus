import { NativeClass } from 'bdsx/nativeclass';
import { int16_t } from 'bdsx/nativetype';
import { Player } from 'bdsx/bds/player';
import { IdByName, playerList } from './../../CommunityPlugins/2913Module';
import { events } from 'bdsx/event';
import { nativeField } from 'bdsx/nativeclass';

let system: IVanillaServerSystem;
var imposternumber = 0;
var impostermax = 2;
var taskpercentage = 0;

export class Game extends NativeClass {
        @nativeField(int16_t)
        id: int16_t;

        startGame() {
                //random roles
                playerList.forEach((name) => {
                        let netId = IdByName(name);
                        let plr = netId.getActor();
                        if (plr?.isPlayer()) {
                                var role = Math.random();
                                if (role == 0) {
                                        Crewmate.setCrewmate(plr);
                                } else {
                                        if (imposternumber < impostermax) {
                                                Imposter.setImposter(plr);
                                        } else {
                                                Crewmate.setCrewmate(plr);
                                        }
                                }
                        }
                });
        }
        getTaskPercentage(): number {
                return taskpercentage;
        }

        setImposterAmount(number: number) {
                impostermax = number;
        }

        static create(id: number): Game {
                var clazz = new Game(true);
                clazz.id = id;
                return clazz;
        }
}

events.serverOpen.on(() => {
        system = server.registerSystem(0, 0);
});

export class Imposter extends Player {
        static setImposter(plr: Player) {
                plr.addTag("imposter");
                imposternumber++;
        }
        static removeImposter(plr: Player) {
                plr.removeTag("imposter");
                imposternumber--;
        }
        static getImposterAmount(game: Game) {
                return imposternumber;
        }
}

export class Crewmate extends Player {
        static setCrewmate(plr: Player) {
                plr.addTag("crewmate");
        }
        static removeCrewmate(plr: Player) {
                plr.removeTag("crewmate");
        }
}
