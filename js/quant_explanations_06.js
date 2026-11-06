window.QEXPLANATIONS_06 = {
  "S1-Q1": {
    "topic": "부호 분석 (인수분해)",
    "clue": "차이를 인수분해합니다: x²y − xy² = xy(x − y).",
    "stepByStep": [
      {
        "step": "Step 1: 차이 계산",
        "desc": "A − B = x²y − xy² = xy(x − y)"
      },
      {
        "step": "Step 2: 부호 판정",
        "desc": "x &lt; y이므로 (x − y) &lt; 0. xy > 0이므로 A − B &lt; 0."
      },
      {
        "step": "Step 3: 확인",
        "desc": "x = 1, y = 2이면 Quantity A = 2, Quantity B = 4"
      },
      {
        "step": "Step 4: 결론",
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
  "S1-Q2": {
    "topic": "팩토리얼 식 정리",
    "clue": "(k + 1)! = (k + 1)·k·(k − 1)! 이므로 (k + 1)!/(k − 1)! = k(k + 1) = k² + k.",
    "stepByStep": [
      {
        "step": "Step 1: 팩토리얼 약분",
        "desc": "(k + 1)!/(k − 1)! = (k + 1)k"
      },
      {
        "step": "Step 2: 비교",
        "desc": "k² + k 와 (<i>k</i> + 1)<sup>2</sup>를 비교합니다."
      },
      {
        "step": "Step 3: 결론",
        "desc": "따라서 정답은 (A)입니다."
      }
    ],
    "whySelectedWrong": {
      "B": "Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다.",
      "C": "두 양이 항상 같다고 판단했지만 그렇지 않습니다.",
      "D": "주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요."
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
        "analysis": "오답. Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다."
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
    "topic": "정수 범위에서 최댓값·최솟값",
    "clue": "가능한 정수는 끝값을 제외한 범위입니다. 음수를 제곱하면 커질 수 있으므로 양 끝 후보를 모두 확인합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 가능한 값",
        "desc": "x ∈ {1, …, 3}, y ∈ {−1, …, 5}"
      },
      {
        "step": "Step 2: 극값 후보 점검",
        "desc": "식 <i>x</i><i>y</i> − <i>x</i>에서 각 항을 줄이는 방향을 따지면 후보는 각 범위의 양 끝 정수입니다(제곱 항은 절댓값이 큰 쪽)."
      },
      {
        "step": "Step 3: 결론",
        "desc": "x = 3, y = −1일 때 최솟값 <strong>−6</strong>"
      },
      {
        "step": "Step 4: 결론",
        "desc": "The least possible value of <i>x</i><i>y</i> − <i>x</i> = −6이고 비교 대상은 −2이므로 정답은 (B)입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = −6, Quantity B = −2) 참고로 −2은(는) 두 변수 모두 가장 작은 값을 대입한 값입니다.",
      "C": "두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = −6, Quantity B = −2) 참고로 −2은(는) 두 변수 모두 가장 작은 값을 대입한 값입니다.",
      "D": "주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = −6, Quantity B = −2) 참고로 −2은(는) 두 변수 모두 가장 작은 값을 대입한 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Quantity A is greater.",
        "analysis": "오답. Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = −6, Quantity B = −2) 참고로 −2은(는) 두 변수 모두 가장 작은 값을 대입한 값입니다."
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
        "analysis": "오답. 두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = −6, Quantity B = −2) 참고로 −2은(는) 두 변수 모두 가장 작은 값을 대입한 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = −6, Quantity B = −2) 참고로 −2은(는) 두 변수 모두 가장 작은 값을 대입한 값입니다."
      }
    ]
  },
  "S1-Q4": {
    "topic": "복리 vs 단리 비교",
    "clue": "복리 이자 = P(1 + r)ⁿ − P, 단리 이자 = P·r·n. 소수점까지 정확히 계산해 비교합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 복리 이자",
        "desc": "5,000 × (1.2)<sup>2</sup> − 5,000 = 2,200"
      },
      {
        "step": "Step 2: 단리 이자",
        "desc": "5,000 × 0.22 × 2 = 2,200"
      },
      {
        "step": "Step 3: 비교",
        "desc": "2,200 vs 2,200"
      },
      {
        "step": "Step 4: 결론",
        "desc": "따라서 정답은 (C)입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다.",
      "B": "Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다.",
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
        "isCorrect": false,
        "text": "Quantity B is greater.",
        "analysis": "오답. Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "The two quantities are equal.",
        "analysis": "정답."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요."
      }
    ]
  },
  "S1-Q5": {
    "topic": "두 변이 주어진 삼각형의 넓이·둘레 범위",
    "clue": "두 변이 고정되면 넓이는 끼인각, 둘레는 셋째 변의 범위로 결정됩니다.",
    "stepByStep": [
      {
        "step": "Step 1: 셋째 변 범위",
        "desc": "4 &lt; c &lt; 16"
      },
      {
        "step": "Step 2: 둘레 범위",
        "desc": "20 &lt; 둘레 &lt; 32 (등호 불가)"
      },
      {
        "step": "Step 3: 정답 확정",
        "desc": "정답은 C, D, E입니다. 다중 선택 문항은 정답 보기를 모두, 정확히 골라야 점수를 받습니다(부분 점수 없음)."
      }
    ],
    "whySelectedWrong": {
      "A": "셋째 변 = 3가 되어 삼각형 부등식(4 &lt; c &lt; 16)을 위반합니다.",
      "B": "셋째 변 = 4가 되어 삼각형 부등식(4 &lt; c &lt; 16)을 위반합니다.",
      "F": "셋째 변 = 16가 되어 삼각형 부등식(4 &lt; c &lt; 16)을 위반합니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "19",
        "analysis": "오답. 셋째 변 = 3가 되어 삼각형 부등식(4 &lt; c &lt; 16)을 위반합니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "20",
        "analysis": "오답. 셋째 변 = 4가 되어 삼각형 부등식(4 &lt; c &lt; 16)을 위반합니다."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "21",
        "analysis": "정답. 셋째 변 = 5가 (4, 16) 범위 안이므로 가능합니다."
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "26",
        "analysis": "정답. 셋째 변 = 10가 (4, 16) 범위 안이므로 가능합니다."
      },
      {
        "label": "E",
        "isCorrect": true,
        "text": "31",
        "analysis": "정답. 셋째 변 = 15가 (4, 16) 범위 안이므로 가능합니다."
      },
      {
        "label": "F",
        "isCorrect": false,
        "text": "32",
        "analysis": "오답. 셋째 변 = 16가 되어 삼각형 부등식(4 &lt; c &lt; 16)을 위반합니다."
      }
    ]
  },
  "S1-Q6": {
    "topic": "약수의 개수 (조건부)",
    "clue": "약수의 개수는 소인수분해 후 각 지수의 선택지 개수를 곱해서 구합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 소인수분해",
        "desc": "1,440 = 2<sup>5</sup> × 3<sup>2</sup> × 5이고, 전체 약수의 개수는 (5+1)(2+1)(1+1) = 36개입니다."
      },
      {
        "step": "Step 2: 조건 해석",
        "desc": "완전제곱수인 약수는 모든 소인수의 지수가 짝수여야 합니다."
      },
      {
        "step": "Step 3: 개수 계산",
        "desc": "2의 지수: 0, 2, … → 3가지, 3의 지수 → 2가지, 5의 지수 → 1가지. 곱하면 <strong>6</strong>개입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "지수 0(즉 소인수를 포함하지 않는 경우)을 빼먹은 값입니다.",
      "B": "정답과 가까운 값입니다. 계산 중 작은 실수(경계값·부호·반올림)를 하면 고르게 되는 선택지입니다.",
      "D": "1을 중복해서 센 값입니다.",
      "E": "조건 없이 전체 약수를 센 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "0",
        "analysis": "오답. 지수 0(즉 소인수를 포함하지 않는 경우)을 빼먹은 값입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "5",
        "analysis": "오답. 정답과 가까운 값입니다. 계산 중 작은 실수(경계값·부호·반올림)를 하면 고르게 되는 선택지입니다."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "6",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "7",
        "analysis": "오답. 1을 중복해서 센 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "36",
        "analysis": "오답. 조건 없이 전체 약수를 센 값입니다."
      }
    ]
  },
  "S1-Q7": {
    "topic": "평균의 변화로 값 구하기",
    "clue": "필요한 총점 − 현재 총점 = 추가로 필요한 점수.",
    "stepByStep": [
      {
        "step": "Step 1: 필요한 총점",
        "desc": "8 × 86 = 688"
      },
      {
        "step": "Step 2: 현재 총점",
        "desc": "6 × 82 = 492"
      },
      {
        "step": "Step 3: 두 시험",
        "desc": "(688 − 492) ÷ 2 = <strong>98</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 110,
        "display": "110",
        "why": "시험을 1회만 더 보는 경우의 값입니다."
      },
      {
        "value": 90,
        "display": "90",
        "why": "평균 차이만큼만 더 받으면 된다고 본 값입니다."
      },
      {
        "value": 196,
        "display": "196",
        "why": "두 시험 점수의 합입니다."
      },
      {
        "value": 99,
        "display": "99",
        "why": "계산 실수 값입니다."
      },
      {
        "value": 90,
        "display": "90",
        "why": "평균 차이만큼만 더한 값입니다."
      }
    ]
  },
  "S1-Q8": {
    "topic": "독립 시행 확률",
    "clue": "독립 시행: 특정 순서의 확률을 곱하고, 가능한 순서의 수 C(n, k)를 곱합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 0번 성공",
        "desc": "(4/5)<sup>4</sup> = 256/625"
      },
      {
        "step": "Step 2: 1번 성공",
        "desc": "4 × 1/5 × (4/5)<sup>3</sup> = 256/625"
      },
      {
        "step": "Step 3: 합",
        "desc": "<strong>512/625</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "여사건의 확률입니다.",
      "B": "0번 성공만 센 값입니다.",
      "C": "1번 성공하는 위치의 수(n)를 곱하지 않은 값입니다.",
      "E": "정답과 가까운 값입니다. 계산 중 작은 실수(경계값·부호·반올림)를 하면 고르게 되는 선택지입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "113/625",
        "analysis": "오답. 여사건의 확률입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "256/625",
        "analysis": "오답. 0번 성공만 센 값입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "64/125",
        "analysis": "오답. 1번 성공하는 위치의 수(n)를 곱하지 않은 값입니다."
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "512/625",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "513/625",
        "analysis": "오답. 정답과 가까운 값입니다. 계산 중 작은 실수(경계값·부호·반올림)를 하면 고르게 되는 선택지입니다."
      }
    ]
  },
  "S1-Q9": {
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
      "A": "반지름 대신 지름을 써서 원의 넓이를 구한 값입니다.",
      "B": "원의 넓이를 절반(반원)만 뺀 값입니다.",
      "D": "반지름을 s/√2로 잡은 값입니다(외접원과 혼동).",
      "E": "네 영역 중 하나의 넓이만 구한 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "−144π + 144",
        "analysis": "오답. 반지름 대신 지름을 써서 원의 넓이를 구한 값입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "−18π + 144",
        "analysis": "오답. 원의 넓이를 절반(반원)만 뺀 값입니다."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "−36π + 144",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "−72π + 144",
        "analysis": "오답. 반지름을 s/√2로 잡은 값입니다(외접원과 혼동)."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "−9π + 36",
        "analysis": "오답. 네 영역 중 하나의 넓이만 구한 값입니다."
      }
    ]
  },
  "S1-Q10": {
    "topic": "마주 보고 출발 (시간차)",
    "clue": "먼저 출발한 차가 앞서간 거리를 뺀 뒤, 남은 거리를 두 속력의 합으로 나눕니다.",
    "stepByStep": [
      {
        "step": "Step 1: 먼저 이동한 거리",
        "desc": "X가 1시간 동안 40마일 이동 → 남은 거리 210마일"
      },
      {
        "step": "Step 2: 만나는 시간",
        "desc": "210 ÷ (40 + 65) = 2시간 후"
      },
      {
        "step": "Step 3: X의 위치",
        "desc": "40 + 40 × 2 = <strong>120</strong>마일"
      }
    ],
    "commonTraps": [
      {
        "value": 95.23809523809524,
        "display": "2,000/21",
        "why": "두 차가 동시에 출발했다고 보고 속력 비로 나눈 값입니다."
      },
      {
        "value": 80,
        "display": "80",
        "why": "Y가 출발한 뒤 X가 이동한 거리만 센 값입니다."
      },
      {
        "value": 130,
        "display": "130",
        "why": "B로부터의 거리입니다."
      },
      {
        "value": 170,
        "display": "170",
        "why": "X의 이동 거리에 Y의 속력을 쓴 값입니다."
      }
    ]
  },
  "S1-Q11": {
    "topic": "지수방정식 (공통인수 묶기)",
    "clue": "지수가 다른 항의 덧셈·뺄셈은 가장 작은 거듭제곱으로 묶어 정리합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 공통인수로 묶기",
        "desc": "2<sup>x−1</sup>(2<sup>2</sup> − 1) = 2<sup>x−1</sup> × 3"
      },
      {
        "step": "Step 2: 나누기",
        "desc": "2<sup>x−1</sup> = 192 ÷ 3 = 64 = 2<sup>6</sup>"
      },
      {
        "step": "Step 3: 지수 비교",
        "desc": "x − 1 = 6 → x = <strong>7</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "정답과 가까운 값입니다. 계산 중 작은 실수(경계값·부호·반올림)를 하면 고르게 되는 선택지입니다.",
      "B": "공통인수 b^(x−1)의 지수 x − 1을 x로 착각한 값입니다.",
      "D": "지수 계산에서 1을 더한 값입니다.",
      "E": "계산 실수 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "5",
        "analysis": "오답. 정답과 가까운 값입니다. 계산 중 작은 실수(경계값·부호·반올림)를 하면 고르게 되는 선택지입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "6",
        "analysis": "오답. 공통인수 b^(x−1)의 지수 x − 1을 x로 착각한 값입니다."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "7",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "8",
        "analysis": "오답. 지수 계산에서 1을 더한 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "9",
        "analysis": "오답. 계산 실수 값입니다."
      }
    ]
  },
  "S1-Q12": {
    "topic": "근과 계수의 관계 (Vieta)",
    "clue": "이차방정식 x² − (r+s)x + rs = 0의 계수에서 근의 합과 곱을 바로 읽습니다.",
    "stepByStep": [
      {
        "step": "Step 1: 근과 계수의 관계",
        "desc": "두 근을 r, s라 하면 r + s = −8, rs = −9입니다. 근을 직접 구할 필요가 없습니다."
      },
      {
        "step": "Step 2: 식 변형",
        "desc": "(r − s)² = (r + s)² − 4rs"
      },
      {
        "step": "Step 3: 계산",
        "desc": "(−8)² − 4(−9) = <strong>100</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 82,
        "display": "82",
        "why": "r² + s²의 값입니다."
      },
      {
        "value": 64,
        "display": "64",
        "why": "4rs를 빼지 않았습니다."
      },
      {
        "value": 28,
        "display": "28",
        "why": "부호 오류입니다."
      },
      {
        "value": 96,
        "display": "96",
        "why": "계산 실수 값입니다."
      },
      {
        "value": 82,
        "display": "82",
        "why": "r² + s²의 값입니다."
      }
    ]
  },
  "S2-Q1": {
    "topic": "이차방정식의 해와 비교",
    "clue": "방정식에 해가 두 개 있으면 x는 둘 중 아무거나일 수 있습니다. 두 해 모두와 비교해야 합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 인수분해",
        "desc": "(x + 2)(x − 4) = 0 → x = −2 또는 x = 4"
      },
      {
        "step": "Step 2: 비교",
        "desc": "1와 두 해 −2, 4를 각각 비교합니다."
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
    "topic": "퍼센트 관계 비교",
    "clue": "증가 p%, 감소 q%는 (1 + p/100), (1 − q/100)을 곱합니다. p%와 q%를 단순 비교하면 함정입니다.",
    "stepByStep": [
      {
        "step": "Step 1: 연결",
        "desc": "x = 2y, y = 0.5z → x = 1z"
      },
      {
        "step": "Step 2: 비교",
        "desc": "계수 1과 1을 비교합니다."
      },
      {
        "step": "Step 3: 결론",
        "desc": "따라서 정답은 (C)입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다.",
      "B": "Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다.",
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
        "isCorrect": false,
        "text": "Quantity B is greater.",
        "analysis": "오답. Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "The two quantities are equal.",
        "analysis": "정답."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요."
      }
    ]
  },
  "S2-Q3": {
    "topic": "역수의 대소 (부호 주의)",
    "clue": "1/x − 1/y = (y − x)/(xy). x > y이면 분자는 음수이므로 부호는 xy가 결정합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 차이",
        "desc": "1/x − 1/y = (y − x)/(xy), 그리고 y − x &lt; 0"
      },
      {
        "step": "Step 2: xy의 부호",
        "desc": "xy > 0 → 차이 &lt; 0"
      },
      {
        "step": "Step 3: 확인",
        "desc": "x = 2, y = 1이면 Quantity A = 1/2, Quantity B = 1"
      },
      {
        "step": "Step 4: 결론",
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
  "S2-Q4": {
    "topic": "x + 1/x와 2 (산술-기하 평균)",
    "clue": "x + 1/x − 2 = (x − 1)²/x 입니다.",
    "stepByStep": [
      {
        "step": "Step 1: 차이 정리",
        "desc": "x + 1/x − 2 = (x² − 2x + 1)/x = (x − 1)²/x"
      },
      {
        "step": "Step 2: 부호",
        "desc": "x > 0이면 차이 ≥ 0이고, x = 1일 때만 0입니다. 따라서 같을 수도, 클 수도 있습니다."
      },
      {
        "step": "Step 3: 확인",
        "desc": "x = 2이면 Quantity A = 5/2, Quantity B = 2<br>x = 1이면 Quantity A = 2, Quantity B = 2"
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
  "S2-Q5": {
    "topic": "세 집합 벤다이어그램",
    "clue": "A + B + C를 더하면 정확히 둘인 사람은 2번, 셋인 사람은 3번 세어집니다. 적어도 하나 = (A + B + C) − (정확히 둘) − 2 × (셋 모두).",
    "stepByStep": [
      {
        "step": "Step 1: 합계",
        "desc": "27 + 23 + 37 = 87"
      },
      {
        "step": "Step 2: 중복 제거",
        "desc": "적어도 하나 = 87 − 20 − 2 × t = 77 − 20 = 57"
      },
      {
        "step": "Step 3: 답",
        "desc": "<strong>5</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 10,
        "display": "10",
        "why": "“정확히 셋”의 중복을 한 번만 빼거나(전부 세 번 세어짐) 2로 나누지 않은 값입니다."
      },
      {
        "value": 6,
        "display": "6",
        "why": "세 언어를 모두 배우는 학생의 중복을 처리하지 않은 값입니다."
      },
      {
        "value": 10,
        "display": "10",
        "why": "중복 처리 계수를 잘못 잡은 값입니다."
      },
      {
        "value": 7,
        "display": "7",
        "why": "계산 실수 값입니다."
      },
      {
        "value": 10,
        "display": "10",
        "why": "세 집합 공통 부분의 중복을 잘못 처리한 값입니다."
      }
    ]
  },
  "S2-Q6": {
    "topic": "둔각삼각형이 되는 정수 변",
    "clue": "가장 긴 변 c에 대해 a² + b² &lt; c²이면 둔각, > c²이면 예각. 어떤 변이 가장 긴지 경우를 나눕니다.",
    "stepByStep": [
      {
        "step": "Step 1: 삼각형 조건",
        "desc": "2 &lt; x &lt; 22 → x = 3, …, 21 (19개)"
      },
      {
        "step": "Step 2: x가 가장 긴 변일 때 (x > 12)",
        "desc": "x² > 10² + 12² = 244 → 6개: 16, 17, 18, 19, 20, 21"
      },
      {
        "step": "Step 3: 12이(가) 가장 긴 변일 때 (x ≤ 12)",
        "desc": "12² > 10² + x² → x² &lt; 44 → 3, 4, 5, 6"
      },
      {
        "step": "Step 4: 합계",
        "desc": "<strong>10</strong>개"
      }
    ],
    "whySelectedWrong": {
      "A": "한쪽 경우만 센 값입니다.",
      "B": "x가 가장 긴 변인 경우만 센 값입니다. b가 가장 긴 변이면서 둔각인 경우도 있습니다.",
      "C": "둔각이 아닌 경우의 개수입니다.",
      "E": "삼각형이 되는 모든 정수 x의 개수입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "4",
        "analysis": "오답. 한쪽 경우만 센 값입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "6",
        "analysis": "오답. x가 가장 긴 변인 경우만 센 값입니다. b가 가장 긴 변이면서 둔각인 경우도 있습니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "9",
        "analysis": "오답. 둔각이 아닌 경우의 개수입니다."
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "10",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "19",
        "analysis": "오답. 삼각형이 되는 모든 정수 x의 개수입니다."
      }
    ]
  },
  "S2-Q7": {
    "topic": "절댓값 부등식의 정수해",
    "clue": "|x − a| ≤ b는 a − b ≤ x ≤ a + b, |x − c| ≥ d는 c − d &lt; x &lt; c + d를 제외한다는 뜻입니다.",
    "stepByStep": [
      {
        "step": "Step 1: 첫 번째 조건",
        "desc": "−1 ≤ x ≤ 11 → 정수 13개"
      },
      {
        "step": "Step 2: 두 번째 조건",
        "desc": "3 &lt; x &lt; 7인 정수(4부터 6까지)를 제외"
      },
      {
        "step": "Step 3: 겹치는 부분만 제외",
        "desc": "첫 구간 안에서 실제로 제외되는 정수는 3개 → 13 − 3 = <strong>10</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "끝점 하나를 빠뜨린 값입니다.",
      "C": "정답과 가까운 값입니다. 계산 중 작은 실수(경계값·부호·반올림)를 하면 고르게 되는 선택지입니다.",
      "D": "|x − 5| = 2인 끝점 두 개를 제외한 값입니다(등호 포함이므로 포함해야 함).",
      "E": "두 번째 조건을 무시한 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "9",
        "analysis": "오답. 끝점 하나를 빠뜨린 값입니다."
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "10",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "11",
        "analysis": "오답. 정답과 가까운 값입니다. 계산 중 작은 실수(경계값·부호·반올림)를 하면 고르게 되는 선택지입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "12",
        "analysis": "오답. |x − 5| = 2인 끝점 두 개를 제외한 값입니다(등호 포함이므로 포함해야 함)."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "13",
        "analysis": "오답. 두 번째 조건을 무시한 값입니다."
      }
    ]
  },
  "S2-Q8": {
    "topic": "일률 (작업 시간)",
    "clue": "시간이 아니라 일률(1/시간)을 더하고 뺍니다.",
    "stepByStep": [
      {
        "step": "Step 1: B의 일률",
        "desc": "1/8 − 1/24 = 1/12 → B 단독은 12시간"
      },
      {
        "step": "Step 2: A가 한 일",
        "desc": "13시간 × 1/24 = 13/24 → 남은 일 11/24"
      },
      {
        "step": "Step 3: B의 작업 시간",
        "desc": "11/24 × 12 = <strong>11/2</strong>시간"
      }
    ],
    "commonTraps": [
      {
        "value": -1,
        "display": "−1",
        "why": "함께 걸리는 시간에서 A가 일한 시간을 단순히 뺀 값입니다. 일률(시간당 작업량)로 계산해야 합니다."
      },
      {
        "value": 12,
        "display": "12",
        "why": "B가 전체 작업을 혼자 하는 시간입니다. A가 이미 한 부분을 빼야 합니다."
      },
      {
        "value": -1,
        "display": "−1",
        "why": "B의 단독 시간에서 A의 작업 시간을 뺀 값으로, 두 기계의 속도 차이를 무시했습니다."
      },
      {
        "value": 6.5,
        "display": "13/2",
        "why": "A가 끝낸 부분을 B가 하는 시간으로 계산했습니다(남은 부분이 아님)."
      }
    ]
  },
  "S2-Q9": {
    "topic": "Data Interpretation: 비율 표 → 금액 환산",
    "clue": "비율 표는 각 해의 총액을 곱해 금액으로 바꾼 뒤 비교해야 합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 2022",
        "desc": "45,000 × 13% = 5,850"
      },
      {
        "step": "Step 2: 2023",
        "desc": "54,000 × 10% = 5,400"
      },
      {
        "step": "Step 3: 차이",
        "desc": "<strong>−450</strong>달러"
      }
    ],
    "commonTraps": [
      {
        "value": -1350,
        "display": "−1,350",
        "why": "비율 차이에 처음 해의 총액만 곱한 값입니다. 해마다 총액이 다릅니다."
      },
      {
        "value": -1620,
        "display": "−1,620",
        "why": "비율 차이에 나중 해의 총액만 곱한 값입니다."
      },
      {
        "value": 5400,
        "display": "5,400",
        "why": "2023년의 지출액 자체입니다."
      },
      {
        "value": 450,
        "display": "450",
        "why": "부호를 반대로 한 값입니다."
      }
    ]
  },
  "S2-Q10": {
    "topic": "Data Interpretation: 비율 표 → 금액 환산",
    "clue": "금액 비교: p₂·T₂ > p₁·T₁ ⇔ p₂/p₁ > T₁/T₂.",
    "stepByStep": [
      {
        "step": "Step 1: 기준",
        "desc": "T₁/T₂ = 45,000/54,000 ≈ 0.833"
      },
      {
        "step": "Step 2: 각 범주",
        "desc": "Housing: 7,650 → 1,620<br>Food: 3,150 → 6,480<br>Transportation: 11,700 → 16,740<br>Health care: 12,150 → 17,280<br>Entertainment: 5,850 → 5,400<br>Other: 4,500 → 6,480"
      },
      {
        "step": "Step 3: 개수",
        "desc": "<strong>4</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 0,
        "display": "0",
        "why": "금액 비교를 일부 잘못한 값입니다."
      },
      {
        "value": 1,
        "display": "1",
        "why": "금액 비교를 일부 잘못한 값입니다."
      },
      {
        "value": 2,
        "display": "2",
        "why": "금액 비교를 일부 잘못한 값입니다."
      },
      {
        "value": 3,
        "display": "3",
        "why": "금액 비교를 일부 잘못한 값입니다."
      },
      {
        "value": 5,
        "display": "5",
        "why": "금액 비교를 일부 잘못한 값입니다."
      },
      {
        "value": 6,
        "display": "6",
        "why": "금액 비교를 일부 잘못한 값입니다."
      }
    ]
  },
  "S2-Q11": {
    "topic": "Data Interpretation: 비율 표 → 금액 환산",
    "clue": "금액의 비 = (p₂/p₁) × (T₂/T₁). 이 값이 1.1 이상인지 확인합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 총액 비",
        "desc": "T₂/T₁ = 1.2000"
      },
      {
        "step": "Step 2: 판정",
        "desc": "각 범주의 금액 비율이 1.1 이상인지 확인합니다(선택지별 분석 참고)."
      },
      {
        "step": "Step 3: 정답 확정",
        "desc": "정답은 A, B, E, F입니다. 다중 선택 문항은 정답 보기를 모두, 정확히 골라야 점수를 받습니다(부분 점수 없음)."
      }
    ],
    "whySelectedWrong": {
      "C": "7,650 → 1,620 (−78.8% 변화)",
      "D": "5,850 → 5,400 (−7.7% 변화)"
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": true,
        "text": "Other",
        "analysis": "정답. 4,500 → 6,480 (44.0% 변화)"
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "Transportation",
        "analysis": "정답. 11,700 → 16,740 (43.1% 변화)"
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "Housing",
        "analysis": "오답. 7,650 → 1,620 (−78.8% 변화)"
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "Entertainment",
        "analysis": "오답. 5,850 → 5,400 (−7.7% 변화)"
      },
      {
        "label": "E",
        "isCorrect": true,
        "text": "Food",
        "analysis": "정답. 3,150 → 6,480 (105.7% 변화)"
      },
      {
        "label": "F",
        "isCorrect": true,
        "text": "Health care",
        "analysis": "정답. 12,150 → 17,280 (42.2% 변화)"
      }
    ]
  },
  "S2-Q12": {
    "topic": "같은 것이 있는 순열",
    "clue": "n! ÷ (각 중복 글자 개수의 팩토리얼 곱). 이웃 조건은 묶어서 하나로 봅니다.",
    "stepByStep": [
      {
        "step": "Step 1: 글자 수와 중복",
        "desc": "6글자, 중복: S×4"
      },
      {
        "step": "Step 2: 공식",
        "desc": "6! / (4!)"
      },
      {
        "step": "Step 3: 답",
        "desc": "<strong>30</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 720,
        "display": "720",
        "why": "같은 글자를 구별해서 센 값입니다."
      },
      {
        "value": 15,
        "display": "15",
        "why": "중복 처리를 한 번 더 한 값입니다."
      },
      {
        "value": 60,
        "display": "60",
        "why": "중복 하나를 빠뜨린 값입니다."
      },
      {
        "value": 60,
        "display": "60",
        "why": "같은 글자 묶음 내부 순서를 센 값입니다."
      },
      {
        "value": 720,
        "display": "720",
        "why": "같은 글자를 구별해서 센 값입니다."
      }
    ]
  },
  "S2-Q13": {
    "topic": "좌표평면: 원 내부의 점",
    "clue": "거리를 직접 구하지 말고 거리의 제곱을 반지름의 제곱과 비교합니다. 원 위의 점은 내부가 아닙니다.",
    "stepByStep": [
      {
        "step": "Step 1: 반지름의 제곱",
        "desc": "(8 − 3)² + (3 − −2)² = 50"
      },
      {
        "step": "Step 2: 판정 기준",
        "desc": "(x − 3)² + (y − −2)² &lt; 50이면 내부"
      },
      {
        "step": "Step 3: 정답 확정",
        "desc": "정답은 D, E입니다. 다중 선택 문항은 정답 보기를 모두, 정확히 골라야 점수를 받습니다(부분 점수 없음)."
      }
    ],
    "whySelectedWrong": {
      "A": "중심까지 거리의 제곱 = (4 − 3)² + (−9 − −2)² = 50 = 50 → 원 위의 점이므로 내부가 아닙니다.",
      "B": "중심까지 거리의 제곱 = (−4 − 3)² + (0 − −2)² = 53 > 50 → 외부",
      "C": "중심까지 거리의 제곱 = (7 − 3)² + (−8 − −2)² = 52 > 50 → 외부",
      "F": "중심까지 거리의 제곱 = (−2 − 3)² + (3 − −2)² = 50 = 50 → 원 위의 점이므로 내부가 아닙니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "(4, −9)",
        "analysis": "오답. 중심까지 거리의 제곱 = (4 − 3)² + (−9 − −2)² = 50 = 50 → 원 위의 점이므로 내부가 아닙니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "(−4, 0)",
        "analysis": "오답. 중심까지 거리의 제곱 = (−4 − 3)² + (0 − −2)² = 53 > 50 → 외부"
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "(7, −8)",
        "analysis": "오답. 중심까지 거리의 제곱 = (7 − 3)² + (−8 − −2)² = 52 > 50 → 외부"
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "(3, 5)",
        "analysis": "정답. 중심까지 거리의 제곱 = (3 − 3)² + (5 − −2)² = 49 &lt; 50 → 내부"
      },
      {
        "label": "E",
        "isCorrect": true,
        "text": "(3, −9)",
        "analysis": "정답. 중심까지 거리의 제곱 = (3 − 3)² + (−9 − −2)² = 49 &lt; 50 → 내부"
      },
      {
        "label": "F",
        "isCorrect": false,
        "text": "(−2, 3)",
        "analysis": "오답. 중심까지 거리의 제곱 = (−2 − 3)² + (3 − −2)² = 50 = 50 → 원 위의 점이므로 내부가 아닙니다."
      }
    ]
  },
  "S2-Q14": {
    "topic": "등차수열 합 + 배수 제외",
    "clue": "합 = (k의 배수 합) − (j의 배수 합). 각 합은 (항수) × (첫항 + 끝항)/2 입니다.",
    "stepByStep": [
      {
        "step": "Step 1: 3의 배수 합",
        "desc": "첫 항 21, 끝 항 399, 항수 (399 − 21)/3 + 1 = 127 → 합 = 127 × (21 + 399)/2 = 26,670"
      },
      {
        "step": "Step 2: 9의 배수 합 (모두 3의 배수)",
        "desc": "첫 항 27, 끝 항 396, 항수 42 → 합 = 8,883"
      },
      {
        "step": "Step 3: 차이",
        "desc": "26,670 − 8,883 = <strong>17,787</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "9의 배수를 두 번 뺀 값입니다.",
      "B": "끝 항을 하나 빼먹은 값입니다.",
      "D": "9의 배수 개수를 하나 적게 센 값입니다.",
      "E": "9의 배수를 빼지 않은 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "8,904",
        "analysis": "오답. 9의 배수를 두 번 뺀 값입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "17,784",
        "analysis": "오답. 끝 항을 하나 빼먹은 값입니다."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "17,787",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "17,796",
        "analysis": "오답. 9의 배수 개수를 하나 적게 센 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "26,670",
        "analysis": "오답. 9의 배수를 빼지 않은 값입니다."
      }
    ]
  },
  "S2-Q15": {
    "topic": "평균·중앙값 조건에서 최댓값",
    "clue": "하나를 최대로 하려면 나머지를 조건이 허락하는 한 최소로 만듭니다.",
    "stepByStep": [
      {
        "step": "Step 1: 합",
        "desc": "7 × 12 = 84"
      },
      {
        "step": "Step 2: 나머지 최소화",
        "desc": "중앙값 아래 3개: 1, …, 3 (합 6) / 중앙값 10 / 그 위 2개: 11, …, 12 (합 23)"
      },
      {
        "step": "Step 3: 최댓값",
        "desc": "84 − 6 − 10 − 23 = <strong>45</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "중앙값보다 큰 수들의 최솟값을 잘못 잡은 값입니다.",
      "C": "경계 계산 실수 값입니다.",
      "D": "“서로 다른” 조건을 무시하고 작은 수를 모두 1, 큰 수를 모두 중앙값으로 둔 값입니다.",
      "E": "나머지 수를 모두 0으로 본 값입니다(양의 정수 조건 무시)."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "43",
        "analysis": "오답. 중앙값보다 큰 수들의 최솟값을 잘못 잡은 값입니다."
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "45",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "46",
        "analysis": "오답. 경계 계산 실수 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "51",
        "analysis": "오답. “서로 다른” 조건을 무시하고 작은 수를 모두 1, 큰 수를 모두 중앙값으로 둔 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "74",
        "analysis": "오답. 나머지 수를 모두 0으로 본 값입니다(양의 정수 조건 무시)."
      }
    ]
  }
};
