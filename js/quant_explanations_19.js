window.QEXPLANATIONS_19 = {
  "S1-Q1": {
    "topic": "팩토리얼의 소인수 지수 (Legendre)",
    "clue": "n!에 소수 p가 몇 번 들어 있는지는 ⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + … 로 셉니다(Legendre 공식).",
    "stepByStep": [
      {
        "step": "Step 1: 43!에 들어 있는 7의 개수",
        "desc": "⌊43/7⌋ = 6 = <strong>6</strong>"
      },
      {
        "step": "Step 2: 결론",
        "desc": "The greatest integer <i>k</i> such that 7<sup><i>k</i></sup> is a factor of 43! = 6이고 비교 대상은 7이므로 정답은 (A)입니다."
      }
    ],
    "whySelectedWrong": {
      "B": "Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 7, Quantity B = 6) 참고로 7은(는) 거듭제곱 항을 하나 더 센 값입니다.",
      "C": "두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 7, Quantity B = 6) 참고로 7은(는) 거듭제곱 항을 하나 더 센 값입니다.",
      "D": "주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 7, Quantity B = 6) 참고로 7은(는) 거듭제곱 항을 하나 더 센 값입니다."
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
        "analysis": "오답. Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 7, Quantity B = 6) 참고로 7은(는) 거듭제곱 항을 하나 더 센 값입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "The two quantities are equal.",
        "analysis": "오답. 두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 7, Quantity B = 6) 참고로 7은(는) 거듭제곱 항을 하나 더 센 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 7, Quantity B = 6) 참고로 7은(는) 거듭제곱 항을 하나 더 센 값입니다."
      }
    ]
  },
  "S1-Q2": {
    "topic": "삼각형 세 변의 조건",
    "clue": "삼각형의 한 변은 나머지 두 변의 차보다 크고 합보다 작습니다(등호 불가).",
    "stepByStep": [
      {
        "step": "Step 1: 삼각형 부등식",
        "desc": "12 − 6 &lt; x &lt; 6 + 12 → 6 &lt; x &lt; 18"
      },
      {
        "step": "Step 2: 비교",
        "desc": "12는 (6, 18) 안에 있으므로 x는 12보다 클 수도 작을 수도 있습니다(예: x = 6.5, x = 17.5)."
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
  "S1-Q3": {
    "topic": "점화식 수열 역추적",
    "clue": "a₁ = x, a₂ = y로 두고 각 항을 x, y의 일차식으로 표현하면 연립방정식이 됩니다.",
    "stepByStep": [
      {
        "step": "Step 1: 일반항을 x, y로 표현",
        "desc": "a₁ = x, a₂ = y, a₃ = x + y, a₄ = x + 2y, a₅ = 2x + 3y, a₆ = 3x + 5y, a₇ = 5x + 8y, a₈ = 8x + 13y"
      },
      {
        "step": "Step 2: 연립방정식",
        "desc": "2x + 3y = 4, 5x + 8y = 10"
      },
      {
        "step": "Step 3: 풀이",
        "desc": "x = 2, y = 0 → <i>a</i><sub>1</sub> = <strong>2</strong>"
      },
      {
        "step": "Step 4: 결론",
        "desc": "<i>a</i><sub>1</sub> = 2이고 비교 대상은 3이므로 정답은 (B)입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 2, Quantity B = 3) 참고로 3은(는) 계산 실수 값입니다.",
      "C": "두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 2, Quantity B = 3) 참고로 3은(는) 계산 실수 값입니다.",
      "D": "주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 2, Quantity B = 3) 참고로 3은(는) 계산 실수 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Quantity A is greater.",
        "analysis": "오답. Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 2, Quantity B = 3) 참고로 3은(는) 계산 실수 값입니다."
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
        "analysis": "오답. 두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 2, Quantity B = 3) 참고로 3은(는) 계산 실수 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 2, Quantity B = 3) 참고로 3은(는) 계산 실수 값입니다."
      }
    ]
  },
  "S1-Q4": {
    "topic": "표준편차 비교 (변환·퍼짐)",
    "clue": "표준편차는 평균으로부터의 퍼짐입니다. 평행이동은 영향이 없고, k배 하면 |k|배가 됩니다.",
    "stepByStep": [
      {
        "step": "Step 1: 정렬해서 구조 보기",
        "desc": "X: 50, 51, 55, 59, 60 / Y: 27, 28, 32, 36, 37"
      },
      {
        "step": "Step 2: 핵심 비교",
        "desc": "List Y의 각 값은 87 − (X의 값)입니다. 부호를 바꾸고 이동해도 평균으로부터의 거리는 그대로이므로 표준편차는 같습니다."
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
  "S1-Q5": {
    "topic": "정수 범위에서 최댓값·최솟값",
    "clue": "가능한 정수는 끝값을 제외한 범위입니다. 음수를 제곱하면 커질 수 있으므로 양 끝 후보를 모두 확인합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 가능한 값",
        "desc": "x ∈ {1, …, 3}, y ∈ {−6, …, −4}"
      },
      {
        "step": "Step 2: 극값 후보 점검",
        "desc": "식 <i>x</i> − <i>y</i><sup>2</sup>에서 각 항을 줄이는 방향을 따지면 후보는 각 범위의 양 끝 정수입니다(제곱 항은 절댓값이 큰 쪽)."
      },
      {
        "step": "Step 3: 결론",
        "desc": "x = 1, y = −6일 때 최솟값 <strong>−35</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": -49,
        "display": "−49",
        "why": "부등호에 등호가 없는데 끝값을 대입한 값입니다."
      },
      {
        "value": -34,
        "display": "−34",
        "why": "두 번째로 작은 값입니다. 음수의 제곱/세제곱 처리를 다시 확인하세요."
      },
      {
        "value": -13,
        "display": "−13",
        "why": "두 변수 모두 가장 큰 값을 대입한 값입니다(항상 극값이 되지는 않음)."
      },
      {
        "value": -33,
        "display": "−33",
        "why": "x 최대, y 최소를 대입한 값입니다."
      },
      {
        "value": -15,
        "display": "−15",
        "why": "x 최소, y 최대를 대입한 값입니다."
      },
      {
        "value": -49,
        "display": "−49",
        "why": "부등호의 끝값(포함되지 않음)을 대입한 값입니다."
      }
    ]
  },
  "S1-Q6": {
    "topic": "좌표평면: 원 내부의 점",
    "clue": "거리를 직접 구하지 말고 거리의 제곱을 반지름의 제곱과 비교합니다. 원 위의 점은 내부가 아닙니다.",
    "stepByStep": [
      {
        "step": "Step 1: 반지름의 제곱",
        "desc": "(5 − 3)² + (4 − 4)² = 4"
      },
      {
        "step": "Step 2: 판정 기준",
        "desc": "(x − 3)² + (y − 4)² &lt; 4이면 내부"
      },
      {
        "step": "Step 3: 정답 확정",
        "desc": "정답은 B, D입니다. 다중 선택 문항은 정답 보기를 모두, 정확히 골라야 점수를 받습니다(부분 점수 없음)."
      }
    ],
    "whySelectedWrong": {
      "A": "중심까지 거리의 제곱 = (6 − 3)² + (3 − 4)² = 10 > 4 → 외부",
      "C": "중심까지 거리의 제곱 = (5 − 3)² + (5 − 4)² = 5 > 4 → 외부",
      "E": "중심까지 거리의 제곱 = (2 − 3)² + (2 − 4)² = 5 > 4 → 외부",
      "F": "중심까지 거리의 제곱 = (1 − 3)² + (3 − 4)² = 5 > 4 → 외부"
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "(6, 3)",
        "analysis": "오답. 중심까지 거리의 제곱 = (6 − 3)² + (3 − 4)² = 10 > 4 → 외부"
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "(2, 5)",
        "analysis": "정답. 중심까지 거리의 제곱 = (2 − 3)² + (5 − 4)² = 2 &lt; 4 → 내부"
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "(5, 5)",
        "analysis": "오답. 중심까지 거리의 제곱 = (5 − 3)² + (5 − 4)² = 5 > 4 → 외부"
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "(3, 5)",
        "analysis": "정답. 중심까지 거리의 제곱 = (3 − 3)² + (5 − 4)² = 1 &lt; 4 → 내부"
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "(2, 2)",
        "analysis": "오답. 중심까지 거리의 제곱 = (2 − 3)² + (2 − 4)² = 5 > 4 → 외부"
      },
      {
        "label": "F",
        "isCorrect": false,
        "text": "(1, 3)",
        "analysis": "오답. 중심까지 거리의 제곱 = (1 − 3)² + (3 − 4)² = 5 > 4 → 외부"
      }
    ]
  },
  "S1-Q7": {
    "topic": "비율 변화로 원래 개수 구하기",
    "clue": "변하지 않는 양(파란 구슬)을 기준으로 식을 세웁니다.",
    "stepByStep": [
      {
        "step": "Step 1: 미지수 설정",
        "desc": "빨강 = 4m, 파랑 = 5m"
      },
      {
        "step": "Step 2: 비 조건",
        "desc": "(4m + 15) : 5m = 7 : 5 → 5(4m + 15) = 7·5m → m = 5"
      },
      {
        "step": "Step 3: 답",
        "desc": "원래 개수 = 9 × 5 = <strong>45</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 60,
        "display": "60",
        "why": "빨간 구슬을 추가한 뒤의 개수입니다."
      },
      {
        "value": 25,
        "display": "25",
        "why": "파란 구슬의 개수입니다."
      },
      {
        "value": 20,
        "display": "20",
        "why": "원래 빨간 구슬의 개수입니다."
      },
      {
        "value": 54,
        "display": "54",
        "why": "배수를 하나 크게 잡은 값입니다."
      },
      {
        "value": 60,
        "display": "60",
        "why": "추가 후의 전체 개수입니다."
      }
    ]
  },
  "S1-Q8": {
    "topic": "지수방정식 (공통인수 묶기)",
    "clue": "지수가 다른 항의 덧셈·뺄셈은 가장 작은 거듭제곱으로 묶어 정리합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 공통인수로 묶기",
        "desc": "3<sup>x−1</sup>(3<sup>2</sup> − 1) = 3<sup>x−1</sup> × 8"
      },
      {
        "step": "Step 2: 나누기",
        "desc": "3<sup>x−1</sup> = 24 ÷ 8 = 3 = 3<sup>1</sup>"
      },
      {
        "step": "Step 3: 지수 비교",
        "desc": "x − 1 = 1 → x = <strong>2</strong>"
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
        "text": "0",
        "analysis": "오답. 정답과 가까운 값입니다. 계산 중 작은 실수(경계값·부호·반올림)를 하면 고르게 되는 선택지입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "1",
        "analysis": "오답. 공통인수 b^(x−1)의 지수 x − 1을 x로 착각한 값입니다."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "2",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "3",
        "analysis": "오답. 지수 계산에서 1을 더한 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "4",
        "analysis": "오답. 계산 실수 값입니다."
      }
    ]
  },
  "S1-Q9": {
    "topic": "직각삼각형의 높이 (닮음, 기하평균)",
    "clue": "직각삼각형에서 빗변에 내린 높이는 세 개의 닮은 삼각형을 만듭니다: CD² = AD·DB, AC² = AD·AB, BC² = DB·AB.",
    "stepByStep": [
      {
        "step": "Step 1: 닮음",
        "desc": "△ACD ∼ △CBD (각각 직각과 공통 예각) → AD/CD = CD/DB"
      },
      {
        "step": "Step 2: 기하평균",
        "desc": "CD² = AD·DB = 16·9 = 144"
      },
      {
        "step": "Step 3: 답",
        "desc": "CD = <strong>12</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 12.5,
        "display": "12.5",
        "why": "AD와 DB의 산술평균입니다. 높이는 기하평균입니다."
      },
      {
        "value": 144,
        "display": "144",
        "why": "CD²의 값입니다."
      },
      {
        "value": 7,
        "display": "7",
        "why": "두 선분의 차입니다."
      },
      {
        "value": 13,
        "display": "13",
        "why": "계산 실수 값입니다."
      },
      {
        "value": 12.5,
        "display": "12.5",
        "why": "AD와 DB의 산술평균입니다. 높이는 기하평균입니다."
      }
    ]
  },
  "S1-Q10": {
    "topic": "비복원 추출 확률",
    "clue": "비복원 추출은 조합(C)으로 분자·분모를 모두 셉니다. “적어도”는 여사건이 빠릅니다.",
    "stepByStep": [
      {
        "step": "Step 1: 전체",
        "desc": "C(5, 2) = 10"
      },
      {
        "step": "Step 2: 같은 색",
        "desc": "C(2,2) + C(2,2) + C(1,2) = 2"
      },
      {
        "step": "Step 3: 확률",
        "desc": "<strong>1/5</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "빨간색 두 개인 경우만 센 값입니다.",
      "C": "복원 추출로 계산한 확률입니다.",
      "D": "색의 수를 전체 개수로 나눈 잘못된 값입니다.",
      "E": "서로 다른 색일 확률입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "1/10",
        "analysis": "오답. 빨간색 두 개인 경우만 센 값입니다."
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "1/5",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "9/25",
        "analysis": "오답. 복원 추출로 계산한 확률입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "3/5",
        "analysis": "오답. 색의 수를 전체 개수로 나눈 잘못된 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "4/5",
        "analysis": "오답. 서로 다른 색일 확률입니다."
      }
    ]
  },
  "S1-Q11": {
    "topic": "자릿수 조건 세기",
    "clue": "제약이 가장 강한 자리부터 경우의 수를 정하고, “적어도 하나”는 여사건으로 계산합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 변수 설정",
        "desc": "백의 자리 a ≥ 1, 십 b, 일 c ≥ 0, a + b + c = 5"
      },
      {
        "step": "Step 2: 치환",
        "desc": "a' = a − 1 ≥ 0 → a' + b + c = 4"
      },
      {
        "step": "Step 3: 중복조합",
        "desc": "C(4 + 2, 2) = <strong>15</strong> (모든 값이 9 이하이므로 추가 제외 없음)"
      }
    ],
    "whySelectedWrong": {
      "A": "경계를 잘못 처리한 값입니다.",
      "B": "정답과 가까운 값입니다. 계산 중 작은 실수(경계값·부호·반올림)를 하면 고르게 되는 선택지입니다.",
      "D": "하나를 더 센 값입니다.",
      "E": "백의 자리가 0인 경우까지 포함한 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "10",
        "analysis": "오답. 경계를 잘못 처리한 값입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "14",
        "analysis": "오답. 정답과 가까운 값입니다. 계산 중 작은 실수(경계값·부호·반올림)를 하면 고르게 되는 선택지입니다."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "15",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "16",
        "analysis": "오답. 하나를 더 센 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "21",
        "analysis": "오답. 백의 자리가 0인 경우까지 포함한 값입니다."
      }
    ]
  },
  "S1-Q12": {
    "topic": "원주각·중심각 (그림)",
    "clue": "OA = OB(반지름)이므로 △OAB는 이등변삼각형입니다. 원주각 = 같은 호에 대한 중심각의 1/2.",
    "stepByStep": [
      {
        "step": "Step 1: 이등변삼각형",
        "desc": "OA = OB이므로 ∠OBA = ∠OAB = 42° → ∠AOB = 180° − 2·42° = 96°"
      },
      {
        "step": "Step 2: 원주각",
        "desc": "C는 작은 호 위에 있으므로 ∠ACB는 큰 호 AB(중심각 360° − 96° = 264°)에 대한 원주각 = 264°/2 = 132°"
      },
      {
        "step": "Step 3: 답",
        "desc": "x = <strong>132</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "∠OAB와 같다고 본 값입니다.",
      "B": "C가 작은 호(AB 아래쪽) 위에 있으므로 원주각은 큰 호에 대한 각입니다. 반대쪽 원주각을 구한 값입니다.",
      "C": "OA = OB를 이용하지 않고 각을 두 배로 한 값입니다.",
      "D": "중심각 ∠AOB입니다. 원주각은 같은 호에 대한 중심각의 절반입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "42",
        "analysis": "오답. ∠OAB와 같다고 본 값입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "48",
        "analysis": "오답. C가 작은 호(AB 아래쪽) 위에 있으므로 원주각은 큰 호에 대한 각입니다. 반대쪽 원주각을 구한 값입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "84",
        "analysis": "오답. OA = OB를 이용하지 않고 각을 두 배로 한 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "96",
        "analysis": "오답. 중심각 ∠AOB입니다. 원주각은 같은 호에 대한 중심각의 절반입니다."
      },
      {
        "label": "E",
        "isCorrect": true,
        "text": "132",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      }
    ]
  },
  "S2-Q1": {
    "topic": "연속 정수의 곱과 거듭제곱",
    "clue": "a = b − 1, c = b + 1로 놓고 b 하나로 표현합니다.",
    "stepByStep": [
      {
        "step": "Step 1: b로 표현",
        "desc": "ac = (b − 1)(b + 1) = b² − 1"
      },
      {
        "step": "Step 2: 비교",
        "desc": "항상 1 작습니다."
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
  "S2-Q2": {
    "topic": "변과 각의 대소 (축척 아님)",
    "clue": "c² 와 a² + b²를 비교합니다: 크면 둔각, 같으면 직각, 작으면 예각(c는 각 C의 대변).",
    "stepByStep": [
      {
        "step": "Step 1: 계산",
        "desc": "AB² = 25, BC² + AC² = 9 + 16 = 25"
      },
      {
        "step": "Step 2: 판정",
        "desc": "같으므로 ∠C = 90°"
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
    "topic": "대칭형 연립방정식",
    "clue": "계수가 서로 바뀐 연립방정식은 두 식을 더하고 빼면 x + y와 x − y가 바로 나옵니다.",
    "stepByStep": [
      {
        "step": "Step 1: 두 식을 더하기",
        "desc": "9(x + y) = −72 → x + y = −8"
      },
      {
        "step": "Step 2: 두 식을 빼기",
        "desc": "−1(x − y) = −4 → x − y = 4"
      },
      {
        "step": "Step 3: 인수분해 이용",
        "desc": "x² − y² = (x + y)(x − y) = −8 × 4 = <strong>−32</strong>"
      },
      {
        "step": "Step 4: 결론",
        "desc": "<i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = −32이고 비교 대상은 32이므로 정답은 (B)입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = −32, Quantity B = 32) 참고로 32은(는) 두 식을 뺄 때 부호를 반대로 처리한 값입니다.",
      "C": "두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = −32, Quantity B = 32) 참고로 32은(는) 두 식을 뺄 때 부호를 반대로 처리한 값입니다.",
      "D": "주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = −32, Quantity B = 32) 참고로 32은(는) 두 식을 뺄 때 부호를 반대로 처리한 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Quantity A is greater.",
        "analysis": "오답. Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = −32, Quantity B = 32) 참고로 32은(는) 두 식을 뺄 때 부호를 반대로 처리한 값입니다."
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
        "analysis": "오답. 두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = −32, Quantity B = 32) 참고로 32은(는) 두 식을 뺄 때 부호를 반대로 처리한 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = −32, Quantity B = 32) 참고로 32은(는) 두 식을 뺄 때 부호를 반대로 처리한 값입니다."
      }
    ]
  },
  "S2-Q4": {
    "topic": "연속 백분율 변화",
    "clue": "연속 백분율 변화는 배수(1 ± r)를 곱해 누적합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 배수로 변환",
        "desc": "1.5 × 0.9 × 1.25"
      },
      {
        "step": "Step 2: 계산",
        "desc": "= 1.6875"
      },
      {
        "step": "Step 3: 백분율로",
        "desc": "<strong>168.75%</strong>"
      },
      {
        "step": "Step 4: 결론",
        "desc": "The price at the end of March, as a percent of the price at the beginning of January = 168.75이고 비교 대상은 165이므로 정답은 (A)입니다."
      }
    ],
    "whySelectedWrong": {
      "B": "Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 168.75, Quantity B = 165) 참고로 165은(는) 변화율을 단순 합산한 값입니다.",
      "C": "두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 168.75, Quantity B = 165) 참고로 165은(는) 변화율을 단순 합산한 값입니다.",
      "D": "주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 168.75, Quantity B = 165) 참고로 165은(는) 변화율을 단순 합산한 값입니다."
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
        "analysis": "오답. Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 168.75, Quantity B = 165) 참고로 165은(는) 변화율을 단순 합산한 값입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "The two quantities are equal.",
        "analysis": "오답. 두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 168.75, Quantity B = 165) 참고로 165은(는) 변화율을 단순 합산한 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 168.75, Quantity B = 165) 참고로 165은(는) 변화율을 단순 합산한 값입니다."
      }
    ]
  },
  "S2-Q5": {
    "topic": "격자 경로의 수",
    "clue": "오른쪽 m번, 위 n번 이동하는 경로 수 = C(m + n, m). 경유점은 두 구간의 곱입니다.",
    "stepByStep": [
      {
        "step": "Step 1: 전체",
        "desc": "C(8, 4) = 70"
      },
      {
        "step": "Step 2: 경유",
        "desc": "(0,0)→(1,2): C(3, 1) = 3, (1,2)→(4,4): C(5, 3) = 10 → 곱 30"
      },
      {
        "step": "Step 3: 답",
        "desc": "<strong>40</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 30,
        "display": "30",
        "why": "통과하는 경로의 수입니다."
      },
      {
        "value": 70,
        "display": "70",
        "why": "조건 없는 전체 경로 수입니다."
      },
      {
        "value": 43,
        "display": "43",
        "why": "여사건과 혼동한 값입니다."
      },
      {
        "value": 28,
        "display": "28",
        "why": "이동 횟수에서 2개를 고른 잘못된 값입니다."
      },
      {
        "value": 70,
        "display": "70",
        "why": "전체 경로 수입니다."
      }
    ]
  },
  "S2-Q6": {
    "topic": "평균 속력 (조화평균)",
    "clue": "평균 속력 = 전체 거리 ÷ 전체 시간. 거리가 같으면 평균 속력은 산술평균이 아니라 조화평균 2uv/(u + v)입니다.",
    "stepByStep": [
      {
        "step": "Step 1: 거리 설정",
        "desc": "편도 거리를 d라 하면 전체 시간 = 2d/60"
      },
      {
        "step": "Step 2: 식 세우기",
        "desc": "d/40 + d/v = 2d/60 → 1/v = 2/60 − 1/40 = 1/120"
      },
      {
        "step": "Step 3: 답",
        "desc": "v = <strong>120</strong> mph"
      }
    ],
    "whySelectedWrong": {
      "A": "두 값의 평균입니다.",
      "B": "두 속력의 산술평균이 전체 평균 속력이라고 착각한 값입니다. 같은 거리를 이동했으므로 조화평균을 써야 합니다.",
      "C": "차이를 두 배로 늘린 어림값입니다.",
      "E": "계산 실수 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "50",
        "analysis": "오답. 두 값의 평균입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "80",
        "analysis": "오답. 두 속력의 산술평균이 전체 평균 속력이라고 착각한 값입니다. 같은 거리를 이동했으므로 조화평균을 써야 합니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "100",
        "analysis": "오답. 차이를 두 배로 늘린 어림값입니다."
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "120",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "130",
        "analysis": "오답. 계산 실수 값입니다."
      }
    ]
  },
  "S2-Q7": {
    "topic": "미지수가 포함된 자료의 평균·중앙값",
    "clue": "x의 위치에 따라 중앙값(가운데 두 수의 평균)이 바뀝니다. 각 보기마다 평균과 중앙값을 직접 계산하는 것이 가장 확실합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 평균",
        "desc": "(46 + x)/6"
      },
      {
        "step": "Step 2: 중앙값",
        "desc": "x를 넣고 정렬한 뒤 3, 4번째 수의 평균 (x가 8 이하/사이/13 이상인지에 따라 달라짐)"
      },
      {
        "step": "Step 3: 정답 확정",
        "desc": "정답은 B, C, D입니다. 다중 선택 문항은 정답 보기를 모두, 정확히 골라야 점수를 받습니다(부분 점수 없음)."
      }
    ],
    "whySelectedWrong": {
      "A": "x = 9이면 평균 = 55/6, 중앙값 = 17/2 → 조건 불만족",
      "E": "x = 32이면 평균 = 13, 중앙값 = 21/2 → 조건 불만족",
      "F": "x = 39이면 평균 = 85/6, 중앙값 = 21/2 → 조건 불만족"
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "9",
        "analysis": "오답. x = 9이면 평균 = 55/6, 중앙값 = 17/2 → 조건 불만족"
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "12",
        "analysis": "정답. x = 12이면 평균 = 29/3, 중앙값 = 10 → 조건 만족"
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "14",
        "analysis": "정답. x = 14이면 평균 = 10, 중앙값 = 21/2 → 조건 만족"
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "15",
        "analysis": "정답. x = 15이면 평균 = 61/6, 중앙값 = 21/2 → 조건 만족"
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "32",
        "analysis": "오답. x = 32이면 평균 = 13, 중앙값 = 21/2 → 조건 불만족"
      },
      {
        "label": "F",
        "isCorrect": false,
        "text": "39",
        "analysis": "오답. x = 39이면 평균 = 85/6, 중앙값 = 21/2 → 조건 불만족"
      }
    ]
  },
  "S2-Q8": {
    "topic": "좌표평면: 대각선 꼭짓점으로 정사각형 넓이",
    "clue": "정사각형 넓이 = (대각선)²/2.",
    "stepByStep": [
      {
        "step": "Step 1: 대각선의 제곱",
        "desc": "(1 − (−2))² + (8 − (0))² = 73"
      },
      {
        "step": "Step 2: 넓이",
        "desc": "73/2 = <strong>73/2</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "d²/4로 계산한 값입니다.",
      "B": "두 점을 꼭짓점으로 하는 축에 평행한 직사각형의 넓이입니다.",
      "D": "계산 실수 값입니다.",
      "E": "대각선 길이의 제곱을 넓이로 쓴 값입니다(d²/2가 넓이)."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "73/4",
        "analysis": "오답. d²/4로 계산한 값입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "24",
        "analysis": "오답. 두 점을 꼭짓점으로 하는 축에 평행한 직사각형의 넓이입니다."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "73/2",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "75/2",
        "analysis": "오답. 계산 실수 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "73",
        "analysis": "오답. 대각선 길이의 제곱을 넓이로 쓴 값입니다(d²/2가 넓이)."
      }
    ]
  },
  "S2-Q9": {
    "topic": "Data Interpretation: 표 해석 (증가율·비중)",
    "clue": "퍼센트 증가 = (나중 − 처음)/처음. 절대 증가량이 아니라 비율을 비교합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 각 증가율",
        "desc": "Apparel: (514 − 440)/440 ≈ 16.8%<br>Electronics: (253 − 230)/230 ≈ 10.0%<br>Furniture: (436 − 460)/460 ≈ −5.2%<br>Groceries: (554 − 480)/480 ≈ 15.4%<br>Toys: (191 − 120)/120 ≈ 59.2%"
      },
      {
        "step": "Step 2: 최댓값",
        "desc": "<strong>Toys</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "Furniture의 증가율은 −5.2%로 Toys(59.2%)보다 작습니다.",
      "C": "Apparel의 증가율은 16.8%로 Toys(59.2%)보다 작습니다. 절대 증가량이 더 크다고 증가율이 큰 것은 아닙니다.",
      "D": "Groceries의 증가율은 15.4%로 Toys(59.2%)보다 작습니다. 절대 증가량이 더 크다고 증가율이 큰 것은 아닙니다.",
      "E": "Electronics의 증가율은 10.0%로 Toys(59.2%)보다 작습니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Furniture",
        "analysis": "오답. Furniture의 증가율은 −5.2%로 Toys(59.2%)보다 작습니다."
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "Toys",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "Apparel",
        "analysis": "오답. Apparel의 증가율은 16.8%로 Toys(59.2%)보다 작습니다. 절대 증가량이 더 크다고 증가율이 큰 것은 아닙니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "Groceries",
        "analysis": "오답. Groceries의 증가율은 15.4%로 Toys(59.2%)보다 작습니다. 절대 증가량이 더 크다고 증가율이 큰 것은 아닙니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "Electronics",
        "analysis": "오답. Electronics의 증가율은 10.0%로 Toys(59.2%)보다 작습니다."
      }
    ]
  },
  "S2-Q10": {
    "topic": "Data Interpretation: 표 해석 (증가율·비중)",
    "clue": "부분 ÷ 전체 × 100. 해당 연도의 Total 행을 사용합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 부분 합",
        "desc": "514 + 554 = 1068"
      },
      {
        "step": "Step 2: 비율",
        "desc": "1068 ÷ 1,948 × 100 ≈ 54.83%"
      },
      {
        "step": "Step 3: 반올림",
        "desc": "<strong>55%</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 53,
        "display": "53",
        "why": "2020년 자료로 계산한 값입니다."
      },
      {
        "value": 54,
        "display": "54",
        "why": "반올림을 잘못한 값입니다."
      },
      {
        "value": 26,
        "display": "26",
        "why": "Apparel만 계산한 값입니다."
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
        "desc": "1,730 → 1,948: 12.6%"
      },
      {
        "step": "Step 2: 판정",
        "desc": "각 범주의 증가율이 전체 증가율보다 큰지 비교합니다(위의 개별 계산 참고)."
      },
      {
        "step": "Step 3: 정답 확정",
        "desc": "정답은 A, D, E입니다. 다중 선택 문항은 정답 보기를 모두, 정확히 골라야 점수를 받습니다(부분 점수 없음)."
      }
    ],
    "whySelectedWrong": {
      "B": "2020: 230/1,730 ≈ 13.3%, 2022: 253/1,948 ≈ 13.0% → 증가하지 않음",
      "C": "2020: 460/1,730 ≈ 26.6%, 2022: 436/1,948 ≈ 22.4% → 증가하지 않음"
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": true,
        "text": "Apparel",
        "analysis": "정답. 2020: 440/1,730 ≈ 25.4%, 2022: 514/1,948 ≈ 26.4% → 증가"
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "Electronics",
        "analysis": "오답. 2020: 230/1,730 ≈ 13.3%, 2022: 253/1,948 ≈ 13.0% → 증가하지 않음"
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "Furniture",
        "analysis": "오답. 2020: 460/1,730 ≈ 26.6%, 2022: 436/1,948 ≈ 22.4% → 증가하지 않음"
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "Groceries",
        "analysis": "정답. 2020: 480/1,730 ≈ 27.7%, 2022: 554/1,948 ≈ 28.4% → 증가"
      },
      {
        "label": "E",
        "isCorrect": true,
        "text": "Toys",
        "analysis": "정답. 2020: 120/1,730 ≈ 6.9%, 2022: 191/1,948 ≈ 9.8% → 증가"
      }
    ]
  },
  "S2-Q12": {
    "topic": "농도 (혼합·치환)",
    "clue": "산의 양을 기준으로 식을 세우거나, 가중평균의 거리 비(부피비 = 반대쪽 거리 비)를 이용합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 산의 양으로 식 세우기",
        "desc": "0.20(12) + 0.5y = 0.40(12 + y)"
      },
      {
        "step": "Step 2: 정리",
        "desc": "(50 − 40)y = (40 − 20) × 12 → 10y = 240"
      },
      {
        "step": "Step 3: 답",
        "desc": "y = <strong>24</strong> liters"
      }
    ],
    "whySelectedWrong": {
      "A": "농도 차를 그대로 부피에 곱한 값으로, 혼합 후 부피 변화를 무시했습니다.",
      "B": "가중평균의 비를 거꾸로 적용한 값입니다.",
      "C": "분모를 (목표 농도 − 첨가 농도) 대신 (첨가 − 원래) 농도 차로 잡은 값입니다.",
      "E": "계산 실수 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "12/5",
        "analysis": "오답. 농도 차를 그대로 부피에 곱한 값으로, 혼합 후 부피 변화를 무시했습니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "6",
        "analysis": "오답. 가중평균의 비를 거꾸로 적용한 값입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "8",
        "analysis": "오답. 분모를 (목표 농도 − 첨가 농도) 대신 (첨가 − 원래) 농도 차로 잡은 값입니다."
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "24",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "48",
        "analysis": "오답. 계산 실수 값입니다."
      }
    ]
  },
  "S2-Q13": {
    "topic": "일의 자리 주기",
    "clue": "거듭제곱의 일의 자리는 짧은 주기(길이 1, 2, 4)로 반복됩니다.",
    "stepByStep": [
      {
        "step": "Step 1: 9의 거듭제곱",
        "desc": "일의 자리 주기: 9, 1 (길이 2). 49 = 2×24 + 1이므로 일의 자리는 <strong>9</strong>입니다."
      },
      {
        "step": "Step 2: 8의 거듭제곱",
        "desc": "일의 자리 주기: 8, 4, 2, 6 (길이 4). 33번째 → <strong>8</strong>입니다."
      },
      {
        "step": "Step 3: 결합",
        "desc": "9 × 8 = 72 → 일의 자리 <strong>2</strong>입니다."
      }
    ],
    "commonTraps": [
      {
        "value": 4,
        "display": "4",
        "why": "주기에서 나머지를 한 칸 밀려서 대응시킨 값입니다(나머지 r → r번째 항)."
      },
      {
        "value": 7,
        "display": "7",
        "why": "일의 자리끼리 더한 값입니다. 연산을 확인하세요."
      },
      {
        "value": 9,
        "display": "9",
        "why": "9<sup>49</sup>의 일의 자리만 구한 값입니다."
      },
      {
        "value": 8,
        "display": "8",
        "why": "8<sup>33</sup>의 일의 자리만 구한 값입니다."
      },
      {
        "value": 7,
        "display": "7",
        "why": "주기 길이를 잘못 잡았을 때 나오는 값입니다."
      },
      {
        "value": 4,
        "display": "4",
        "why": "주기 길이를 잘못 잡았을 때 나오는 값입니다."
      }
    ]
  },
  "S2-Q14": {
    "topic": "원형 트랙 (상대 속력)",
    "clue": "두 사람이 만날 때마다 상대 거리가 한 바퀴(1200 m)씩 누적됩니다. 상대 속력 = 속력의 차.",
    "stepByStep": [
      {
        "step": "Step 1: 상대 속력",
        "desc": "240 − 160 = 80 m/min"
      },
      {
        "step": "Step 2: 한 번 만나는 데 걸리는 시간",
        "desc": "1200 ÷ 80 = 15분"
      },
      {
        "step": "Step 3: 횟수",
        "desc": "⌊36 × 80 / 1200⌋ = ⌊12/5⌋ = <strong>2</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 12,
        "display": "12",
        "why": "상대 속력을 합로 잡은 값입니다. 같은 방향이면 차을 써야 합니다."
      },
      {
        "value": 3,
        "display": "3",
        "why": "출발 시점을 포함해 센 값입니다."
      },
      {
        "value": 3,
        "display": "3",
        "why": "각자 완주한 바퀴 수의 차로 계산한 값입니다."
      },
      {
        "value": 1,
        "display": "1",
        "why": "마지막 만남을 빠뜨린 값입니다."
      }
    ]
  },
  "S2-Q15": {
    "topic": "색칠한 영역의 넓이 (그림)",
    "clue": "렌즈 = 사분원 두 개의 넓이 합 − 정사각형 (겹친 부분이 두 번 세어지므로).",
    "stepByStep": [
      {
        "step": "Step 1: 사분원 두 개",
        "desc": "2 × (1/4)π(10)² = 50π"
      },
      {
        "step": "Step 2: 겹침",
        "desc": "두 사분원을 합치면 정사각형 전체를 덮고 렌즈가 한 번 더 세어집니다 → 렌즈 = 두 사분원 − 정사각형"
      },
      {
        "step": "Step 3: 답",
        "desc": "50π − 100 = <strong>50π − 100</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "정사각형에서 렌즈를 뺀 값을 잘못 계산한 값입니다.",
      "B": "사분원 하나의 넓이입니다.",
      "C": "정사각형의 넓이 전체가 아니라 절반만 뺀 값입니다.",
      "D": "렌즈의 절반(활꼴 하나)의 넓이입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "−50π + 200",
        "analysis": "오답. 정사각형에서 렌즈를 뺀 값을 잘못 계산한 값입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "25π",
        "analysis": "오답. 사분원 하나의 넓이입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "50π − 50",
        "analysis": "오답. 정사각형의 넓이 전체가 아니라 절반만 뺀 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "25π − 50",
        "analysis": "오답. 렌즈의 절반(활꼴 하나)의 넓이입니다."
      },
      {
        "label": "E",
        "isCorrect": true,
        "text": "50π − 100",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      }
    ]
  }
};
