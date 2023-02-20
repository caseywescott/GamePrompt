import { hitpoint_array } from "./hitpoint"
import { PlayerAttributes } from "./PlayerAttributes"

export class Travel {
    player: PlayerAttributes
    destination_name: string
    distance: number
    food_consumed: string
  
    constructor(
      player: PlayerAttributes,
      destination_name: string,
      distance: number,
      food_consumed: string
    ) {
      this.player = player
      this.destination_name = destination_name
      this.distance = distance
      this.food_consumed = food_consumed
  
      this.player.home = destination_name
    }
  
    getPrompt() {
      let options = [
        "Seeking adventure and good fortune, our hero travels to ",
        "In search of resources, trudges to ",
        "With a restless spirit, " + this.player.prefix + " marches to ",
        "This chapter begins with a journey to ",
      ]
      let strPrompt =
        options[Math.floor(Math.random() * options.length)] +
        this.destination_name +
        ", " +
        this.distance +
        " hectares away. The travel was not without cost - " +
        this.player.prefix +
        " consumed " +
        this.food_consumed +
        " for sustenance."
  
      return strPrompt
    }
  
    getMidJourneyPrompt() {
      let options = [
        "Seeking adventure and good fortune, our hero travels to ",
        "In search of resources, " + this.player.name + "trudges to ",
        "With a restless spirit, " + this.player.prefix + " marches to ",
        "This chapter continues with a journey to ",
      ]
      let strPrompt =
        options[Math.floor(Math.random() * options.length)] +
        this.destination_name +
        ", " +
        this.distance +
        " hectares away. The travel was not without cost. "
  
      return strPrompt
    }
  }
  
export class Trade {
    player: PlayerAttributes
    tradepartner: string
    goods_given: string
    good_taken: string
  
    constructor(
      player: PlayerAttributes,
      tradepartner: string,
      goods_given: string,
      good_taken: string
    ) {
      this.player = player
      this.tradepartner = tradepartner
      this.goods_given = goods_given
      this.good_taken = good_taken
    }
  
    getPrompt() {
      let strPrompt =
        "While traveling the lands of " +
        this.player.home +
        ", " +
        this.player.name +
        " trades with " +
        this.tradepartner +
        ", who exchanges " +
        this.good_taken +
        " for our hero's " +
        this.goods_given +
        "."
  
      return strPrompt
    }
  
    getMidJourneyPrompt() {
      let strPrompt =
        "While traveling the lands of " +
        this.player.home +
        ", " +
        this.player.name +
        " trades with " +
        this.tradepartner +
        "."
  
      return strPrompt
    }
  }
  
export class Farm {
    player: PlayerAttributes
    destination_name: string
    time_increase: number
    food_produced: string
  
    constructor(
      player: PlayerAttributes,
      destination_name: string,
      time_increase: number,
      food_produced: string
    ) {
      this.player = player
      this.destination_name = destination_name
      this.time_increase = time_increase
      this.food_produced = food_produced
    }
  
    getPrompt() {
      let strPrompt =
        "Settled in the the lands of " +
        this.player.home +
        ", " +
        this.player.prefix +
        " has the need to farm resources for the next leg ahead. "
      "Over the course of" +
        this.time_increase +
        " months yielded an increase in resources: " +
        this.food_produced
      ;(".")
  
      return strPrompt
    }
  
    getMidJourneyPrompt() {
      let strPrompt =
        "Settled in the the lands of " +
        this.player.home +
        ", " +
        this.player.prefix +
        " has the need to farm resources for the next leg ahead. "
      "Over the course of" +
        this.time_increase +
        " months yielded an increase in resources."
  
      return strPrompt
    }
  }
  
export class Siege {
    player: PlayerAttributes
    destination_name: string
    number_of_fighters: number
    num_hits: number
    victor: number
    hitpoint_loss: number
  
    constructor(
      player: PlayerAttributes,
      destination_name: string,
      number_of_fighters: number,
      num_hits: number,
      victor: number,
      hitpoint_loss: number
    ) {
      this.player = player
      this.destination_name = destination_name
      this.number_of_fighters = number_of_fighters
      this.num_hits = num_hits
      this.victor = victor
      this.hitpoint_loss = hitpoint_loss
    }
  
    getPrompt() {
      let vict: string = ""
  
      if (this.victor == 0) {
        vict = "our hero is victorious!"
      } else {
        vict = "our hero is vanquished!"
      }
      this.player.hit_points -= this.hitpoint_loss
      let strPrompt =
        "Behold! A siege befalls our hero. Confronted by " +
        this.number_of_fighters +
        " foes, " +
        "a battle ensues, leaving our protagonist with " +
        this.num_hits +
        " hits sustained, losing " +
        this.hitpoint_loss +
        " vital hit points, leaving " +
        this.player.name +
        hitpoint_array[this.player.hit_points]
      "As fate would have it, " + vict
  
      return strPrompt
    }
  
    getMidJourneyPrompt() {
      let vict: string = ""
  
      if (this.victor == 0) {
        vict = "our hero is victorious!"
      } else {
        vict = "our hero is vanquished!"
      }
  
      let strPrompt =
        "Behold! A siege befalls our hero. Confronted by " +
        this.number_of_fighters +
        " foes, " +
        "a battle ensues, leaving our protagonist with " +
        this.num_hits +
        " hits sustained, losing " +
        this.hitpoint_loss +
        " vital hit points. " +
        "As fate would have it, " +
        vict
  
      return strPrompt
    }
  }  