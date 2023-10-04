import { View, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

const Tictactoe= () => {
  const [result, setResult] = useState('');
  const [xisnext, setXisnext] = useState(true);

  const [marker, setMarker] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const checkWinner = () => {
    const winnningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnningCombos.length; i++) {
      const [a, b, c] = winnningCombos[i];
      if (marker[a] != null) {
        if (marker[a] === marker[b] && marker[b] === marker[c]) {
          setResult(xisnext ? 'x is winner' : 'o is winner');
          break;
        }
      }
    }

    if (
      marker.every((mark) => {
        return mark != null;
      })
    ) {
      setResult('Tie');
    }
  };
  const xoChange = (index) => {
    if (result == '') {
      if (marker[index] == null) {
        if (xisnext) {
          marker[index] = 'x';
        } else {
          marker[index] = 'o';
        }
        setXisnext(!xisnext);
        setMarker([...marker]);
        checkWinner();
      }
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Square
          marker={marker[0]}
          onPress={() => {
            xoChange(0);
          }}
        />
        <Square
          marker={marker[1]}
          onPress={() => {
            xoChange(1);
          }}
        />
        <Square
          marker={marker[2]}
          onPress={() => {
            xoChange(2);
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Square
          marker={marker[3]}
          onPress={() => {
            xoChange(3);
          }}
        />
        <Square
          marker={marker[4]}
          onPress={() => {
            xoChange(4);
          }}
        />
        <Square
          marker={marker[5]}
          onPress={() => {
            xoChange(5);
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Square
          marker={marker[6]}
          onPress={() => {
            xoChange(6);
          }}
        />
        <Square
          marker={marker[7]}
          onPress={() => {
            xoChange(7);
          }}
        />
        <Square
          marker={marker[8]}
          onPress={() => {
            xoChange(8);
          }}
        />
      </View>
      <View>
        <Text>{result}</Text>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: 'pink',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setMarker([null, null, null, null, null, null, null, null, null]);
            setResult('');
          }}>
          <Text>reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tictactoe;

const Square = (props) => {
  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={props.onPress}>
      <Text> {props.marker} </Text>
    </TouchableOpacity>
  );
};

