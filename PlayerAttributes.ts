import { hitpoint_array } from "./hitpoint"

export class PlayerAttributes {
  name: string
  prefix: string
  title: string
  home: string
  hit_points: number

  constructor(
    name: string,
    prefix: string,
    title: string,
    home: string,
    hit_points: number
  ) {
    this.name = name
    this.prefix = prefix
    this.title = title
    this.home = home
    this.hit_points = hit_points
  }
  getPrompt() {
    let intro = "Our story begins with "
    let mid_journey_intro = "double exposure full body portrait of "
    let mid_journey_outro =
      "dreamy quality landscape, medieval era. Black background. In the style of a realist painting — ar 2:3 --v 4"
    return (
      intro +
      this.name +
      ", " +
      hitpoint_array[this.hit_points] +
      " " +
      this.title +
      " from the land of " +
      this.home +
      "."
    )
  }

  getMidJourneyPrompt() {
    let intro = "Our story begins with "
    let mid_journey_intro = "double exposure full body portrait of "
    let mid_journey_outro =
      "dreamy quality landscape, medieval era. Black background. In the style of a realist painting — ar 2:3 --v 4"
    return (
      intro +
      this.name + ", " + this.prefix +
      ", " +
      hitpoint_array[this.hit_points] +
      " " +
      this.title +
      " from the land of " +
      this.home +
      "."
    )
  }

}