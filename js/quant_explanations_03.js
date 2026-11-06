window.QEXPLANATIONS_03 = {
  "S1-Q1": {
    "topic": "구간에 따른 거듭제곱 대소",
    "clue": "−1 &lt; x &lt; 0이면 짝수 거듭제곱은 양수, 홀수 거듭제곱은 음수이고, 지수가 커질수록 절댓값이 작아집니다.",
    "stepByStep": [
      {
        "step": "Step 1: 구간의 성질",
        "desc": "|x| &lt; 1이므로 |x|ⁿ은 n이 커질수록 작아지고, 부호는 n의 홀짝으로 결정됩니다."
      },
      {
        "step": "Step 2: 대표값 확인",
        "desc": "x = −1/2: Quantity A = −1/32, Quantity B = −1/8"
      },
      {
        "step": "Step 3: 일반화",
        "desc": "이 대소 관계는 구간 전체에서 유지되므로(부호와 크기 순서가 바뀌지 않음) 관계가 결정됩니다."
      },
      {
        "step": "Step 4: 결론",
        "desc": "따라서 정답은 (D)입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다.",
      "B": "조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다.",
      "C": "조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Quantity A is greater.",
        "analysis": "오답. 조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "Quantity B is greater.",
        "analysis": "오답. 조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "The two quantities are equal.",
        "analysis": "오답. 조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "정답."
      }
    ]
  },
  "S1-Q2": {
    "topic": "퍼센트 관계 비교",
    "clue": "퍼센트 관계는 계수를 곱해서 연결합니다: x = (p/100)(q/100)z.",
    "stepByStep": [
      {
        "step": "Step 1: 연결",
        "desc": "x = 0.5 × y = 0.5 × 1.2 × z = 0.6z"
      },
      {
        "step": "Step 2: 비교",
        "desc": "z > 0이므로 계수 0.6과 0.61을 비교하면 됩니다."
      },
      {
        "step": "Step 3: 결론",
        "desc": "따라서 정답은 (B)입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다.",
      "C": "두 양이 항상 같다고 판단했지만 그렇지 않습니다.",
      "D": "주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Quantity A is greater.",
        "analysis": "오답. Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다."
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "Quantity B is greater.",
        "analysis": "정답."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "The two quantities are equal.",
        "analysis": "오답. 두 양이 항상 같다고 판단했지만 그렇지 않습니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요."
      }
    ]
  },
  "S1-Q3": {
    "topic": "비복원 추출 확률",
    "clue": "비복원 추출은 조합(C)으로 분자·분모를 모두 셉니다. “적어도”는 여사건이 빠릅니다.",
    "stepByStep": [
      {
        "step": "Step 1: 여사건",
        "desc": "빨간 구슬이 하나도 없을 확률 = C(8, 3)/C(10, 3) = 7/15"
      },
      {
        "step": "Step 2: 답",
        "desc": "1 − 7/15 = <strong>8/15</strong>"
      },
      {
        "step": "Step 3: 결론",
        "desc": "The probability that at least 1 of the marbles is red, if 3 marbles are selected at random without replacement = 8/15이고 비교 대상은 61/125이므로 정답은 (A)입니다."
      }
    ],
    "whySelectedWrong": {
      "B": "Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 8/15, Quantity B = 61/125) 참고로 61/125은(는) 복원 추출로 계산한 값입니다.",
      "C": "두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 8/15, Quantity B = 61/125) 참고로 61/125은(는) 복원 추출로 계산한 값입니다.",
      "D": "주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 8/15, Quantity B = 61/125) 참고로 61/125은(는) 복원 추출로 계산한 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": true,
        "text": "Quantity A is greater.",
        "analysis": "정답."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "Quantity B is greater.",
        "analysis": "오답. Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 8/15, Quantity B = 61/125) 참고로 61/125은(는) 복원 추출로 계산한 값입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "The two quantities are equal.",
        "analysis": "오답. 두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 8/15, Quantity B = 61/125) 참고로 61/125은(는) 복원 추출로 계산한 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 8/15, Quantity B = 61/125) 참고로 61/125은(는) 복원 추출로 계산한 값입니다."
      }
    ]
  },
  "S1-Q4": {
    "topic": "팩토리얼 식 정리",
    "clue": "(k + 1)! = (k + 1)·k·(k − 1)! 이므로 (k + 1)!/(k − 1)! = k(k + 1) = k² + k.",
    "stepByStep": [
      {
        "step": "Step 1: 팩토리얼 약분",
        "desc": "(k + 1)!/(k − 1)! = (k + 1)k"
      },
      {
        "step": "Step 2: 비교",
        "desc": "k² + k 와 <i>k</i><sup>2</sup> + 2를 비교합니다. 차이는 k − 2이므로 k = 2이면 같고 k > 2이면 A가 큽니다."
      },
      {
        "step": "Step 3: 결론",
        "desc": "따라서 정답은 (D)입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다.",
      "B": "조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다.",
      "C": "조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Quantity A is greater.",
        "analysis": "오답. 조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "Quantity B is greater.",
        "analysis": "오답. 조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "The two quantities are equal.",
        "analysis": "오답. 조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "정답."
      }
    ]
  },
  "S1-Q5": {
    "topic": "주사위 확률",
    "clue": "순서쌍 36가지가 모두 같은 확률입니다. (a, b)와 (b, a)는 다른 결과로 셉니다.",
    "stepByStep": [
      {
        "step": "Step 1: 전체",
        "desc": "6 × 6 = 36가지"
      },
      {
        "step": "Step 2: 유리한 경우",
        "desc": "9가지: (1,5) (2,5) (3,5) (4,5) (5,1) (5,2) (5,3) (5,4) (5,5)"
      },
      {
        "step": "Step 3: 확률",
        "desc": "9/36 = <strong>1/4</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "(a, b)와 (b, a)를 하나로 센 경우가 섞인 값입니다.",
      "C": "경우 하나를 더 센 값입니다.",
      "D": "순서를 무시한(같은 확률이 아닌) 경우를 분모로 쓴 값입니다.",
      "E": "여사건의 확률입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "7/36",
        "analysis": "오답. (a, b)와 (b, a)를 하나로 센 경우가 섞인 값입니다."
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "1/4",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "5/18",
        "analysis": "오답. 경우 하나를 더 센 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "3/7",
        "analysis": "오답. 순서를 무시한(같은 확률이 아닌) 경우를 분모로 쓴 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "3/4",
        "analysis": "오답. 여사건의 확률입니다."
      }
    ]
  },
  "S1-Q6": {
    "topic": "원기둥 부피 변화율",
    "clue": "V = πr²h이므로 부피 배율 = (반지름 배율)² × (높이 배율).",
    "stepByStep": [
      {
        "step": "Step 1: 배율",
        "desc": "반지름 ×1.1, 높이 ×0.5"
      },
      {
        "step": "Step 2: 부피 배율",
        "desc": "(1.1)² × 0.5 = 0.605"
      },
      {
        "step": "Step 3: 결론",
        "desc": "<strong>The volume decreases by 39.5%.</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "반지름이 제곱으로 들어간다는 것을 무시한 값입니다.",
      "C": "반지름 배율을 제곱하지 않은 값입니다.",
      "D": "배율을 곱하지 않고 백분율을 더하고 뺀 값입니다.",
      "E": "높이의 감소를 단순히 뺀 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "The volume decreases by 40%.",
        "analysis": "오답. 반지름이 제곱으로 들어간다는 것을 무시한 값입니다."
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "The volume decreases by 39.5%.",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "The volume decreases by 45%.",
        "analysis": "오답. 반지름 배율을 제곱하지 않은 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The volume decreases by 30%.",
        "analysis": "오답. 배율을 곱하지 않고 백분율을 더하고 뺀 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "The volume decreases by 29%.",
        "analysis": "오답. 높이의 감소를 단순히 뺀 값입니다."
      }
    ]
  },
  "S1-Q7": {
    "topic": "일률 (작업 시간)",
    "clue": "시간이 아니라 일률(1/시간)을 더하고 뺍니다.",
    "stepByStep": [
      {
        "step": "Step 1: B의 일률",
        "desc": "1/4 − 1/6 = 1/12 → B 단독은 12시간"
      },
      {
        "step": "Step 2: A가 한 일",
        "desc": "5시간 × 1/6 = 5/6 → 남은 일 1/6"
      },
      {
        "step": "Step 3: B의 작업 시간",
        "desc": "1/6 × 12 = <strong>2</strong>시간"
      }
    ],
    "whySelectedWrong": {
      "B": "정답과 가까운 값입니다. 계산 중 작은 실수(경계값·부호·반올림)를 하면 고르게 되는 선택지입니다.",
      "C": "함께 걸리는 시간에서 A가 일한 시간을 단순히 뺀 값입니다. 일률(시간당 작업량)로 계산해야 합니다.",
      "D": "A가 끝낸 부분을 B가 하는 시간으로 계산했습니다(남은 부분이 아님).",
      "E": "B가 전체 작업을 혼자 하는 시간입니다. A가 이미 한 부분을 빼야 합니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": true,
        "text": "2",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "3",
        "analysis": "오답. 정답과 가까운 값입니다. 계산 중 작은 실수(경계값·부호·반올림)를 하면 고르게 되는 선택지입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "7",
        "analysis": "오답. 함께 걸리는 시간에서 A가 일한 시간을 단순히 뺀 값입니다. 일률(시간당 작업량)로 계산해야 합니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "10",
        "analysis": "오답. A가 끝낸 부분을 B가 하는 시간으로 계산했습니다(남은 부분이 아님)."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "12",
        "analysis": "오답. B가 전체 작업을 혼자 하는 시간입니다. A가 이미 한 부분을 빼야 합니다."
      }
    ]
  },
  "S1-Q8": {
    "topic": "마주 보고 출발 (시간차)",
    "clue": "먼저 출발한 차가 앞서간 거리를 뺀 뒤, 남은 거리를 두 속력의 합으로 나눕니다.",
    "stepByStep": [
      {
        "step": "Step 1: 먼저 이동한 거리",
        "desc": "X가 1시간 동안 60마일 이동 → 남은 거리 130마일"
      },
      {
        "step": "Step 2: 만나는 시간",
        "desc": "130 ÷ (60 + 70) = 1시간 후"
      },
      {
        "step": "Step 3: X의 위치",
        "desc": "60 + 60 × 1 = <strong>120</strong>마일"
      }
    ],
    "commonTraps": [
      {
        "value": 87.6923076923077,
        "display": "1,140/13",
        "why": "두 차가 동시에 출발했다고 보고 속력 비로 나눈 값입니다."
      },
      {
        "value": 60,
        "display": "60",
        "why": "Y가 출발한 뒤 X가 이동한 거리만 센 값입니다."
      },
      {
        "value": 70,
        "display": "70",
        "why": "B로부터의 거리입니다."
      },
      {
        "value": 130,
        "display": "130",
        "why": "X의 이동 거리에 Y의 속력을 쓴 값입니다."
      }
    ]
  },
  "S1-Q9": {
    "topic": "원형 트랙 (상대 속력)",
    "clue": "두 사람이 만날 때마다 상대 거리가 한 바퀴(600 m)씩 누적됩니다. 상대 속력 = 속력의 합.",
    "stepByStep": [
      {
        "step": "Step 1: 상대 속력",
        "desc": "160 + 240 = 400 m/min"
      },
      {
        "step": "Step 2: 한 번 만나는 데 걸리는 시간",
        "desc": "600 ÷ 400 = 3/2분"
      },
      {
        "step": "Step 3: 횟수",
        "desc": "⌊37 × 400 / 600⌋ = ⌊74/3⌋ = <strong>24</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 4,
        "display": "4",
        "why": "상대 속력을 차로 잡은 값입니다. 반대 방향이면 합을 써야 합니다."
      },
      {
        "value": 25,
        "display": "25",
        "why": "출발 시점을 포함해 센 값입니다."
      },
      {
        "value": 5,
        "display": "5",
        "why": "각자 완주한 바퀴 수의 차로 계산한 값입니다."
      },
      {
        "value": 23,
        "display": "23",
        "why": "마지막 만남을 빠뜨린 값입니다."
      }
    ]
  },
  "S1-Q10": {
    "topic": "정가·할인·이익률",
    "clue": "원가를 100으로 두면 판매가 = 100(1 + x/100)(1 − d/100) = 100 + 이익.",
    "stepByStep": [
      {
        "step": "Step 1: 원가 100으로 두기",
        "desc": "판매가 = 100 + 70 = 170"
      },
      {
        "step": "Step 2: 정가 역산",
        "desc": "정가 × 0.85 = 170 → 정가 = 200"
      },
      {
        "step": "Step 3: 답",
        "desc": "정가는 원가보다 <strong>100%</strong> 높습니다."
      }
    ],
    "commonTraps": [
      {
        "value": 85,
        "display": "85",
        "why": "할인율과 이익률을 단순히 더한 값입니다. 할인은 정가 기준이므로 곱으로 계산해야 합니다."
      },
      {
        "value": 82,
        "display": "82",
        "why": "이익률만 할인율로 나눈 값입니다."
      },
      {
        "value": 110,
        "display": "110",
        "why": "계산 실수 값입니다."
      },
      {
        "value": 90,
        "display": "90",
        "why": "계산 실수 값입니다."
      },
      {
        "value": 85,
        "display": "85",
        "why": "이익률과 할인율을 더한 값입니다."
      }
    ]
  },
  "S1-Q11": {
    "topic": "나머지의 가능한 값",
    "clue": "n = 14m + 2 꼴입니다. 7로 나눈 나머지는 lcm(14, 7) = 14 주기로 반복되므로 한 주기만 확인하면 됩니다.",
    "stepByStep": [
      {
        "step": "Step 1: n의 형태",
        "desc": "n = 2, 16, 30, … (한 주기 안의 후보: 2)"
      },
      {
        "step": "Step 2: 각 후보 계산",
        "desc": "n = 2 → 나머지 2"
      },
      {
        "step": "Step 3: 가능한 나머지",
        "desc": "{ 2 }"
      },
      {
        "step": "Step 4: 정답 확정",
        "desc": "정답은 C입니다. 다중 선택 문항은 정답 보기를 모두, 정확히 골라야 점수를 받습니다(부분 점수 없음)."
      }
    ],
    "whySelectedWrong": {
      "A": "n = 2 + 14m 꼴의 모든 수를 대입해도 나머지 0는 나오지 않습니다(주기 14 안에서 확인).",
      "B": "n = 2 + 14m 꼴의 모든 수를 대입해도 나머지 1는 나오지 않습니다(주기 14 안에서 확인).",
      "D": "n = 2 + 14m 꼴의 모든 수를 대입해도 나머지 3는 나오지 않습니다(주기 14 안에서 확인).",
      "E": "n = 2 + 14m 꼴의 모든 수를 대입해도 나머지 4는 나오지 않습니다(주기 14 안에서 확인).",
      "F": "n = 2 + 14m 꼴의 모든 수를 대입해도 나머지 6는 나오지 않습니다(주기 14 안에서 확인)."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "0",
        "analysis": "오답. n = 2 + 14m 꼴의 모든 수를 대입해도 나머지 0는 나오지 않습니다(주기 14 안에서 확인)."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "1",
        "analysis": "오답. n = 2 + 14m 꼴의 모든 수를 대입해도 나머지 1는 나오지 않습니다(주기 14 안에서 확인)."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "2",
        "analysis": "정답. n = 2일 때 n을 7로 나누면 나머지가 2입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "3",
        "analysis": "오답. n = 2 + 14m 꼴의 모든 수를 대입해도 나머지 3는 나오지 않습니다(주기 14 안에서 확인)."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "4",
        "analysis": "오답. n = 2 + 14m 꼴의 모든 수를 대입해도 나머지 4는 나오지 않습니다(주기 14 안에서 확인)."
      },
      {
        "label": "F",
        "isCorrect": false,
        "text": "6",
        "analysis": "오답. n = 2 + 14m 꼴의 모든 수를 대입해도 나머지 6는 나오지 않습니다(주기 14 안에서 확인)."
      }
    ]
  },
  "S1-Q12": {
    "topic": "원과 정사각형 사이 영역",
    "clue": "원이 정사각형에 내접하면 지름 = 한 변입니다.",
    "stepByStep": [
      {
        "step": "Step 1: 반지름",
        "desc": "지름 = 12 → r = 6"
      },
      {
        "step": "Step 2: 넓이 차",
        "desc": "144 − 36π"
      },
      {
        "step": "Step 3: 답",
        "desc": "−36π + 144"
      }
    ],
    "whySelectedWrong": {
      "A": "반지름을 s/√2로 잡은 값입니다(외접원과 혼동).",
      "B": "원의 넓이를 절반(반원)만 뺀 값입니다.",
      "C": "네 영역 중 하나의 넓이만 구한 값입니다.",
      "E": "반지름 대신 지름을 써서 원의 넓이를 구한 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "−72π + 144",
        "analysis": "오답. 반지름을 s/√2로 잡은 값입니다(외접원과 혼동)."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "−18π + 144",
        "analysis": "오답. 원의 넓이를 절반(반원)만 뺀 값입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "−9π + 36",
        "analysis": "오답. 네 영역 중 하나의 넓이만 구한 값입니다."
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "−36π + 144",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "−144π + 144",
        "analysis": "오답. 반지름 대신 지름을 써서 원의 넓이를 구한 값입니다."
      }
    ]
  },
  "S2-Q1": {
    "topic": "연속 정수의 곱과 거듭제곱",
    "clue": "a = b − 1, c = b + 1로 놓고 b 하나로 표현합니다.",
    "stepByStep": [
      {
        "step": "Step 1: b로 표현",
        "desc": "abc = b(b² − 1) = b³ − b"
      },
      {
        "step": "Step 2: 비교",
        "desc": "b > 0이면 A &lt; B, b &lt; 0이면 A > B, b = 0이면 같습니다(정수 b의 부호가 주어지지 않음)."
      },
      {
        "step": "Step 3: 결론",
        "desc": "따라서 정답은 (D)입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다.",
      "B": "조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다.",
      "C": "조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Quantity A is greater.",
        "analysis": "오답. 조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "Quantity B is greater.",
        "analysis": "오답. 조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "The two quantities are equal.",
        "analysis": "오답. 조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "정답."
      }
    ]
  },
  "S2-Q2": {
    "topic": "합이 일정할 때 곱의 최대",
    "clue": "a + b = 20이면 ab = a(20 − a)는 a = 10일 때 최대 100이고, a가 0에 가까우면 0에 가까워집니다.",
    "stepByStep": [
      {
        "step": "Step 1: 범위 구하기",
        "desc": "ab = a(20 − a) = 100 − (a − 10)² → 0 &lt; ab ≤ 100"
      },
      {
        "step": "Step 2: 비교",
        "desc": "Quantity B = 100과 ab의 가능 범위를 비교합니다."
      },
      {
        "step": "Step 3: 확인",
        "desc": "a = 1, b = 19이면 Quantity A = 19, Quantity B = 100<br>a = 10, b = 10이면 Quantity A = 100, Quantity B = 100"
      },
      {
        "step": "Step 4: 결론",
        "desc": "따라서 정답은 (D)입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다.",
      "B": "조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다.",
      "C": "조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Quantity A is greater.",
        "analysis": "오답. 조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "Quantity B is greater.",
        "analysis": "오답. 조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "The two quantities are equal.",
        "analysis": "오답. 조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다."
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "정답."
      }
    ]
  },
  "S2-Q3": {
    "topic": "농도 (혼합·치환)",
    "clue": "빼고 같은 부피의 물로 채우는 조작은 농도에 매번 (V − y)/V를 곱합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 1회 치환",
        "desc": "농도 × (40 − 10)/40 = 40% × 3/4 = 30%"
      },
      {
        "step": "Step 2: 2회 치환",
        "desc": "다시 × 3/4 → 40 × (3/4)² = <strong>22.5%</strong>"
      },
      {
        "step": "Step 3: 주의",
        "desc": "두 번째로 빼는 용액은 이미 희석되어 있으므로 알코올이 덜 빠집니다."
      },
      {
        "step": "Step 4: 결론",
        "desc": "The percent of the final solution, by volume, that is alcohol = 22.5이고 비교 대상은 20이므로 정답은 (A)입니다."
      }
    ],
    "whySelectedWrong": {
      "B": "Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 22.5, Quantity B = 20) 참고로 20은(는) 매번 같은 양의 알코올이 빠진다고 계산한 값입니다.",
      "C": "두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 22.5, Quantity B = 20) 참고로 20은(는) 매번 같은 양의 알코올이 빠진다고 계산한 값입니다.",
      "D": "주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 22.5, Quantity B = 20) 참고로 20은(는) 매번 같은 양의 알코올이 빠진다고 계산한 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": true,
        "text": "Quantity A is greater.",
        "analysis": "정답."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "Quantity B is greater.",
        "analysis": "오답. Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 22.5, Quantity B = 20) 참고로 20은(는) 매번 같은 양의 알코올이 빠진다고 계산한 값입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "The two quantities are equal.",
        "analysis": "오답. 두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 22.5, Quantity B = 20) 참고로 20은(는) 매번 같은 양의 알코올이 빠진다고 계산한 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 22.5, Quantity B = 20) 참고로 20은(는) 매번 같은 양의 알코올이 빠진다고 계산한 값입니다."
      }
    ]
  },
  "S2-Q4": {
    "topic": "팩토리얼의 소인수 지수 (Legendre)",
    "clue": "n!에 소수 p가 몇 번 들어 있는지는 ⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + … 로 셉니다(Legendre 공식).",
    "stepByStep": [
      {
        "step": "Step 1: 40!에 들어 있는 2의 개수",
        "desc": "⌊40/2⌋ + ⌊40/2²⌋ + … = 20 + 10 + 5 + 2 + 1 = <strong>38</strong> → 2<sup>2</sup> 묶음은 ⌊38/2⌋ = 19개"
      },
      {
        "step": "Step 2: 40!에 들어 있는 3의 개수",
        "desc": "⌊40/3⌋ + ⌊40/3²⌋ + … = 13 + 4 + 1 = <strong>18</strong>"
      },
      {
        "step": "Step 3: 병목 소인수 찾기",
        "desc": "12 = 2<sup>2</sup> × 3이므로 가능한 지수는 각 소인수 묶음 개수 중 최솟값 = <strong>18</strong>입니다."
      },
      {
        "step": "Step 4: 결론",
        "desc": "The greatest integer <i>k</i> such that 12<sup><i>k</i></sup> is a factor of 40! = 18이고 비교 대상은 17이므로 정답은 (A)입니다."
      }
    ],
    "whySelectedWrong": {
      "B": "Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 18, Quantity B = 17) 참고로 17은(는) 고차 거듭제곱 항 하나를 빼먹은 값입니다.",
      "C": "두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 18, Quantity B = 17) 참고로 17은(는) 고차 거듭제곱 항 하나를 빼먹은 값입니다.",
      "D": "주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 18, Quantity B = 17) 참고로 17은(는) 고차 거듭제곱 항 하나를 빼먹은 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": true,
        "text": "Quantity A is greater.",
        "analysis": "정답."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "Quantity B is greater.",
        "analysis": "오답. Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 18, Quantity B = 17) 참고로 17은(는) 고차 거듭제곱 항 하나를 빼먹은 값입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "The two quantities are equal.",
        "analysis": "오답. 두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 18, Quantity B = 17) 참고로 17은(는) 고차 거듭제곱 항 하나를 빼먹은 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 18, Quantity B = 17) 참고로 17은(는) 고차 거듭제곱 항 하나를 빼먹은 값입니다."
      }
    ]
  },
  "S2-Q5": {
    "topic": "도수분포표의 사분위수",
    "clue": "GRE 방식: 자료를 크기순으로 놓고 아래쪽 절반의 중앙값이 Q1, 위쪽 절반의 중앙값이 Q3 (n이 홀수면 중앙값은 양쪽 절반에서 제외).",
    "stepByStep": [
      {
        "step": "Step 1: 누적 도수",
        "desc": "0: 6번째까지, 1: 7번째까지, 2: 9번째까지, 3: 11번째까지, 4: 13번째까지, 5: 17번째까지, 6: 21번째까지"
      },
      {
        "step": "Step 2: 중앙값",
        "desc": "n = 21 → 중앙값 = 3"
      },
      {
        "step": "Step 3: 사분위수",
        "desc": "아래쪽 10개의 중앙값 Q1 = 0, 위쪽 10개의 중앙값 Q3 = 5"
      },
      {
        "step": "Step 4: 답",
        "desc": "Q3 − Q1 = <strong>5</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 6,
        "display": "6",
        "why": "범위(최댓값 − 최솟값)입니다."
      },
      {
        "value": 2,
        "display": "2",
        "why": "제3사분위수 − 중앙값입니다."
      },
      {
        "value": 6,
        "display": "6",
        "why": "사분위수 위치를 한 칸 잘못 잡은 값입니다."
      },
      {
        "value": 4,
        "display": "4",
        "why": "사분위수 위치를 한 칸 잘못 잡은 값입니다."
      },
      {
        "value": 6,
        "display": "6",
        "why": "범위입니다."
      }
    ]
  },
  "S2-Q6": {
    "topic": "닮음: 평행선이 나누는 넓이",
    "clue": "닮음비가 m:n이면 넓이비는 m²:n². 닮음비는 AD:AB = 1:5입니다.",
    "stepByStep": [
      {
        "step": "Step 1: 닮음비",
        "desc": "△ADE ∼ △ABC, AD : AB = 1 : 5"
      },
      {
        "step": "Step 2: 넓이비",
        "desc": "△ADE : △ABC = 1 : 25"
      },
      {
        "step": "Step 3: 사각형 부분",
        "desc": "△ADE : DBCE = 1 : 24 = <strong>1/24</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "삼각형 ADE와 삼각형 ABC 전체의 넓이 비입니다.",
      "C": "AD:DB를 제곱했지만 닮음비는 AD:AB입니다.",
      "D": "닮음비(AD:AB)만 구한 값입니다.",
      "E": "길이의 비를 그대로 넓이의 비로 쓴 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "1/25",
        "analysis": "오답. 삼각형 ADE와 삼각형 ABC 전체의 넓이 비입니다."
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "1/24",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "1/16",
        "analysis": "오답. AD:DB를 제곱했지만 닮음비는 AD:AB입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "1/5",
        "analysis": "오답. 닮음비(AD:AB)만 구한 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "1/4",
        "analysis": "오답. 길이의 비를 그대로 넓이의 비로 쓴 값입니다."
      }
    ]
  },
  "S2-Q7": {
    "topic": "연속 백분율 변화",
    "clue": "연속 백분율 변화는 배수(1 ± r)를 곱해 누적합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 배수로 변환",
        "desc": "1.5 × 0.9 × 0.5"
      },
      {
        "step": "Step 2: 계산",
        "desc": "= 0.675"
      },
      {
        "step": "Step 3: 백분율로",
        "desc": "<strong>67.5%</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 90,
        "display": "90",
        "why": "백분율 변화를 단순히 더하고 뺀 값입니다. 변화율은 곱으로 누적됩니다."
      },
      {
        "value": 68.5,
        "display": "68.5",
        "why": "계산 실수 값입니다."
      },
      {
        "value": 135,
        "display": "135",
        "why": "3월의 변화를 빠뜨린 값입니다."
      },
      {
        "value": -32.5,
        "display": "−32.5",
        "why": "“몇 퍼센트인가”가 아니라 “몇 퍼센트 변했는가”로 답한 값입니다."
      },
      {
        "value": 90,
        "display": "90",
        "why": "변화율을 단순 합산한 값입니다."
      }
    ]
  },
  "S2-Q8": {
    "topic": "좌표평면: 원 내부의 점",
    "clue": "거리를 직접 구하지 말고 거리의 제곱을 반지름의 제곱과 비교합니다. 원 위의 점은 내부가 아닙니다.",
    "stepByStep": [
      {
        "step": "Step 1: 반지름의 제곱",
        "desc": "(1 − −3)² + (1 − 0)² = 17"
      },
      {
        "step": "Step 2: 판정 기준",
        "desc": "(x − −3)² + (y − 0)² &lt; 17이면 내부"
      },
      {
        "step": "Step 3: 정답 확정",
        "desc": "정답은 B, D, E입니다. 다중 선택 문항은 정답 보기를 모두, 정확히 골라야 점수를 받습니다(부분 점수 없음)."
      }
    ],
    "whySelectedWrong": {
      "A": "중심까지 거리의 제곱 = (1 − −3)² + (−2 − 0)² = 20 > 17 → 외부",
      "C": "중심까지 거리의 제곱 = (−4 − −3)² + (4 − 0)² = 17 = 17 → 원 위의 점이므로 내부가 아닙니다.",
      "F": "중심까지 거리의 제곱 = (−7 − −3)² + (1 − 0)² = 17 = 17 → 원 위의 점이므로 내부가 아닙니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "(1, −2)",
        "analysis": "오답. 중심까지 거리의 제곱 = (1 − −3)² + (−2 − 0)² = 20 > 17 → 외부"
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "(−3, −4)",
        "analysis": "정답. 중심까지 거리의 제곱 = (−3 − −3)² + (−4 − 0)² = 16 &lt; 17 → 내부"
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "(−4, 4)",
        "analysis": "오답. 중심까지 거리의 제곱 = (−4 − −3)² + (4 − 0)² = 17 = 17 → 원 위의 점이므로 내부가 아닙니다."
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "(0, 2)",
        "analysis": "정답. 중심까지 거리의 제곱 = (0 − −3)² + (2 − 0)² = 13 &lt; 17 → 내부"
      },
      {
        "label": "E",
        "isCorrect": true,
        "text": "(−6, −2)",
        "analysis": "정답. 중심까지 거리의 제곱 = (−6 − −3)² + (−2 − 0)² = 13 &lt; 17 → 내부"
      },
      {
        "label": "F",
        "isCorrect": false,
        "text": "(−7, 1)",
        "analysis": "오답. 중심까지 거리의 제곱 = (−7 − −3)² + (1 − 0)² = 17 = 17 → 원 위의 점이므로 내부가 아닙니다."
      }
    ]
  },
  "S2-Q9": {
    "topic": "Data Interpretation: 표 해석 (증가율·비중)",
    "clue": "퍼센트 증가 = (나중 − 처음)/처음. 절대 증가량이 아니라 비율을 비교합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 각 증가율",
        "desc": "Plant A: (410 − 260)/260 ≈ 57.7%<br>Plant B: (377 − 280)/280 ≈ 34.6%<br>Plant C: (373 − 260)/260 ≈ 43.5%<br>Plant D: (757 − 720)/720 ≈ 5.1%<br>Plant E: (396 − 320)/320 ≈ 23.8%"
      },
      {
        "step": "Step 2: 최댓값",
        "desc": "<strong>Plant A</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "Plant B의 증가율은 34.6%로 Plant A(57.7%)보다 작습니다.",
      "B": "Plant D의 증가율은 5.1%로 Plant A(57.7%)보다 작습니다.",
      "C": "Plant C의 증가율은 43.5%로 Plant A(57.7%)보다 작습니다.",
      "D": "Plant E의 증가율은 23.8%로 Plant A(57.7%)보다 작습니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Plant B",
        "analysis": "오답. Plant B의 증가율은 34.6%로 Plant A(57.7%)보다 작습니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "Plant D",
        "analysis": "오답. Plant D의 증가율은 5.1%로 Plant A(57.7%)보다 작습니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "Plant C",
        "analysis": "오답. Plant C의 증가율은 43.5%로 Plant A(57.7%)보다 작습니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "Plant E",
        "analysis": "오답. Plant E의 증가율은 23.8%로 Plant A(57.7%)보다 작습니다."
      },
      {
        "label": "E",
        "isCorrect": true,
        "text": "Plant A",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      }
    ]
  },
  "S2-Q10": {
    "topic": "Data Interpretation: 표 해석 (증가율·비중)",
    "clue": "부분 ÷ 전체 × 100. 해당 연도의 Total 행을 사용합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 부분 합",
        "desc": "410 + 373 = 783"
      },
      {
        "step": "Step 2: 비율",
        "desc": "783 ÷ 2,313 × 100 ≈ 33.85%"
      },
      {
        "step": "Step 3: 반올림",
        "desc": "<strong>34%</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 28,
        "display": "28",
        "why": "2019년 자료로 계산한 값입니다."
      },
      {
        "value": 33,
        "display": "33",
        "why": "반올림을 잘못한 값입니다."
      },
      {
        "value": 18,
        "display": "18",
        "why": "Plant A만 계산한 값입니다."
      },
      {
        "value": 40,
        "display": "40",
        "why": "다섯 범주가 같다고 보고 2/5로 어림한 값입니다."
      }
    ]
  },
  "S2-Q11": {
    "topic": "Data Interpretation: 표 해석 (증가율·비중)",
    "clue": "비중이 커지려면 그 범주의 증가율이 전체 증가율보다 커야 합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 전체 증가율",
        "desc": "1,840 → 2,313: 25.7%"
      },
      {
        "step": "Step 2: 판정",
        "desc": "각 범주의 증가율이 전체 증가율보다 큰지 비교합니다(위의 개별 계산 참고)."
      },
      {
        "step": "Step 3: 정답 확정",
        "desc": "정답은 A, B, C입니다. 다중 선택 문항은 정답 보기를 모두, 정확히 골라야 점수를 받습니다(부분 점수 없음)."
      }
    ],
    "whySelectedWrong": {
      "D": "2019: 720/1,840 ≈ 39.1%, 2021: 757/2,313 ≈ 32.7% → 증가하지 않음",
      "E": "2019: 320/1,840 ≈ 17.4%, 2021: 396/2,313 ≈ 17.1% → 증가하지 않음"
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": true,
        "text": "Plant A",
        "analysis": "정답. 2019: 260/1,840 ≈ 14.1%, 2021: 410/2,313 ≈ 17.7% → 증가"
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "Plant B",
        "analysis": "정답. 2019: 280/1,840 ≈ 15.2%, 2021: 377/2,313 ≈ 16.3% → 증가"
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "Plant C",
        "analysis": "정답. 2019: 260/1,840 ≈ 14.1%, 2021: 373/2,313 ≈ 16.1% → 증가"
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "Plant D",
        "analysis": "오답. 2019: 720/1,840 ≈ 39.1%, 2021: 757/2,313 ≈ 32.7% → 증가하지 않음"
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "Plant E",
        "analysis": "오답. 2019: 320/1,840 ≈ 17.4%, 2021: 396/2,313 ≈ 17.1% → 증가하지 않음"
      }
    ]
  },
  "S2-Q12": {
    "topic": "같은 거듭제곱의 합",
    "clue": "같은 수 4개를 더하면 4를 곱한 것과 같습니다: 4·4<sup>n</sup> = 4<sup>n+1</sup>.",
    "stepByStep": [
      {
        "step": "Step 1: 덧셈을 곱셈으로",
        "desc": "4개의 4<sup>n</sup>의 합 = 4 × 4<sup>n</sup> = 4<sup>n + 1</sup>"
      },
      {
        "step": "Step 2: 밑 통일",
        "desc": "4 = 2<sup>2</sup>이므로 4<sup>n+1</sup> = 2<sup>2(n + 1)</sup>"
      },
      {
        "step": "Step 3: 지수 비교",
        "desc": "m = 2(n + 1) = <strong>2<i>n</i> + 2</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "밑을 2로 바꿀 때 n에 2를 곱하지 않은 값입니다.",
      "B": "4개를 더하면 4를 한 번 더 곱하는 것인데, 이를 빠뜨린 값입니다.",
      "D": "4개를 더한 것을 2를 한 번 곱한 것으로 착각한 값입니다.",
      "E": "항의 개수를 지수에 곱한 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "<i>n</i> + 2",
        "analysis": "오답. 밑을 2로 바꿀 때 n에 2를 곱하지 않은 값입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "2<i>n</i>",
        "analysis": "오답. 4개를 더하면 4를 한 번 더 곱하는 것인데, 이를 빠뜨린 값입니다."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "2<i>n</i> + 2",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "2<i>n</i> + 1",
        "analysis": "오답. 4개를 더한 것을 2를 한 번 곱한 것으로 착각한 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "8<i>n</i>",
        "analysis": "오답. 항의 개수를 지수에 곱한 값입니다."
      }
    ]
  },
  "S2-Q13": {
    "topic": "가중평균 (두 집단)",
    "clue": "가중평균에서 각 집단의 인원은 전체 평균까지의 거리에 반비례합니다: nA(c − a) = nB(b − c).",
    "stepByStep": [
      {
        "step": "Step 1: 식",
        "desc": "11(81 − 61) = n<sub>B</sub>(91 − 81)"
      },
      {
        "step": "Step 2: 계산",
        "desc": "220 = 10n<sub>B</sub>"
      },
      {
        "step": "Step 3: 답",
        "desc": "n<sub>B</sub> = <strong>22</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "두 반의 인원이 같다고 가정한 값입니다.",
      "B": "가중평균의 거리 비를 거꾸로 적용한 값입니다.",
      "D": "계산 실수 값입니다.",
      "E": "두 반 전체 인원입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "11",
        "analysis": "오답. 두 반의 인원이 같다고 가정한 값입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "12",
        "analysis": "오답. 가중평균의 거리 비를 거꾸로 적용한 값입니다."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "22",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "24",
        "analysis": "오답. 계산 실수 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "33",
        "analysis": "오답. 두 반 전체 인원입니다."
      }
    ]
  },
  "S2-Q14": {
    "topic": "새로운 연산 정의",
    "clue": "정의식에 순서대로 대입합니다. a ◆ b ≠ b ◆ a일 수 있다는 점이 함정입니다.",
    "stepByStep": [
      {
        "step": "Step 1: x 구하기",
        "desc": "4 ◆ x = 4x + 1(4) − 3x = 1x + 4 = 13 → x = <strong>9</strong>"
      },
      {
        "step": "Step 2: 순서를 바꿔 계산",
        "desc": "x ◆ 4 = (9)(4) + 1(9) − 3(4)"
      },
      {
        "step": "Step 3: 계산",
        "desc": "= 36 + 9 − 12 = <strong>33</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "부호 실수 값입니다.",
      "B": "x의 값만 구한 값입니다.",
      "C": "연산의 순서가 바뀌면 값이 달라집니다(교환법칙 불성립). k ◆ x와 같다고 본 값입니다.",
      "E": "a와 b의 역할을 일부만 바꿔 대입한 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "−33",
        "analysis": "오답. 부호 실수 값입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "9",
        "analysis": "오답. x의 값만 구한 값입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "13",
        "analysis": "오답. 연산의 순서가 바뀌면 값이 달라집니다(교환법칙 불성립). k ◆ x와 같다고 본 값입니다."
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "33",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "53",
        "analysis": "오답. a와 b의 역할을 일부만 바꿔 대입한 값입니다."
      }
    ]
  },
  "S2-Q15": {
    "topic": "순열: 이웃 조건·순서 조건",
    "clue": "제한 조건은 묶음(이웃), 대칭성(순서), 여사건(금지)으로 처리합니다.",
    "stepByStep": [
      {
        "step": "Step 1: A의 자리",
        "desc": "양 끝을 제외한 4자리 중 하나"
      },
      {
        "step": "Step 2: 나머지",
        "desc": "5! = 120"
      },
      {
        "step": "Step 3: 계산",
        "desc": "4 × 120 = <strong>480</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 240,
        "display": "240",
        "why": "A가 끝에 서는 경우의 수입니다."
      },
      {
        "value": 600,
        "display": "600",
        "why": "한쪽 끝만 제외한 값입니다."
      },
      {
        "value": 96,
        "display": "96",
        "why": "나머지 사람을 배열할 때 한 명을 빠뜨린 값입니다."
      },
      {
        "value": 720,
        "display": "720",
        "why": "조건을 무시한 값입니다."
      },
      {
        "value": 240,
        "display": "240",
        "why": "A가 끝에 서는 경우의 수입니다."
      }
    ]
  }
};
