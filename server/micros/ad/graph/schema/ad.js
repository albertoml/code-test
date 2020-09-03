const adType = `
  type Ad {
    _id: String,
    description: String,
    type: String,
    score: Int,
    images: [Image]
  }
  
  type ScoreHistory {
    score: Int,
    date: Float
  }
  
  type AdHistory {
    _id: String,
    description: String,
    type: String,
    score: Int,
    images: [Image],
    scoreHistory: [ScoreHistory]
  }
`

export { adType }