import { Image, Text, View, ScrollView } from 'react-native'

function MealDetailsContent({ item }) {
  return (
    <>
      <View
        style={{
          height: 300,
          width: 300,
          position: 'absolute',
          top: -150,
          borderBlockColor: item.color,
          borderWidth: 2,
          borderRadius: 150,
          overflow: 'hidden'
        }}
      >
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'center',
            objectFit: 'cover'
          }}
        />
      </View>

      <View>
        <Text style={{ marginTop: 150, fontSize: 28, fontWeight: 'bold' }}>
          {item.name}
        </Text>

        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{ fontSize: 20, marginVertical: 16 }}>
              {item.description}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <View
                style={{
                  backgroundColor: 'rgba(255, 0, 0, 0.38)',
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: 'center',
                  width: 100
                }}
              >
                <Text style={{ fontSize: 40 }}>⏰</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.time}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(135, 206, 235, 0.8)',
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: 'center',
                  width: 100
                }}
              >
                <Text style={{ fontSize: 40 }}>🥣</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.difficulty}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(255, 165, 0, 0.48)',
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: 'center',
                  width: 100
                }}
              >
                <Text style={{ fontSize: 40 }}>🔥</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.calories}
                </Text>
              </View>
            </View>
            <View style={{ alignSelf: 'flex-start', marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: '600', marginBottom: 6 }}
              >
                Ingredients:
              </Text>

              {item.ingredients.map((ingredient, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 4
                    }}
                    key={index}
                  >
                    <View
                      style={{
                        backgroundColor: 'red',
                        height: 10,
                        width: 10,
                        borderRadius: 5
                      }}
                    ></View>
                    <Text style={{ fontSize: 18, marginLeft: 6 }}>
                      {ingredient}
                    </Text>
                  </View>
                )
              })}
            </View>

            <View style={{ alignSelf: 'flex-start', marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: '600', marginBottom: 6 }}
              >
                Steps:
              </Text>

              {item.steps.map((step, index) => {
                return (
                  <Text
                    key={index}
                    style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
                  >{`${index + 1} ) ${step}`}</Text>
                )
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  )
}
export default MealDetailsContent
