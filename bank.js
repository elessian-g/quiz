window.QBANK = {
    "id":  "2026-10-29",
    "title":  "备用机题库（156 题）",
    "questions":  [
                      {
                          "id":  "M1028-01",
                          "sub":  "数学",
                          "topic":  "连续与可导",
                          "type":  "choice",
                          "stem":  "设 f(x)=x·sin(1/x) (x≠0)，f(0)=0，则 f 在 x=0 处（　）",
                          "options":  [
                                          "A. 连续且可导",
                                          "B. 连续但不可导",
                                          "C. 不连续，但左右极限都存在",
                                          "D. 至少一侧极限不存在"
                                      ],
                          "answer":  "B",
                          "key":  "连续看 |f(x)|≤|x|→0；可导看 [f(x)−f(0)]/x=sin(1/x)，极限不存在。",
                          "fix":  "可导要先写导数定义式的差商，不是求了导函数再代 0。"
                      },
                      {
                          "id":  "M1028-02",
                          "sub":  "数学",
                          "topic":  "定积分·分部积分",
                          "type":  "fill",
                          "stem":  "∫₀¹ x·eˣ dx = ？",
                          "answer":  "1",
                          "accept":  [
                                         "1.0"
                                     ],
                          "key":  "∫x eˣ dx = eˣ(x−1)+C；代上下限得 0−(−1)=1。",
                          "hook":  "起手句：令 u=x，dv=eˣdx，则 du=dx，v=eˣ。",
                          "fix":  "分部后 eˣ(x−1) 在 x=1 处是 0，不是 e。"
                      },
                      {
                          "id":  "M1028-03",
                          "sub":  "数学",
                          "topic":  "行列式·数乘",
                          "type":  "fill",
                          "stem":  "设 A 为 3 阶矩阵，|A|=2，则 |2A| = ？",
                          "answer":  "16",
                          "key":  "n 阶时 |kA| = kⁿ|A|，故 2³·2 = 16。",
                          "hook":  "起手句：先问「数乘矩阵乘了几次」，n 阶就是 kⁿ。"
                      },
                      {
                          "id":  "M1028-04",
                          "sub":  "数学",
                          "topic":  "极值与驻点",
                          "type":  "choice",
                          "stem":  "函数 y=x³−3x 的极值点个数为（　）",
                          "options":  [
                                          "A. 0 个",
                                          "B. 1 个",
                                          "C. 2 个",
                                          "D. 3 个"
                                      ],
                          "answer":  "C",
                          "key":  "y′=3(x−1)(x+1)；x=−1 极大、x=1 极小，共 2 个。"
                      },
                      {
                          "id":  "M1028-05",
                          "sub":  "数学",
                          "topic":  "极限·等价无穷小",
                          "type":  "fill",
                          "stem":  "lim(x→0) (1−cos x)/x² = ？",
                          "answer":  "0.5",
                          "accept":  [
                                         "1/2",
                                         "0.50"
                                     ],
                          "key":  "1−cos x ~ x²/2，故极限为 1/2。",
                          "fix":  "等价无穷小只能用在乘除结构里；这里整体是商，可以直接换。"
                      },
                      {
                          "id":  "M1028-06",
                          "sub":  "数学",
                          "topic":  "零点个数",
                          "type":  "choice",
                          "stem":  "曲线 y=eˣ−x−1 与 x 轴的交点个数为（　）",
                          "options":  [
                                          "A. 0 个",
                                          "B. 1 个",
                                          "C. 2 个",
                                          "D. 3 个"
                                      ],
                          "answer":  "B",
                          "key":  "y′=eˣ−1，x=0 取极小值 y=0，且是唯一驻点 ⇒ 只在 x=0 处为零。",
                          "fix":  "极小值等于 0 ≠ 有两个零点，要看两侧是否真的穿过去。"
                      },
                      {
                          "id":  "M1028-07",
                          "sub":  "数学",
                          "topic":  "变上限积分求导",
                          "type":  "fill",
                          "stem":  "d/dx ∫₀ˣ sin(t²) dt 在 x=0 处的值 = ？",
                          "answer":  "0",
                          "key":  "变上限求导直接得 sin(x²)，x=0 时为 0。",
                          "hook":  "起手句：先写 Φ′(x)=sin(x²)，再代 x=0。"
                      },
                      {
                          "id":  "M1028-08",
                          "sub":  "数学",
                          "topic":  "p 级数敛散",
                          "type":  "choice",
                          "stem":  "级数 ∑(n=1→∞) 1/nᵖ 收敛的充要条件是（　）",
                          "options":  [
                                          "A. p\u003c0",
                                          "B. p=1",
                                          "C. p\u003e1",
                                          "D. 任意 p"
                                      ],
                          "answer":  "C",
                          "key":  "p 级数：p\u003e1 收敛，p≤1 发散。",
                          "fix":  "p=1 是调和级数，发散；边界要单独记。"
                      },
                      {
                          "id":  "M1028-09",
                          "sub":  "数学",
                          "topic":  "二阶行列式",
                          "type":  "fill",
                          "stem":  "行列式 |1 2; 3 4| = ？",
                          "answer":  "-2",
                          "accept":  [
                                         "−2"
                                     ],
                          "key":  "ad−bc = 1·4−2·3 = −2。",
                          "hook":  "起手句：二阶就用 ad−bc，别展开成四项再化简。"
                      },
                      {
                          "id":  "M1028-10",
                          "sub":  "数学",
                          "topic":  "曲率",
                          "type":  "fill",
                          "stem":  "曲线 y=x² 在 x=0 处的曲率 K = ？",
                          "answer":  "2",
                          "key":  "K=|y″|/(1+y′²)^{3/2}；x=0 时 y′=0、y″=2，故 K=2。",
                          "hook":  "起手句：先算 y′、y″ 在 x=0 的值，再套 K 的公式。",
                          "fix":  "分母的 3/2 次方别漏；y′ 是 2x，x=0 时为 0，分母是 1。"
                      },
                      {
                          "id":  "M1028-11",
                          "sub":  "数学",
                          "topic":  "等价无穷小",
                          "type":  "fill",
                          "stem":  "lim(x→0) sin(3x)/(2x) = ____",
                          "key":  "sin(3x)~3x ⇒ 3x/(2x)=3/2",
                          "answer":  "3/2",
                          "accept":  [
                                         "1.5"
                                     ],
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-12",
                          "sub":  "数学",
                          "topic":  "1−cos 型等价",
                          "type":  "fill",
                          "stem":  "lim(x→0) (1−cos 2x)/x² = ____",
                          "key":  "1−cos2x ~ (2x)²/2 = 2x² ⇒ 2",
                          "answer":  "2",
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-13",
                          "sub":  "数学",
                          "topic":  "第二重要极限",
                          "type":  "choice",
                          "stem":  "lim(x→0) (1+x)^(1/x) 等于",
                          "key":  "标准结果 e；写成 1 是把它当成 (1+0)^∞",
                          "options":  [
                                          "A. e",
                                          "B. 1",
                                          "C. 0",
                                          "D. ∞"
                                      ],
                          "answer":  "A"
                      },
                      {
                          "id":  "M1028-14",
                          "sub":  "数学",
                          "topic":  "1^∞ 型",
                          "type":  "fill",
                          "stem":  "lim(x→∞) (1+2/x)^x = ____",
                          "key":  "= [(1+2/x)^(x/2)]² → e²",
                          "answer":  "e^2",
                          "accept":  [
                                         "e²"
                                     ],
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-15",
                          "sub":  "数学",
                          "topic":  "有理化",
                          "type":  "fill",
                          "stem":  "lim(x→∞) (√(x²+x) − x) = ____",
                          "key":  "有理化得 x/(√(x²+x)+x) → 1/2",
                          "answer":  "1/2",
                          "accept":  [
                                         "0.5"
                                     ],
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-16",
                          "sub":  "数学",
                          "topic":  "间断点分类",
                          "type":  "choice",
                          "stem":  "x=0 是 f(x)=1/x 的哪类间断点",
                          "key":  "单侧极限为无穷 ⇒ 第二类无穷间断",
                          "options":  [
                                          "A. 可去间断点",
                                          "B. 跳跃间断点",
                                          "C. 无穷间断点（第二类）",
                                          "D. 振荡间断点"
                                      ],
                          "answer":  "C"
                      },
                      {
                          "id":  "M1028-17",
                          "sub":  "数学",
                          "topic":  "泰勒比阶",
                          "type":  "fill",
                          "stem":  "lim(x→0) (tan x − x)/x³ = ____",
                          "key":  "tan x = x + x³/3 + … ⇒ 1/3",
                          "answer":  "1/3",
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-18",
                          "sub":  "数学",
                          "topic":  "无穷小阶的比较",
                          "type":  "choice",
                          "stem":  "x→0 时，x − sin x 与 x³ 的关系是",
                          "key":  "x−sinx ~ x³/6 ⇒ 同阶但不等价（比值 1/6）",
                          "options":  [
                                          "A. 等价无穷小",
                                          "B. 同阶但不等价",
                                          "C. 高阶无穷小",
                                          "D. 低阶无穷小"
                                      ],
                          "answer":  "B"
                      },
                      {
                          "id":  "M1028-19",
                          "sub":  "数学",
                          "topic":  "导数定义",
                          "type":  "choice",
                          "stem":  "f(x)=|x| 在 x=0 处",
                          "key":  "左导 −1、右导 +1 ⇒ 不可导；连续",
                          "options":  [
                                          "A. 可导且 f′(0)=0",
                                          "B. 不可导（左右导数不等）",
                                          "C. 连续但不可导且左右导数为 ±1",
                                          "D. 不连续"
                                      ],
                          "answer":  "C"
                      },
                      {
                          "id":  "M1028-20",
                          "sub":  "数学",
                          "topic":  "分段点可导",
                          "type":  "choice",
                          "stem":  "f(x)=x|x| 在 x=0 处",
                          "key":  "f=x²(x\u003e0)/−x²(x\u003c0) ⇒ 左右导都为 0",
                          "options":  [
                                          "A. 不可导",
                                          "B. 可导且 f′(0)=0",
                                          "C. 可导且 f′(0)=1",
                                          "D. 不连续"
                                      ],
                          "answer":  "B"
                      },
                      {
                          "id":  "M1028-21",
                          "sub":  "数学",
                          "topic":  "极值",
                          "type":  "fill",
                          "stem":  "y=x³−3x 的极大值是 ____",
                          "key":  "y′=3x²−3=0 ⇒ x=±1；x=−1 为极大，y(−1)=2",
                          "answer":  "2",
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-22",
                          "sub":  "数学",
                          "topic":  "f″=0 的三种可能",
                          "type":  "choice",
                          "stem":  "若 f″(x₀)=0，则 x₀ 处",
                          "key":  "反例 f(x)=x⁴+x：f″=12x²≥0 不变号（非拐点）、f′=4x³+1\u003e0 单调（无极值），但 f″(0)=0",
                          "options":  [
                                          "A. 必有拐点",
                                          "B. 必为极值点",
                                          "C. 可能既非拐点也非极值点",
                                          "D. 一定不是拐点"
                                      ],
                          "answer":  "C"
                      },
                      {
                          "id":  "M1028-23",
                          "sub":  "数学",
                          "topic":  "曲率",
                          "type":  "fill",
                          "stem":  "y=x² 在 x=1 处的曲率 κ = ____（可填 2/(5√5)）",
                          "key":  "κ=|y″|/(1+y′²)^{3/2}=2/(1+4)^{3/2}=2/(5√5)",
                          "answer":  "2/(5√5)",
                          "accept":  [
                                         "2/(5^(3/2))"
                                     ],
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-24",
                          "sub":  "数学",
                          "topic":  "泰勒展开",
                          "type":  "fill",
                          "stem":  "sin x = x − ____·x³ + o(x³)（填系数）",
                          "key":  "sin x = x − x³/6 + …",
                          "answer":  "1/6",
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-25",
                          "sub":  "数学",
                          "topic":  "分部积分",
                          "type":  "fill",
                          "stem":  "∫ x eˣ dx = ____（填结果，含 +C）",
                          "key":  "∫xe^x dx = xe^x − e^x + C = (x−1)e^x + C",
                          "answer":  "(x-1)e^x+C",
                          "accept":  [
                                         "(x−1)e^x+C",
                                         "(x-1)e^x＋C"
                                     ],
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-26",
                          "sub":  "数学",
                          "topic":  "分部积分",
                          "type":  "fill",
                          "stem":  "∫ ln x dx = ____（含 +C）",
                          "key":  "= x ln x − ∫x·(1/x)dx = x ln x − x + C",
                          "answer":  "xlnx-x+C",
                          "accept":  [
                                         "x ln x − x + C"
                                     ],
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-27",
                          "sub":  "数学",
                          "topic":  "变限积分求导",
                          "type":  "choice",
                          "stem":  "d/dx ∫₀^{x²} sin t dt 等于",
                          "key":  "上限是 x²，链式乘 2x ⇒ 2x sin(x²)",
                          "options":  [
                                          "A. sin(x²)",
                                          "B. 2x·sin(x²)",
                                          "C. 2x·cos(x²)",
                                          "D. sin(2x)"
                                      ],
                          "answer":  "B"
                      },
                      {
                          "id":  "M1028-28",
                          "sub":  "数学",
                          "topic":  "定积分",
                          "type":  "fill",
                          "stem":  "∫₀¹ x² dx = ____",
                          "key":  "x³/3 |₀¹ = 1/3",
                          "answer":  "1/3",
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-29",
                          "sub":  "数学",
                          "topic":  "华里士公式",
                          "type":  "fill",
                          "stem":  "∫₀^{π/2} sin³x dx = ____",
                          "key":  "华里士：奇数 n ⇒ 2/3",
                          "answer":  "2/3",
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-30",
                          "sub":  "数学",
                          "topic":  "反常积分收敛",
                          "type":  "choice",
                          "stem":  "∫₁^∞ dx/x^p 收敛的条件是",
                          "key":  "p\u003e1 收敛，p≤1 发散；记住临界 p=1",
                          "options":  [
                                          "A. p\u003e0",
                                          "B. p≥1",
                                          "C. p\u003e1",
                                          "D. p\u003c1"
                                      ],
                          "answer":  "C"
                      },
                      {
                          "id":  "M1028-31",
                          "sub":  "数学",
                          "topic":  "旋转体（圆盘法）",
                          "type":  "fill",
                          "stem":  "y=√x 在 [0,4] 上绕 x 轴旋转，V = ____（填 π 的倍数）",
                          "key":  "V=π∫₀⁴ x dx = 8π",
                          "answer":  "8π",
                          "accept":  [
                                         "8pi"
                                     ],
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-32",
                          "sub":  "数学",
                          "topic":  "旋转体（柱壳法）",
                          "type":  "fill",
                          "stem":  "y=f(x)≥0 绕 y 轴旋转，V=2π∫ₐᵇ ____ dx（填被积函数）",
                          "key":  "柱壳法被积是 x·f(x)；绕 x 轴才是 f²",
                          "answer":  "x f(x)",
                          "accept":  [
                                         "xf(x)",
                                         "x·f(x)",
                                         "x*f(x)"
                                     ],
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-33",
                          "sub":  "数学",
                          "topic":  "全微分",
                          "type":  "fill",
                          "stem":  "z=x²y，dz = ____（填 2xy dx + x² dy 形式）",
                          "key":  "z_x=2xy、z_y=x² ⇒ dz=2xy dx + x² dy（漏项扣光）",
                          "answer":  "2xydx+x^2dy",
                          "accept":  [
                                         "2xy dx + x² dy"
                                     ],
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-34",
                          "sub":  "数学",
                          "topic":  "无条件极值",
                          "type":  "fill",
                          "stem":  "f(x,y)=x²+y²−2x−4y 的极小值点是 ____（填 (x,y)）",
                          "key":  "f_x=2x−2=0、f_y=2y−4=0 ⇒ (1,2)",
                          "answer":  "(1,2)",
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-35",
                          "sub":  "数学",
                          "topic":  "条件极值",
                          "type":  "choice",
                          "stem":  "z=x²+y² 在约束 x+y=1 下的最小值是",
                          "key":  "L=x²+y²+λ(x+y−1) ⇒ x=y=1/2 ⇒ z=1/2",
                          "options":  [
                                          "A. 1/4",
                                          "B. 1/2",
                                          "C. 1",
                                          "D. 0"
                                      ],
                          "answer":  "B"
                      },
                      {
                          "id":  "M1028-36",
                          "sub":  "数学",
                          "topic":  "区域定界与面积",
                          "type":  "fill",
                          "stem":  "D 由 y=x² 与 y=x 围成，其面积为 ____",
                          "key":  "∫₀¹(x−x²)dx = 1/2 − 1/3 = 1/6",
                          "answer":  "1/6",
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-37",
                          "sub":  "数学",
                          "topic":  "对称性",
                          "type":  "choice",
                          "stem":  "若 D 关于 y 轴对称，则 ∬_D x dxdy 等于",
                          "key":  "x 关于 x 为奇函数 ⇒ 积分为 0（先写「区域对称、被积为奇」再得 0）",
                          "options":  [
                                          "A. 2∬_{D,x≥0} x dxdy",
                                          "B. 0",
                                          "C. ∬_D |x| dxdy",
                                          "D. 无法判断"
                                      ],
                          "answer":  "B"
                      },
                      {
                          "id":  "M1028-38",
                          "sub":  "数学",
                          "topic":  "极坐标面积元",
                          "type":  "fill",
                          "stem":  "极坐标下 dσ = ____（填 r dr dθ 形式）",
                          "key":  "漏 r 是最常见错误（2018 选 6）",
                          "answer":  "rdrdθ",
                          "accept":  [
                                         "r dr dθ",
                                         "r drdθ"
                                     ],
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-39",
                          "sub":  "数学",
                          "topic":  "可分离变量",
                          "type":  "fill",
                          "stem":  "y′=2xy 的通解 y = ____（填 C 表达式）",
                          "key":  "dy/y=2x dx ⇒ ln|y|=x²+C ⇒ y=Ce^{x²}",
                          "answer":  "Ce^(x^2)",
                          "accept":  [
                                         "Ce^{x²}"
                                     ],
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-40",
                          "sub":  "数学",
                          "topic":  "特征根",
                          "type":  "fill",
                          "stem":  "y″−3y′+2y=0 的特征根是 ____（填两个数，如 1,2）",
                          "key":  "r²−3r+2=0 ⇒ r=1,2",
                          "answer":  "1,2",
                          "accept":  [
                                         "2,1",
                                         "1、2"
                                     ],
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-41",
                          "sub":  "数学",
                          "topic":  "重根通解形式",
                          "type":  "choice",
                          "stem":  "特征根 r 为重根时，齐次通解形式是",
                          "key":  "重根要乘 x，否则只有 1 个解",
                          "options":  [
                                          "A. C e^{rx}",
                                          "B. (C₁+C₂x)e^{rx}",
                                          "C. C₁e^{rx}+C₂e^{−rx}",
                                          "D. C e^{rx}+x"
                                      ],
                          "answer":  "B"
                      },
                      {
                          "id":  "M1028-42",
                          "sub":  "数学",
                          "topic":  "非齐次特解形式",
                          "type":  "choice",
                          "stem":  "y″+y=x² 的特解应设为",
                          "key":  "右端是二次多项式且 λ=0 不是特征根 ⇒ 设同次多项式",
                          "options":  [
                                          "A. ae^{x}",
                                          "B. ax²+bx+c",
                                          "C. ax³",
                                          "D. x(ax²+bx+c)"
                                      ],
                          "answer":  "B"
                      },
                      {
                          "id":  "M1028-43",
                          "sub":  "数学",
                          "topic":  "建模只列式",
                          "type":  "fill",
                          "stem":  "水箱 200L、初始盐 20kg，注入 4L/min 含盐 0.5kg/L、排出 2L/min。dm/dt = 2 − ____（填 m 的那一项）",
                          "key":  "排出带走 2·m/(200+2t)；体积 200+2t 随时间变，不能写 200",
                          "answer":  "2m/(200+2t)",
                          "accept":  [
                                         "2m/(200+2t)"
                                     ],
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-44",
                          "sub":  "数学",
                          "topic":  "行列式与逆",
                          "type":  "fill",
                          "stem":  "A 为 3 阶矩阵、|A|=2，则 |2A⁻¹| = ____",
                          "key":  "|kA⁻¹|=k³/|A|=8/2=4（3 阶用三次方）",
                          "answer":  "4",
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-45",
                          "sub":  "数学",
                          "topic":  "基础解系个数",
                          "type":  "fill",
                          "stem":  "4 元齐次方程组 r(A)=2，基础解系含 ____ 个向量",
                          "key":  "n−r=4−2=2",
                          "answer":  "2",
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-46",
                          "sub":  "数学",
                          "topic":  "数乘与特征值",
                          "type":  "choice",
                          "stem":  "λ 是 A 的特征值，x 为对应特征向量；α=2x 的特征值是",
                          "key":  "A(2x)=2λx=λ(2x) ⇒ 特征值不变",
                          "options":  [
                                          "A. 2λ",
                                          "B. λ",
                                          "C. λ/2",
                                          "D. 不是特征向量"
                                      ],
                          "answer":  "B"
                      },
                      {
                          "id":  "M1028-47",
                          "sub":  "数学",
                          "topic":  "可对角化判据",
                          "type":  "choice",
                          "stem":  "n 阶矩阵 A 可对角化的充要条件是",
                          "key":  "n 个互异特征值只是充分条件；重根必须几何=代数（g=m）",
                          "options":  [
                                          "A. A 可逆",
                                          "B. A 有 n 个特征值",
                                          "C. 每个特征值的几何重数等于代数重数",
                                          "D. A 对称"
                                      ],
                          "answer":  "C"
                      },
                      {
                          "id":  "M1028-48",
                          "sub":  "数学",
                          "topic":  "伴随矩阵行列式",
                          "type":  "fill",
                          "stem":  "n 阶矩阵 A，|A*| = ____（用 |A| 表示，填 |A|^k 的 k）",
                          "key":  "|A*|=|A|^{n−1}（n=3 时是 |A|²）",
                          "answer":  "n-1",
                          "accept":  [
                                         "n−1"
                                     ],
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-49",
                          "sub":  "数学",
                          "topic":  "实对称矩阵",
                          "type":  "choice",
                          "stem":  "实对称矩阵必定",
                          "key":  "实对称 ⇒ 存在正交 Q 使 QᵀAQ 为对角阵；正定还要求特征值全正",
                          "options":  [
                                          "A. 可逆",
                                          "B. 可正交对角化",
                                          "C. 正定",
                                          "D. 满秩"
                                      ],
                          "answer":  "B"
                      },
                      {
                          "id":  "M1028-50",
                          "sub":  "数学",
                          "topic":  "惯性指数",
                          "type":  "fill",
                          "stem":  "f=x₁²+4x₁x₂+3x₂² 的正惯性指数是 ____",
                          "key":  "矩阵 [[1,2],[2,3]]，det=−1\u003c0 ⇒ 不定 ⇒ p=1,q=1",
                          "answer":  "1",
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-51",
                          "sub":  "数学",
                          "topic":  "AB=C 有解",
                          "type":  "choice",
                          "stem":  "存在矩阵 B 使 AB=C 的充要条件是",
                          "key":  "C 的每一列要落在 A 的列空间；r 相等不够（反例：A 秩 1、C 秩 1 但不同空间）",
                          "options":  [
                                          "A. r(A)=r(C)",
                                          "B. r(A)=r(A|C)",
                                          "C. r(B)=r(C)",
                                          "D. A 可逆"
                                      ],
                          "answer":  "B"
                      },
                      {
                          "id":  "M1028-52",
                          "sub":  "数学",
                          "topic":  "解空间包含",
                          "type":  "choice",
                          "stem":  "「Ax=0 的解都是 Bx=0 的解」等价于",
                          "key":  "N(A)⊂N(B) ⇔ n−r(A) ≤ n−r(B) ⇔ r(A) ≥ r(B)（方向易错）",
                          "options":  [
                                          "A. r(A)≤r(B)",
                                          "B. r(A)≥r(B)",
                                          "C. r(A)=r(B)",
                                          "D. n−r(A)≥n−r(B)"
                                      ],
                          "answer":  "B"
                      },
                      {
                          "id":  "M1028-53",
                          "sub":  "数学",
                          "topic":  "极大无关组",
                          "type":  "fill",
                          "stem":  "3 维向量组的秩为 2，其极大无关组含 ____ 个向量",
                          "key":  "极大无关组个数 = 秩",
                          "answer":  "2",
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-54",
                          "sub":  "数学",
                          "topic":  "特征值乘积",
                          "type":  "fill",
                          "stem":  "3 阶矩阵 A 的特征值为 1、2、3，则 |A| = ____",
                          "key":  "|A| = 特征值之积 = 6",
                          "answer":  "6",
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "M1028-55",
                          "sub":  "数学",
                          "topic":  "黎曼和步长",
                          "type":  "choice",
                          "stem":  "下列哪个等于 ∫₀¹f(x)dx（f 连续）",
                          "key":  "判据是「项数×系数=1」；B 项数是 n 不是 2n，所以它是 1/2·∫f",
                          "options":  [
                                          "A. lim (1/n)Σ_{k=1}^n f(k/n)",
                                          "B. lim (1/(2n))Σ_{k=1}^n f((2k−1)/(2n))",
                                          "C. lim (1/n)Σ_{k=1}^{2n} f(k/n)",
                                          "D. lim Σ_{k=1}^n f(k)"
                                      ],
                          "answer":  "A",
                          "fix":  "2021–2026 新外壳：先认题型再动笔"
                      },
                      {
                          "id":  "M1028-56",
                          "sub":  "数学",
                          "topic":  "分段原函数",
                          "type":  "choice",
                          "stem":  "求分段函数的一个原函数时，拼接点必须",
                          "key":  "原函数必须连续；只对分段积分不衔接 ⇒ 不是原函数",
                          "options":  [
                                          "A. 左极限=右极限（函数连续衔接）",
                                          "B. 导数相等",
                                          "C. 函数值都为 0",
                                          "D. 任意，无需处理"
                                      ],
                          "answer":  "A",
                          "fix":  "2021–2026 新外壳：先认题型再动笔"
                      },
                      {
                          "id":  "M1028-57",
                          "sub":  "数学",
                          "topic":  "Rayleigh 商",
                          "type":  "choice",
                          "stem":  "设 A 实对称，则 f(x)/xᵀx（x≠0）的最小值等于",
                          "key":  "x=Qy 时分母 yᵀy、分子 Σλᵢyᵢ² ⇒ 最小值 λ_min 在对应特征向量处取得",
                          "options":  [
                                          "A. 最大特征值",
                                          "B. 最小特征值",
                                          "C. 平均特征值",
                                          "D. 0"
                                      ],
                          "answer":  "B",
                          "fix":  "2021–2026 新外壳：先认题型再动笔"
                      },
                      {
                          "id":  "M1028-58",
                          "sub":  "数学",
                          "topic":  "无界区域旋转体",
                          "type":  "choice",
                          "stem":  "遇到「无界区域绕轴旋转求体积」，第一步应",
                          "key":  "2026 回忆版第 20 题就是这个形态：先用拐点定终点",
                          "options":  [
                                          "A. 直接积分到 ∞",
                                          "B. 先找拐点/交点定自然边界，再验证收敛",
                                          "C. 先求旋转面面积",
                                          "D. 先换极坐标"
                                      ],
                          "answer":  "B",
                          "fix":  "2021–2026 新外壳：先认题型再动笔"
                      },
                      {
                          "id":  "M1028-59",
                          "sub":  "数学",
                          "topic":  "调和函数",
                          "type":  "fill",
                          "stem":  "z=ln(x²+y²)，则 z_xx + z_yy = ____",
                          "key":  "z_xx=(2y²−2x²)/(x²+y²)²、z_yy=(2x²−2y²)/(x²+y²)² ⇒ 和为 0",
                          "answer":  "0",
                          "fix":  "2021–2026 新外壳：先认题型再动笔",
                          "hook":  "起手句：先写定义式/公式，再代数"
                      },
                      {
                          "id":  "Q1029-01",
                          "sub":  "数学",
                          "topic":  "等价无穷小",
                          "type":  "choice",
                          "stem":  "lim(x→0) sin(3x)/(2x) = ____",
                          "options":  [
                                          "A. 3/2",
                                          "B. 2/3",
                                          "C. 3",
                                          "D. 1/2"
                                      ],
                          "answer":  "A",
                          "key":  "sin(3x)~3x ⇒ 3x/(2x)=3/2",
                          "kp":  "#1",
                          "level":  "S",
                          "tags":  [
                                       "极限"
                                   ]
                      },
                      {
                          "id":  "Q1029-02",
                          "sub":  "数学",
                          "topic":  "1−cos 型等价",
                          "type":  "choice",
                          "stem":  "lim(x→0) (1−cos 2x)/x² = ____",
                          "options":  [
                                          "A. 2",
                                          "B. 1",
                                          "C. 1/2",
                                          "D. 4"
                                      ],
                          "answer":  "A",
                          "key":  "1−cos2x ~ (2x)²/2 = 2x² ⇒ 2",
                          "kp":  "#1",
                          "level":  "S",
                          "tags":  [
                                       "极限"
                                   ]
                      },
                      {
                          "id":  "Q1029-03",
                          "sub":  "数学",
                          "topic":  "第二重要极限",
                          "type":  "choice",
                          "stem":  "lim(x→0) (1+x)^(1/x) 等于",
                          "options":  [
                                          "A. e",
                                          "B. 1",
                                          "C. 0",
                                          "D. ∞"
                                      ],
                          "answer":  "A",
                          "key":  "标准结果 e；写成 1 是把它当成 (1+0)^∞",
                          "kp":  "#1",
                          "level":  "S",
                          "tags":  [
                                       "极限"
                                   ]
                      },
                      {
                          "id":  "Q1029-04",
                          "sub":  "数学",
                          "topic":  "1^∞ 型",
                          "type":  "choice",
                          "stem":  "lim(x→∞) (1+2/x)^x = ____",
                          "options":  [
                                          "A. e²",
                                          "B. e",
                                          "C. √e",
                                          "D. 2e"
                                      ],
                          "answer":  "A",
                          "key":  "= [(1+2/x)^(x/2)]² → e²",
                          "kp":  "#1",
                          "level":  "S",
                          "tags":  [
                                       "极限"
                                   ]
                      },
                      {
                          "id":  "Q1029-05",
                          "sub":  "数学",
                          "topic":  "有理化",
                          "type":  "choice",
                          "stem":  "lim(x→∞) (√(x²+x) − x) = ____",
                          "options":  [
                                          "A. 1/2",
                                          "B. 1",
                                          "C. 0",
                                          "D. +∞"
                                      ],
                          "answer":  "A",
                          "key":  "有理化得 x/(√(x²+x)+x) → 1/2",
                          "kp":  "#1",
                          "level":  "S",
                          "tags":  [
                                       "极限"
                                   ]
                      },
                      {
                          "id":  "Q1029-06",
                          "sub":  "数学",
                          "topic":  "间断点分类",
                          "type":  "choice",
                          "stem":  "x=0 是 f(x)=1/x 的哪类间断点",
                          "options":  [
                                          "A. 可去间断点",
                                          "B. 跳跃间断点",
                                          "C. 无穷间断点（第二类）",
                                          "D. 振荡间断点"
                                      ],
                          "answer":  "C",
                          "key":  "单侧极限为无穷 ⇒ 第二类无穷间断",
                          "kp":  "#3",
                          "level":  "S",
                          "tags":  [
                                       "极限",
                                       "连续"
                                   ]
                      },
                      {
                          "id":  "Q1029-07",
                          "sub":  "数学",
                          "topic":  "泰勒比阶",
                          "type":  "choice",
                          "stem":  "lim(x→0) (tan x − x)/x³ = ____",
                          "options":  [
                                          "A. 1/3",
                                          "B. 1/2",
                                          "C. 1/6",
                                          "D. 1"
                                      ],
                          "answer":  "A",
                          "key":  "tan x = x + x³/3 + … ⇒ 1/3",
                          "kp":  "#1",
                          "level":  "S",
                          "tags":  [
                                       "极限",
                                       "泰勒"
                                   ]
                      },
                      {
                          "id":  "Q1029-08",
                          "sub":  "数学",
                          "topic":  "无穷小阶的比较",
                          "type":  "choice",
                          "stem":  "x→0 时，x − sin x 与 x³ 的关系是",
                          "options":  [
                                          "A. 等价无穷小",
                                          "B. 同阶但不等价",
                                          "C. 高阶无穷小",
                                          "D. 低阶无穷小"
                                      ],
                          "answer":  "B",
                          "key":  "x−sinx ~ x³/6 ⇒ 同阶但不等价（比值 1/6）",
                          "kp":  "#1",
                          "level":  "S",
                          "tags":  [
                                       "极限",
                                       "泰勒"
                                   ]
                      },
                      {
                          "id":  "Q1029-09",
                          "sub":  "数学",
                          "topic":  "导数定义",
                          "type":  "choice",
                          "stem":  "f(x)=|x| 在 x=0 处",
                          "options":  [
                                          "A. 可导且 f′(0)=0",
                                          "B. 不可导（左右导数不等）",
                                          "C. 连续但不可导且左右导数为 ±1",
                                          "D. 不连续"
                                      ],
                          "answer":  "C",
                          "key":  "左导 −1、右导 +1 ⇒ 不可导；连续",
                          "kp":  "#6",
                          "level":  "S",
                          "tags":  [
                                       "导数"
                                   ]
                      },
                      {
                          "id":  "Q1029-10",
                          "sub":  "数学",
                          "topic":  "分段点可导",
                          "type":  "choice",
                          "stem":  "f(x)=x|x| 在 x=0 处",
                          "options":  [
                                          "A. 不可导",
                                          "B. 可导且 f′(0)=0",
                                          "C. 可导且 f′(0)=1",
                                          "D. 不连续"
                                      ],
                          "answer":  "B",
                          "key":  "f=x²(x\u003e0)/−x²(x\u003c0) ⇒ 左右导都为 0",
                          "kp":  "#6",
                          "level":  "S",
                          "tags":  [
                                       "导数"
                                   ]
                      },
                      {
                          "id":  "Q1029-11",
                          "sub":  "数学",
                          "topic":  "极值",
                          "type":  "choice",
                          "stem":  "y=x³−3x 的极大值是 ____",
                          "options":  [
                                          "A. 2",
                                          "B. −2",
                                          "C. 0",
                                          "D. 1"
                                      ],
                          "answer":  "A",
                          "key":  "y′=3x²−3=0 ⇒ x=±1；x=−1 为极大，y(−1)=2",
                          "kp":  "#8",
                          "level":  "S",
                          "tags":  [
                                       "导数应用"
                                   ]
                      },
                      {
                          "id":  "Q1029-12",
                          "sub":  "数学",
                          "topic":  "f″=0 的三种可能",
                          "type":  "choice",
                          "stem":  "若 f″(x₀)=0，则 x₀ 处",
                          "options":  [
                                          "A. 必有拐点",
                                          "B. 必为极值点",
                                          "C. 可能既非拐点也非极值点",
                                          "D. 一定不是拐点"
                                      ],
                          "answer":  "C",
                          "key":  "反例 f(x)=x⁴+x：f″=12x²≥0 不变号（非拐点）、f′=4x³+1\u003e0 单调（无极值），但 f″(0)=0",
                          "kp":  "#9",
                          "level":  "S",
                          "tags":  [
                                       "导数应用"
                                   ]
                      },
                      {
                          "id":  "Q1029-13",
                          "sub":  "数学",
                          "topic":  "曲率",
                          "type":  "fill",
                          "stem":  "y=x² 在 x=1 处的曲率 κ = ____（可填 2/(5√5)）",
                          "options":  [

                                      ],
                          "answer":  "2/(5√5)",
                          "key":  "κ=|y″|/(1+y′²)^{3/2}=2/(1+4)^{3/2}=2/(5√5)",
                          "kp":  "#10",
                          "level":  "S",
                          "tags":  [
                                       "导数应用",
                                       "曲率"
                                   ],
                          "accept":  [
                                         "2/(5^(3/2))"
                                     ]
                      },
                      {
                          "id":  "Q1029-14",
                          "sub":  "数学",
                          "topic":  "泰勒展开",
                          "type":  "choice",
                          "stem":  "sin x = x − ____·x³ + o(x³)（填系数）",
                          "options":  [
                                          "A. 1/6",
                                          "B. 1/3",
                                          "C. 1/2",
                                          "D. 1"
                                      ],
                          "answer":  "A",
                          "key":  "sin x = x − x³/6 + …",
                          "kp":  "#13",
                          "level":  "S",
                          "tags":  [
                                       "泰勒"
                                   ]
                      },
                      {
                          "id":  "Q1029-15",
                          "sub":  "数学",
                          "topic":  "分部积分",
                          "type":  "choice",
                          "stem":  "∫ x eˣ dx = ____（填结果，含 +C）",
                          "options":  [
                                          "A. (x−1)eˣ + C",
                                          "B. (x+1)eˣ + C",
                                          "C. xeˣ + C",
                                          "D. (1−x)eˣ + C"
                                      ],
                          "answer":  "A",
                          "key":  "∫xe^x dx = xe^x − e^x + C = (x−1)e^x + C",
                          "kp":  "#15",
                          "level":  "S",
                          "tags":  [
                                       "积分"
                                   ]
                      },
                      {
                          "id":  "Q1029-16",
                          "sub":  "数学",
                          "topic":  "分部积分",
                          "type":  "fill",
                          "stem":  "∫ ln x dx = ____（含 +C）",
                          "options":  [

                                      ],
                          "answer":  "xlnx-x+C",
                          "key":  "= x ln x − ∫x·(1/x)dx = x ln x − x + C",
                          "kp":  "#15",
                          "level":  "S",
                          "tags":  [
                                       "积分"
                                   ],
                          "accept":  [
                                         "x ln x − x + C"
                                     ]
                      },
                      {
                          "id":  "Q1029-17",
                          "sub":  "数学",
                          "topic":  "变限积分求导",
                          "type":  "choice",
                          "stem":  "d/dx ∫₀^{x²} sin t dt 等于",
                          "options":  [
                                          "A. sin(x²)",
                                          "B. 2x·sin(x²)",
                                          "C. 2x·cos(x²)",
                                          "D. sin(2x)"
                                      ],
                          "answer":  "B",
                          "key":  "上限是 x²，链式乘 2x ⇒ 2x sin(x²)",
                          "kp":  "#16",
                          "level":  "S",
                          "tags":  [
                                       "积分",
                                       "变限"
                                   ]
                      },
                      {
                          "id":  "Q1029-18",
                          "sub":  "数学",
                          "topic":  "定积分",
                          "type":  "choice",
                          "stem":  "∫₀¹ x² dx = ____",
                          "options":  [
                                          "A. 1/3",
                                          "B. 1/2",
                                          "C. 1/4",
                                          "D. 1"
                                      ],
                          "answer":  "A",
                          "key":  "x³/3 |₀¹ = 1/3",
                          "kp":  "#17",
                          "level":  "S",
                          "tags":  [
                                       "积分"
                                   ]
                      },
                      {
                          "id":  "Q1029-19",
                          "sub":  "数学",
                          "topic":  "华里士公式",
                          "type":  "choice",
                          "stem":  "∫₀^{π/2} sin³x dx = ____",
                          "options":  [
                                          "A. 2/3",
                                          "B. 1/2",
                                          "C. 4/3",
                                          "D. 3/4"
                                      ],
                          "answer":  "A",
                          "key":  "华里士：奇数 n ⇒ 2/3",
                          "kp":  "#17",
                          "level":  "S",
                          "tags":  [
                                       "积分",
                                       "华里士"
                                   ]
                      },
                      {
                          "id":  "Q1029-20",
                          "sub":  "数学",
                          "topic":  "反常积分收敛",
                          "type":  "choice",
                          "stem":  "∫₁^∞ dx/x^p 收敛的条件是",
                          "options":  [
                                          "A. p\u003e0",
                                          "B. p≥1",
                                          "C. p\u003e1",
                                          "D. p\u003c1"
                                      ],
                          "answer":  "C",
                          "key":  "p\u003e1 收敛，p≤1 发散；记住临界 p=1",
                          "kp":  "#18",
                          "level":  "S",
                          "tags":  [
                                       "反常积分"
                                   ]
                      },
                      {
                          "id":  "Q1029-21",
                          "sub":  "数学",
                          "topic":  "旋转体（圆盘法）",
                          "type":  "choice",
                          "stem":  "y=√x 在 [0,4] 上绕 x 轴旋转，V = ____（填 π 的倍数）",
                          "options":  [
                                          "A. 8π",
                                          "B. 16π",
                                          "C. 4π",
                                          "D. 8π/3"
                                      ],
                          "answer":  "A",
                          "key":  "V=π∫₀⁴ x dx = 8π",
                          "kp":  "#21",
                          "level":  "S",
                          "tags":  [
                                       "旋转体"
                                   ]
                      },
                      {
                          "id":  "Q1029-22",
                          "sub":  "数学",
                          "topic":  "旋转体（柱壳法）",
                          "type":  "fill",
                          "stem":  "y=f(x)≥0 绕 y 轴旋转，V=2π∫ₐᵇ ____ dx（填被积函数）",
                          "options":  [

                                      ],
                          "answer":  "x f(x)",
                          "key":  "柱壳法被积是 x·f(x)；绕 x 轴才是 f²",
                          "kp":  "#21",
                          "level":  "S",
                          "tags":  [
                                       "旋转体"
                                   ],
                          "accept":  [
                                         "xf(x)",
                                         "x·f(x)",
                                         "x*f(x)"
                                     ]
                      },
                      {
                          "id":  "Q1029-23",
                          "sub":  "数学",
                          "topic":  "全微分",
                          "type":  "choice",
                          "stem":  "z=x²y，dz = ____（填 2xy dx + x² dy 形式）",
                          "options":  [
                                          "A. 2xy dx + x² dy",
                                          "B. 2x dx + dy",
                                          "C. x² dx + 2xy dy",
                                          "D. y dx + x dy"
                                      ],
                          "answer":  "A",
                          "key":  "z_x=2xy、z_y=x² ⇒ dz=2xy dx + x² dy（漏项扣光）",
                          "kp":  "#26",
                          "level":  "S",
                          "tags":  [
                                       "多元"
                                   ]
                      },
                      {
                          "id":  "Q1029-24",
                          "sub":  "数学",
                          "topic":  "无条件极值",
                          "type":  "choice",
                          "stem":  "f(x,y)=x²+y²−2x−4y 的极小值点是 ____（填 (x,y)）",
                          "options":  [
                                          "A. (1, 2)",
                                          "B. (−1, −2)",
                                          "C. (1, −2)",
                                          "D. (2, 1)"
                                      ],
                          "answer":  "A",
                          "key":  "f_x=2x−2=0、f_y=2y−4=0 ⇒ (1,2)",
                          "kp":  "#28",
                          "level":  "S",
                          "tags":  [
                                       "多元",
                                       "极值"
                                   ]
                      },
                      {
                          "id":  "Q1029-25",
                          "sub":  "数学",
                          "topic":  "条件极值",
                          "type":  "choice",
                          "stem":  "z=x²+y² 在约束 x+y=1 下的最小值是",
                          "options":  [
                                          "A. 1/4",
                                          "B. 1/2",
                                          "C. 1",
                                          "D. 0"
                                      ],
                          "answer":  "B",
                          "key":  "L=x²+y²+λ(x+y−1) ⇒ x=y=1/2 ⇒ z=1/2",
                          "kp":  "#29",
                          "level":  "S",
                          "tags":  [
                                       "多元",
                                       "拉格朗日"
                                   ]
                      },
                      {
                          "id":  "Q1029-26",
                          "sub":  "数学",
                          "topic":  "区域定界与面积",
                          "type":  "choice",
                          "stem":  "D 由 y=x² 与 y=x 围成，其面积为 ____",
                          "options":  [
                                          "A. 1/6",
                                          "B. 1/3",
                                          "C. 1/2",
                                          "D. 1"
                                      ],
                          "answer":  "A",
                          "key":  "∫₀¹(x−x²)dx = 1/2 − 1/3 = 1/6",
                          "kp":  "#31",
                          "level":  "S",
                          "tags":  [
                                       "二重积分"
                                   ]
                      },
                      {
                          "id":  "Q1029-27",
                          "sub":  "数学",
                          "topic":  "对称性",
                          "type":  "choice",
                          "stem":  "若 D 关于 y 轴对称，则 ∬_D x dxdy 等于",
                          "options":  [
                                          "A. 2∬_{D,x≥0} x dxdy",
                                          "B. 0",
                                          "C. ∬_D |x| dxdy",
                                          "D. 无法判断"
                                      ],
                          "answer":  "B",
                          "key":  "x 关于 x 为奇函数 ⇒ 积分为 0（先写「区域对称、被积为奇」再得 0）",
                          "kp":  "#33",
                          "level":  "S",
                          "tags":  [
                                       "二重积分",
                                       "对称性"
                                   ]
                      },
                      {
                          "id":  "Q1029-28",
                          "sub":  "数学",
                          "topic":  "极坐标面积元",
                          "type":  "choice",
                          "stem":  "极坐标下 dσ = ____（填 r dr dθ 形式）",
                          "options":  [
                                          "A. r dr dθ",
                                          "B. dr dθ",
                                          "C. r² dr dθ",
                                          "D. dr dθ / r"
                                      ],
                          "answer":  "A",
                          "key":  "漏 r 是最常见错误（2018 选 6）",
                          "kp":  "#32",
                          "level":  "S",
                          "tags":  [
                                       "二重积分",
                                       "极坐标"
                                   ]
                      },
                      {
                          "id":  "Q1029-29",
                          "sub":  "数学",
                          "topic":  "可分离变量",
                          "type":  "choice",
                          "stem":  "y′=2xy 的通解 y = ____（填 C 表达式）",
                          "options":  [
                                          "A. y = C·e^(x²)",
                                          "B. y = C·e^(2x)",
                                          "C. y = C·e^(x²/2)",
                                          "D. y = C·x²"
                                      ],
                          "answer":  "A",
                          "key":  "dy/y=2x dx ⇒ ln|y|=x²+C ⇒ y=Ce^{x²}",
                          "kp":  "#35",
                          "level":  "S",
                          "tags":  [
                                       "微分方程"
                                   ]
                      },
                      {
                          "id":  "Q1029-30",
                          "sub":  "数学",
                          "topic":  "特征根",
                          "type":  "choice",
                          "stem":  "y″−3y′+2y=0 的特征根是 ____（填两个数，如 1,2）",
                          "options":  [
                                          "A. 1 和 2",
                                          "B. −1 和 −2",
                                          "C. 1 和 −2",
                                          "D. 2 和 3"
                                      ],
                          "answer":  "A",
                          "key":  "r²−3r+2=0 ⇒ r=1,2",
                          "kp":  "#37",
                          "level":  "S",
                          "tags":  [
                                       "微分方程"
                                   ]
                      },
                      {
                          "id":  "Q1029-31",
                          "sub":  "数学",
                          "topic":  "重根通解形式",
                          "type":  "choice",
                          "stem":  "特征根 r 为重根时，齐次通解形式是",
                          "options":  [
                                          "A. C e^{rx}",
                                          "B. (C₁+C₂x)e^{rx}",
                                          "C. C₁e^{rx}+C₂e^{−rx}",
                                          "D. C e^{rx}+x"
                                      ],
                          "answer":  "B",
                          "key":  "重根要乘 x，否则只有 1 个解",
                          "kp":  "#37",
                          "level":  "S",
                          "tags":  [
                                       "微分方程"
                                   ]
                      },
                      {
                          "id":  "Q1029-32",
                          "sub":  "数学",
                          "topic":  "非齐次特解形式",
                          "type":  "choice",
                          "stem":  "y″+y=x² 的特解应设为",
                          "options":  [
                                          "A. ae^{x}",
                                          "B. ax²+bx+c",
                                          "C. ax³",
                                          "D. x(ax²+bx+c)"
                                      ],
                          "answer":  "B",
                          "key":  "右端是二次多项式且 λ=0 不是特征根 ⇒ 设同次多项式",
                          "kp":  "#38",
                          "level":  "S",
                          "tags":  [
                                       "微分方程"
                                   ]
                      },
                      {
                          "id":  "Q1029-33",
                          "sub":  "数学",
                          "topic":  "建模只列式",
                          "type":  "fill",
                          "stem":  "水箱 200L、初始盐 20kg，注入 4L/min 含盐 0.5kg/L、排出 2L/min。dm/dt = 2 − ____（填 m 的那一项）",
                          "options":  [

                                      ],
                          "answer":  "2m/(200+2t)",
                          "key":  "排出带走 2·m/(200+2t)；体积 200+2t 随时间变，不能写 200",
                          "kp":  "#39",
                          "level":  "A",
                          "tags":  [
                                       "微分方程",
                                       "建模"
                                   ],
                          "accept":  [
                                         "2m/(200+2t) "
                                     ]
                      },
                      {
                          "id":  "Q1029-34",
                          "sub":  "数学",
                          "topic":  "行列式与逆",
                          "type":  "choice",
                          "stem":  "A 为 3 阶矩阵、|A|=2，则 |2A⁻¹| = ____",
                          "options":  [
                                          "A. 4",
                                          "B. 1",
                                          "C. 2",
                                          "D. 8"
                                      ],
                          "answer":  "A",
                          "key":  "|kA⁻¹|=k³/|A|=8/2=4（3 阶用三次方）",
                          "kp":  "#41",
                          "level":  "S",
                          "tags":  [
                                       "线代"
                                   ]
                      },
                      {
                          "id":  "Q1029-35",
                          "sub":  "数学",
                          "topic":  "基础解系个数",
                          "type":  "choice",
                          "stem":  "4 元齐次方程组 r(A)=2，基础解系含 ____ 个向量",
                          "options":  [
                                          "A. 2",
                                          "B. 1",
                                          "C. 3",
                                          "D. 4"
                                      ],
                          "answer":  "A",
                          "key":  "n−r=4−2=2",
                          "kp":  "#45",
                          "level":  "S",
                          "tags":  [
                                       "线代"
                                   ]
                      },
                      {
                          "id":  "Q1029-36",
                          "sub":  "数学",
                          "topic":  "数乘与特征值",
                          "type":  "choice",
                          "stem":  "λ 是 A 的特征值，x 为对应特征向量；α=2x 的特征值是",
                          "options":  [
                                          "A. 2λ",
                                          "B. λ",
                                          "C. λ/2",
                                          "D. 不是特征向量"
                                      ],
                          "answer":  "B",
                          "key":  "A(2x)=2λx=λ(2x) ⇒ 特征值不变",
                          "kp":  "#48",
                          "level":  "S",
                          "tags":  [
                                       "线代"
                                   ]
                      },
                      {
                          "id":  "Q1029-37",
                          "sub":  "数学",
                          "topic":  "可对角化判据",
                          "type":  "choice",
                          "stem":  "n 阶矩阵 A 可对角化的充要条件是",
                          "options":  [
                                          "A. A 可逆",
                                          "B. A 有 n 个特征值",
                                          "C. 每个特征值的几何重数等于代数重数",
                                          "D. A 对称"
                                      ],
                          "answer":  "C",
                          "key":  "n 个互异特征值只是充分条件；重根必须几何=代数（g=m）",
                          "kp":  "#49",
                          "level":  "S",
                          "tags":  [
                                       "线代"
                                   ]
                      },
                      {
                          "id":  "Q1029-38",
                          "sub":  "数学",
                          "topic":  "伴随矩阵行列式",
                          "type":  "choice",
                          "stem":  "n 阶矩阵 A，|A*| = ____（用 |A| 表示，填 |A|^k 的 k）",
                          "options":  [
                                          "A. n−1",
                                          "B. n",
                                          "C. n+1",
                                          "D. 1"
                                      ],
                          "answer":  "A",
                          "key":  "|A*|=|A|^{n−1}（n=3 时是 |A|²）",
                          "kp":  "#41",
                          "level":  "S",
                          "tags":  [
                                       "线代"
                                   ]
                      },
                      {
                          "id":  "Q1029-39",
                          "sub":  "数学",
                          "topic":  "实对称矩阵",
                          "type":  "choice",
                          "stem":  "实对称矩阵必定",
                          "options":  [
                                          "A. 可逆",
                                          "B. 可正交对角化",
                                          "C. 正定",
                                          "D. 满秩"
                                      ],
                          "answer":  "B",
                          "key":  "实对称 ⇒ 存在正交 Q 使 QᵀAQ 为对角阵；正定还要求特征值全正",
                          "kp":  "#50",
                          "level":  "S",
                          "tags":  [
                                       "线代"
                                   ]
                      },
                      {
                          "id":  "Q1029-40",
                          "sub":  "数学",
                          "topic":  "惯性指数",
                          "type":  "choice",
                          "stem":  "f=x₁²+4x₁x₂+3x₂² 的正惯性指数是 ____",
                          "options":  [
                                          "A. 1",
                                          "B. 2",
                                          "C. 0",
                                          "D. 3"
                                      ],
                          "answer":  "A",
                          "key":  "矩阵 [[1,2],[2,3]]，det=−1\u003c0 ⇒ 不定 ⇒ p=1,q=1",
                          "kp":  "#51",
                          "level":  "S",
                          "tags":  [
                                       "线代",
                                       "二次型"
                                   ]
                      },
                      {
                          "id":  "Q1029-41",
                          "sub":  "数学",
                          "topic":  "AB=C 有解",
                          "type":  "choice",
                          "stem":  "存在矩阵 B 使 AB=C 的充要条件是",
                          "options":  [
                                          "A. r(A)=r(C)",
                                          "B. r(A)=r(A|C)",
                                          "C. r(B)=r(C)",
                                          "D. A 可逆"
                                      ],
                          "answer":  "B",
                          "key":  "C 的每一列要落在 A 的列空间；r 相等不够（反例：A 秩 1、C 秩 1 但不同空间）",
                          "kp":  "#43",
                          "level":  "S",
                          "tags":  [
                                       "线代",
                                       "秩"
                                   ]
                      },
                      {
                          "id":  "Q1029-42",
                          "sub":  "数学",
                          "topic":  "解空间包含",
                          "type":  "choice",
                          "stem":  "「Ax=0 的解都是 Bx=0 的解」等价于",
                          "options":  [
                                          "A. r(A)≤r(B)",
                                          "B. r(A)≥r(B)",
                                          "C. r(A)=r(B)",
                                          "D. n−r(A)≥n−r(B)"
                                      ],
                          "answer":  "B",
                          "key":  "N(A)⊂N(B) ⇔ n−r(A) ≤ n−r(B) ⇔ r(A) ≥ r(B)（方向易错）",
                          "kp":  "#45",
                          "level":  "S",
                          "tags":  [
                                       "线代"
                                   ]
                      },
                      {
                          "id":  "Q1029-43",
                          "sub":  "数学",
                          "topic":  "极大无关组",
                          "type":  "choice",
                          "stem":  "3 维向量组的秩为 2，其极大无关组含 ____ 个向量",
                          "options":  [
                                          "A. 2",
                                          "B. 1",
                                          "C. 3",
                                          "D. 4"
                                      ],
                          "answer":  "A",
                          "key":  "极大无关组个数 = 秩",
                          "kp":  "#44",
                          "level":  "S",
                          "tags":  [
                                       "线代"
                                   ]
                      },
                      {
                          "id":  "Q1029-44",
                          "sub":  "数学",
                          "topic":  "特征值乘积",
                          "type":  "fill",
                          "stem":  "3 阶矩阵 A 的特征值为 1、2、3，则 |A| = ____",
                          "options":  [

                                      ],
                          "answer":  "6",
                          "key":  "|A| = 特征值之积 = 6",
                          "kp":  "#48",
                          "level":  "S",
                          "tags":  [
                                       "线代"
                                   ]
                      },
                      {
                          "id":  "Q1029-45",
                          "sub":  "数学",
                          "topic":  "黎曼和步长",
                          "type":  "choice",
                          "stem":  "下列哪个等于 ∫₀¹f(x)dx（f 连续）",
                          "options":  [
                                          "A. lim (1/n)Σ_{k=1}^n f(k/n)",
                                          "B. lim (1/(2n))Σ_{k=1}^n f((2k−1)/(2n))",
                                          "C. lim (1/n)Σ_{k=1}^{2n} f(k/n)",
                                          "D. lim Σ_{k=1}^n f(k)"
                                      ],
                          "answer":  "A",
                          "key":  "判据是「项数×系数=1」；B 项数是 n 不是 2n，所以它是 1/2·∫f",
                          "kp":  "#17",
                          "level":  "S",
                          "tags":  [
                                       "趋势",
                                       "黎曼和"
                                   ]
                      },
                      {
                          "id":  "Q1029-46",
                          "sub":  "数学",
                          "topic":  "分段原函数",
                          "type":  "choice",
                          "stem":  "求分段函数的一个原函数时，拼接点必须",
                          "options":  [
                                          "A. 左极限=右极限（函数连续衔接）",
                                          "B. 导数相等",
                                          "C. 函数值都为 0",
                                          "D. 任意，无需处理"
                                      ],
                          "answer":  "A",
                          "key":  "原函数必须连续；只对分段积分不衔接 ⇒ 不是原函数",
                          "kp":  "#15",
                          "level":  "S",
                          "tags":  [
                                       "趋势",
                                       "原函数"
                                   ]
                      },
                      {
                          "id":  "Q1029-47",
                          "sub":  "数学",
                          "topic":  "Rayleigh 商",
                          "type":  "choice",
                          "stem":  "设 A 实对称，则 f(x)/xᵀx（x≠0）的最小值等于",
                          "options":  [
                                          "A. 最大特征值",
                                          "B. 最小特征值",
                                          "C. 平均特征值",
                                          "D. 0"
                                      ],
                          "answer":  "B",
                          "key":  "x=Qy 时分母 yᵀy、分子 Σλᵢyᵢ² ⇒ 最小值 λ_min 在对应特征向量处取得",
                          "kp":  "#50",
                          "level":  "A",
                          "tags":  [
                                       "趋势",
                                       "二次型"
                                   ]
                      },
                      {
                          "id":  "Q1029-48",
                          "sub":  "数学",
                          "topic":  "无界区域旋转体",
                          "type":  "choice",
                          "stem":  "遇到「无界区域绕轴旋转求体积」，第一步应",
                          "options":  [
                                          "A. 直接积分到 ∞",
                                          "B. 先找拐点/交点定自然边界，再验证收敛",
                                          "C. 先求旋转面面积",
                                          "D. 先换极坐标"
                                      ],
                          "answer":  "B",
                          "key":  "2026 回忆版第 20 题就是这个形态：先用拐点定终点",
                          "kp":  "#21",
                          "level":  "A",
                          "tags":  [
                                       "趋势",
                                       "旋转体"
                                   ]
                      },
                      {
                          "id":  "Q1029-49",
                          "sub":  "数学",
                          "topic":  "调和函数",
                          "type":  "fill",
                          "stem":  "z=ln(x²+y²)，则 z_xx + z_yy = ____",
                          "options":  [

                                      ],
                          "answer":  "0",
                          "key":  "z_xx=(2y²−2x²)/(x²+y²)²、z_yy=(2x²−2y²)/(x²+y²)² ⇒ 和为 0",
                          "kp":  "#27",
                          "level":  "A",
                          "tags":  [
                                       "趋势",
                                       "多元"
                                   ]
                      },
                      {
                          "id":  "P01",
                          "sub":  "政治",
                          "topic":  "马原·物质范畴",
                          "type":  "choice",
                          "stem":  "马克思主义哲学的物质范畴，其唯一特性是",
                          "options":  [
                                          "A. 客观实在性",
                                          "B. 可知性",
                                          "C. 运动性",
                                          "D. 广延性"
                                      ],
                          "answer":  "A",
                          "key":  "物质唯一特性是客观实在性；运动、可知性是属性但不是「唯一特性」。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P02",
                          "sub":  "政治",
                          "topic":  "马原·实践与认识",
                          "type":  "choice",
                          "stem":  "认识的来源是",
                          "options":  [
                                          "A. 书本",
                                          "B. 实践",
                                          "C. 经验",
                                          "D. 天赋"
                                      ],
                          "answer":  "B",
                          "key":  "实践是认识的唯一来源；书本与经验是获取途径，不是来源。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P03",
                          "sub":  "政治",
                          "topic":  "马原·量变质变",
                          "type":  "choice",
                          "stem":  "关于量变与质变，正确的是",
                          "options":  [
                                          "A. 量变必然引起质变",
                                          "B. 量变是质变的必要准备",
                                          "C. 质变是量变的重复",
                                          "D. 二者互不相干"
                                      ],
                          "answer":  "B",
                          "key":  "量变是质变的必要准备、质变是量变的必然结果；但「必然引起」需度被突破。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P04",
                          "sub":  "政治",
                          "topic":  "马原·矛盾",
                          "type":  "choice",
                          "stem":  "矛盾的普遍性与特殊性的关系是",
                          "options":  [
                                          "A. 特殊性寓于普遍性之中",
                                          "B. 普遍性寓于特殊性之中",
                                          "C. 两者并列",
                                          "D. 两者互相排斥"
                                      ],
                          "answer":  "B",
                          "key":  "共性寓于个性之中（普遍性寓于特殊性）。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P05",
                          "sub":  "政治",
                          "topic":  "马原·意识",
                          "type":  "choice",
                          "stem":  "意识的能动作用表现在",
                          "options":  [
                                          "A. 意识可以直接创造物质",
                                          "B. 意识能反映并指导实践改造世界",
                                          "C. 意识决定物质",
                                          "D. 意识与物质无关"
                                      ],
                          "answer":  "B",
                          "key":  "意识能动性有条件和范围，不能直接创造物质，也不能决定物质。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P06",
                          "sub":  "政治",
                          "topic":  "马原·商品二因素",
                          "type":  "choice",
                          "stem":  "商品的二因素是",
                          "options":  [
                                          "A. 价值与价格",
                                          "B. 使用价值与价值",
                                          "C. 具体劳动与抽象劳动",
                                          "D. 交换价值与价值"
                                      ],
                          "answer":  "B",
                          "key":  "使用价值与价值是商品二因素；具体/抽象劳动是劳动二重性。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P07",
                          "sub":  "政治",
                          "topic":  "马原·剩余价值",
                          "type":  "choice",
                          "stem":  "剩余价值的来源是",
                          "options":  [
                                          "A. 资本家的垫付资本",
                                          "B. 雇佣工人的剩余劳动",
                                          "C. 流通中的贱买贵卖",
                                          "D. 技术进步"
                                      ],
                          "answer":  "B",
                          "key":  "剩余价值在生产中由雇佣工人的剩余劳动创造。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P08",
                          "sub":  "政治",
                          "topic":  "马原·经济危机",
                          "type":  "choice",
                          "stem":  "资本主义经济危机的实质是",
                          "options":  [
                                          "A. 生产绝对过剩",
                                          "B. 生产相对过剩",
                                          "C. 消费严重不足",
                                          "D. 货币供给短缺"
                                      ],
                          "answer":  "B",
                          "key":  "是「生产相对过剩」——相对于劳动群众有支付能力的需求而言。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P09",
                          "sub":  "政治",
                          "topic":  "毛中特·活的灵魂",
                          "type":  "choice",
                          "stem":  "毛泽东思想活的灵魂是",
                          "options":  [
                                          "A. 实事求是、群众路线、独立自主",
                                          "B. 解放思想、实事求是",
                                          "C. 三大法宝",
                                          "D. 两个务必"
                                      ],
                          "answer":  "A",
                          "key":  "活的灵魂三项：实事求是、群众路线、独立自主。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P10",
                          "sub":  "政治",
                          "topic":  "毛中特·新民主主义革命",
                          "type":  "choice",
                          "stem":  "新民主主义革命的领导阶级是",
                          "options":  [
                                          "A. 资产阶级",
                                          "B. 无产阶级",
                                          "C. 农民阶级",
                                          "D. 小资产阶级"
                                      ],
                          "answer":  "B",
                          "key":  "领导权属于无产阶级（通过共产党）。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P11",
                          "sub":  "政治",
                          "topic":  "毛中特·主要矛盾",
                          "type":  "choice",
                          "stem":  "进入新时代，我国社会主要矛盾是",
                          "options":  [
                                          "A. 人民日益增长的物质文化需要同落后的社会生产之间的矛盾",
                                          "B. 人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾",
                                          "C. 无产阶级同资产阶级的矛盾",
                                          "D. 生产力同生产关系的矛盾"
                                      ],
                          "answer":  "B",
                          "key":  "十九大表述；旧的「物质文化需要／落后社会生产」已作废。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P12",
                          "sub":  "政治",
                          "topic":  "毛中特·中国梦",
                          "type":  "choice",
                          "stem":  "中国梦的本质是",
                          "options":  [
                                          "A. 国家富强、民族振兴、人民幸福",
                                          "B. 富强、民主、文明、和谐",
                                          "C. 共同富裕",
                                          "D. 和平发展"
                                      ],
                          "answer":  "A",
                          "key":  "中国梦本质＝国家富强、民族振兴、人民幸福；B 是社会主义核心价值观国家层面。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P13",
                          "sub":  "政治",
                          "topic":  "思修·核心价值观",
                          "type":  "choice",
                          "stem":  "社会主义核心价值观中，国家层面的价值目标是",
                          "options":  [
                                          "A. 富强、民主、文明、和谐",
                                          "B. 自由、平等、公正、法治",
                                          "C. 爱国、敬业、诚信、友善",
                                          "D. 和平、发展、合作、共赢"
                                      ],
                          "answer":  "A",
                          "key":  "三层：国家（富强民主文明和谐）／社会（自由平等公正法治）／个人（爱国敬业诚信友善）。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P14",
                          "sub":  "政治",
                          "topic":  "毛中特·新发展理念",
                          "type":  "choice",
                          "stem":  "新发展理念是",
                          "options":  [
                                          "A. 创新、协调、绿色、开放、共享",
                                          "B. 创新、改革、绿色、开放、共享",
                                          "C. 协调、绿色、改革、开放、共享",
                                          "D. 创新、协调、发展、开放、共享"
                                      ],
                          "answer":  "A",
                          "key":  "五个：创新（动力）、协调（内在要求）、绿色（必要条件）、开放（必由之路）、共享（本质要求）。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P15",
                          "sub":  "政治",
                          "topic":  "毛中特·改革总目标",
                          "type":  "choice",
                          "stem":  "全面深化改革的总目标是",
                          "options":  [
                                          "A. 完善和发展中国特色社会主义制度、推进国家治理体系和治理能力现代化",
                                          "B. 建立社会主义市场经济体制",
                                          "C. 实现共同富裕",
                                          "D. 全面建成小康社会"
                                      ],
                          "answer":  "A",
                          "key":  "注意是「两句话」整体表述，缺一不可。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P16",
                          "sub":  "政治",
                          "topic":  "史纲·近代开端",
                          "type":  "choice",
                          "stem":  "中国近代史的开端是",
                          "options":  [
                                          "A. 鸦片战争",
                                          "B. 甲午战争",
                                          "C. 辛亥革命",
                                          "D. 五四运动"
                                      ],
                          "answer":  "A",
                          "key":  "1840 年鸦片战争使中国开始沦为半殖民地半封建社会。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P17",
                          "sub":  "政治",
                          "topic":  "史纲·辛亥革命",
                          "type":  "choice",
                          "stem":  "辛亥革命的历史功绩主要是",
                          "options":  [
                                          "A. 建立了人民民主专政",
                                          "B. 推翻了君主专制制度",
                                          "C. 完成了反帝反封建任务",
                                          "D. 实现了民族独立"
                                      ],
                          "answer":  "B",
                          "key":  "推翻帝制、建立共和；但没有改变半殖民地半封建社会性质。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P18",
                          "sub":  "政治",
                          "topic":  "史纲·五四运动",
                          "type":  "choice",
                          "stem":  "五四运动的性质是",
                          "options":  [
                                          "A. 资产阶级改良运动",
                                          "B. 彻底反帝反封建的爱国革命运动",
                                          "C. 无产阶级社会主义革命",
                                          "D. 农民战争"
                                      ],
                          "answer":  "B",
                          "key":  "五四运动是新民主主义革命的开端，性质是彻底反帝反封建爱国革命运动。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P19",
                          "sub":  "政治",
                          "topic":  "史纲·抗战胜利",
                          "type":  "choice",
                          "stem":  "中国人民抗日战争胜利的时间是",
                          "options":  [
                                          "A. 1945 年",
                                          "B. 1943 年",
                                          "C. 1949 年",
                                          "D. 1937 年"
                                      ],
                          "answer":  "A",
                          "key":  "1945 年 8 月日本宣布无条件投降、9 月 2 日签字。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P20",
                          "sub":  "政治",
                          "topic":  "史纲·新中国成立",
                          "type":  "choice",
                          "stem":  "中华人民共和国成立的时间是",
                          "options":  [
                                          "A. 1949 年 10 月 1 日",
                                          "B. 1949 年 9 月 21 日",
                                          "C. 1950 年 10 月 1 日",
                                          "D. 1949 年 12 月 1 日"
                                      ],
                          "answer":  "A",
                          "key":  "1949-10-01；注意 9 月是政协会议。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P21",
                          "sub":  "政治",
                          "topic":  "史纲·三大改造",
                          "type":  "choice",
                          "stem":  "我国社会主义制度基本确立的标志是",
                          "options":  [
                                          "A. 新中国成立",
                                          "B. 三大改造完成",
                                          "C. 土地改革完成",
                                          "D. 第一部宪法颁布"
                                      ],
                          "answer":  "B",
                          "key":  "1956 年三大改造基本完成 ⇒ 社会主义制度基本确立。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P22",
                          "sub":  "政治",
                          "topic":  "思修·宪法",
                          "type":  "choice",
                          "stem":  "在我国法律体系中，宪法的地位是",
                          "options":  [
                                          "A. 普通法律之一",
                                          "B. 国家的根本法，具有最高法律效力",
                                          "C. 行政法规",
                                          "D. 地方性法规"
                                      ],
                          "answer":  "B",
                          "key":  "宪法是根本法、最高法律效力、一切法律的依据。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P23",
                          "sub":  "政治",
                          "topic":  "思修·公民权利",
                          "type":  "choice",
                          "stem":  "下列属于我国公民基本政治权利的是",
                          "options":  [
                                          "A. 选举权与被选举权",
                                          "B. 劳动权",
                                          "C. 休息权",
                                          "D. 受教育权"
                                      ],
                          "answer":  "A",
                          "key":  "选举权与被选举权是基本政治权利；劳动、休息、受教育属社会经济文化权利。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "P24",
                          "sub":  "政治",
                          "topic":  "思修·理想信念",
                          "type":  "choice",
                          "stem":  "理想信念的作用主要体现在",
                          "options":  [
                                          "A. 提供精神动力与价值导向",
                                          "B. 决定物质生产",
                                          "C. 替代实践",
                                          "D. 保证一定成功"
                                      ],
                          "answer":  "A",
                          "key":  "理想是精神支柱与价值导向；不能说决定物质生产或保证成功。",
                          "tags":  [
                                       "政治"
                                   ]
                      },
                      {
                          "id":  "E01",
                          "sub":  "英语",
                          "topic":  "英译中·被动语态",
                          "type":  "choice",
                          "stem":  "Special attention must be paid to the safety procedures before the machine is put into operation.",
                          "options":  [
                                          "A. 机器投入运行前，必须特别注意安全操作规程。",
                                          "B. 特别关注必须被支付给安全程序在机器被投入使用之前。",
                                          "C. 在机器被操作之前，安全程序必须被特别地付款。",
                                          "D. 机器开始运作前，安全程序将被特别地注意。"
                                      ],
                          "answer":  "A",
                          "key":  "must be paid 转主动/无主句（「必须特别注意」）；before 译「在…之前」；put into operation＝投入运行。B、C 是「被」字堆叠式硬译。",
                          "tags":  [
                                       "英语",
                                       "翻译"
                                   ]
                      },
                      {
                          "id":  "E02",
                          "sub":  "英语",
                          "topic":  "英译中·被动语态",
                          "type":  "choice",
                          "stem":  "Workers are required to check the lubrication system regularly so that unexpected breakdowns can be avoided.",
                          "options":  [
                                          "A. 要求工人定期检查润滑系统，以避免意外故障。",
                                          "B. 工人被要求去检查润滑系统规律地，以便意外故障可以被避免。",
                                          "C. 工人们被需要检查润滑系统，因此意外的崩溃能被避开。",
                                          "D. 工人要求检查润滑系统，即使意外故障可以避免。"
                                      ],
                          "answer":  "A",
                          "key":  "are required to ⇒「要求（某人）做」；regularly＝定期；so that 表目的；breakdown＝故障（不是「崩溃」）。",
                          "tags":  [
                                       "英语",
                                       "翻译"
                                   ]
                      },
                      {
                          "id":  "E03",
                          "sub":  "英语",
                          "topic":  "英译中·被动语态",
                          "type":  "choice",
                          "stem":  "The new policy is expected to have a far-reaching effect on the rural economy.",
                          "options":  [
                                          "A. 预计这项新政策将对农村经济产生深远影响。",
                                          "B. 新政策被期望已经对农村经济有一个远的影响。",
                                          "C. 这项新政策期待农村经济被深远地影响。",
                                          "D. 人们期望新政策在农村经济上起到遥远的作用。"
                                      ],
                          "answer":  "A",
                          "key":  "is expected to ⇒「预计／人们预计」；far-reaching＝深远，不是「遥远」。",
                          "tags":  [
                                       "英语",
                                       "翻译"
                                   ]
                      },
                      {
                          "id":  "E04",
                          "sub":  "英语",
                          "topic":  "英译中·被动语态",
                          "type":  "choice",
                          "stem":  "No conclusion should be drawn before all the data have been carefully examined.",
                          "options":  [
                                          "A. 在仔细核查所有数据之前，不应得出任何结论。",
                                          "B. 没有结论应该被画在全部数据被仔细检查之前。",
                                          "C. 在所有数据被仔细检查之前，任何结论都不应该被画。",
                                          "D. 全部数据被仔细检查后，不应画任何结论。"
                                      ],
                          "answer":  "A",
                          "key":  "draw a conclusion＝得出结论（不是「画」）；before 后动作先发生，D 把时间关系译反。",
                          "tags":  [
                                       "英语",
                                       "翻译"
                                   ]
                      },
                      {
                          "id":  "E05",
                          "sub":  "英语",
                          "topic":  "英译中·词义辨析",
                          "type":  "choice",
                          "stem":  "The committee\u0027s decision was far from conclusive.",
                          "options":  [
                                          "A. 委员会的决定远非定论。",
                                          "B. 委员会的决定非常确凿。",
                                          "C. 委员会的决定远离结论。",
                                          "D. 委员会的决定几乎成定局。"
                                      ],
                          "answer":  "A",
                          "key":  "far from＝远非/绝不是；conclusive＝确凿的、定论性的。B 把否定译成肯定，C 是字面硬译。",
                          "tags":  [
                                       "英语",
                                       "翻译"
                                   ]
                      },
                      {
                          "id":  "E06",
                          "sub":  "英语",
                          "topic":  "英译中·词义辨析",
                          "type":  "choice",
                          "stem":  "His argument rests on a rather shaky assumption.",
                          "options":  [
                                          "A. 他的论证建立在一个相当不可靠的假设之上。",
                                          "B. 他的争论休息在一个摇晃的假设上。",
                                          "C. 他的论点取决于一个相当坚定的假设。",
                                          "D. 他的辩论依靠一个摇摆的论断。"
                                      ],
                          "answer":  "A",
                          "key":  "rest on＝建立在…之上；shaky＝站不住脚/不可靠；argument 在此是「论证」。",
                          "tags":  [
                                       "英语",
                                       "翻译"
                                   ]
                      },
                      {
                          "id":  "E07",
                          "sub":  "英语",
                          "topic":  "英译中·词义辨析",
                          "type":  "choice",
                          "stem":  "The two approaches are not mutually exclusive.",
                          "options":  [
                                          "A. 这两种方法并不互相排斥。",
                                          "B. 两种方法不是相互专属的。",
                                          "C. 这两种途径不是互相开除的。",
                                          "D. 两种方法彼此都不存在。"
                                      ],
                          "answer":  "A",
                          "key":  "mutually exclusive＝互相排斥；approach＝方法/途径。",
                          "tags":  [
                                       "英语",
                                       "翻译"
                                   ]
                      },
                      {
                          "id":  "E08",
                          "sub":  "英语",
                          "topic":  "英译中·结构",
                          "type":  "choice",
                          "stem":  "It is not the failure itself but the attitude towards it that matters.",
                          "options":  [
                                          "A. 重要的不是失败本身，而是对待失败的态度。",
                                          "B. 它不是失败本身而是态度对它的事情。",
                                          "C. 失败本身不重要，态度也不重要。",
                                          "D. 正因为失败本身，态度才重要。"
                                      ],
                          "answer":  "A",
                          "key":  "It is … that … 强调句；not A but B＝不是 A 而是 B。",
                          "tags":  [
                                       "英语",
                                       "翻译"
                                   ]
                      },
                      {
                          "id":  "E09",
                          "sub":  "英语",
                          "topic":  "英译中·填空",
                          "type":  "fill",
                          "stem":  "把下句译成中文，只填「far-reaching」的中文：The reform has had a ____ influence on the industry.",
                          "answer":  "深远",
                          "accept":  [
                                         "深远的"
                                     ],
                          "key":  "far-reaching＝深远的（不是「遥远的」）。",
                          "tags":  [
                                       "英语",
                                       "翻译"
                                   ]
                      },
                      {
                          "id":  "E10",
                          "sub":  "英语",
                          "topic":  "英译中·填空",
                          "type":  "fill",
                          "stem":  "填「mutually exclusive」的中文意思（四个字）：自由与秩序并非____。",
                          "answer":  "互相排斥",
                          "accept":  [
                                         "相互排斥"
                                     ],
                          "key":  "mutually exclusive＝互相排斥。",
                          "tags":  [
                                       "英语",
                                       "翻译"
                                   ]
                      },
                      {
                          "id":  "E11",
                          "sub":  "英语",
                          "topic":  "英译中·填空",
                          "type":  "fill",
                          "stem":  "填「draw a conclusion」的中文（四个字）：在数据核查前不应____。",
                          "answer":  "得出结论",
                          "accept":  [
                                         "下结论"
                                     ],
                          "key":  "draw a conclusion＝得出结论；draw 不译「画」。",
                          "tags":  [
                                       "英语",
                                       "翻译"
                                   ]
                      },
                      {
                          "id":  "E12",
                          "sub":  "英语",
                          "topic":  "英译中·填空",
                          "type":  "fill",
                          "stem":  "填「far from conclusive」的中文（四个字）：这份报告____。",
                          "answer":  "远非定论",
                          "accept":  [
                                         "不是定论"
                                     ],
                          "key":  "far from＝远非；conclusive＝定论性的。",
                          "tags":  [
                                       "英语",
                                       "翻译"
                                   ]
                      },
                      {
                          "id":  "W01",
                          "sub":  "数学",
                          "topic":  "错题本·12a 垫片法",
                          "type":  "choice",
                          "stem":  "两曲线 y=f(x)、y=g(x)（f≥g≥0）在 [a,b] 上绕 x 轴旋转，体积 V =",
                          "answer":  "A",
                          "key":  "垫片法是「外半径² − 内半径²」；写成 (f−g)² 是 12a 高频错。",
                          "tags":  [
                                       "错题本"
                                   ],
                          "options":  [
                                          "A. π∫ₐᵇ [f²(x) − g²(x)] dx",
                                          "B. π∫ₐᵇ [f(x) − g(x)]² dx",
                                          "C. 2π∫ₐᵇ x[f(x) − g(x)] dx",
                                          "D. π∫ₐᵇ [f(x) − g(x)] dx"
                                      ]
                      },
                      {
                          "id":  "W02",
                          "sub":  "数学",
                          "topic":  "错题本·极坐标漏 r",
                          "type":  "choice",
                          "stem":  "把 ∬_D f(x,y)dxdy 化成极坐标时，若漏写面积元里的 r，得到的结果会",
                          "answer":  "A",
                          "key":  "dσ = r dr dθ，r∈(0,1) 时 r\u0026lt;1，漏掉它结果必然偏小。",
                          "tags":  [
                                       "错题本"
                                   ],
                          "options":  [
                                          "A. 偏小",
                                          "B. 偏大",
                                          "C. 不变",
                                          "D. 正负不定"
                                      ]
                      },
                      {
                          "id":  "W03",
                          "sub":  "数学",
                          "topic":  "错题本·偶函数跨对称区间",
                          "type":  "choice",
                          "stem":  "设 f 为偶函数，则 ∫₋ₐᵃ f(x)dx =",
                          "answer":  "A",
                          "key":  "偶函数跨对称区间翻倍；奇函数才是 0。先判奇偶再算，别硬积。",
                          "tags":  [
                                       "错题本"
                                   ],
                          "options":  [
                                          "A. 2∫₀ᵃ f(x)dx",
                                          "B. 0",
                                          "C. ∫₀ᵃ f(x)dx",
                                          "D. 无法确定"
                                      ]
                      },
                      {
                          "id":  "W04",
                          "sub":  "数学",
                          "topic":  "错题本·反常 p=1",
                          "type":  "choice",
                          "stem":  "反常积分 ∫₁^∞ dx/x 的敛散性是",
                          "answer":  "A",
                          "key":  "p=1 恰是临界：∫₁^∞ x^(−p)dx 在 p\u0026gt;1 才收敛。",
                          "tags":  [
                                       "错题本"
                                   ],
                          "options":  [
                                          "A. 发散",
                                          "B. 收敛于 1",
                                          "C. 收敛于 ln 2",
                                          "D. 收敛于 0"
                                      ]
                      },
                      {
                          "id":  "W05",
                          "sub":  "数学",
                          "topic":  "错题本·旋转面面积",
                          "type":  "choice",
                          "stem":  "曲线 y=f(x)≥0 在 [a,b] 上绕 x 轴旋转所得曲面面积 S =",
                          "answer":  "A",
                          "key":  "曲面面积带 √(1+y′²)；体积才不带。两者最易混。",
                          "tags":  [
                                       "错题本"
                                   ],
                          "options":  [
                                          "A. 2π∫ₐᵇ f(x)√(1+f′²(x)) dx",
                                          "B. π∫ₐᵇ f²(x) dx",
                                          "C. 2π∫ₐᵇ x f(x) dx",
                                          "D. π∫ₐᵇ √(1+f′²(x)) dx"
                                      ]
                      },
                      {
                          "id":  "W06",
                          "sub":  "数学",
                          "topic":  "错题本·变限含上下限",
                          "type":  "choice",
                          "stem":  "设 f 连续，d/dx ∫ₓ^{x²} f(t)dt =",
                          "answer":  "A",
                          "key":  "上下限都含 x：上限导数 2x 乘 f(x²)，下限项取负号 f(x)。漏下限项是高频错。",
                          "tags":  [
                                       "错题本"
                                   ],
                          "options":  [
                                          "A. 2x·f(x²) − f(x)",
                                          "B. 2x·f(x²) + f(x)",
                                          "C. f(x²) − f(x)",
                                          "D. 2x·f(x²)"
                                      ]
                      },
                      {
                          "id":  "W07",
                          "sub":  "数学",
                          "topic":  "错题本·隐函数二阶偏导",
                          "type":  "choice",
                          "stem":  "设 z=z(x,y) 由 x²+y²+z²=6 确定，则 z_xx =",
                          "answer":  "A",
                          "key":  "先 z_x=−x/z；再对 x 求导并用 z_x 回代 ⇒ −(x²+z²)/z³。只写到 z_x 就停是 13c。",
                          "tags":  [
                                       "错题本"
                                   ],
                          "options":  [
                                          "A. −(x²+z²)/z³",
                                          "B. −1/z",
                                          "C. (x²−z²)/z³",
                                          "D. −x/z²"
                                      ]
                      },
                      {
                          "id":  "W08",
                          "sub":  "数学",
                          "topic":  "错题本·中值定理辅助函数",
                          "type":  "choice",
                          "stem":  "设 f 在 [0,1] 上可导且 f(0)=f(1)=0，要证存在 ξ 使 f′(ξ)=f(ξ)，应构造",
                          "answer":  "A",
                          "key":  "f′−f 型 ⇒ 乘 e^(−∫1dx)=e^(−x)；构造后 F(0)=F(1)=0，用罗尔即得。",
                          "tags":  [
                                       "错题本"
                                   ],
                          "options":  [
                                          "A. F(x)=f(x)e^(−x)",
                                          "B. F(x)=f(x)e^x",
                                          "C. F(x)=f(x)+x",
                                          "D. F(x)=f(x)·x"
                                      ]
                      },
                      {
                          "id":  "W09",
                          "sub":  "数学",
                          "topic":  "错题本·奇偶拆分",
                          "type":  "fill",
                          "stem":  "∫₋₁¹ (x³ + x²) dx = ____（填数值）",
                          "answer":  "2/3",
                          "key":  "奇部 x³ 在对称区间积分为 0；只剩 ∫₋₁¹x²dx = 2/3。",
                          "tags":  [
                                       "错题本"
                                   ],
                          "accept":  [

                                     ]
                      },
                      {
                          "id":  "W10",
                          "sub":  "数学",
                          "topic":  "错题本·变限+洛必达",
                          "type":  "fill",
                          "stem":  "lim(x→0) [∫₀ˣ sin t dt] / x² = ____",
                          "answer":  "1/2",
                          "key":  "0/0 型，洛必达一次得 sin x/(2x) → 1/2；或直接把分子等价成 x²/2。",
                          "tags":  [
                                       "错题本"
                                   ],
                          "accept":  [
                                         "0.5"
                                     ]
                      },
                      {
                          "id":  "W11",
                          "sub":  "数学",
                          "topic":  "错题本·隐函数一阶",
                          "type":  "fill",
                          "stem":  "由 x² + y² = 1 确定的 y=y(x)，则 dy/dx = ____（填 −x/y 形式）",
                          "answer":  "-x/y",
                          "key":  "两边对 x 求导：2x + 2y·y′=0 ⇒ y′=−x/y。",
                          "tags":  [
                                       "错题本"
                                   ],
                          "accept":  [
                                         "−x/y"
                                     ]
                      },
                      {
                          "id":  "W12",
                          "sub":  "数学",
                          "topic":  "错题本·1^∞ 型（幂指）",
                          "type":  "fill",
                          "stem":  "lim(x→0) (cos x)^(1/x²) = ____（可填 e^(−1/2)）",
                          "answer":  "e^(-1/2)",
                          "key":  "取对数：ln cos x ≈ −x²/2 ⇒ 指数 → −1/2 ⇒ e^(−1/2)。",
                          "tags":  [
                                       "错题本"
                                   ],
                          "accept":  [
                                         "e^{−1/2}",
                                         "1/√e",
                                         "e的-1/2次方"
                                     ]
                      }
                  ]
};
