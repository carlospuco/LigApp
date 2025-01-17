import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { MatchStyle } from './match-style'
interface MatchProps {
  team1: string
  team1Logo?: string
  team2Logo?: string
  team2: string
  date: string
  time: string
  finished?: boolean
  scoreTeam1?: number
  scoreTeam2?: number
}

export const Match: FC<MatchProps> = ({
  date,
  finished,
  team1,
  team2,
  team1Logo,
  team2Logo,
  time,
  scoreTeam1,
  scoreTeam2
}) => {
  return (
    <View style={MatchStyle.wrapper}>
      <View style={MatchStyle.teamWrapper}>
        <Image style={MatchStyle.logo} source={team1Logo === '' ? require('./../../../assets/img/default-team.png') : { uri: team1Logo }} />
        <Text style={MatchStyle.team}>{team1}</Text>
      </View>
      <View style={[MatchStyle.resultWrapper, finished ? MatchStyle.bottom : MatchStyle.center]}>
        {
          finished &&
          <View style={MatchStyle.scoreWrapper}>
            <Text 
              style={[
                MatchStyle.score, 
                MatchStyle.winScore
              ]}
            >
              {scoreTeam1}
            </Text>
            <Text style={MatchStyle.separator}>-</Text>
            <Text 
              style={[
                MatchStyle.score, 
                scoreTeam2! > scoreTeam1! && MatchStyle.winScore
              ]}
            >
              {scoreTeam2}
            </Text>
          </View>
        }
        <View style={MatchStyle.dateWrapper}>
          <Text style={MatchStyle.detail}>{date}</Text>
          <Text style={MatchStyle.detail}>{time}</Text>
        </View>
      </View>

      <View style={MatchStyle.teamWrapper}>
        <Image style={MatchStyle.logo} source={team2Logo === '' ? require('./../../../assets/img/default-team.png') : { uri: team2Logo }} />
        <Text style={MatchStyle.team}>{team2}</Text>
      </View>
    </View>
  );
}