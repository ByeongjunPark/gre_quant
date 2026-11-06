window.QEXPLANATIONS_18 = {
  "S1-Q1": {
    "topic": "구간에 따른 거듭제곱 대소",
    "clue": "0 &lt; x &lt; 1이면 x를 곱할수록 작아지므로 지수가 클수록 값이 작습니다. √x는 x보다 큽니다.",
    "stepByStep": [
      {
        "step": "Step 1: 구간의 성질",
        "desc": "0 &lt; x &lt; 1에서 x² &lt; x, x³ &lt; x² … 이고 √x > x입니다."
      },
      {
        "step": "Step 2: 대표값 확인",
        "desc": "x = 1/2: Quantity A = 1/64, Quantity B = 1/16"
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
    "topic": "거듭제곱 비교 (지수법칙)",
    "clue": "같은 밑으로 통일한 뒤 지수를 비교합니다. 같은 수를 여러 번 더하는 것은 곱셈입니다.",
    "stepByStep": [
      {
        "step": "Step 1: Quantity A 정리",
        "desc": "2<sup>39</sup>(2 − 1) = 2<sup>39</sup>"
      },
      {
        "step": "Step 2: Quantity B 정리",
        "desc": "4<sup>20</sup> = (2<sup>2</sup>)<sup>20</sup> = 2<sup>40</sup>"
      },
      {
        "step": "Step 3: 비교",
        "desc": "2<sup>39</sup>을 공통 인수로 보면 비교가 쉬워집니다."
      },
      {
        "step": "Step 4: 결론",
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
    "topic": "부호 분석 (인수분해)",
    "clue": "차이를 인수분해합니다: x²y − xy² = xy(x − y).",
    "stepByStep": [
      {
        "step": "Step 1: 차이 계산",
        "desc": "A − B = x²y − xy² = xy(x − y)"
      },
      {
        "step": "Step 2: 부호 판정",
        "desc": "x &lt; y이므로 (x − y) &lt; 0. xy &lt; 0이므로 A − B > 0."
      },
      {
        "step": "Step 3: 확인",
        "desc": "x = −2, y = 1이면 Quantity A = 4, Quantity B = −2"
      },
      {
        "step": "Step 4: 결론",
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
  "S1-Q4": {
    "topic": "연속 정수의 합과 평균",
    "clue": "등간격 수열의 평균 = 가운데 값 = 합 ÷ 항수, 그리고 가장 큰 수 = 평균 + 간격×(항수−1)/2입니다.",
    "stepByStep": [
      {
        "step": "Step 1: 평균",
        "desc": "0 ÷ 15 = 0 (가운데 값)"
      },
      {
        "step": "Step 2: 가장 큰 수",
        "desc": "평균에서 간격 2로 (15−1)/2 칸 위: 0 + 2×14/2 = <strong>14</strong>"
      },
      {
        "step": "Step 3: 검산",
        "desc": "수열: −14, −12, …, 14 (항수 15)."
      },
      {
        "step": "Step 4: 결론",
        "desc": "The greatest of these integers = 14이고 비교 대상은 28이므로 정답은 (B)입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 14, Quantity B = 28) 참고로 28은(는) 평균에서 간격 2×(15−1)을 통째로 더한 값입니다. 평균은 가운데 값이므로 절반만 더해야 합니다.",
      "C": "두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 14, Quantity B = 28) 참고로 28은(는) 평균에서 간격 2×(15−1)을 통째로 더한 값입니다. 평균은 가운데 값이므로 절반만 더해야 합니다.",
      "D": "주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 14, Quantity B = 28) 참고로 28은(는) 평균에서 간격 2×(15−1)을 통째로 더한 값입니다. 평균은 가운데 값이므로 절반만 더해야 합니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Quantity A is greater.",
        "analysis": "오답. Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 14, Quantity B = 28) 참고로 28은(는) 평균에서 간격 2×(15−1)을 통째로 더한 값입니다. 평균은 가운데 값이므로 절반만 더해야 합니다."
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
        "analysis": "오답. 두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 14, Quantity B = 28) 참고로 28은(는) 평균에서 간격 2×(15−1)을 통째로 더한 값입니다. 평균은 가운데 값이므로 절반만 더해야 합니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 14, Quantity B = 28) 참고로 28은(는) 평균에서 간격 2×(15−1)을 통째로 더한 값입니다. 평균은 가운데 값이므로 절반만 더해야 합니다."
      }
    ]
  },
  "S1-Q5": {
    "topic": "두 변이 주어진 삼각형의 넓이·둘레 범위",
    "clue": "두 변이 고정되면 넓이는 끼인각, 둘레는 셋째 변의 범위로 결정됩니다.",
    "stepByStep": [
      {
        "step": "Step 1: 셋째 변 범위",
        "desc": "2 &lt; c &lt; 18"
      },
      {
        "step": "Step 2: 둘레 범위",
        "desc": "20 &lt; 둘레 &lt; 36 (등호 불가)"
      },
      {
        "step": "Step 3: 정답 확정",
        "desc": "정답은 B, C, D입니다. 다중 선택 문항은 정답 보기를 모두, 정확히 골라야 점수를 받습니다(부분 점수 없음)."
      }
    ],
    "whySelectedWrong": {
      "A": "셋째 변 = 1가 되어 삼각형 부등식(2 &lt; c &lt; 18)을 위반합니다.",
      "E": "셋째 변 = 18가 되어 삼각형 부등식(2 &lt; c &lt; 18)을 위반합니다.",
      "F": "셋째 변 = 19가 되어 삼각형 부등식(2 &lt; c &lt; 18)을 위반합니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "19",
        "analysis": "오답. 셋째 변 = 1가 되어 삼각형 부등식(2 &lt; c &lt; 18)을 위반합니다."
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "21",
        "analysis": "정답. 셋째 변 = 3가 (2, 18) 범위 안이므로 가능합니다."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "28",
        "analysis": "정답. 셋째 변 = 10가 (2, 18) 범위 안이므로 가능합니다."
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "35",
        "analysis": "정답. 셋째 변 = 17가 (2, 18) 범위 안이므로 가능합니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "36",
        "analysis": "오답. 셋째 변 = 18가 되어 삼각형 부등식(2 &lt; c &lt; 18)을 위반합니다."
      },
      {
        "label": "F",
        "isCorrect": false,
        "text": "37",
        "analysis": "오답. 셋째 변 = 19가 되어 삼각형 부등식(2 &lt; c &lt; 18)을 위반합니다."
      }
    ]
  },
  "S1-Q6": {
    "topic": "일률 (작업 시간)",
    "clue": "시간이 아니라 일률(1/시간)을 더하고 뺍니다.",
    "stepByStep": [
      {
        "step": "Step 1: B의 일률",
        "desc": "1/8 − 1/24 = 1/12 → B 단독은 12시간"
      },
      {
        "step": "Step 2: A가 한 일",
        "desc": "2시간 × 1/24 = 1/12 → 남은 일 11/12"
      },
      {
        "step": "Step 3: B의 작업 시간",
        "desc": "11/12 × 12 = <strong>11</strong>시간"
      }
    ],
    "commonTraps": [
      {
        "value": 6,
        "display": "6",
        "why": "함께 걸리는 시간에서 A가 일한 시간을 단순히 뺀 값입니다. 일률(시간당 작업량)로 계산해야 합니다."
      },
      {
        "value": 12,
        "display": "12",
        "why": "B가 전체 작업을 혼자 하는 시간입니다. A가 이미 한 부분을 빼야 합니다."
      },
      {
        "value": 10,
        "display": "10",
        "why": "B의 단독 시간에서 A의 작업 시간을 뺀 값으로, 두 기계의 속도 차이를 무시했습니다."
      },
      {
        "value": 1,
        "display": "1",
        "why": "A가 끝낸 부분을 B가 하는 시간으로 계산했습니다(남은 부분이 아님)."
      }
    ]
  },
  "S1-Q7": {
    "topic": "순환소수의 n번째 자리",
    "clue": "분모가 10과 서로소인 분수는 순수 순환소수입니다. 순환마디 길이로 n을 나눈 나머지를 이용합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 순환마디 구하기",
        "desc": "4/21 = 0.<span style=\"text-decoration:overline\">190476</span> (순환마디 길이 6)"
      },
      {
        "step": "Step 2: 위치 계산",
        "desc": "47 = 6 × 7 + 5이므로 47번째 자리는 순환마디의 5번째 숫자입니다."
      },
      {
        "step": "Step 3: 답",
        "desc": "순환마디 190476의 5번째 숫자 = <strong>7</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "순환마디를 잘못 구했을 때 나오는 값입니다.",
      "B": "순환마디의 첫 자리입니다.",
      "C": "나머지 대응을 반대 방향으로 한 칸 밀린 값입니다.",
      "D": "47을 주기 6로 나눈 나머지를 한 칸 밀려서 대응시킨 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "0",
        "analysis": "오답. 순환마디를 잘못 구했을 때 나오는 값입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "1",
        "analysis": "오답. 순환마디의 첫 자리입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "4",
        "analysis": "오답. 나머지 대응을 반대 방향으로 한 칸 밀린 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "6",
        "analysis": "오답. 47을 주기 6로 나눈 나머지를 한 칸 밀려서 대응시킨 값입니다."
      },
      {
        "label": "E",
        "isCorrect": true,
        "text": "7",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      }
    ]
  },
  "S1-Q8": {
    "topic": "점화식 수열 역추적",
    "clue": "a₁ = x, a₂ = y로 두고 각 항을 x, y의 일차식으로 표현하면 연립방정식이 됩니다.",
    "stepByStep": [
      {
        "step": "Step 1: 일반항을 x, y로 표현",
        "desc": "a₁ = x, a₂ = y, a₃ = x + y, a₄ = x + 2y, a₅ = 2x + 3y, a₆ = 3x + 5y, a₇ = 5x + 8y, a₈ = 8x + 13y"
      },
      {
        "step": "Step 2: 연립방정식",
        "desc": "1x + 2y = −4, 5x + 8y = −22"
      },
      {
        "step": "Step 3: 풀이",
        "desc": "x = −6, y = 1 → <i>a</i><sub>2</sub> = <strong>1</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": -6,
        "display": "−6",
        "why": "a₁의 값입니다."
      },
      {
        "value": -5,
        "display": "−5",
        "why": "a₃의 값입니다."
      },
      {
        "value": -18,
        "display": "−18",
        "why": "두 항의 차를 그대로 답으로 쓴 값입니다."
      },
      {
        "value": 2,
        "display": "2",
        "why": "계산 실수 값입니다."
      },
      {
        "value": -6,
        "display": "−6",
        "why": "다른 초기항의 값입니다."
      }
    ]
  },
  "S1-Q9": {
    "topic": "정삼각형과 원 (내접·외접)",
    "clue": "정삼각형의 외접원 반지름 R = s/√3 → s = R√3, 넓이 = (√3/4)s².",
    "stepByStep": [
      {
        "step": "Step 1: 반지름",
        "desc": "πR² = 4π → R² = 4"
      },
      {
        "step": "Step 2: 한 변",
        "desc": "s = R√3 → s² = 3R² = 12"
      },
      {
        "step": "Step 3: 넓이",
        "desc": "(√3/4) × 12 = <strong>3√3</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "원이 삼각형에 내접하는 경우(외접 삼각형)의 넓이입니다.",
      "B": "한 변을 반지름과 같다고 본 값입니다.",
      "C": "√3을 빠뜨린 값입니다.",
      "D": "높이를 반지름 × 3으로 잡은 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "12√3",
        "analysis": "오답. 원이 삼각형에 내접하는 경우(외접 삼각형)의 넓이입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "√3",
        "analysis": "오답. 한 변을 반지름과 같다고 본 값입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "3",
        "analysis": "오답. √3을 빠뜨린 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "6√3",
        "analysis": "오답. 높이를 반지름 × 3으로 잡은 값입니다."
      },
      {
        "label": "E",
        "isCorrect": true,
        "text": "3√3",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      }
    ]
  },
  "S1-Q10": {
    "topic": "정규분포 (68–95 규칙)",
    "clue": "정규분포: 평균 ±1σ 안에 약 68%, ±2σ 안에 약 95%. 반쪽으로는 34%, 13.5%, 2.5%.",
    "stepByStep": [
      {
        "step": "Step 1: 표준화",
        "desc": "경계를 평균 80, 표준편차 5 기준으로 바꾸면 −1σ ~ 0σ"
      },
      {
        "step": "Step 2: 비율",
        "desc": "누적 비율 근사: −2σ 2.5%, −1σ 16%, 0 50%, +1σ 84%, +2σ 97.5% → 50% − 16% = 34%"
      },
      {
        "step": "Step 3: 인원",
        "desc": "800 × 34% = <strong>272</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "구간을 표준편차 단위로 바꿀 때 경계를 잘못 잡았거나 68–95 규칙의 반쪽(34%, 13.5%, 2.5%)을 잘못 더한 값입니다.",
      "C": "구간을 표준편차 단위로 바꿀 때 경계를 잘못 잡았거나 68–95 규칙의 반쪽(34%, 13.5%, 2.5%)을 잘못 더한 값입니다.",
      "D": "구간을 표준편차 단위로 바꿀 때 경계를 잘못 잡았거나 68–95 규칙의 반쪽(34%, 13.5%, 2.5%)을 잘못 더한 값입니다.",
      "E": "구간을 표준편차 단위로 바꿀 때 경계를 잘못 잡았거나 68–95 규칙의 반쪽(34%, 13.5%, 2.5%)을 잘못 더한 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "20",
        "analysis": "오답. 구간을 표준편차 단위로 바꿀 때 경계를 잘못 잡았거나 68–95 규칙의 반쪽(34%, 13.5%, 2.5%)을 잘못 더한 값입니다."
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "272",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "544",
        "analysis": "오답. 구간을 표준편차 단위로 바꿀 때 경계를 잘못 잡았거나 68–95 규칙의 반쪽(34%, 13.5%, 2.5%)을 잘못 더한 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "672",
        "analysis": "오답. 구간을 표준편차 단위로 바꿀 때 경계를 잘못 잡았거나 68–95 규칙의 반쪽(34%, 13.5%, 2.5%)을 잘못 더한 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "780",
        "analysis": "오답. 구간을 표준편차 단위로 바꿀 때 경계를 잘못 잡았거나 68–95 규칙의 반쪽(34%, 13.5%, 2.5%)을 잘못 더한 값입니다."
      }
    ]
  },
  "S1-Q11": {
    "topic": "조합: “적어도” 조건",
    "clue": "“적어도”는 여사건(전체 − 조건 불만족) 또는 정확한 경우별 합으로 셉니다. “하나 고정 후 나머지 자유”는 중복을 만듭니다.",
    "stepByStep": [
      {
        "step": "Step 1: 전체",
        "desc": "C(13, 3) = 286"
      },
      {
        "step": "Step 2: 여사건",
        "desc": "여자가 0명 또는 1명인 경우 = 228"
      },
      {
        "step": "Step 3: 답",
        "desc": "286 − 228 = <strong>58</strong> (경우별 합: C(4,2)·C(9,1) = 54 + C(4,3)·C(9,0) = 4)"
      }
    ],
    "commonTraps": [
      {
        "value": 66,
        "display": "66",
        "why": "“먼저 여자 j명 고정 후 나머지 자유 선택” 방식으로 중복해서 센 값입니다."
      },
      {
        "value": 286,
        "display": "286",
        "why": "조건 없이 전체 경우의 수입니다."
      },
      {
        "value": 228,
        "display": "228",
        "why": "조건을 만족하지 않는 경우(여사건)의 수입니다."
      },
      {
        "value": 54,
        "display": "54",
        "why": "여자가 정확히 2명인 경우만 센 값입니다."
      },
      {
        "value": 66,
        "display": "66",
        "why": "여자 2명을 먼저 고르고 나머지를 아무나 고르는 방식은 같은 위원회를 여러 번 셉니다(과잉 계산)."
      }
    ]
  },
  "S1-Q12": {
    "topic": "새로운 연산 정의",
    "clue": "정의식에 순서대로 대입합니다. a ◆ b ≠ b ◆ a일 수 있다는 점이 함정입니다.",
    "stepByStep": [
      {
        "step": "Step 1: x 구하기",
        "desc": "4 ◆ x = 4x + 4(4) − 2x = 2x + 16 = 14 → x = <strong>−1</strong>"
      },
      {
        "step": "Step 2: 순서를 바꿔 계산",
        "desc": "x ◆ 4 = (−1)(4) + 4(−1) − 2(4)"
      },
      {
        "step": "Step 3: 계산",
        "desc": "= −4 − 4 − 8 = <strong>−16</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "a와 b의 역할을 일부만 바꿔 대입한 값입니다.",
      "C": "x의 값만 구한 값입니다.",
      "D": "연산의 순서가 바뀌면 값이 달라집니다(교환법칙 불성립). k ◆ x와 같다고 본 값입니다.",
      "E": "부호 실수 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "−46",
        "analysis": "오답. a와 b의 역할을 일부만 바꿔 대입한 값입니다."
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "−16",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "−1",
        "analysis": "오답. x의 값만 구한 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "14",
        "analysis": "오답. 연산의 순서가 바뀌면 값이 달라집니다(교환법칙 불성립). k ◆ x와 같다고 본 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "16",
        "analysis": "오답. 부호 실수 값입니다."
      }
    ]
  },
  "S2-Q1": {
    "topic": "농도 (혼합·치환)",
    "clue": "빼고 같은 부피의 물로 채우는 조작은 농도에 매번 (V − y)/V를 곱합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 1회 치환",
        "desc": "농도 × (50 − 10)/50 = 48% × 4/5 = 38.4%"
      },
      {
        "step": "Step 2: 2회 치환",
        "desc": "다시 × 4/5 → 48 × (4/5)² = <strong>30.72%</strong>"
      },
      {
        "step": "Step 3: 주의",
        "desc": "두 번째로 빼는 용액은 이미 희석되어 있으므로 알코올이 덜 빠집니다."
      },
      {
        "step": "Step 4: 결론",
        "desc": "The percent of the final solution, by volume, that is alcohol = 30.72이고 비교 대상은 144/5이므로 정답은 (B)입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 144/5, Quantity B = 30.72) 참고로 144/5은(는) 매번 같은 양의 알코올이 빠진다고 계산한 값입니다.",
      "C": "두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 144/5, Quantity B = 30.72) 참고로 144/5은(는) 매번 같은 양의 알코올이 빠진다고 계산한 값입니다.",
      "D": "주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 144/5, Quantity B = 30.72) 참고로 144/5은(는) 매번 같은 양의 알코올이 빠진다고 계산한 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Quantity A is greater.",
        "analysis": "오답. Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 144/5, Quantity B = 30.72) 참고로 144/5은(는) 매번 같은 양의 알코올이 빠진다고 계산한 값입니다."
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
        "analysis": "오답. 두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 144/5, Quantity B = 30.72) 참고로 144/5은(는) 매번 같은 양의 알코올이 빠진다고 계산한 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 144/5, Quantity B = 30.72) 참고로 144/5은(는) 매번 같은 양의 알코올이 빠진다고 계산한 값입니다."
      }
    ]
  },
  "S2-Q2": {
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
  "S2-Q3": {
    "topic": "등차수열 (항과 합)",
    "clue": "두 항의 차 = (항 번호 차) × 공차. 합 = 항수 × (첫 항 + 끝 항)/2.",
    "stepByStep": [
      {
        "step": "Step 1: 공차",
        "desc": "(−23 − −3) ÷ (9 − 4) = −4"
      },
      {
        "step": "Step 2: 첫 항과 끝 항",
        "desc": "a₁ = −3 − 3(−4) = 9, a19 = 9 + 18(−4) = −63"
      },
      {
        "step": "Step 3: 합",
        "desc": "19 × (9 + −63) / 2 = <strong>−513</strong>"
      },
      {
        "step": "Step 4: 결론",
        "desc": "The sum of the first 19 terms of the sequence = −513이고 비교 대상은 −513이므로 정답은 (C)입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = −513, Quantity B = −513)",
      "B": "Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = −513, Quantity B = −513)",
      "D": "주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = −513, Quantity B = −513)"
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Quantity A is greater.",
        "analysis": "오답. Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = −513, Quantity B = −513)"
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "Quantity B is greater.",
        "analysis": "오답. Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = −513, Quantity B = −513)"
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
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = −513, Quantity B = −513)"
      }
    ]
  },
  "S2-Q4": {
    "topic": "좌표평면: 직선과 축이 만드는 삼각형",
    "clue": "기울기 → 절편 → 넓이 = (x절편 × y절편)/2.",
    "stepByStep": [
      {
        "step": "Step 1: 기울기",
        "desc": "(−1 − (7)) / (1 − (−1)) = −4"
      },
      {
        "step": "Step 2: 절편",
        "desc": "y = −(4/1)x + 3 → y절편 3, x절편 = 3/4"
      },
      {
        "step": "Step 3: 넓이",
        "desc": "(1/2) × 3/4 × 3 = <strong>9/8</strong>"
      },
      {
        "step": "Step 4: 결론",
        "desc": "The area of the triangular region bounded by line <i>k</i>, the <i>x</i>-axis, and the <i>y</i>-axis = 9/8이고 비교 대상은 18이므로 정답은 (B)입니다."
      }
    ],
    "whySelectedWrong": {
      "A": "Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 9/8, Quantity B = 18) 참고로 18은(는) 기울기의 역수로 x절편을 구한 값입니다.",
      "C": "두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 9/8, Quantity B = 18) 참고로 18은(는) 기울기의 역수로 x절편을 구한 값입니다.",
      "D": "주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 9/8, Quantity B = 18) 참고로 18은(는) 기울기의 역수로 x절편을 구한 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Quantity A is greater.",
        "analysis": "오답. Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 9/8, Quantity B = 18) 참고로 18은(는) 기울기의 역수로 x절편을 구한 값입니다."
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
        "analysis": "오답. 두 양이 항상 같다고 판단했지만 그렇지 않습니다. (실제 값: Quantity A = 9/8, Quantity B = 18) 참고로 18은(는) 기울기의 역수로 x절편을 구한 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "The relationship cannot be determined from the information given.",
        "analysis": "오답. 주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요. (실제 값: Quantity A = 9/8, Quantity B = 18) 참고로 18은(는) 기울기의 역수로 x절편을 구한 값입니다."
      }
    ]
  },
  "S2-Q5": {
    "topic": "둔각삼각형이 되는 정수 변",
    "clue": "가장 긴 변 c에 대해 a² + b² &lt; c²이면 둔각, > c²이면 예각. 어떤 변이 가장 긴지 경우를 나눕니다.",
    "stepByStep": [
      {
        "step": "Step 1: 삼각형 조건",
        "desc": "5 &lt; x &lt; 13 → x = 6, …, 12 (7개)"
      },
      {
        "step": "Step 2: x가 가장 긴 변일 때 (x > 9)",
        "desc": "x² &lt; 4² + 9² = 97 → 없음"
      },
      {
        "step": "Step 3: 9이(가) 가장 긴 변일 때 (x ≤ 9)",
        "desc": "9² &lt; 4² + x² → x² > 65 → 9"
      },
      {
        "step": "Step 4: 합계",
        "desc": "<strong>1</strong>개"
      }
    ],
    "commonTraps": [
      {
        "value": 7,
        "display": "7",
        "why": "삼각형이 되는 모든 정수 x의 개수입니다."
      },
      {
        "value": 2,
        "display": "2",
        "why": "경계(직각)인 경우를 포함한 값입니다."
      },
      {
        "value": 0,
        "display": "0",
        "why": "한쪽 경우만 센 값입니다."
      },
      {
        "value": 6,
        "display": "6",
        "why": "예각이 아닌 경우의 개수입니다."
      },
      {
        "value": 7,
        "display": "7",
        "why": "삼각형 조건만 적용한 개수입니다."
      }
    ]
  },
  "S2-Q6": {
    "topic": "직육면체: 세 면의 넓이",
    "clue": "(lw)(wh)(lh) = (lwh)² 입니다.",
    "stepByStep": [
      {
        "step": "Step 1: 세 넓이의 곱",
        "desc": "32 × 40 × 20 = 25,600 = (lwh)²"
      },
      {
        "step": "Step 2: 제곱근",
        "desc": "lwh = √25,600 = <strong>160</strong>"
      },
      {
        "step": "Step 3: 검산",
        "desc": "l, w, h = 4, 8, 5"
      }
    ],
    "whySelectedWrong": {
      "A": "세 넓이의 합입니다.",
      "C": "계산 실수 값입니다.",
      "D": "겉넓이를 구한 값입니다.",
      "E": "세 넓이의 곱은 V²입니다. 제곱근을 취해야 합니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "92",
        "analysis": "오답. 세 넓이의 합입니다."
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "160",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "164",
        "analysis": "오답. 계산 실수 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "184",
        "analysis": "오답. 겉넓이를 구한 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "25,600",
        "analysis": "오답. 세 넓이의 곱은 V²입니다. 제곱근을 취해야 합니다."
      }
    ]
  },
  "S2-Q7": {
    "topic": "비율 변화로 원래 개수 구하기",
    "clue": "변하지 않는 양(파란 구슬)을 기준으로 식을 세웁니다.",
    "stepByStep": [
      {
        "step": "Step 1: 미지수 설정",
        "desc": "빨강 = 7m, 파랑 = 8m"
      },
      {
        "step": "Step 2: 비 조건",
        "desc": "(7m + 35) : 8m = 3 : 2 → 2(7m + 35) = 3·8m → m = 7"
      },
      {
        "step": "Step 3: 답",
        "desc": "원래 개수 = 15 × 7 = <strong>105</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 140,
        "display": "140",
        "why": "빨간 구슬을 추가한 뒤의 개수입니다."
      },
      {
        "value": 56,
        "display": "56",
        "why": "파란 구슬의 개수입니다."
      },
      {
        "value": 49,
        "display": "49",
        "why": "원래 빨간 구슬의 개수입니다."
      },
      {
        "value": 120,
        "display": "120",
        "why": "배수를 하나 크게 잡은 값입니다."
      },
      {
        "value": 140,
        "display": "140",
        "why": "추가 후의 전체 개수입니다."
      }
    ]
  },
  "S2-Q8": {
    "topic": "평균의 변화로 값 구하기",
    "clue": "평균 문제는 합으로 바꿔 생각합니다: 합 = 평균 × 개수.",
    "stepByStep": [
      {
        "step": "Step 1: 처음 합",
        "desc": "9 × 30 = 270"
      },
      {
        "step": "Step 2: 남은 합",
        "desc": "8 × 31 = 248"
      },
      {
        "step": "Step 3: 제거된 수",
        "desc": "270 − 248 = <strong>22</strong>"
      }
    ],
    "commonTraps": [
      {
        "value": 29,
        "display": "29",
        "why": "평균의 차이만큼만 조정한 값입니다(개수를 곱해야 함)."
      },
      {
        "value": -9,
        "display": "−9",
        "why": "전체 합의 차이 일부만 계산한 값입니다."
      },
      {
        "value": -9,
        "display": "−9",
        "why": "남은 개수를 n으로 잘못 잡은 값입니다."
      },
      {
        "value": 53,
        "display": "53",
        "why": "계산 실수 값입니다."
      },
      {
        "value": 29,
        "display": "29",
        "why": "평균 차이만 반영한 값입니다."
      }
    ]
  },
  "S2-Q9": {
    "topic": "Data Interpretation: 비율 표 → 금액 환산",
    "clue": "비율 표는 각 해의 총액을 곱해 금액으로 바꾼 뒤 비교해야 합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 2023",
        "desc": "52,000 × 28% = 14,560"
      },
      {
        "step": "Step 2: 2024",
        "desc": "51,000 × 28% = 14,280"
      },
      {
        "step": "Step 3: 차이",
        "desc": "<strong>−280</strong>달러"
      }
    ],
    "commonTraps": [
      {
        "value": 0,
        "display": "0",
        "why": "비율 차이에 처음 해의 총액만 곱한 값입니다. 해마다 총액이 다릅니다."
      },
      {
        "value": 0,
        "display": "0",
        "why": "비율 차이에 나중 해의 총액만 곱한 값입니다."
      },
      {
        "value": 14280,
        "display": "14,280",
        "why": "2024년의 지출액 자체입니다."
      },
      {
        "value": 280,
        "display": "280",
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
        "desc": "T₁/T₂ = 52,000/51,000 ≈ 1.020"
      },
      {
        "step": "Step 2: 각 범주",
        "desc": "Housing: 9,360 → 11,220<br>Food: 9,360 → 8,160<br>Transportation: 14,560 → 14,280<br>Health care: 2,600 → 2,040<br>Entertainment: 2,080 → 1,020<br>Other: 14,040 → 14,280"
      },
      {
        "step": "Step 3: 개수",
        "desc": "<strong>2</strong>"
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
        "value": 3,
        "display": "3",
        "why": "금액 비교를 일부 잘못한 값입니다."
      },
      {
        "value": 4,
        "display": "4",
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
        "desc": "T₂/T₁ = 0.9808"
      },
      {
        "step": "Step 2: 판정",
        "desc": "각 범주의 금액 비율이 1.1 이상인지 확인합니다(선택지별 분석 참고)."
      },
      {
        "step": "Step 3: 정답 확정",
        "desc": "정답은 E입니다. 다중 선택 문항은 정답 보기를 모두, 정확히 골라야 점수를 받습니다(부분 점수 없음)."
      }
    ],
    "whySelectedWrong": {
      "A": "14,040 → 14,280 (1.7% 변화)",
      "B": "2,080 → 1,020 (−51.0% 변화)",
      "C": "14,560 → 14,280 (−1.9% 변화)",
      "D": "9,360 → 8,160 (−12.8% 변화)",
      "F": "2,600 → 2,040 (−21.5% 변화)"
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "Other",
        "analysis": "오답. 14,040 → 14,280 (1.7% 변화)"
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "Entertainment",
        "analysis": "오답. 2,080 → 1,020 (−51.0% 변화)"
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "Transportation",
        "analysis": "오답. 14,560 → 14,280 (−1.9% 변화)"
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "Food",
        "analysis": "오답. 9,360 → 8,160 (−12.8% 변화)"
      },
      {
        "label": "E",
        "isCorrect": true,
        "text": "Housing",
        "analysis": "정답. 9,360 → 11,220 (19.9% 변화)"
      },
      {
        "label": "F",
        "isCorrect": false,
        "text": "Health care",
        "analysis": "오답. 2,600 → 2,040 (−21.5% 변화)"
      }
    ]
  },
  "S2-Q12": {
    "topic": "격자 경로의 수",
    "clue": "오른쪽 m번, 위 n번 이동하는 경로 수 = C(m + n, m). 경유점은 두 구간의 곱입니다.",
    "stepByStep": [
      {
        "step": "Step 1: 전체",
        "desc": "C(10, 5) = 252"
      },
      {
        "step": "Step 2: 경유",
        "desc": "(0,0)→(4,4): C(8, 4) = 70, (4,4)→(5,5): C(2, 1) = 2 → 곱 140"
      },
      {
        "step": "Step 3: 답",
        "desc": "<strong>112</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "이동 횟수에서 2개를 고른 잘못된 값입니다.",
      "C": "통과하는 경로의 수입니다.",
      "D": "여사건과 혼동한 값입니다.",
      "E": "조건 없는 전체 경로 수입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "45",
        "analysis": "오답. 이동 횟수에서 2개를 고른 잘못된 값입니다."
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "112",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "140",
        "analysis": "오답. 통과하는 경로의 수입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "182",
        "analysis": "오답. 여사건과 혼동한 값입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "252",
        "analysis": "오답. 조건 없는 전체 경로 수입니다."
      }
    ]
  },
  "S2-Q13": {
    "topic": "최대공약수·최소공배수 (가능한 값)",
    "clue": "x = 6a, y = 6b로 두면 a·b = 504/6 = 84이고 a, b는 서로소여야 합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 구조화",
        "desc": "GCD가 6이므로 x = 6a, y = 6b (a, b 서로소). LCM = 6ab = 504 → ab = 84."
      },
      {
        "step": "Step 2: 서로소 쌍 나열",
        "desc": "ab = 84이고 gcd(a, b) = 1인 쌍: (1, 84), (3, 28), (4, 21), (7, 12)"
      },
      {
        "step": "Step 3: 가능한 합",
        "desc": "x + y = 6(a + b): 510, 186, 150, 114"
      },
      {
        "step": "Step 4: 정답 확정",
        "desc": "정답은 B, C, F입니다. 다중 선택 문항은 정답 보기를 모두, 정확히 골라야 점수를 받습니다(부분 점수 없음)."
      }
    ],
    "whySelectedWrong": {
      "A": "x = 6a, y = 6b (a·b = 84, a와 b는 서로소)의 꼴로 표현되지 않는 합입니다.",
      "D": "x = 6a, y = 6b (a·b = 84, a와 b는 서로소)의 꼴로 표현되지 않는 합입니다.",
      "E": "x = 6a, y = 6b (a·b = 84, a와 b는 서로소)의 꼴로 표현되지 않는 합입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "90",
        "analysis": "오답. x = 6a, y = 6b (a·b = 84, a와 b는 서로소)의 꼴로 표현되지 않는 합입니다."
      },
      {
        "label": "B",
        "isCorrect": true,
        "text": "114",
        "analysis": "정답. x = 42, y = 72일 때 GCD = 6, LCM = 504이므로 가능합니다."
      },
      {
        "label": "C",
        "isCorrect": true,
        "text": "150",
        "analysis": "정답. x = 24, y = 126일 때 GCD = 6, LCM = 504이므로 가능합니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "504",
        "analysis": "오답. x = 6a, y = 6b (a·b = 84, a와 b는 서로소)의 꼴로 표현되지 않는 합입니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "505",
        "analysis": "오답. x = 6a, y = 6b (a·b = 84, a와 b는 서로소)의 꼴로 표현되지 않는 합입니다."
      },
      {
        "label": "F",
        "isCorrect": true,
        "text": "510",
        "analysis": "정답. x = 6, y = 504일 때 GCD = 6, LCM = 504이므로 가능합니다."
      }
    ]
  },
  "S2-Q14": {
    "topic": "원형 트랙 (상대 속력)",
    "clue": "두 사람이 만날 때마다 상대 거리가 한 바퀴(600 m)씩 누적됩니다. 상대 속력 = 속력의 합.",
    "stepByStep": [
      {
        "step": "Step 1: 상대 속력",
        "desc": "160 + 300 = 460 m/min"
      },
      {
        "step": "Step 2: 한 번 만나는 데 걸리는 시간",
        "desc": "600 ÷ 460 = 30/23분"
      },
      {
        "step": "Step 3: 횟수",
        "desc": "⌊37 × 460 / 600⌋ = ⌊851/30⌋ = <strong>28</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "상대 속력을 차로 잡은 값입니다. 반대 방향이면 합을 써야 합니다.",
      "B": "각자 완주한 바퀴 수의 차로 계산한 값입니다.",
      "C": "마지막 만남을 빠뜨린 값입니다.",
      "E": "출발 시점을 포함해 센 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "8",
        "analysis": "오답. 상대 속력을 차로 잡은 값입니다. 반대 방향이면 합을 써야 합니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "9",
        "analysis": "오답. 각자 완주한 바퀴 수의 차로 계산한 값입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "27",
        "analysis": "오답. 마지막 만남을 빠뜨린 값입니다."
      },
      {
        "label": "D",
        "isCorrect": true,
        "text": "28",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      },
      {
        "label": "E",
        "isCorrect": false,
        "text": "29",
        "analysis": "오답. 출발 시점을 포함해 센 값입니다."
      }
    ]
  },
  "S2-Q15": {
    "topic": "독립 시행 확률",
    "clue": "독립 시행: 특정 순서의 확률을 곱하고, 가능한 순서의 수 C(n, k)를 곱합니다.",
    "stepByStep": [
      {
        "step": "Step 1: 0번 성공",
        "desc": "(3/5)<sup>3</sup> = 27/125"
      },
      {
        "step": "Step 2: 1번 성공",
        "desc": "3 × 2/5 × (3/5)<sup>2</sup> = 54/125"
      },
      {
        "step": "Step 3: 합",
        "desc": "<strong>81/125</strong>"
      }
    ],
    "whySelectedWrong": {
      "A": "0번 성공만 센 값입니다.",
      "B": "여사건의 확률입니다.",
      "C": "1번 성공하는 위치의 수(n)를 곱하지 않은 값입니다.",
      "D": "정확히 1번만 센 값입니다."
    },
    "choicesAnalysis": [
      {
        "label": "A",
        "isCorrect": false,
        "text": "27/125",
        "analysis": "오답. 0번 성공만 센 값입니다."
      },
      {
        "label": "B",
        "isCorrect": false,
        "text": "44/125",
        "analysis": "오답. 여사건의 확률입니다."
      },
      {
        "label": "C",
        "isCorrect": false,
        "text": "9/25",
        "analysis": "오답. 1번 성공하는 위치의 수(n)를 곱하지 않은 값입니다."
      },
      {
        "label": "D",
        "isCorrect": false,
        "text": "54/125",
        "analysis": "오답. 정확히 1번만 센 값입니다."
      },
      {
        "label": "E",
        "isCorrect": true,
        "text": "81/125",
        "analysis": "정답. 위 풀이 과정의 결과와 일치합니다."
      }
    ]
  }
};
