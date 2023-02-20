import { Farm, Siege, Trade, Travel } from "./Events"
import { hitpoint_array } from "./hitpoint"
import { PlayerAttributes } from "./PlayerAttributes"

export class PlayerSession {
  attributes: PlayerAttributes
  game_states: any[]

  constructor(attributes: PlayerAttributes) {
    this.attributes = attributes
    this.game_states = []
  }

  getPrompt() {
    let strPrompt = ""
    this.game_states.forEach((state) => {
      strPrompt += state.getPrompt() + " "
    })
    return strPrompt
  }

  getMidJourneyPrompt() {
    let strPrompt = ""
    let mid_journey_intro =
      "Double exposure, with fantasy landscape of castles and rivers and war. "

    let mid_journey_outro =
      " Ancient, no guns, Fantasy landscape, ancient, Arthurian era, Medieval era. Black background. In the style of a realist painting. cinematic, post-production, depth of field,cinematography, cinema, color grading, professional color grading, 35mm lens, incredibly detailed Double exposure, with fantasy landscape of castles and rivers and war. With a restless spirit, She marches to Oltoltek, 412 hectares away. The travel was not without cost.  Behold! A siege befalls our hero. Confronted by 2 foes, a battle ensues, leaving our protagonist with 3 hits sustained, losing 3 vital hit points. As fate would have it, our hero is victorious! Seeking adventure and good fortune, our hero travels to Skohnikkezh, 12 hectares away. The travel was not without cost.  While traveling the lands of Skohnikkezh, Naima trades with Galbraith. Settled in the the lands of Skohnikkezh, She has the need to farm resources for the next leg ahead.   Ancient, no guns, Fantasy landscape, ancient, Arthurian era, Medieval era. Black background. In the style of a realist painting. cinematic, post-production, depth of field,cinematography, cinema, color grading, professional color grading, 35mm lens, incredibly detailed --no text --v 4 --q 2 --v 4 --q 2"

    strPrompt += mid_journey_intro

    this.game_states.forEach((state) => {
      strPrompt += state.getMidJourneyPrompt() + " "
    })
    return strPrompt + mid_journey_outro
  }

  addEvent() {
    let travelevent = new Travel(
      this.attributes,
      "Oltoltek",
      412,
      "2 hens, 1 rabbit, 9 root vegetables"
    )

    let siegeevent = new Siege(this.attributes, "Oltoltek", 2, 3, 0, 3)

    let travelevent2 = new Travel(
      this.attributes,
      "Skohnikkezh",
      12,
      "5, fish 4 root vegetables"
    )

    let tradeevent = new Trade(
      this.attributes,
      "Galbraith",
      "Tannis Root",
      "copper"
    )
    let farmevent = new Farm(
      this.attributes,
      "Skohnikkezh",
      2,
      "24 fish, 37 root vegetables"
    )

    this.game_states.push(travelevent)
    this.game_states.push(siegeevent)
    this.game_states.push(travelevent2)
    this.game_states.push(tradeevent)
    this.game_states.push(farmevent)
  }
}
