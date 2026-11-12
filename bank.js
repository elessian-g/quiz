window.QBANK = {
    "id":  "2026-11-13-v78",
    "title":  "备用机题库（712 题）",
    "questions":  [
                      {
                          "id":  "E07",
                          "kp":  "",
                          "sub":  "英语",
                          "type":  "choice",
                          "topic":  "英译中·长难句",
                          "stem":  "翻译：The extent to which such a policy can be justified depends largely on how its costs are distributed among those who benefit least from it.（　）",
                          "options":  [
                                          "A. 这种政策在多大程度上站得住脚，主要取决于它的代价如何分摊到从中获益最少的人身上。",
                                          "B. 这种政策的范围可以被证明，很大程度上取决于成本如何分配给受益者。",
                                          "C. 这种政策之所以合理，主要是因为它把成本分散给了最少受益的人。",
                                          "D. 这种政策能在多大程度上被合理化，取决于它从最少受益者那里获得多少好处。"
                                      ],
                          "answer":  "A",
                          "key":  "主干是 The extent ... depends on ...。to which 引导定语从句修饰 extent（「在多大程度上」）；how its costs are distributed 是宾语从句；among those who benefit least from it 中 who 从句修饰 those。错项：B 把 extent 译成「范围」、漏了程度义；C 把 depends on 变成因果、且「分散给最少受益者」误解了 distributed；D 把 benefit 方向弄反。",
                          "fix":  "遇到 The extent to which... 固定译作「在多大程度上」；distribute among 是「分摊到……身上」，不是「分配给」。",
                          "tags":  [
                                       "英语",
                                       "翻译",
                                       "长难句"
                                   ],
                          "_cond":  1,
                          "_simp":  0,
                          "df_src":  "relabel_5y",
                          "df":  98
                      },
                      {
                          "id":  "E09",
                          "kp":  "",
                          "sub":  "英语",
                          "type":  "choice",
                          "topic":  "语法·虚拟语气",
                          "stem":  "If the data ____ available at the time, the researchers would have reached a different conclusion.（　）",
                          "options":  [
                                          "A. had been",
                                          "B. were",
                                          "C. have been",
                                          "D. would be"
                                      ],
                          "answer":  "A",
                          "key":  "主句 would have reached 是对过去的虚拟，if 从句须用过去完成时 had been。错项：B 是与现在事实相反的虚拟（主句该用 would reach）；C 是真实条件，与主句时态不匹配；D 虚拟语气不在 if 从句里用 would。",
                          "fix":  "看主句定从句：would have done → 从句 had done；would do → 从句 did/were。过去完成是这条链的起点。",
                          "tags":  [
                                       "英语",
                                       "语法"
                                   ],
                          "_cond":  1,
                          "_simp":  4,
                          "df_src":  "relabel_5y",
                          "df":  95
                      },
                      {
                          "id":  "E10",
                          "kp":  "",
                          "sub":  "英语",
                          "type":  "choice",
                          "topic":  "英译中·被动与抽象名词",
                          "stem":  "翻译：What is often overlooked in the debate is the degree to which personal habits are shaped by forces beyond individual control.（　）",
                          "options":  [
                                          "A. 这场争论中常被忽略的是：个人习惯在多大程度上由个人无法控制的力量所塑造。",
                                          "B. 争论中经常忽视的是个人习惯，它的程度超出了个人控制的力量。",
                                          "C. 在这场辩论中被忽视的往往是：个人习惯塑造了超出个人控制的力量。",
                                          "D. 人们常忽略这场争论，因为个人习惯的力量超出了个人控制的程度。"
                                      ],
                          "answer":  "A",
                          "key":  "主语是 what 从句（「常被忽略的东西」）；the degree to which 是「在多大程度上」；are shaped by 是被动「被……塑造」。错项：B 把 degree 错挂到「习惯的程度」；C 把 shaped by 的主客颠倒（成了习惯塑造力量）；D 整句结构重排错，把 debate 当宾语。",
                          "fix":  "What is overlooked 译成「被忽略的是」，不要译成「人们忽略」——虽然意思通，但主语换了会带出后面的错。",
                          "tags":  [
                                       "英语",
                                       "翻译",
                                       "被动"
                                   ],
                          "_cond":  1,
                          "_simp":  0,
                          "df_src":  "relabel_5y",
                          "df":  98
                      },
                      {
                          "id":  "M1102-401",
                          "kp":  "#13",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "泰勒·抽象函数",
                          "stem":  "设 f(x) 在 x=0 的某邻域内二阶可导，且 f(0)=0、f′(0)=1、f″(0)=2，则 lim(x→0)[f(x)−x]/x² =（　）",
                          "options":  [
                                          "A. 1",
                                          "B. 2",
                                          "C. 1/2",
                                          "D. 不存在"
                                      ],
                          "answer":  "A",
                          "key":  "由泰勒展开 f(x)=f(0)+f′(0)x+½f″(0)x²+o(x²)=x+x²+o(x²)。代入：(f(x)−x)/x²=(x²+o(x²))/x²→1。错项：B 把 f″(0)=2 直接当答案，漏了公式里的½；C 只取了一半；D 误以为不能确定。",
                          "fix":  "带 ½ 的泰勒项：f(x)=f(0)+f′(0)x+f″(0)x²/2+…。这题有三个条件，缺一个都推不动——先写出展开式再代，别急着算。",
                          "df":  100,
                          "df_src":  "manual",
                          "tags":  [
                                       "泰勒",
                                       "抽象函数",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "M1102-402",
                          "kp":  "#48",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "特征值·幂等矩阵",
                          "stem":  "设 A 为 3 阶矩阵，满足 A²=A，且 r(A)=2，则 |A+2E|=（　）",
                          "options":  [
                                          "A. 18",
                                          "B. 12",
                                          "C. 27",
                                          "D. 8"
                                      ],
                          "answer":  "A",
                          "key":  "A²=A ⇒ 特征值只能取 0 或 1（λ²=λ）。r(A)=2 说明恰有两个特征值为 1、一个为 0。A+2E 的特征值是 λ+2，即 3、3、2，行列式等于特征值之积 3×3×2=18。错项：B 是 3×2×2（把重数当 1）；C 是 3³（漏了那个 0 变成 3）；D 是 2³。",
                          "fix":  "两步卡点：①A²=A 只能推出「特征值 ∈{0,1}」，不能直接定个数，必须用秩补；②求的是 A+2E 不是 A，特征值要整体加 2。",
                          "df":  105,
                          "df_src":  "manual",
                          "tags":  [
                                       "特征值",
                                       "幂等",
                                       "秩",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "M1102-403",
                          "kp":  "#30",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "最值·闭区域",
                          "stem":  "设 f(x,y)=x²+2y²−2xy−4x，区域 D={x≥0, y≥0, x+y≤3}，则 f 在 D 上的最小值是（　）",
                          "options":  [
                                          "A. −31/5",
                                          "B. −4",
                                          "C. −3",
                                          "D. 0"
                                      ],
                          "answer":  "A",
                          "key":  "先求内部驻点：(4,2)，不在 D 内（4+2=6\u003e3），作废——这是本题第一个卡点。再查三条边界：①x+y=3 上 f=5x²−22x+18，驻点 x=11/5 给出 f=−31/5≈−6.2；②y=0 上 f=x²−4x，最小值 −4；③x=0 上 f=2y²，最小值 0。三个顶点 f 分别为 0、−3、18。比较得最小 −31/5。错项：B 只查了 y=0 一条边；C 只比了顶点；D 是顶点处的值。",
                          "fix":  "闭区域最值三步都不能省：内部驻点（且要判断是否落在区域内）→ 每条边界上的极值 → 各顶点。这题的关键是内部驻点根本不在区域内，直接代它必错。",
                          "df":  115,
                          "df_src":  "manual",
                          "tags":  [
                                       "极值",
                                       "闭区域",
                                       "最值",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "M1102-404",
                          "kp":  "#32",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "极坐标·两圆交",
                          "stem":  "设 D 是圆 x²+y²≤2x 与 x²+y²≤2y 的公共部分，则 ∬_D x² dxdy =（　）",
                          "options":  [
                                          "A. 3π/8−1",
                                          "B. π/2−1",
                                          "C. 3π/8",
                                          "D. 1−π/8"
                                      ],
                          "answer":  "A",
                          "key":  "两圆极坐标方程 r=2cosθ 与 r=2sinθ，交于 θ=π/4。θ∈[0,π/4] 时上限 2sinθ，θ∈[π/4,π/2] 时上限 2cosθ，被积 x²=r²cos²θ 再乘雅可比 r，得 r³cos²θ。分段积分得 ∬x²=3π/8−1。错项：B 是这块区域的面积（把被积函数当成 1）；C 漏了 −1 那项；D 符号反了。",
                          "fix":  "两圆交必须分两段，分界就是交点 θ=π/4。看到区域面积是 π/2−1，如果答案恰好等于它，说明被积函数整个丢了。",
                          "df":  108,
                          "df_src":  "manual",
                          "tags":  [
                                       "极坐标",
                                       "定界",
                                       "分段",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "M1102-405",
                          "kp":  "#16",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "变限积分·复合上限",
                          "stem":  "设 F(x)=∫₀^{x²} e^{−t} dt，则 F′(1)=（　）",
                          "options":  [
                                          "A. 2/e",
                                          "B. 1/e",
                                          "C. 2e",
                                          "D. e^{−1}"
                                      ],
                          "answer":  "A",
                          "key":  "F′(x)=e^{−x²}·(x²)′=2x·e^{−x²}。代 x=1 得 2/e。错项：B 漏了内层导数 2x；C 符号错（把 e^{−1} 写成 e）；D 同样漏内层。",
                          "fix":  "变限积分求导两步：先代入上限、再乘上限的导数。漏掉后者是这一族的通病（历史错因第 8 条）。",
                          "df":  95,
                          "df_src":  "manual",
                          "tags":  [
                                       "变限积分",
                                       "链式",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "M1102-407",
                          "kp":  "#10",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "参数方程·曲率",
                          "stem":  "设 x=t−sin t，y=1−cos t，则在 t=π/2 处该曲线的曲率 K=（　）",
                          "options":  [
                                          "A. √2/4",
                                          "B. 1/2",
                                          "C. √2/2",
                                          "D. 1"
                                      ],
                          "answer":  "A",
                          "key":  "t=π/2 时：dy/dx=1、d²y/dx²=−1。曲率 K=|y″|/(1+y′²)^{3/2}=1/(1+1)^{3/2}=1/(2√2)=√2/4。错项：B 漏了 3/2 次幂（当成 (1+1)=2）；C 用了 1/√2；D 完全没用公式。",
                          "fix":  "曲率公式分母是 (1+y′²)^{3/2}，这个 3/2 次幂最容易丢。先算出 y′ 和 y″ 两个数再代，不要边算边套。",
                          "df":  100,
                          "df_src":  "manual",
                          "tags":  [
                                       "参数方程",
                                       "曲率",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "M1102-408",
                          "kp":  "#1",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "无穷小·含参数",
                          "stem":  "当 x→0 时，(1−cos x)·ln(1+ax) 与 2x³ 是等价无穷小，则 a=（　）",
                          "options":  [
                                          "A. 4",
                                          "B. 2",
                                          "C. 1/2",
                                          "D. −4"
                                      ],
                          "answer":  "A",
                          "key":  "(1−cos x)~x²/2，ln(1+ax)~ax，两者相乘 ~ (x²/2)(ax)=ax³/2。令 ax³/2 ~ 2x³ 得 a=4。错项：B 忘了 (1−cos x) 的 1/2；C 把方向弄反；D 丢符号以外还错在把 ln(1+ax) 当成 ax² 之外的问题。",
                          "fix":  "两个无穷小相乘，等价替换可以各换各的，但系数都要带上：(1−cos x) 带 1/2，ln(1+ax) 带 a。",
                          "df":  98,
                          "df_src":  "manual",
                          "tags":  [
                                       "极限",
                                       "等价无穷小",
                                       "含参数",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "M1102-409",
                          "kp":  "#26",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "隐函数·偏导",
                          "stem":  "设 z=z(x,y) 由 x²+y²+z²=6z 确定，则 ∂z/∂x 在点 (1,2,1) 处等于（　）",
                          "options":  [
                                          "A. 1/2",
                                          "B. −1/2",
                                          "C. 1",
                                          "D. 2"
                                      ],
                          "answer":  "A",
                          "key":  "两边对 x 求偏导：2x+2z·z_x=6z_x ⇒ z_x=x/(3−z)。代 (1,2,1) 得 1/2。错项：B 符号错（移项方向反）；C 漏了分母；D 把 2x 直接当答案。",
                          "fix":  "隐函数求偏导后要先解出 z_x 的表达式再代点，别把 (1,2,1) 直接代进含 z_x 的式子。另：答案里的 3 来自 6/2，不是 6。",
                          "df":  96,
                          "df_src":  "manual",
                          "tags":  [
                                       "偏导",
                                       "隐函数",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "M1102-410",
                          "kp":  "#37",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "微分方程·初值",
                          "stem":  "微分方程 y″−3y′+2y=0 满足 y(0)=1、y′(0)=0 的特解是（　）",
                          "options":  [
                                          "A. 2eˣ−e^{2x}",
                                          "B. eˣ+e^{2x}",
                                          "C. 2e^{2x}−eˣ",
                                          "D. e^{−x}+e^{−2x}"
                                      ],
                          "answer":  "A",
                          "key":  "特征方程 r²−3r+2=0 ⇒ r=1,2，通解 y=C₁eˣ+C₂e^{2x}。由 y(0)=C₁+C₂=1、y′(0)=C₁+2C₂=0 解得 C₁=2、C₂=−1。错项：B 系数错（解方程时符号弄反）；C 把两个根对应的系数配反了；D 特征根求错。",
                          "fix":  "两个初值给两个方程：y(0) 用原式、y′(0) 用导数式，别把 y′(0)=0 也代进原式。",
                          "df":  95,
                          "df_src":  "manual",
                          "tags":  [
                                       "微分方程",
                                       "初值",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "M1102-411",
                          "kp":  "#33",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "二重积分·对称性",
                          "stem":  "设 D={x²+y²≤4}，则 ∬_D (x²+xy+y²) dxdy =（　）",
                          "options":  [
                                          "A. 8π",
                                          "B. 4π",
                                          "C. 2π",
                                          "D. 8π/3"
                                      ],
                          "answer":  "A",
                          "key":  "D 关于 x 轴、y 轴都对称，xy 关于 x 与 y 均为奇函数 ⇒ ∬xy=0。剩 ∬(x²+y²)=∫₀^{2π}∫₀² r²·r dr dθ=2π·4=8π。错项：B 漏了 θ 上的 2π；C 面积是 4π，把被积函数当 1；D 是错的 r 幂次（用了 r² 而非 r³）。",
                          "fix":  "三步：先看对称性砍掉奇函数项（这步省一半计算）→ 剩下 x²+y² 化极坐标 → 记得雅可比 r，被积变成 r³。",
                          "df":  105,
                          "df_src":  "manual",
                          "tags":  [
                                       "二重积分",
                                       "对称性",
                                       "极坐标",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "E11",
                          "kp":  "",
                          "sub":  "英语",
                          "type":  "choice",
                          "topic":  "英译中·否定转移",
                          "stem":  "翻译：It is not that the evidence is insufficient, but that the conclusion drawn from it has been overstated.\n（　）",
                          "options":  [
                                          "A. 并不是证据不足，而是从中得出的结论被夸大了。",
                                          "B. 证据不足，所以得出的结论被夸大了。",
                                          "C. 不是结论被夸大，而是证据确实不足。",
                                          "D. 证据不足与结论被夸大，两者都是事实。"
                                      ],
                          "answer":  "A",
                          "key":  "It is not that A, but that B 是「不是 A，而是 B」的强调对照结构，两个 that 引导表语从句。A=证据不足（被否定），B=结论被夸大（被肯定）。错项：B 把对照关系译成因果；C 把 A、B 的位置对调（否定对象弄反）；D 把对照译成并列。",
                          "fix":  "not that...but that... 的否定落在第一个 that 上，第二个是肯定的。翻译时先标出「被否的是哪一半」，再动笔。",
                          "df":  98,
                          "df_src":  "manual5y",
                          "tags":  [
                                       "英语",
                                       "翻译",
                                       "否定转移"
                                   ]
                      },
                      {
                          "id":  "E12",
                          "kp":  "",
                          "sub":  "英语",
                          "type":  "choice",
                          "topic":  "语法·倒装与比较",
                          "stem":  "Choose the correct completion: Not until the results had been replicated three times ____ willing to publish them.（　）",
                          "options":  [
                                          "A. were the researchers",
                                          "B. the researchers were",
                                          "C. did the researchers",
                                          "D. the researchers did"
                                      ],
                          "answer":  "A",
                          "key":  "Not until 置于句首时主句要部分倒装（助动词提前）。主句主语 the researchers、谓语 were willing 是系表结构，倒装后为 were the researchers。错项：B 未倒装；C 用了 do 类助动词，但原句谓语是 be 动词，倒装要靠 be 本身；D 既未倒装、助动词也错。",
                          "fix":  "倒装只看两件事：①句首是不是否定词（Not until / Never / Hardly）②主句谓语是 be 还是实义动词。be 动词直接提前，实义动词才借 do/does/did。",
                          "df":  96,
                          "df_src":  "manual5y",
                          "tags":  [
                                       "英语",
                                       "语法",
                                       "倒装"
                                   ]
                      },
                      {
                          "id":  "E13",
                          "kp":  "",
                          "sub":  "英语",
                          "type":  "choice",
                          "topic":  "英译中·多重定语从句",
                          "stem":  "翻译：The assumption on which the whole argument rests is one that few economists would now be prepared to defend.\n（　）",
                          "options":  [
                                          "A. 整个论证所依赖的那个假设，如今很少有经济学家愿意为其辩护。",
                                          "B. 经济学家们如今很少准备辩护，因为这个假设支撑了整个论证。",
                                          "C. 整个论证的假设是：很少会有经济学家准备辩护。",
                                          "D. 这个假设依赖于整个论证，如今很少有经济学家愿意接受。"
                                      ],
                          "answer":  "A",
                          "key":  "主干：The assumption ... is one ...。on which the whole argument rests 是介词前置的定语从句修饰 assumption（rest on=依赖）；one that few economists would now be prepared to defend 中 one 指代 assumption，that 从句修饰 one。错项：B 把定语从句译成原因状语；C 把 defend 的宾语丢了；D 把 rest on 的主客颠倒（成了假设依赖论证）。",
                          "fix":  "遇到「名词 + 介词 + which」先还原成正常语序：the whole argument rests on the assumption。定语从句还原对了，整句就顺了。",
                          "df":  100,
                          "df_src":  "manual5y",
                          "tags":  [
                                       "英语",
                                       "翻译",
                                       "定语从句"
                                   ]
                      },
                      {
                          "id":  "M1102-412",
                          "kp":  "#34",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "二重积分·交换次序",
                          "stem":  "设 f(x,y) 连续，则二次积分 ∫₀¹dx ∫ₓ^{√x} f(x,y) dy 交换积分次序后等于（　）",
                          "options":  [
                                          "A. ∫₀¹dy ∫_{y²}^{y} f(x,y) dx",
                                          "B. ∫₀¹dy ∫_{y}^{y²} f(x,y) dx",
                                          "C. ∫₀¹dy ∫_{√y}^{y} f(x,y) dx",
                                          "D. ∫₀¹dy ∫_{0}^{y²} f(x,y) dx"
                                      ],
                          "answer":  "A",
                          "key":  "原区域：0≤x≤1、x≤y≤√x。注意在 [0,1] 上恒有 x≤√x，所以区域存在。换序先定 y 的范围：x 由 0 到 1、y 由 x 到 √x，故 y∈[0,1]（y 的最小值 0，最大值 1 在 x=1 处取到）。再对给定 y 解 x：由 y≤√x 得 x≥y²，由 y≥x 得 x≤y，故 y²≤x≤y。错项：B 上下限写反；C 把 y² 开成了 √y；D 丢了下限 y。",
                          "fix":  "换序三步：①画区域、②定新变量的总范围、③对每个 y 解出 x 的上下界。第②步容易漏——y 的最大值要由曲线交点定，不是想当然取 1。",
                          "df":  108,
                          "df_src":  "manual",
                          "tags":  [
                                       "二重积分",
                                       "换序",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "M1102-413",
                          "kp":  "#39",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "微分方程·建模",
                          "stem":  "一物体温度为 T(t)，放在温度恒为 20℃ 的环境中自然冷却，冷却速率与物体和环境的温差成正比。下列方程中，正确描述该过程的是（　）",
                          "options":  [
                                          "A. dT/dt=−k(T−20)，k\u003e0",
                                          "B. dT/dt=k(T−20)，k\u003e0",
                                          "C. dT/dt=−kT，k\u003e0",
                                          "D. dT/dt=−k(T+20)，k\u003e0"
                                      ],
                          "answer":  "A",
                          "key":  "冷却⇒温度下降⇒dT/dt\u003c0；速率与温差 (T−20) 成正比 ⇒ dT/dt=−k(T−20)（k\u003e0）。当 T\u003e20 时右端为负，符合降温。错项：B 会升温（变成加热模型）；C 漏掉环境温度这个平移——环境不是 0℃ 时必须写 T−20；D 平移方向错。",
                          "fix":  "牛顿冷却定律这一族题的三个必查点：①温差要减环境温度 ②速率与温差成正比 ③冷却时前面带负号。漏任何一个都不对。",
                          "df":  100,
                          "df_src":  "manual",
                          "tags":  [
                                       "微分方程",
                                       "建模",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "M1102-414",
                          "kp":  "#20",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "参数方程·面积",
                          "stem":  "由参数方程 x=2t、y=t²（0≤t≤1）所确定的曲线与 x 轴、直线 x=2 围成的区域面积是（　）",
                          "options":  [
                                          "A. 2/3",
                                          "B. 1/3",
                                          "C. 4/3",
                                          "D. 1/2"
                                      ],
                          "answer":  "A",
                          "key":  "面积 A=∫y dx=∫₀¹ t²·(dx/dt)dt=∫₀¹ t²·2 dt=2/3。错项：B 漏了 dx/dt 里的 2；C 多乘了 2；D 是 1/2（把 t³/3 的系数算错）。",
                          "fix":  "参数方程求面积一定要带 dx/dt：A=∫y(t)·x′(t)dt。忘了 x′ 是这一族题的头号错误，和参数方程求导漏除 x′ 是同一种病。",
                          "df":  96,
                          "df_src":  "manual",
                          "tags":  [
                                       "参数方程",
                                       "面积",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "M1102-416",
                          "kp":  "#29",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "条件极值",
                          "stem":  "设 x\u003e0、y\u003e0 且 x+y=1，则 xy 的最大值是（　）",
                          "options":  [
                                          "A. 1/4",
                                          "B. 1/2",
                                          "C. 1",
                                          "D. 1/8"
                                      ],
                          "answer":  "A",
                          "key":  "代入消元：y=1−x，f=x(1−x)=x−x²，f′=1−2x=0 ⇒ x=1/2，f=1/4。也可用拉格朗日：F=xy+λ(x+y−1)，解得 x=y=1/2。错项：B 是 x 或 y 的取值；C 忽略了约束；D 是 1/2×1/4 的错误组合。",
                          "fix":  "条件极值两条路：**能代入就代入**（这题代入最快），不能代入才用拉格朗日。代入口诀：把约束解出一个变量代进目标函数，就变成一元极值。",
                          "df":  95,
                          "df_src":  "manual",
                          "tags":  [
                                       "极值",
                                       "条件极值",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "M1102-417",
                          "kp":  "#32",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "极坐标·心形线面积",
                          "stem":  "曲线 r=1+cosθ（0≤θ≤2π）所围成图形的面积是（　）",
                          "options":  [
                                          "A. 3π/2",
                                          "B. π",
                                          "C. 2π",
                                          "D. 3π/4"
                                      ],
                          "answer":  "A",
                          "key":  "A=½∫₀^{2π}(1+cosθ)²dθ=½∫₀^{2π}(1+2cosθ+cos²θ)dθ。其中 ∫2cosθ=0，∫cos²θ=π，∫1=2π，故 A=½(2π+0+π)=3π/2。错项：B 漏了 cos²θ 那一项；C 把 ½ 丢了；D 少乘 2。",
                          "fix":  "极坐标面积一定要带 ½；展开平方后逐项积分，cosθ 在一整周期上积分为 0 可以省掉，但 cos²θ 不能省（它是 π，不是 0）。",
                          "df":  105,
                          "df_src":  "manual",
                          "tags":  [
                                       "极坐标",
                                       "面积",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "HD01",
                          "kp":  "#32",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "极坐标定界·∬r 型",
                          "stem":  "设 D 由曲线 r = 2cos θ（0 ≤ θ ≤ π/4）与射线 θ = π/4 所围成，则 ∬_D √(x²+y²) dσ 等于",
                          "options":  [
                                          "A. 5√2/9",
                                          "B. 10√2/3",
                                          "C. 10√2/9",
                                          "D. 5√2/3"
                                      ],
                          "answer":  "C",
                          "key":  "√(x²+y²)=r，面积元 dσ=r dr dθ ⇒ 被积为 r²。∫₀^{π/4}∫₀^{2cosθ} r² dr dθ = (8/3)∫₀^{π/4}cos³θ dθ；∫cos³θ=sinθ−sin³θ/3，在 π/4 处为 5√2/12 ⇒ 10√2/9。",
                          "fix":  "漏乘面积元的 r 会得到 ∬r dr dθ 一类结果；A 少算一半，B 漏除 3，D 两处都错。",
                          "df":  108,
                          "df_src":  "dsh",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HD02",
                          "kp":  "#32",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "极坐标定界·角范围拆分",
                          "stem":  "设 D = {(x,y) : x²+y² ≤ 2y, y ≥ x}，则 ∬_D y dσ 等于",
                          "options":  [
                                          "A. π/4 + 2/3",
                                          "B. π/2 + 2/3",
                                          "C. π/4 + 4/3",
                                          "D. π/2 + 1/3"
                                      ],
                          "answer":  "A",
                          "key":  "x²+y²≤2y ⇔ r≤2sinθ；y≥x ⇔ θ≥π/4 ⇒ θ∈[π/4,π/2]。被积 y=r sinθ，乘 r 得 r²sinθ；(8/3)∫_{π/4}^{π/2}sin⁴θ dθ = π/4 + 2/3。",
                          "fix":  "B 是 θ 从 0 起算（漏 y≥x）；C/D 是 8/3 与上下限配错。",
                          "df":  108,
                          "df_src":  "dsh",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HD04",
                          "kp":  "#34",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "二重积分换序·反解",
                          "stem":  "设 f 连续，则 ∫₀¹dy∫_{y²}^{y} f(x,y) dx 改为先 y 后 x 的次序应写成",
                          "options":  [
                                          "A. ∫₀¹dx∫_{x²}^{x} f dy",
                                          "B. ∫₀¹dx∫_{x}^{√x} f dy",
                                          "C. ∫₀¹dx∫_{√x}^{x} f dy",
                                          "D. ∫₀¹dx∫_{x}^{1} f dy"
                                      ],
                          "answer":  "B",
                          "key":  "区域 y²≤x≤y、0≤y≤1。改按 x：x∈[0,1]；y²≤x ⇔ y≤√x，x≤y ⇒ x≤y≤√x。",
                          "fix":  "A 把 y≥x 与 y≤x 弄反；C 上下限颠倒；D 丢曲边 y≤√x。",
                          "df":  108,
                          "df_src":  "dsh",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HD07",
                          "kp":  "#48",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "特征值反求 A",
                          "stem":  "设 2 阶矩阵 A 的特征值为 λ₁=1、λ₂=3，对应特征向量分别为 α₁=(1,1)ᵀ、α₂=(1,−1)ᵀ，则 A 等于",
                          "options":  [
                                          "A. (1,0;0,3)",
                                          "B. (2,−1;−1,2)",
                                          "C. (2,1;1,2)",
                                          "D. (2,−1;−1,1)"
                                      ],
                          "answer":  "B",
                          "key":  "A=PΛP⁻¹，P=((1,1),(1,−1))、Λ=diag(1,3)、P⁻¹=½(1,1;1,−1) ⇒ A=(2,−1;−1,2)。验算 Aα₁=(1,1)=α₁、Aα₂=(3,−3)=3α₂。",
                          "fix":  "A 没换基（只对标准正交特征向量成立）；C 是 λ 与特征向量配反；D 的 |D|=1≠λ₁λ₂=3。",
                          "df":  108,
                          "df_src":  "dsh",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HD09",
                          "kp":  "#16",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "变限积分·复合上限",
                          "stem":  "设 F(x) = ∫₀^{x²} sin(t²) dt，则 F′(x) 等于",
                          "options":  [
                                          "A. sin(x⁴)",
                                          "B. 2x·sin(x⁴)",
                                          "C. 2x·sin(x²)",
                                          "D. 2x·cos(x⁴)"
                                      ],
                          "answer":  "B",
                          "key":  "上限是 x²，需链式乘 (x²)′=2x，且把 t 换成上限 x² ⇒ F′=sin((x²)²)·2x = 2x sin(x⁴)。",
                          "fix":  "A 漏链式因子 2x；C 把上限代入时没平方；D 把 sin 写成 cos。",
                          "df":  108,
                          "df_src":  "dsh",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HD10",
                          "kp":  "#16",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "变限积分·上下限都含 x",
                          "stem":  "设 F(x) = ∫_x^{x²} e^{−t²} dt，则 F′(x) 等于",
                          "options":  [
                                          "A. 2x·e^{−x⁴} + e^{−x²}",
                                          "B. e^{−x⁴} − e^{−x²}",
                                          "C. 2x·e^{−x²} − e^{−x⁴}",
                                          "D. 2x·e^{−x⁴} − e^{−x²}"
                                      ],
                          "answer":  "D",
                          "key":  "F′=f(x²)·(x²)′ − f(x)·(x)′ = e^{−(x²)²}·2x − e^{−x²} = 2x e^{−x⁴} − e^{−x²}。",
                          "fix":  "A 下限项符号写反（上限加、下限减）；B 漏两个链式因子；C 把上下限的指数代入反了。",
                          "df":  108,
                          "df_src":  "dsh",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HD11",
                          "kp":  "#39",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "微分方程建模·只列方程",
                          "stem":  "水箱原有 200 L 水，含盐 20 kg。以 4 L/min 注入含盐 0.5 kg/L 的盐水，同时以 2 L/min 排出混合液。设 t 时刻盐量为 m(t) kg，则 dm/dt 等于",
                          "options":  [
                                          "A. 2 − 2m/(200+2t)",
                                          "B. 2 − m/(200+2t)",
                                          "C. 2 − 2m/200",
                                          "D. 2 + 2m/(200+2t)"
                                      ],
                          "answer":  "A",
                          "key":  "进盐 4×0.5=2（kg/min）；出盐 2×(m/V)，而 V 随时间变：V=200+(4−2)t=200+2t ⇒ 出盐 2m/(200+2t)。故 dm/dt=2−2m/(200+2t)。",
                          "fix":  "B 漏了排出流量 2；C 把体积当恒 200（忽略液面上升）；D 出盐项符号为正。",
                          "df":  108,
                          "df_src":  "dsh",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HD12",
                          "kp":  "#39",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "微分方程建模·只列方程",
                          "stem":  "容器内有 100 L 纯水，以 1 L/min 注入含糖 0.1 kg/L 的糖水，同时以 1 L/min 排出混合液。设 t 时刻糖量为 m(t) kg，则 dm/dt 等于",
                          "options":  [
                                          "A. 0.1 − m/(100+t)",
                                          "B. 0.1 − m/10",
                                          "C. 0.1 − m/100",
                                          "D. 0.1 + m/100"
                                      ],
                          "answer":  "C",
                          "key":  "进糖 1×0.1=0.1；出糖 1×(m/V)，而进出等量 ⇒ V 恒为 100 ⇒ 出糖 m/100。故 dm/dt=0.1−m/100。",
                          "fix":  "A 是错把体积当变化（只有进出流量不等时才变）；B 分母用了 10；D 符号错。",
                          "df":  108,
                          "df_src":  "dsh",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HD14",
                          "kp":  "#30",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "闭区域最值·xy 型",
                          "stem":  "函数 f(x,y) = xy 在闭区域 x²+y² ≤ 1 上的最大值等于",
                          "options":  [
                                          "A. 1",
                                          "B. √2/2",
                                          "C. 0",
                                          "D. 1/2"
                                      ],
                          "answer":  "D",
                          "key":  "内部驻点 (0,0) 给 0；边界上 x=cosθ、y=sinθ ⇒ f=½sin2θ，最大值 ½（θ=π/4，即 (√2/2, √2/2)）。",
                          "fix":  "A 把 |x|、|y| 都取 1（越出圆盘）；B 是 f 在该点的 x 值；C 只看内部。",
                          "df":  108,
                          "df_src":  "dsh",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HS01",
                          "kp":  "#32",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "极坐标·双纽线面积",
                          "stem":  "曲线 r² = 2cos 2θ 所围成图形的面积是",
                          "options":  [
                                          "A. 1",
                                          "B. 2",
                                          "C. 1/2",
                                          "D. π"
                                      ],
                          "answer":  "B",
                          "key":  "双纽线 r²=2cos2θ 要求 cos2θ≥0 ⇒ θ∈[−π/4,π/4] 为右叶，左叶对称，共两叶。单叶面积 = ½∫_{−π/4}^{π/4}2cos2θ dθ = ½·[sin2θ]_{−π/4}^{π/4} = ½·(1+1) = 1；两叶合计 = 2。",
                          "fix":  "1 是只算了一叶（漏对称那一叶）；1/2 是单叶又漏了 ½ 与对称；π 是把 ∫cos2θ 错算成 ∫cosθ。",
                          "df":  108,
                          "df_src":  "dsh2",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HS02",
                          "kp":  "#34",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "换序·三角边界需解反函数",
                          "stem":  "设 f 连续，则 ∫₀^π dx ∫₀^{sin x} f(x,y) dy 交换积分次序后等于",
                          "options":  [
                                          "A. ∫₀¹dy ∫_{0}^{arcsin y} f dx",
                                          "B. ∫₀¹dy ∫_{arcsin y}^{π/2} f dx",
                                          "C. ∫₀¹dy ∫_{0}^{π} f dx",
                                          "D. ∫₀¹dy ∫_{arcsin y}^{π−arcsin y} f dx"
                                      ],
                          "answer":  "D",
                          "key":  "区域：0≤x≤π、0≤y≤sin x。y 的范围 [0,1]。给定 y∈(0,1)，sin x ≥ y 在 [0,π] 上有两段解：x∈[arcsin y, π−arcsin y]（左支递增段 + 右支递减段合成一段区间）。故为 ∫₀¹dy∫_{arcsin y}^{π−arcsin y} f dx。",
                          "fix":  "只取左支 arcsin y 到 π/2 是漏了右半；∫₀^{arcsin y} 把不等式方向弄反；∫₀^π 等于没换序。",
                          "df":  108,
                          "df_src":  "dsh2",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HS03",
                          "kp":  "#10",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "参数方程·星形线曲率",
                          "stem":  "曲线由 x = 2cos³t，y = 2sin³t 给出，则 t = π/4 处的曲率 κ 等于",
                          "options":  [
                                          "A. 1/3",
                                          "B. 1/6",
                                          "C. 2/3",
                                          "D. 3/4"
                                      ],
                          "answer":  "A",
                          "key":  "x′=−6cos²t·sin t、y′=6sin²t·cos t。在 t=π/4 处 x′=−3√2/2、y′=3√2/2，x′²+y′²=9。再算 x″=12cos t sin²t−6cos³t、y″=12sin t cos²t−6sin³t，t=π/4 时两者均为 3√2/2，故 |x′y″−y′x″|=|−4.5−4.5|=9 ⇒ κ=9/27=1/3。",
                          "fix":  "1/6 是分母用了 (x′²+y′²)² 而不是 3/2 次方；2/3 是分子漏了一半；3/4 是半径 2 没进分子。",
                          "df":  108,
                          "df_src":  "dsh2",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HS04",
                          "kp":  "#48",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "实对称·由特征值与一个特征向量反求 A",
                          "stem":  "设 3 阶实对称矩阵 A 的特征值为 2、2、−1，且 λ=−1 对应的特征向量为 (1,1,1)ᵀ，则 A 等于",
                          "options":  [
                                          "A. (2,0,0;0,2,0;0,0,−1)",
                                          "B. (−1,2,2;2,−1,2;2,2,−1)",
                                          "C. (1,−1,−1;−1,1,−1;−1,−1,1)",
                                          "D. (1,1,1;1,1,1;1,1,1)"
                                      ],
                          "answer":  "C",
                          "key":  "实对称可正交分解 A = Σλᵢ Pᵢ。λ=2 是二重根、其不变子空间是 (1,1,1)⊥（2 维，且 A 在该子空间上就是 2E），λ=−1 的分量投影为 J/3（J 为全 1 阵）。故 A=2E−3·(J/3)=2E−J=(1,−1,−1;−1,1,−1;−1,−1,1)。验算：A(1,1,1)ᵀ=(−1,−1,−1)ᵀ，符�� λ=−1。",
                          "fix":  "直接写 diag(2,2,−1) 只在特征向量是标准基时成立；(−1,2,2;…) 是把 λ 与方向配反；全 1 阵的特征值是 3 与 0，全错。",
                          "df":  108,
                          "df_src":  "dsh2",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HS05",
                          "kp":  "#16",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "变限积分·含参被积函数求二阶导",
                          "stem":  "设 F(x) = ∫₀^x (x − t)e^{−t} dt，则 F″(x) 等于",
                          "options":  [
                                          "A. −e^{−x}",
                                          "B. x·e^{−x}",
                                          "C. 1 − e^{−x}",
                                          "D. e^{−x}"
                                      ],
                          "answer":  "D",
                          "key":  "先把 x 从被积函数里拿出来：F(x)=x∫₀^x e^{−t}dt − ∫₀^x t e^{−t}dt。求导一次 F′=∫₀^x e^{−t}dt + x e^{−x} − x e^{−x} = ∫₀^x e^{−t}dt；再求导 F″=e^{−x}。",
                          "fix":  "−e^{−x} 是漏了 F′ 中的 ∫ 只剩 −e^{−x}；x e^{−x} 是没把 x 提出来后求导两次；1−e^{−x} 是一次导的结果。",
                          "df":  108,
                          "df_src":  "dsh2",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HS07",
                          "kp":  "#39",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "微分方程建模·Logistic（只列方程）",
                          "stem":  "某池塘鱼群数量为 P(t)，环境最大容纳量为 K，内禀增长率为 r（r,K 均为正常数）。假设增长率随密度线性下降、且 P=K 时不再增长，则描述该鱼群数量的微分方程是",
                          "options":  [
                                          "A. dP/dt = rP(1 + P/K)",
                                          "B. dP/dt = rP(K − P)²",
                                          "C. dP/dt = rP(1 − P/K)",
                                          "D. dP/dt = r(P − K)"
                                      ],
                          "answer":  "C",
                          "key":  "「增长率随密度线性下降」⇒ 单位个体增长率 = r(1−P/K)，乘上个体数 P 得 dP/dt=rP(1−P/K)；自检：P=K 时右端为 0、P\u003eK 时为负，符合容纳量语义。",
                          "fix":  "rP(1+P/K) 在 P=K 时不为 0（无上界）；rP(K−P)² 是三次型、且量纲与前设不符；r(P−K) 是线性型、无内禀增长因子 P。",
                          "df":  108,
                          "df_src":  "dsh2",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HS08",
                          "kp":  "#18",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "反常积分·两端都奇异",
                          "stem":  "反常积分 ∫₀¹ dx/√(x(1−x)) 的值是",
                          "options":  [
                                          "A. π",
                                          "B. 2",
                                          "C. π/2",
                                          "D. 发散"
                                      ],
                          "answer":  "A",
                          "key":  "x→0⁺ 与 x→1⁻ 两端都奇异，但被积函数 ~ 1/√x（上限 1/2 次幂）与 ~1/√(1−x)，两处 p=1/2\u003c1 均收敛。令 x=sin²t（t:0→π/2）⇒ dx=2sin t cos t dt、√(x(1−x))=sin t cos t ⇒ 被积 = 2dt ⇒ 值 = 2·(π/2)=π。",
                          "fix":  "2 是漏了 ½ 系数后的 ∫dt；π/2 是把积分区间当 [0,π]；说发散是把 p=1/2 当成 p≥1。",
                          "df":  108,
                          "df_src":  "dsh2",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HS09",
                          "kp":  "#21",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "旋转体·柱壳法绕 y 轴",
                          "stem":  "曲线 y = √x（0 ≤ x ≤ 1）与 x 轴、直线 x = 1 围成的区域绕 y 轴旋转，所得旋转体体积 V 等于",
                          "options":  [
                                          "A. 2π/5",
                                          "B. 4π/5",
                                          "C. π/5",
                                          "D. π/2"
                                      ],
                          "answer":  "B",
                          "key":  "绕 y 轴用柱壳法：V=2π∫₀¹ x·y dx = 2π∫₀¹ x·√x dx = 2π∫₀¹ x^{3/2}dx = 2π·(2/5) = 4π/5。",
                          "fix":  "2π/5 漏了 2π 里的 2；π/5 是漏掉 2π 的 2 又把 2/5 当 1/5；π/2 是把 ∫x√x 当成 ∫x dx。",
                          "df":  108,
                          "df_src":  "dsh2",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "HS10",
                          "kp":  "#27",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "隐函数·二阶偏导",
                          "stem":  "设 z = z(x,y) 由 x² + y² + z² − 4z = 0 确定，且在 (0,0,0) 的邻域内取 z→0 的那一支，则 ∂²z/∂x² 在点 (0,0) 处的值等于",
                          "options":  [
                                          "A. 1/4",
                                          "B. 1",
                                          "C. −1/2",
                                          "D. 1/2"
                                      ],
                          "answer":  "D",
                          "key":  "先解出支：z = 2 − √(4−x²−y²)。一阶：z_x = x/√(4−x²−y²)。再对 x 求导：z_xx = [√(4−x²−y²) + x·x/√(4−x²−y²)]/(4−x²−y²) = (4−y²)/(4−x²−y²)^{3/2}，在 (0,0) 处 = 4/8 = 1/2。",
                          "fix":  "1/4 是分母用了 4^{3/2}=8 之外的 16；1 是漏了商的求导第二项；−1/2 是把隐函数一支的凹凸方向判反（取 z→4 那支才会得负）。",
                          "df":  108,
                          "df_src":  "dsh2",
                          "tags":  [
                                       "数学",
                                       "哈尼出题"
                                   ]
                      },
                      {
                          "id":  "M1102-418",
                          "kp":  "#28",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "无条件极值·含参判别",
                          "stem":  "设 f(x,y)=x³+y³−3axy（a 为常数），若点 (a,a) 是 f 的极小值点，则 a 应满足（　）",
                          "options":  [
                                          "A. a\u003e0",
                                          "B. a\u003c0",
                                          "C. a≠0",
                                          "D. a 可取任意实数"
                                      ],
                          "answer":  "A",
                          "key":  "f_x=3x²−3ay=0、f_y=3y²−3ax=0，解得驻点 (0,0) 与 (a,a)（其余为复根，舍）。A=f_xx=6x、B=f_xy=−3a、C=f_yy=6y。在 (a,a)：A=6a、AC−B²=36a²−9a²=27a²\u003e0（a≠0 时）。极小要求 AC−B²\u003e0 且 A\u003e0，故需 6a\u003e0 即 a\u003e0。错项：B 方向反（那是极大）；C 只满足了 AC−B²\u003e0，漏了 A\u003e0 这一条；D 忽略了 A 的符号条件。",
                          "fix":  "判别三步一个都不能少：①AC−B²\u003e0 才可能是极值 ②再看 A 的符号定极大还是极小 ③代回求值。这题只考前两步。",
                          "df":  100,
                          "df_src":  "manual",
                          "tags":  [
                                       "极值",
                                       "含参数",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "M1102-419",
                          "kp":  "#28",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "无条件极值·对数型",
                          "stem":  "设 f(x,y)=x²+y²−2ln(xy)（x\u003e0，y\u003e0），则 f 的极小值是（　）",
                          "options":  [
                                          "A. 2",
                                          "B. 0",
                                          "C. 1",
                                          "D. −1"
                                      ],
                          "answer":  "A",
                          "key":  "f_x=2x−2/x=0 ⇒ x²=1 ⇒ x=1（x\u003e0 舍负）；f_y=2y−2/y=0 ⇒ y=1。驻点 (1,1)。A=f_xx=2+2/x²=4、B=0、C=4，AC−B²=16\u003e0 且 A\u003e0 ⇒ 极小。f(1,1)=1+1−2ln1=2。错项：B 把 ln1=0 后漏了 x²+y² 的 2；C 只算了 x²+y²=2 的一半；D 符号错。",
                          "fix":  "对数型极值两个坑：①求导后 x²=1 有两个根，但题给 x\u003e0 只能取正根 ②ln(xy)=ln x+ln y，求导是 1/x 与 1/y，别漏了链式里的系数。",
                          "df":  96,
                          "df_src":  "manual",
                          "tags":  [
                                       "极值",
                                       "对数",
                                       "难度校准"
                                   ]
                      },
                      {
                          "id":  "PZ2023-01",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "习近平总书记在为《复兴文库》作序言指出： “修史立典，存史启智，以文化人，这是中华民族延续几千年的一个传统。 \" “编纂出版《复兴文库》大型历史文献丛书，就是要通过对近代以来重要思想文献的选编，述录先人的开拓，启迪来者的奋斗。 \" “历史是最好的教科书，一切向前走，都不能忘记走过的路；走得再远、走到再光辉的未来，也不能忘记走过的过去。 \" 这表明（ ）",
                          "options":  [
                                          "A. 历史、现实、未来是相通的",
                                          "B. 一切历史都是当代史",
                                          "C. 历史过程不包含任何偶然的因素",
                                          "D. 历史事件往往可以完整重复和再现"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-02",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "社会形态是关于社会运动的具体形式、发展阶段和不同质态的范畴，是同生产力发展一定阶段相适应的经济基础与上层建筑的统一体。人类社会历史划分为原始社会、奴隶社会、封建社会、资本主义社会和共产主义社会（社会主义社会是其第一阶段）五种社会形态，其依据是（ ）",
                          "options":  [
                                          "A. 生产工具的质量和数量",
                                          "B. 统治集团的阶级和政治属性",
                                          "C. 经济基础特别是生产关系的性质",
                                          "D. 人们社会交往和分工的范围和水平"
                                      ],
                          "answer":  "C",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-03",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "马克思在《资本论》中指出： “不管生产力发生了什么变化，同一劳动在同样的时间内提供的价值量总是相同的。但它在同样的时间内提供的使用价值量是不同的：生产力提高时就多些，生产力降低时就少些。 \" 这段话表明，生产力的变化（ ）",
                          "options":  [
                                          "A. 不影响同一劳动在同样的时间内生产的商品数量",
                                          "B. 不改变同一劳动在同样的时间内的生产效率",
                                          "C. 影响同一劳动在同样的时间内生产的单个商品价值量",
                                          "D. 改变同一劳动在同样的时间内提供的价值总量"
                                      ],
                          "answer":  "C",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-04",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "垄断组织通过制定垄断价格来获取垄断利润。在市场交易过程中，垄断组织获利高低实际上受到很多因素的影响。为了避免遭受净亏损，垄断组织所能接受的最低价格是（ ）",
                          "options":  [
                                          "A. 成本价格",
                                          "B. 生产价格",
                                          "C. 垄断低价",
                                          "D. 垄断高价"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-05",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "什么是社会主义、怎样建设社会主义，是邓小平在领导改革开放和现代化建设过程中，不断提出和反复思考的首要的基本理论问题。搞清楚这一基本理论问题，关键是要（ ）",
                          "options":  [
                                          "A. 科学分析我国社会的主要矛盾",
                                          "B. 厘清不合乎时代进步和社会发展规律的模糊观念",
                                          "C. 系统总结社会主义社会发展的经验",
                                          "D. 在坚持社会主义基本制度基础上进一步认清社会主义本质"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-06",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "共同富裕是中国特色社会主义本质要求。分配制度是促进共同富裕的基础性制度。坚持按劳分配为主体，多种分配方式并存，构建初次分配、再分配、第三次分配协调配套的制度休系，对于处理效率和公平关系，逐步缩小收人差距具有非常重要的意义。在这一制度体系中，一滁了健全完善初次分配、再分配机制外，还要重视发挥第三次分配的作用。当前，要发挥好第三次分配的作用需要做的是（ ）",
                          "options":  [
                                          "A. 提高劳动报酬在分配中的比重",
                                          "B. 加大税收、社保、转移支付等的调节力度",
                                          "C. 引导、支持有意愿有能力的企业、社会组织和个人积极参与公益慈善事业",
                                          "D. 健全劳动、资本、土地等生产要素按贡献决定报酬机制"
                                      ],
                          "answer":  "C",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-07",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "坚持总体国家安全观，必须坚持国家利益至上，以人民安全为宗旨，以政治安全为根本，以经济安全为基础，以军事、科技、文化、社会安全为保障，以促进国际安全为依托，统筹外部安全和内部安全、国土安全和国民安全、传统安全和非传统安全、自身安全和共同安全，统筹维护国家安全和塑造国家安全。坚持总体国家安全观，归根到底是为了（ ）",
                          "options":  [
                                          "A. 顺应世界变化发展的新趋势",
                                          "B. 增强全民国家安全意识",
                                          "C. 破解我国国家安全面临的难题",
                                          "D. 确保中华民族伟大复兴进程不被迟滞甚至中断"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-08",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "作为一个无产阶级政党，如何永远得到人民拥护和支持，如何跳出治乱兴衰的历史周期率，实现长期执政，是中国共产党必须回答好、解决好的根本性问题。对于这一历史之问，时代之问，毛泽东同志在延安窑洞里给出了第一个答案， “只有让人民来监督政府，政府才不敢松懈。只有人人起来负责，才不会人亡政息。 \" 经过党的十八大以来的不懈努力，我们党又找到了第二个答案，这就是（ ）",
                          "options":  [
                                          "A. 坚定理想",
                                          "B. 自我革命",
                                          "C. 把权力关进制度的笼子",
                                          "D. 增强忧患意识"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-09",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "中国是一个文明古国，为人类文明作出了不可磨灭的贡献。经过工业革命，到19世纪中叶，西方资本主义强国经济和技术飞速发展。中国错失了工业革命的机遇，大幅落后于时代。导致中国落后于时代的原因是（ ）",
                          "options":  [
                                          "A. 中国的封建统治者夜郎自大、闭关锁国",
                                          "B. 资本 - 帝国主义国家对华进行资本输出",
                                          "C. 中国社会的阶级关系发生了深刻变动",
                                          "D. 中国被纳人世界资本主义体系"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-10",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "大革命失败后，白色恐怖笼罩全国。在生死考验面前，中国共产党人坚持革命的理想信念，表现出大无畏的英雄气概。为了挽救革命， 1927年8月7日，中共中央在汉口召开紧急会议，史称“八七会议 \" 。这次会议（ ）",
                          "options":  [
                                          "A. 批评了大革命后期存在的“左 \" 倾错误",
                                          "B. 阐明了党的工作重心由城市转移到乡村的必要性",
                                          "C. 提出了组织湘、鄂、粤、赣四省农民秋收暴动",
                                          "D. 确定了土地革命和武装起义的方针"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-11",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "延安是中国革命的圣地。从1935年到1948年，党中央和毛泽东倡导老一辈革命家在延安生活和战斗了13年，领导中国革命事业从低潮走向高潮，实现历史性转析，扭转了中国前途命运。 2022年10月27日，习近平总书记带领中共中央政治局常委专程从北京前往延安，瞻仰延安革命纪念地，宣示新一届中央领导集休将继承和发扬延安时期形成的优良革命传统和作风，延安精神所体现的党的宗旨是（ ）",
                          "options":  [
                                          "A. 全心全意为人民服务",
                                          "B. 坚定正确的政治方向",
                                          "C. 解放思想事实求是",
                                          "D. 自力更生艰苦奋斗"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-12",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "社会主义革命和建设时期，党面临的主要任务是，实现从新民主主义到社会主义的转变，进行社会主义革命，推进社会主义建设，为实现中华民族伟大复兴奠定根本政治前提和制定基础。中国进人社会主义社会最主要的标志是（ ）",
                          "options":  [
                                          "A. 社会主义政治制度的确立",
                                          "B. 社会主义经济制度的确立",
                                          "C. 民主革命遗留任务的完成",
                                          "D. 人民民主专政国家政权的建立"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-13",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "公民道德建设对于提高人民思想觉悟、道德水平、文明素养、提高全社会文明程度，具有至关重要的作用。适应新时代新要求，党中央根据变化了的形势和公民道德建设的新需要，于2019年颁布了《新时代公民道德建设实施纲要》 ，明确强调新时代公民道德建设的着力点是（ ）",
                          "options":  [
                                          "A. 弘扬民族精神和时代精神",
                                          "B. 推动理想信念教育常态化、制度化",
                                          "C. 推进社会公俜、职业道德、家庭关德、个人品德建设",
                                          "D. 传承孝老爱亲、扶危济困、见义勇为等中华美德"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-14",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "党的二十大报告指出： “我们要坚持走中国特色社会主义法治道路，建设中国特色社会主义法治体系，建设社会主义法治国家，围绕保障和促进社会公平正义，坚持依法治国、依法执政、依法行政共同推进，坚持法治国家、法治政府、法治社会一体建设，全面推进科学立法、严格执法、公正司法、全民守法，全面推进国家各方面工作法治化。 \" 坚持全面依法治国首先要（ ）",
                          "options":  [
                                          "A. 坚持依宪治国",
                                          "B. 坚持依法行政",
                                          "C. 坚持依法执政",
                                          "D. 坚持公正司法"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-15",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "2022年4月8日，北京冬奥会、冬残奥会总结表彰大会在北京举行。习近平总书记强调，伟大事业孕育伟大精神，伟大精神推进伟大事业。我国广大参与者珍惜伟大时代赋予的机遇，在冬奥申办、筹办、举办的过程中，共同创造了北京冬奥精神。北京冬奥精神是（ ）",
                          "options":  [
                                          "A. 更快、更高、更强、更团结",
                                          "B. 胸怀大局、自信开放、迎难而上、追求卓越、共创未来",
                                          "C. 勇气、决心、激励、平等",
                                          "D. 一起向未来"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-16",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "choice",
                          "stem":  "2022年11月11日，第二十五次中国一东盟领导人会议在柬埔寨首都金边举行，发表了中国和东盟国家就南海问题达成的又一份重要文件。这份文件是（ ）",
                          "options":  [
                                          "A. 《中国和东盟国家外交部长关于全面有效落实 \u003c 南海各方行为宣言 \u003e 的联合声明》",
                                          "B. 《落实 \u003c 南海各方行为宣言 \u003e 指导方针》",
                                          "C. 《纪念 \u003c 南海各方行为宣言 \u003e 签署十周年联合声明》",
                                          "D. 《纪念 \u003c 南海各方行为宣言 \u003e 签署二十周年联合声明》 、多项选择题：17～33题，每小题2分，共34分。下列每题给出的四个选项中，至少有两个选项是符合题目要求的。多选、少选或错选均不得分。"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-17",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "马克思、恩格斯在领导无产阶级斗争的实践中，始终强调领袖权威的必要性和重要性。马克思说过， “一个单独的提琴手是自己指挥自己，一个乐队就需要一个乐队指挥。 \" 恩格斯也指出， “没有权威，就不可能有任何的一致行动 \" ，并以大海航行的例子说明权威的重要性。在总结巴黎公社失败的经验教训时，马克思深刻指出，革命胜利后组织新政权、维护新政权、建设新政权都需要权威。恩格斯则明确指出， “巴黎公社遭到灭亡，就是由于缺乏集中和权威 \u0027 \u0027 。这表明，无产阶级领袖在历史上能够（ ）",
                          "options":  [
                                          "A. 引领社会发展的方向",
                                          "B. 影响历史事件的进程",
                                          "C. 凝聚人民群众的力量",
                                          "D. 创造人类社会的历史"
                                      ],
                          "answer":  "ABC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-18",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "苏轼在《题西林壁》中写道： “横看成岭侧成峰，远近高低各不同。不识庐山真面目，只缘身在此山中。 \" 人们对同一个事物之所以会有横、侧、远、近、高、低等评价差异，是因",
                          "options":  [
                                          "A. 评价客体没有自身固有的本质和特性",
                                          "B. 评价过程与评价主体有着直接的关系",
                                          "C. 评价没有正确与错误、善与恶的区别",
                                          "D. 评价结果随主客体的相互关系而变化"
                                      ],
                          "answer":  "BD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-19",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "马克思的平均利润理论深刻阐明了资本主义社会利润转化为平均利润以及剩余价值被进一步分割的原理。在利润率平均化的过程中，仍然能获得平均利润的资本有（ ）",
                          "options":  [
                                          "A. 产业资本",
                                          "B. 农业资本",
                                          "C. 商业资本",
                                          "D. 借贷资本"
                                      ],
                          "answer":  "ABC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-20",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "自20世纪70年代由美国主导的布雷顿森林体系崩溃以来，资本主义国家的金融垄断资本获得了快速发展。金融垄断资本得以形成和壮大的重要制度条件是（ ）",
                          "options":  [
                                          "A. 金融创新",
                                          "B. 金融市场管制加强",
                                          "C. 金融自由化",
                                          "D. 金融危机频繁发生"
                                      ],
                          "answer":  "AC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-21",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "十月革命胜利后，为捍卫年轻的苏维埃政权，列宁领导的苏维埃政权从1918年夏到1921年春实行了战时共产主义政策。战时共产主义政策是苏维埃俄国面临帝国主义武装干涉和国内战争被迫采取的一种临时性政策。战时共产主义政策的主要内容有（ ）",
                          "options":  [
                                          "A. 余粮收集制",
                                          "B. 取消商品货币关系",
                                          "C. 发展多种所有制",
                                          "D. 支持农民耕种自留地"
                                      ],
                          "answer":  "AB",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-22",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "中国共产党的历史，是一部不断推进马克思主义中国化时代化的历史，是一部不断推进理论创新、进行理论创造的历史。在这一历程中，毛泽东是马克思主义中国化的伟大开拓者和毛泽东思想的主要创立者，其主要贡献是（ ）",
                          "options":  [
                                          "A. 第一次明确提出了“马克思主义中国化 \" 的科学命题和重大任务",
                                          "B. 深刻论证了马克思主义中国化的必要性和重要性",
                                          "C. 系统阐述了马克思主义中国化的科学内涵",
                                          "D. 全面清除了马克思主义中国化认识上的各种障碍"
                                      ],
                          "answer":  "ABC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-23",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "资本是社会主义市场经济的重要生产要素。党的十八大以来，我们对资本性质的了解逐步深化，对资本作用的认识更趋全面，对资本规律的把握更加深人，对资本运行的治理能力不断提高。对社会主义市场经济条件下的资本，已经形成的认识主要有（ ）",
                          "options":  [
                                          "A. 资本是带动各类生产要素集聚配置的重要纽带，是促进社会生产力发展的重要力量",
                                          "B. 规范和约束资本的逐利本性，防止对经济社会发展带来不可估量的危害",
                                          "C. 完善我国资本市场基础制度，为各类资本发展释放出更大空间",
                                          "D. 既注重保障资本参与社会分配获得增殖和发展，更注重维护按劳分配的主体地位"
                                      ],
                          "answer":  "ABCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-24",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "开放是人类文明进步的重要动力，是世界繁荣发展的必由之路。面对世界范围内保护主义拾头、逆全球化趋势加剧的现实，中国于2018 ～ 2022年连续举办了五届世界上首个以进口为主题的国家级国际进口博览会。前四届有120多家世界500强及行业龙头企业连续参展，累计意向成交额达2700多亿美元。今年参加第五届中国国际进口博览会的世界500强和行业龙头企业超过280家，回头率近90 ％ ，累计意向成交735 · 2亿美元。中国国际进口博览会的成功举办充分表明，它已成为（ ）",
                          "options":  [
                                          "A. 世界经济增长的引擎",
                                          "B. 我国构建新发展格局的窗口",
                                          "C. 我国推进高水平对外开放的平台",
                                          "D. 全球共享的国际公共产品"
                                      ],
                          "answer":  "BCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-25",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "湿地保护是生态文明建设的重要内容。古往今来，人类逐水而居，文明伴水而生，人类生产生活同湿地有着密切联系。十年来，我国大力推进生态文明建设，加强湿地保护修复，构建保护制度体系，出台《湿地保护法》 ，使湿地生态状况得以持续改善。目前，我国湿地面积达到5635万公顷。在《湿地公约》认定的43个国际湿地城市中，我国13个城市人选，是全球人选国际湿地城市数量最多的国家。湿地保护有利于（ ）",
                          "options":  [
                                          "A. 促进人与自然和谐共生",
                                          "B. 推行草原森林河流湖泊湿地休养生息",
                                          "C. 提升生态系统多样性、稳定性、持续性",
                                          "D. 发挥湿地功能，推进可持续发展，应对气候变化"
                                      ],
                          "answer":  "ABCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-26",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "坚持和发展马克思主义，必须同中华优秀传统文化相结合。中华优秀传统文化源远流长、博大精深，是中华文明的智慧结晶，蕴含着天下为公、民为邦本、为政以德、革故鼎新、任人唯贤、天人合一、自强不息、厚德载物、讲信修睦、亲仁善邻等思想观念。这些思想观念",
                          "options":  [
                                          "A. 与马克思主义理论一脉相承",
                                          "B. 同科学社会主义价值观主张具有高度契合性",
                                          "C. 完整体现了马克思主义的立场观点和方法",
                                          "D. 体现着中国人民的宇宙观、天下观、社会观、道德观"
                                      ],
                          "answer":  "ABCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-27",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "1905年至1907年间，围绕中国社会变革问题，资产阶级革命派与改良派分别以《民报》 《新民丛报》为主要舆论阵地，展开了一场论战。这场论战（ ）",
                          "options":  [
                                          "A. 聚焦要不要以革命手段推翻清王朝",
                                          "B. 实质上是资产阶级思想与封建主义思想的交锋",
                                          "C. 传播了民主革命思想，促进了革命形势的发展",
                                          "D. 暴露了革命派在思想理论方面的弱点"
                                      ],
                          "answer":  "ACD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-28",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "《反对本本主义》是毛泽东在土地革命战争时期为反对当时红军中的教条主义思想而写的重要著作。毛泽东在这篇著作中提出的重要思想有（ ）",
                          "options":  [
                                          "A. “关心群众生活，注意工作方法 \"",
                                          "B. “把城市工作和根据地工作提到同等重要的地位 \"",
                                          "C. “没有调查，没有发言权 \"",
                                          "D. “中国革命斗争的胜利要靠中国同志了解中国情况 \""
                                      ],
                          "answer":  "CD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-29",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "党的十一届三中全会标志着中国共产党重新确立了马克思主义的思想路线、政治路线、组织路线，实现了新中国成立以来党的历史上具有深远意义的伟大转折，开启了我国改革开放和社会主义现代化建设的新时期。全会作出实行改革开放的历史性决策，是基于（ ）",
                          "options":  [
                                          "A. 对党和国家前途命运的深刻把握",
                                          "B. 对社会主义革命和建设实践的深刻总结",
                                          "C. 对时代潮流的深刻洞察",
                                          "D. 对人民群众期盼和需要的深刻体悟"
                                      ],
                          "answer":  "ABCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-30",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "社会主义道德是崭新类型的道德。与以往社会的道德形态相比，社会主义道德具有显著的先进性特征。社会主义道德的先进性主要体现在（ ）",
                          "options":  [
                                          "A. 它是对人类优秀道德资源的批判继承和创新发展",
                                          "B. 它克服了以往阶级社会道德的片面性和局限性",
                                          "C. 它是调节社会一切行为规范的准则",
                                          "D. 它是社会主义经济基础的反映"
                                      ],
                          "answer":  "ABD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-31",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "法律义务是指由一定的社会物质生活条件所制约的社会责任，是保证法律所规定的义务人按照权利人要求从事一定行为或不从事一定行为以满足权利人利益的法律手段。以下关于法律义务的表述，正确的有（ ）",
                          "options":  [
                                          "A. 法律义务必须依法设定",
                                          "B. 法律义务是一成不变的",
                                          "C. 法律义务源于现实需要",
                                          "D. 法律义务是义务人自主实施的行为"
                                      ],
                          "answer":  "AC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-32",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "2022年8月10日，国务院台湾事务办公室、国务院新闻办公室发表《台湾问题与新时代中国统一事业》白皮书。该白皮书的发表有利于（ ）",
                          "options":  [
                                          "A. 揭批“台独 \" 分裂势力和外部势力勾连挑衅，企图损害中国主权和领主完整、阻挠破坏中国统一进程的恶劣言行",
                                          "B. 最大限度地争取两岸同胞特别是台湾同胞与国际社会的理解和支持",
                                          "C. 展现中国共产党和中国政府愿继续以最大诚意、尽最大努力争取和平统一的立场和态度",
                                          "D. 提振全党全国各族人民矢志追求国家统一的精气神，增强岛内和海外反“独 \" 促统力量的信心和勇气"
                                      ],
                          "answer":  "ABCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2023-33",
                          "sub":  "政治",
                          "topic":  "真题2023",
                          "type":  "multi",
                          "stem":  "2022年11月17日，二十国集团领导人第十七次峰会在印度尼西亚巴厘岛举行。国家主席习近平出席并发表题为《共迎时代挑战共建美好未来》的重要讲话，倡议推动（ ）",
                          "options":  [
                                          "A. 更具竞争的全球发展",
                                          "B. 更加包容的全球发展",
                                          "C. 更加普惠的全球发展",
                                          "D. 更有韧性的全球发展、材料分析题："
                                      ],
                          "answer":  "BCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2023"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-01",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "习近平新时代中国特色社会主义思想是推进理论创新的光辉典范。新时代谱写马克思主义中国式现代化新篇章，要坚守理论创新的基础和前提，坚守好理论创新的“魂”和“根”。中国式现代化的马克思主义的“魂脉”和“根脉”是（ ）",
                          "options":  [
                                          "A. 马克思主义和中华优秀传统文化",
                                          "B. 共产主义社会理想和“天下大同”理想",
                                          "C. 全人类共同价值和社会主义核心价值观",
                                          "D. 共产主义远大理想和中国特色社会主义共同理想"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-02",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "一个地方的气候主要取决于纬度、海陆位置、地形以及大气环流和洋流等因素。纬度、海陆位置、地形等因素在一定时期内基本保持不变。大气环流和洋流二者相互作用就形成相对稳定的气候状态。但当其中一个因素突然“掉链子”，就会发生厄尔尼诺之类的异常现象。厄尔尼诺现象不仅推高全球变暖幅度，更可能导致频次更多、范围更广、强度更大的极端天气，进而影响全球气候。厄尔尼诺现象对全球气候的影响表明，偶然因素是（ ）",
                          "options":  [
                                          "A. 决定事物发展趋势的根本性因素",
                                          "B. 事物发展中可有可无的影响因素",
                                          "C. 事物发展中不可忽视的影响因素",
                                          "D. 事物发展中确定不移的因素"
                                      ],
                          "answer":  "C",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-03",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "除了几十颗卫星编织的“天上一张网”，还有地基增强系统构成的“地上一张网”。北斗卫星导航系统开启了高精度定位技术进度的“加速度”。有了“天上一张网”，为什么还要再建“地上一张网”？传统的卫星导航系统能提供的精度仅为5~10米，而北斗卫星系统可以实现提供实时米频、分米频、厘米频的更高精度的定位服务。从农林牧渔到吃穿住行，随着北斗卫星导航芯片式模块越来越多嵌入生产生活，每一个人都愈发清晰的感知到北斗的力量，北斗卫星系统在发展中应用，在应用中发展表明，技术进步的根本动力（ ）",
                          "options":  [
                                          "A. 科学研究的规范",
                                          "B. 实践主体的意志",
                                          "C. 认识主体的兴趣",
                                          "D. 社会实践的需要"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-04",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "列宁在谈到未来社会时写到“生产力将以什么样的速度向前发展，将以什么样的速度发展，并打破分工消灭脑力劳动和体力劳动的对立，把劳动变成生活的第一需要，这都是我们所不知道，而且也不可能知道的。我们只能谈国家灭亡的必然性，同时着重指出这个过程是长期的，指出它的长短取决于共产主义高级阶段的发展速度，而把消灭的日期或消亡的具体形式作为悬案，因为现在还没有可供解决这些问题的材料”。这表明列宁在展望未来社会时（ ）",
                          "options":  [
                                          "A. 揭示了社会历史发展的各项措施、方式、方针",
                                          "B. 认为不存在适用于各种社会形态发展的普遍规律",
                                          "C. 没有提出未来社会发展的方向、原则和基本特征",
                                          "D. 不对历史发展的各种细节作具体描绘"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-05",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "随着我国生产资料私有制社会主义改造的基本完成，国内的社会矛盾和阶级关系发生重大变化。在此背景下，毛泽东在1957年2月作《关于正确处理人民内部矛盾的问题》的报告，明确提出把正确处理人民内部矛盾作为我国政治生活的主题，其根本着眼点是（ ）",
                          "options":  [
                                          "A. 调动一切积极因素为社会主义建设服务",
                                          "B. 扩大社会主义民主，健全社会主义法制",
                                          "C. 维护社会稳定，实现长治久安",
                                          "D. 消除社会矛盾，实现民族大团结"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-06",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "习近平总书记指出，实践发展永无止境，解放思想永无止境，改革开放也永无止境，改革开放只有进行时，没有完成时。新时代坚持和发展中国特色社会主义根本动力仍然是全面深化改革开放改革开放的鲜明特征和首要任务是（ ）",
                          "options":  [
                                          "A. 解放和发展社会生产力",
                                          "B. 形成更加成熟更加定型的制度",
                                          "C. 处理好政府和市场的关系",
                                          "D. 促进社会公平正义，增进人民福祉"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-07",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "社会治理是国家治理的重要领域关系，国家长治久安，社会安定有序，人民安居乐业。20世纪60年代，浙江枫桥干部群众创造了依靠群众就地化解矛盾的“枫桥经验”。今年是毛泽东同志批示学习推广“枫桥经验”60周年，也是习近平总书记指示坚持和发展“枫桥经验”20周年。11月6日习近平总书记在会见全国“枫桥式工作法”入选单位代表时，再次强调要坚持和发展好新时代“枫桥经验”，新时代“枫桥经验”最突出的特点是（ ）",
                          "options":  [
                                          "A. 。加强社会治理的顶层设计",
                                          "B. 最大限度把矛盾风险方法化解在基层",
                                          "C. 把人文关怀和心理疏导有机结合起来",
                                          "D. 有效发挥政府的主导作用"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-08",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "我国是一个有十四亿多人口的大国，无论社会现代化程度有多高，解决好吃饭问题，始终是治国理政的头等大事。保障我国粮食安全的关键在于（ ）",
                          "options":  [
                                          "A. 健全种粮农民收益保障机制",
                                          "B. 推进农业供给侧结构性改革",
                                          "C. 落实藏粮于地、藏粮于技战略",
                                          "D. 完善主产区利益补偿制度"
                                      ],
                          "answer":  "C",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-09",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "中国是由各民族缔造的统一多民族国家，中国上下5000年的历史就是一个统一多民族国家的形成和发展的历史，中华民族的形成取决于（ ）",
                          "options":  [
                                          "A. 对种族和血缘的认同",
                                          "B. 对民族共同体的认同",
                                          "C. 对宗教信仰的认同",
                                          "D. 在共同生活地域的认同"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-10",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "鸦片战争前夕，中国是封建的国家，鸦片战争后独立的中国变成半殖民地的中国，封建的中国变成半封建的中国，这里的“半封建”是指（ ）",
                          "options":  [
                                          "A. 封建经济占据国家经济的一半",
                                          "B. 中国出现资本主义生产关系",
                                          "C. 中国丧失完全的独立",
                                          "D. 封建剥削制度的根本动摇"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-11",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "1894年11月,在檀香山召开的兴中会成立大会通过了由孙中山起草的《兴中会章程》。在章程中，孙中山提出了（ ）",
                          "options":  [
                                          "A. “振兴中华的口号”",
                                          "B. 建立民国的口号",
                                          "C. “反帝反封”的口号",
                                          "D. “民主自由”的口号"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-12",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "1937年7月7日，日本帝国主义发动卢沟桥事变，企图以武力吞并中国。卢沟桥事变的发生（ ）",
                          "options":  [
                                          "A. 揭开了抗日战争的序幕",
                                          "B. 成为中国人民抗日战争的起点",
                                          "C. 标志着中国进入全民族抗战阶段",
                                          "D. 标志着反法西斯同盟的正正式建立"
                                      ],
                          "answer":  "C",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-13",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "1948年，解放战争形式已经有了极大的进展,许多解放区已经连成片，许多城市已经解放或者即将解放，人民解放军和人民解放战争的正规性程度大为提高，全国胜利已经在望。这种情况要求党迅速克服存在于党内和军队内的任何无纪律无政府状态，把一切必须和可能集中的权力集中于中央。为此，中共中央决定建立（ ）",
                          "options":  [
                                          "A. 精兵简政制度",
                                          "B. 请示报告制度",
                                          "C. 民主协商制度",
                                          "D. 党外通报制度"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-14",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "习近平总书记在党的二十大报告中深刻指出，全面依法治国是国家治理的一场深刻革命，关系党执政兴国、关系人民幸福安康、关系党和国家长治久安。必须更好发挥法治固根本、稳预期、利长远的保障作用，在法治轨道上全面建设社会主义现代化国家。全面依法治国关键在于（ ）",
                          "options":  [
                                          "A. 加快形成严密的法治监督体系",
                                          "B. 坚持依法治国和以德治国相结合",
                                          "C. 坚持党领导立法、保证执法、支持司法、带头守法",
                                          "D. 深人开展法治宣传教育."
                                      ],
                          "answer":  "C",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-15",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "习近平在主持学习时强调，加强基础研究是实现高水平科技自立自强的迫切要求，是建设世界科技强国的必由之路.加强基础研究，归根到底靠（ ）",
                          "options":  [
                                          "A. 体制机制",
                                          "B. 国合作平台",
                                          "C. 学科建設布局",
                                          "D. 高水平人才"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-16",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "choice",
                          "stem":  "2023年9月18日至26日，第78届联合国大会高级别周在联合国总部进行。相比以往，本届联大将更多目光投向了“全球南方”，议程主要着眼于“全球南方”国家提出的需求，讨论气候变化、主权债务减免、如何帮助陷入困境的国家实现联合国在繁荣、健康、发展、教育、性别平等方面的发展目标。中国作为世界上最大的发展中国家，在本届联大期间出席多场会议，表达“全球南方”天然成员的诉求与主张。“全球南方”国家的声音更响亮，是本届联大的亮点。这表明（ ）",
                          "options":  [
                                          "A. 全球南北对话的僵局已经破解",
                                          "B. “全球南方”国家在国际组织中的话语权和影响力，占据了主导地位",
                                          "C. 南方国家改变国际秩序游戏规则的议题成为了国际社会的普遍共识",
                                          "D. 国际力量对比正在发生深刻变化，百年变局正在深人发展演进"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-17",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "随着新一代人工智能技术的发展，基于大模型的生成式人工智能(AIGC)在快速回答提问、创作代码、翻唱经典歌曲等方面取得了新的突破。但是，随着技术迭代，人工智能高效地应用于各行各业时，其带来的风险也不容忽视，比如人工智能生成近似原画的内容、构图，可能侵犯原创作者的知识产权;人工智能技术被恶意使用，可能用来从事制造虚假信息、诈骗等违法活动。守住法律和伦理底线，推动人工智能朝着科技向善的方向发展，关键还在于人们更智慧地使用人工智能工具。“更智慧地使用人工智能工具”意味着( )",
                          "options":  [
                                          "A. 技术进步要以维护人民的根本利益为最高标准",
                                          "B. 人类活动能够实现合目的性与合规律性的统一",
                                          "C. 科技发展是由主观意志决定的客观物质活动",
                                          "D. 成功的实践是真理尺度与价值尺度的统一"
                                      ],
                          "answer":  "ABD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-18",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "茶叶，采自天然；茶器，匠心独具；茶艺,彬彬有礼。饮茶品茶,陶冶性情:以茶会友，品味人生。从山间一片叶到万家杯中茶，茶叶的生长与旅行，讲述着关于文明与生活的故事，沉淀着中华文明独特的价值理念。有人说“离开了茶文化，茶叶就仅仅只是一片叶子”。从“一片叶子”到“茶文化”表明( )",
                          "options":  [
                                          "A. 观念的东西不外是移入人脑并经过人脑改造过的物质的东西而已",
                                          "B. 世界上一切事物所具有的特定意义只是经验外化于对象的意义",
                                          "C. 客体潜在的价值转化为现实的价值，依赖于实践基础上的主体创造",
                                          "D. 客体的价值及价值大小，取决于客体的属性及满足主体需要的程度"
                                      ],
                          "answer":  "ACD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-19",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "习近平指出:“人类文明多样性是世界的基本特征，也是人类进步的源泉。世界上有200多个国家和地区、2500多个民族、多种宗教。不同历史和国情，不同民族和习俗，孕育了不同文明，使世界更加丰富多彩。”唯物史观关于社会形态的理论中，内在地包含着文明多样性的思想。下列关于人类文明多样性表述正确的有（ ）",
                          "options":  [
                                          "A. 独特的生产方式和生活方式决定着文明发展的不同样态",
                                          "B. 各种文明都具有独自的比其他文明更优越、更强大的文化基因",
                                          "C. 每一种文明都代表着一方文化的独特性，是人类文明的重要组成部分",
                                          "D. 每一种文明都是在与其他文明相隔离的状态下独自产生、发展和演变的"
                                      ],
                          "answer":  "AC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-20",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "商品经济是社会经济发展到一定阶段的产物。在资本主义社会之前的发展阶段，商品经济只是一种简单商品经济，这一阶段商品经济发展的基础是（ ）",
                          "options":  [
                                          "A. 生产资料公有制",
                                          "B. 个体劳动",
                                          "C. 生产资料私有制",
                                          "D. 雇佣劳动"
                                      ],
                          "answer":  "BC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-21",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "习近平指出:“经济全球化是社会生产力发展的客观要求和科技进步的必然结果，不是哪些人、哪些国家人为制造出来的。经济全球化为世界经济增长提供了强劲动力，促进了商品和资本流动、科技和文明进步、各国人民交往。”导致经济全球化迅猛发展的因素有（ ）",
                          "options":  [
                                          "A. 信息技术革命打破了生产要素的地域限制，使整个世界生产连成一片",
                                          "B. 国际分工和生产要素全球流动的比较优势，促进了产业链深度融合",
                                          "C. 发达国家主导制定的贸易和竞争规则，使广大发展中国家成为主要受益者",
                                          "D. 国际经济组织成员国对本国或本地区市场控制的放松，加快了贸易投资自由化"
                                      ],
                          "answer":  "ABD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-22",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "毛泽东在谈到党对民主革命规律的认识时指出，从党的建立到抗日时期,我们经过了两次胜利两次失败。“在抗日时期，我们才制定了合乎情况的党的总路线和一整套具体政策。这时候,中国民主革命这个必然王国才被我们认识,我们才有了自由”。这表明（ ）",
                          "options":  [
                                          "A. 党已完全掌握了新民主主义革命的发展规律",
                                          "B. 马克思主义必须与中国革命具体实际相结合",
                                          "C. 党对民主革命规律的认识必须有一个过程",
                                          "D. 新民主主义革命理论是总结正反两方面经验形成的"
                                      ],
                          "answer":  "BCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-23",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "今年以来，我国经济持续回升向好，高质量发展扎实推进，我国仍是全球增长最大引擎。据权威部门统计，前三季度我国国内生产总值同比增长5.2%；全国居民人均可支配收入同比实际增长5.9%；高技术产业投资增长11.4%。前10个月社会物流总额同比增长 4.9%，物流需求恢复向好，行业提质升级加速。总体上看，我国经济长期向好的基本面没有变也不会变，因为我国具有（ ）",
                          "options":  [
                                          "A. 超大规模市场的需求优势",
                                          "B. 产业体系配套完整的供给优势",
                                          "C. 社会主义市场经济的体制优势",
                                          "D. 大量高素质劳动者和企业家的人才优势"
                                      ],
                          "answer":  "ABCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-24",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "2023年5月29日，习近平总书记在二十届中央政治局第5次集体学习时指出，当今时代，人才是第一资源，科技是第一生产力，创新是第一动力。要把建设教育强国、科技强国、人才强国有机结合起来，一律统筹推进。形成推动高质量发展的。新增效应。在全面建设社会主义现代化国家进程中，坚持教育、科技、人才一体推进。是因为（ ）",
                          "options":  [
                                          "A. 教育科技人才三者之间具有一致性和相互支撑性",
                                          "B. 教育科技人才在符合国力竞争中的关键性地位更加凸显",
                                          "C. 教育科技人才是全面建设社会主义现代化国家的基础性和战略支撑性",
                                          "D. 把教育科技人才摆在经济社会发展重要位置，使社会主义现代化建设的历史经验"
                                      ],
                          "answer":  "ABCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-25",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "党的二十大以来，习近平总书记到不同省、区、市深入考察时多次强调，各地要立足自身实际，牢牢把握在国家发展大局中的战略地位。比如，要求浙江要在以科技创新塑造发展新优势上走在前列，强调内蒙古发展的重中之重是做大做强国家重要能源基地。指出黑龙江要当好国家粮食安全压舱石等等。习近平总书记的重要指示，为中国式现代化的地方实践提供了根本遵循准确把握各地区在国家发展大局中的战略定位，有利于（ ）",
                          "options":  [
                                          "A. 发挥各地比较优势，塑造我国发展新优势",
                                          "B. 优化区域经济布局，拓展我国发展动力源",
                                          "C. 统筹发展和安全，掌握我国发展主动权",
                                          "D. 同步实现共同富裕，推动我国发展迈上新台阶"
                                      ],
                          "answer":  "ABC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-26",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "加快发展数字经济是我国建设现代化产业体系的重要内容，根据《中国互联网发展报告2023》.截止2022年底，中国数据产量和算力总规模均居世界第二。十年间，中国数字经济规模从11万亿增长到502万亿元，占国内生产总值比重达到41.5%。数字经济的快速发展充分表明( )",
                          "options":  [
                                          "A. 数据已成为新的生产要素",
                                          "B. 数字经济正在成为新一轮国际竞争的重要领域",
                                          "C. 数字经济已取代实体经济",
                                          "D. 数字经济是稳增长促转型的重要引擎"
                                      ],
                          "answer":  "ABD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-27",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "1924年至1927年，由国共两党合作发动的大革命，在中国大地上掀起了反帝反封建的斗争，在中国革命史上写下了光荣的一页。与辛亥革命相比，大革命( )",
                          "options":  [
                                          "A. 斗争的规模更加宏伟",
                                          "B. 革命的社会内涵更加深刻",
                                          "C. 斗争的形式更加隐蔽",
                                          "D. 群众的动员程度更为广泛"
                                      ],
                          "answer":  "ABD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-28",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "社会主义改造基本完成以后，中国共产党面临如何进行社会主义建设的问题。毛泽东明确提出：“现在是社会主义革命和建设时期，我们要进行第二次结合，找出在中国怎样建设社会主义的道路”。1956年，以毛泽东同志为主要代表的中国共产党人提出了一系列关于建设社会主义的重要方针，其中包括( )",
                          "options":  [
                                          "A. 在经济建设上实行“既反保守又反冒进”的方针",
                                          "B. 在对外关系上实行“一边倒”的方针",
                                          "C. 在科学文化工作中实行“百花齐放，百家争鸣”的方针",
                                          "D. 在党与民主党派关系上实行“长期共存，互相监督”的方针"
                                      ],
                          "answer":  "ACD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-29",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "1939年10月，毛泽东在《〈共产党人〉发刊词》中，把党的建设称为“伟大工程”。2022年10月，习近平总书记在党的二十大报告中指出，必须持之以恒推进全面从严治党，深入推进新时期党的建设新的伟大工程，以党的自我革命引领社会革命。下列关于党的自我革命的正确表述有( )",
                          "options":  [
                                          "A. 勇于自我革命是中国共产党区别于其他政党的显著标志",
                                          "B. 自我革命精神是党永葆青春活力的强大支柱",
                                          "C. 所有政党都在不断自我革命中淬炼而成",
                                          "D. 自我革命是我们党跳出历史周期律的第二个答案"
                                      ],
                          "answer":  "ABD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-30",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "中华传统美德蕴含着丰富的思想道德资源，对于我们今天的道德建设具有重要价值。习近平书记指出：“要继承和弘扬我国人民在长期实践中培养和形成的美德，坚持马克思主义道德观，坚持社会主义道德观，在去粗取精、去伪存真的基础上，坚持古为今用，推陈出新，努力实现中华传统美德的创造性转化、创新性发展”。中华美德的“创造性转化、创新性发展”体现为( )",
                          "options":  [
                                          "A. 对中华传统美德中具有当代价值的道德精神加以挖掘",
                                          "B. 赋予中华传统美德新的内涵",
                                          "C. 用中华传统美德滋养社会主义道德建设",
                                          "D. 形成以中国传统文化为主题的道德体系"
                                      ],
                          "answer":  "ABC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-31",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "《中华人民共和国爱国主义教育法》由中华人民共和国第十四届全国人民代表大会常务委员第六次会议于2023年10月24日通过，自2024年1月1日起施行。这是新时代加强爱国主义教育，传承和弘扬爱国主义精神，实现中华民族伟大复兴与中国梦的必然要求。下列关于爱国主义教育法表述正确的有( )",
                          "options":  [
                                          "A. 爱国主义教育法是社会主义核心价值观的具体体现",
                                          "B. 爱国主义教育法有利于维护国家统一和民族团结",
                                          "C. 爱国主义教育法是惩治危害国家安全、荣誉和利益行为的法律武器",
                                          "D. 爱国主义教育法为加强新时代爱国主义教育提供了法治保障"
                                      ],
                          "answer":  "ABCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-32",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "2023年4月3日，学习贯彻习近平新时代中国特色社会主义思想主题教育工作会议在北京召开，会议强调，这次主题教育要牢牢把握“学思想、强党性、重实践、建新功”的总要求，要全面学习领会习近平新时代中国特色社会主义思想，全面系统掌握这一思想的基本观点、科学体系，把握好这一思想的世界观、方法论，坚持好、运用好贯穿其中的立场观点方法，不断增加对党的创新理论的( )",
                          "options":  [
                                          "A. 政治认同",
                                          "B. 思想认同",
                                          "C. 理论认同",
                                          "D. 情感认同"
                                      ],
                          "answer":  "ABCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "PZ2024-33",
                          "sub":  "政治",
                          "topic":  "真题2024",
                          "type":  "multi",
                          "stem":  "在中方支持下，2023年3月6日至10日，沙特阿拉伯与伊朗在北京举行对话。3月10日，中沙伊三方签署并发表联合声明，宣布沙伊双关同意恢复外交关系。这是党的二十大后中国外交的“大手笔”。中方推动沙伊握手言和的重要意义表现在( )",
                          "options":  [
                                          "A. 创造了调节冲突的新模式，为其他地区热点问题的解决提供了新思路",
                                          "B. 使沙伊矛盾得以最终解决",
                                          "C. 助力中东地区实现和平、稳定与安全",
                                          "D. 为国际社会注入和平合作的正能量"
                                      ],
                          "answer":  "ACD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2024"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti"
                      },
                      {
                          "id":  "M1104-01",
                          "sub":  "数学",
                          "kp":  "#1",
                          "type":  "choice",
                          "stem":  "lim(x→0) [∫₀ˣ sin t² dt] / x³ =（　）",
                          "options":  [
                                          "A. 1/3",
                                          "B. 0",
                                          "C. 1",
                                          "D. −1/3"
                                      ],
                          "answer":  "A",
                          "explain":  "洛必达一次：lim sin(x²)/(3x²)=x²/(3x²)=1/3。干扰项：0（误判阶）、1（漏除3）、−1/3（符号）。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "key":  "0/0 型，洛必达一次（分子按变限积分求导）：lim sin x²/(3x²)=lim x²/(3x²)=1/3（用了 sin u~u，u=x²→0）。错项：B 猜 0；C 洛必达后忘记除 3；D 符号错。",
                          "fix":  "变限积分求导＝上限代入被积函数；洛必达后分母的 3 别丢。",
                          "topic":  "极限·变限积分",
                          "tags":  [
                                       "数学",
                                       "补题-1104",
                                       "极限",
                                       "变限积分"
                                   ]
                      },
                      {
                          "id":  "M1104-02",
                          "sub":  "数学",
                          "kp":  "#1",
                          "type":  "choice",
                          "stem":  "lim(x→0) (x−sin x)/x³ =（　）",
                          "options":  [
                                          "A. 1/3",
                                          "B. 1/6",
                                          "C. 1/2",
                                          "D. 1"
                                      ],
                          "answer":  "B",
                          "explain":  "泰勒：sin x=x−x³/6+o(x³) ⇒ x−sin x=x³/6+… ⇒ 1/6。干扰项：1/3（展开系数写成1/3）、1/2、1（系数取1）。",
                          "df":  98,
                          "df_src":  "manual",
                          "from_big":  false,
                          "key":  "sin x=x−x³/6+o(x³)，故 x−sin x=x³/6+o(x³)，极限 1/6。错项：A 漏掉展开系数（写成 x³/3）；C 只展开到一阶作粗略估计；D 把 x−sin x 当 x³ 量级但系数取 1。",
                          "fix":  "sin x 展开到三次项：x−sin x ~ x³/6，系数 6 在分母。",
                          "topic":  "极限·泰勒",
                          "tags":  [
                                       "数学",
                                       "补题-1104",
                                       "极限",
                                       "泰勒"
                                   ]
                      },
                      {
                          "id":  "M1104-04",
                          "sub":  "数学",
                          "kp":  "#32",
                          "type":  "choice",
                          "stem":  "曲线 r=2sinθ 所围成的圆域的面积为（　）",
                          "options":  [
                                          "A. π/4",
                                          "B. π/2",
                                          "C. 2π",
                                          "D. π"
                                      ],
                          "answer":  "D",
                          "explain":  "r=2sinθ 即 x²+(y−1)²=1，半径1，面积π；极坐标 S=½∫₀^π(2sinθ)²dθ=2·π/2=π。干扰项：π/2（漏系数2）、2π（当r=2整圆）、π/4。",
                          "df":  96,
                          "df_src":  "manual",
                          "from_big":  false,
                          "key":  "r=2sinθ 即 x²+(y−1)²=1，半径 1 的圆，面积 π。极坐标验算：S=½∫₀^π (2sinθ)² dθ=2∫₀^π sin²θ dθ=2·(π/2)=π。错项：A 漏 ½ 又漏平方的 4；B 忘乘系数 2；C 按 r=2 的整圆算（把 2sinθ 当半径 2）。",
                          "fix":  "极坐标面积 = ½∫r²dθ；r=2sinθ 是半径 1 的圆（r 最大值 2 不等于半径）。",
                          "topic":  "极坐标·面积",
                          "tags":  [
                                       "数学",
                                       "补题-1104",
                                       "极坐标",
                                       "面积"
                                   ]
                      },
                      {
                          "id":  "M1104-05",
                          "sub":  "数学",
                          "kp":  "#29",
                          "type":  "choice",
                          "stem":  "f(x,y)=x²+xy+y²−3x−6y 在约束 x+y=2 下的最小值为（　）",
                          "options":  [
                                          "A. −33/4",
                                          "B. −9",
                                          "C. −8",
                                          "D. −35/4"
                                      ],
                          "answer":  "A",
                          "explain":  "代入 y=2−x 得 f=x²+x−8，min 在 x=−1/2、y=5/2，值 −33/4。拉格朗日同解。干扰项：−9（无约束驻点(0,3)，不满足约束）、−8（漏x²项）、−35/4（配方错）。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "key":  "代入 y=2−x：f=x²+x−8（开口向上），最小值在 x=−1/2 处，此时 y=5/2，f_min=1/4−1/2−8=−33/4。拉格朗日同解（λ=3/2）。错项：B 用了约束外的无约束驻点(0,3)（0+3≠2）；C 边界二次式漏 x² 项；D 配方系数错。",
                          "fix":  "条件极值先代掉一个变量再求一元极值；无约束驻点若不在约束上，不能直接当答案。",
                          "topic":  "条件极值",
                          "tags":  [
                                       "数学",
                                       "补题-1104",
                                       "极值",
                                       "条件极值"
                                   ]
                      },
                      {
                          "id":  "M1104-07",
                          "sub":  "数学",
                          "kp":  "#7",
                          "type":  "choice",
                          "stem":  "设 x=2cos t，y=3sin t，则 d²y/dx² 在 t=π/4 处 =（　）",
                          "options":  [
                                          "A. −3/2",
                                          "B. −3√2/4",
                                          "C. −3√2/2",
                                          "D. 3√2/2"
                                      ],
                          "answer":  "C",
                          "explain":  "dy/dx=−(3/2)cot t，d²y/dx²=−3/(4sin³t)；t=π/4 ⇒ −3/(4·√2/4)=−3/√2=−3√2/2。干扰项：−3/2（只算一阶，最大坑）、−3√2/4（漏分母2）、+（符号）。",
                          "df":  105,
                          "df_src":  "manual",
                          "from_big":  false,
                          "key":  "dy/dx=(3cos t)/(−2sin t)=−(3/2)cot t；d²y/dx²=[d/dt(−(3/2)cot t)]/x′(t)=[(3/2)csc²t]/(−2sin t)=−3/(4sin³t)。t=π/4 时 sin³=(√2/2)³=√2/4，故 −3/(4·√2/4)=−3/√2=−3√2/2。错项：A 只算了一阶 dy/dx|=−3/2（本题最大坑）；B 漏分母的 2；D 符号错（x′(t)\u003c0 会翻号）。",
                          "fix":  "参数方程二阶导公式：d²y/dx²=(dy/dx)′_t ÷ x′(t)，不是再对 x 求一次；分母 x′=−2sin t 为负，别丢符号。",
                          "topic":  "参数方程·二阶导",
                          "tags":  [
                                       "数学",
                                       "补题-1104",
                                       "参数方程",
                                       "二阶导"
                                   ]
                      },
                      {
                          "id":  "M1104-08",
                          "sub":  "数学",
                          "kp":  "#26",
                          "type":  "choice",
                          "stem":  "设 z=f(xy, x+y)，f 具有连续偏导数，记 u=xy、v=x+y、f₁′=∂f/∂u、f₂′=∂f/∂v，则 ∂z/∂x =（　）",
                          "options":  [
                                          "A. x·f₁′+f₂′",
                                          "B. f₁′+f₂′",
                                          "C. y·f₁′+x·f₂′",
                                          "D. y·f₁′+f₂′"
                                      ],
                          "answer":  "D",
                          "explain":  "∂z/∂x=f₁\u0027·(xy)\u0027_x+f₂\u0027·(x+y)\u0027_x=y f₁\u0027+f₂\u0027。干扰项：x f₁\u0027+f₂\u0027（混淆u对x/y偏导）、f₁\u0027+f₂\u0027（漏内层）、y f₁\u0027+x f₂\u0027。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "key":  "链式法则：∂z/∂x=f₁′·(∂u/∂x)+f₂′·(∂v/∂x)=f₁′·y+f₂′·1=y·f₁′+f₂′。错项：A 把 ∂u/∂x 记成 x（混淆 u 对 x 与对 y 的偏导）；B 漏掉内层导数；C 把 ∂v/∂x 记成 x。",
                          "fix":  "抽象链式先写清 u、v 各是谁：∂(xy)/∂x=y、∂(x+y)/∂x=1，逐项乘起来再合并。",
                          "topic":  "偏导·抽象链式",
                          "tags":  [
                                       "数学",
                                       "补题-1104",
                                       "偏导",
                                       "链式法则"
                                   ]
                      },
                      {
                          "id":  "M1105-01",
                          "sub":  "数学",
                          "kp":  "#1",
                          "type":  "choice",
                          "stem":  "lim(x→0) [∫₀ˣ (e^t − 1 − t) dt] / x³ =（　）",
                          "options":  [
                                          "A. 1/6",
                                          "B. 1/2",
                                          "C. 1/3",
                                          "D. 0"
                                      ],
                          "answer":  "A",
                          "explain":  "洛必达一次：(e^x−1−x)/(3x²)，又 e^x−1−x ~ x²/2 ⇒ 1/6。干扰项：1/2（忘分母3）、1/3（只展开一次）、0（误判高阶）。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "补题-1104晚"
                                   ]
                      },
                      {
                          "id":  "M1105-02",
                          "sub":  "数学",
                          "kp":  "#1",
                          "type":  "choice",
                          "stem":  "lim(x→0) [x − ln(1+x)] / x² =（　）",
                          "options":  [
                                          "A. 1",
                                          "B. 1/2",
                                          "C. 1/3",
                                          "D. 0"
                                      ],
                          "answer":  "B",
                          "explain":  "ln(1+x)=x−x²/2+o(x²) ⇒ x−ln(1+x)=x²/2 ⇒ 1/2。干扰项：1（漏展开的1/2）、1/3（分母当x³）、0。",
                          "df":  98,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "补题-1104晚"
                                   ]
                      },
                      {
                          "id":  "M1105-04",
                          "sub":  "数学",
                          "kp":  "#16",
                          "type":  "choice",
                          "stem":  "设 F(x) = ∫_x^(x²) e^(−t) dt，则 F′(x) =（　）",
                          "options":  [
                                          "A. −2x e^(−x²) − e^(−x)",
                                          "B. −2x e^(−x²) + e^(−x)",
                                          "C. 2x e^(−x²)",
                                          "D. 2x e^(−x²) − e^(−x)"
                                      ],
                          "answer":  "D",
                          "explain":  "F=[−e^(−t)]_x^(x²)=−e^(−x²)+e^(−x)，求导 = 2x e^(−x²) − e^(−x)。干扰项：A（两项符号全错）、B（上限项符号错）、C（漏下限贡献）。",
                          "df":  102,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "补题-1104晚"
                                   ]
                      },
                      {
                          "id":  "M1105-05",
                          "sub":  "数学",
                          "kp":  "#30",
                          "type":  "choice",
                          "stem":  "f(x,y) = x² + y² 在闭区域 D: x² + y² ≤ 2x 上的最大值为（　）",
                          "options":  [
                                          "A. 4",
                                          "B. 2",
                                          "C. 1",
                                          "D. 0"
                                      ],
                          "answer":  "A",
                          "explain":  "D 即 (x−1)²+y²≤1，参数化后 x²+y²=2+2cosθ，最大 4（在 (2,0)）。干扰项：2（拿直径当最大值）、1（误当圆心在原点的单位圆）、0（只找驻点，那是最小值）。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "补题-1104晚"
                                   ]
                      },
                      {
                          "id":  "M1105-06",
                          "sub":  "数学",
                          "kp":  "#34",
                          "type":  "choice",
                          "stem":  "二次积分 ∫₀¹ dx ∫_x^(√x) f(x,y) dy 交换积分次序后为（　）",
                          "options":  [
                                          "A. ∫₀¹ dy ∫_y^(y²) f dx",
                                          "B. ∫₀¹ dy ∫_(y²)^(y) f dx",
                                          "C. ∫₀¹ dy ∫_0^(y) f dx",
                                          "D. ∫₀¹ dy ∫_(y²)^(1) f dx"
                                      ],
                          "answer":  "B",
                          "explain":  "区域 0≤x≤1、x≤y≤√x；反解得 0≤y≤1、y²≤x≤y（y\u003c1 时 y²\u003cy）。干扰项：A（上下限写反）、C（漏上边界y²）、D（x上界当1）。",
                          "df":  102,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "补题-1104晚"
                                   ]
                      },
                      {
                          "id":  "M1105-07",
                          "sub":  "数学",
                          "kp":  "#32",
                          "type":  "choice",
                          "stem":  "∬_D (x²+y²)^(3/2) dxdy，D: x² + y² ≤ 2x，则其值为（　）",
                          "options":  [
                                          "A. 64/15",
                                          "B. 128/25",
                                          "C. 512/75",
                                          "D. 256/75"
                                      ],
                          "answer":  "C",
                          "explain":  "被积=r³，dA=r dr dθ ⇒ ∬r⁴ = ∫(2cosθ)^5/5 dθ = (32/5)∫cos⁵θ = (32/5)(16/15) = 512/75。干扰项：64/15（按 r³ 积分漏雅可比）、128/25（cos⁵当cos⁴）、256/75（少算一半）。",
                          "df":  105,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "补题-1104晚"
                                   ]
                      },
                      {
                          "id":  "M1105-08",
                          "sub":  "数学",
                          "kp":  "#7",
                          "type":  "choice",
                          "stem":  "设 x = t − sin t，y = 1 − cos t（摆线），则 d²y/dx² 在 t = π/2 处 =（　）",
                          "options":  [
                                          "A. 1",
                                          "B. 1/2",
                                          "C. −1/2",
                                          "D. −1"
                                      ],
                          "answer":  "D",
                          "explain":  "dy/dx=sin t/(1−cos t)=cot(t/2)；d²y/dx²=−1/(1−cos t)²；t=π/2 时 1−cos=1 ⇒ −1。干扰项：1（只算一阶）、1/2（漏平方）、−1/2（符号与系数混）。",
                          "df":  105,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "补题-1104晚"
                                   ]
                      },
                      {
                          "id":  "M1105-09",
                          "sub":  "数学",
                          "kp":  "#48",
                          "type":  "choice",
                          "stem":  "设 3 阶矩阵 A 的特征值为 1, −2, 3，则 |A² − A − 2E| =（　）",
                          "options":  [
                                          "A. −32",
                                          "B. 32",
                                          "C. −16",
                                          "D. 0"
                                      ],
                          "answer":  "A",
                          "explain":  "λ²−λ−2=(λ−2)(λ+1)：λ=1→−2、λ=−2→4、λ=3→4，积 = −32。干扰项：32（符号）、−16（漏因子）、0（误以为有零因子；使之为0的λ=2或−1不在特征值里）。",
                          "df":  102,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "补题-1104晚"
                                   ]
                      },
                      {
                          "id":  "B01",
                          "sub":  "数学",
                          "kp":  "#32",
                          "type":  "text",
                          "stem":  "计算二重积分 ∬_D (x²+y²) dxdy，其中 D 是由圆 x²+y²=2x 与 x²+y²=4x 所围成的区域。",
                          "options":  [

                                      ],
                          "answer":  "45π/2",
                          "explain":  "极坐标：内边界 r=2cosθ，外边界 r=4cosθ，θ∈[−π/2,π/2]。被积 r²·r=r³，∫r³dr=[(4c)⁴−(2c)⁴]/4=60c⁴，∫cos⁴θ=3π/8 ⇒ 60·3π/8=45π/2。易错：只写 r 从 0 到 2cosθ（当成实心圆，漏内边界）。",
                          "df":  118,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "大题-每日"
                                   ]
                      },
                      {
                          "id":  "B02",
                          "sub":  "数学",
                          "kp":  "#32",
                          "type":  "text",
                          "stem":  "计算二重积分 ∬_D √(x²+y²) dxdy，其中 D={(x,y): x²+y²≤2y，且 y≥x}。",
                          "options":  [

                                      ],
                          "answer":  "20√2/9",
                          "explain":  "x²+y²≤2y ⇒ r≤2sinθ；y≥x ⇒ θ∈[π/4,3π/4]。被积 r·r=r²，∫r²dr=8sin³θ/3。∫sin³θ=−cosθ+cos³θ/3，上下限差 5√2/6，乘 8/3 ⇒ 20√2/9。易错：θ 区间漏掉 y≥x 条件。",
                          "df":  120,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "大题-每日"
                                   ]
                      },
                      {
                          "id":  "B03",
                          "sub":  "数学",
                          "kp":  "#1",
                          "type":  "text",
                          "stem":  "求极限 lim(x→0) [ 1/x² − 1/(x·tan x) ]。",
                          "options":  [

                                      ],
                          "answer":  "1/3",
                          "explain":  "通分=(tan x−x)/(x²·tan x)。tan x=x+x³/3+o(x³) ⇒ 分子=x³/3，分母~x³ ⇒ 1/3。易错：直接洛必达越做越乱。",
                          "df":  115,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "大题-每日"
                                   ]
                      },
                      {
                          "id":  "B04",
                          "sub":  "数学",
                          "kp":  "#30",
                          "type":  "text",
                          "stem":  "求 f(x,y)=x²+y²−4x−2y+1 在闭区域 D={(x,y): x²+y²≤9} 上的最大值与最小值。",
                          "options":  [

                                      ],
                          "answer":  "最小值 −4，最大值 10+6√5",
                          "explain":  "内部驻点(2,1)，4+1=5\u003c9 在圆内，f=−4。边界令 x=3cosθ,y=3sinθ ⇒ f=10−12cosθ−6sinθ，值域[10−6√5, 10+6√5]≈[−3.42,23.42]。比较：−4 \u003c −3.42 ⇒ 最小值−4（内部），最大值 10+6√5（边界）。关键：内部值比边界最小值还小。",
                          "df":  120,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "大题-每日"
                                   ]
                      },
                      {
                          "id":  "M1106-01",
                          "sub":  "数学",
                          "kp":  "#5",
                          "type":  "choice",
                          "stem":  "曲线 y = (x²+1)/(x−1) 的斜渐近线是（　）",
                          "options":  [
                                          "A. y = x + 1",
                                          "B. y = x − 1",
                                          "C. y = x",
                                          "D. 不存在斜渐近线"
                                      ],
                          "answer":  "A",
                          "explain":  "y−x = (x²+1−x²+x)/(x−1) = (x+1)/(x−1) → 1（x→∞）⇒ 斜渐近线 y=x+1。另 x=1 是垂直渐近线。",
                          "df":  98,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-02",
                          "sub":  "数学",
                          "kp":  "#9",
                          "type":  "choice",
                          "stem":  "曲线 y = x³ − 3x² + 1 的拐点是（　）",
                          "options":  [
                                          "A. (0, 1)",
                                          "B. (1, −1)",
                                          "C. (1, 1)",
                                          "D. (−1, −3)"
                                      ],
                          "answer":  "B",
                          "explain":  "y′=3x²−6x，y″=6x−6；y″=0 ⇒ x=1，此时 y=1−3+1=−1。y″ 在 x=1 两侧变号 ⇒ 拐点 (1,−1)。",
                          "df":  98,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-03",
                          "sub":  "数学",
                          "kp":  "#1",
                          "type":  "choice",
                          "stem":  "当 x→0 时，√(1+x²) − 1 与 sin²x 相比是（　）",
                          "options":  [
                                          "A. 高阶无穷小",
                                          "B. 等价无穷小",
                                          "C. 同阶但不等价",
                                          "D. 低阶无穷小"
                                      ],
                          "answer":  "C",
                          "explain":  "√(1+x²)−1 ~ x²/2，sin²x ~ x²，比值 → 1/2（常数≠1）⇒ 同阶但不等价。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-04",
                          "sub":  "数学",
                          "kp":  "#52",
                          "type":  "choice",
                          "stem":  "极限 lim(n→∞) (1/n)·[sin(π/n) + sin(2π/n) + … + sin(nπ/n)] =（　）",
                          "options":  [
                                          "A. 0",
                                          "B. 1",
                                          "C. 1/2",
                                          "D. 2/π"
                                      ],
                          "answer":  "D",
                          "explain":  "这是 ∫₀¹ sin(πx)dx 的定义式 = [−cos(πx)/π]₀¹ = (1+1)/π = 2/π。",
                          "df":  105,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-05",
                          "sub":  "数学",
                          "kp":  "#26",
                          "type":  "choice",
                          "stem":  "设 z=z(x,y) 由 xyz = x + y + z 确定，则 ∂z/∂x =（　）",
                          "options":  [
                                          "A. (1 − yz)/(xy − 1)",
                                          "B. (yz − 1)/(xy − 1)",
                                          "C. (1 − xy)/(yz − 1)",
                                          "D. (xy − 1)/(1 − yz)"
                                      ],
                          "answer":  "A",
                          "explain":  "F=xyz−x−y−z，F_x=yz−1，F_z=xy−1 ⇒ z_x = −(yz−1)/(xy−1) = (1−yz)/(xy−1)。",
                          "df":  108,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-06",
                          "sub":  "数学",
                          "kp":  "#26",
                          "type":  "choice",
                          "stem":  "函数 z = x^y 在点 (1,1) 处的全微分 dz =（　）",
                          "options":  [
                                          "A. dy",
                                          "B. dx",
                                          "C. dx + dy",
                                          "D. dx − dy"
                                      ],
                          "answer":  "B",
                          "explain":  "z_x = y·x^(y−1) = 1，z_y = x^y·ln x = 0（在 (1,1)）⇒ dz = 1·dx + 0·dy = dx。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-07",
                          "sub":  "数学",
                          "kp":  "#33",
                          "type":  "choice",
                          "stem":  "设 D 是圆域 x²+y² ≤ 1，则 ∬_D (x² + y² + xy) dxdy =（　）",
                          "options":  [
                                          "A. π",
                                          "B. 3π/4",
                                          "C. π/2",
                                          "D. 0"
                                      ],
                          "answer":  "C",
                          "explain":  "xy 关于 y 轴（及 x 轴）为奇函数 ⇒ 积分为 0。剩 ∬(x²+y²) = ∫₀^{2π}∫₀¹ r³drdθ = 2π·(1/4) = π/2。",
                          "df":  102,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-08",
                          "sub":  "数学",
                          "kp":  "#53",
                          "type":  "choice",
                          "stem":  "曲线 y = (2/3)x^(3/2) 自 x=0 到 x=3 的弧长为（　）",
                          "options":  [
                                          "A. 4",
                                          "B. 16/3",
                                          "C. 13/3",
                                          "D. 14/3"
                                      ],
                          "answer":  "D",
                          "explain":  "y′=x^(1/2)，√(1+y′²)=√(1+x)；∫₀³√(1+x)dx = (2/3)[4^(3/2) − 1] = (2/3)(8−1) = 14/3。",
                          "df":  108,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-09",
                          "sub":  "数学",
                          "kp":  "#17",
                          "type":  "choice",
                          "stem":  "函数 f(x)=x² 在区间 [0,3] 上的平均值是（　）",
                          "options":  [
                                          "A. 3",
                                          "B. 9",
                                          "C. 4",
                                          "D. 27"
                                      ],
                          "answer":  "A",
                          "explain":  "平均值 = (1/(3−0))∫₀³x²dx = (1/3)·9 = 3。注意不是 f(1.5)=2.25。",
                          "df":  95,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-10",
                          "sub":  "数学",
                          "kp":  "#35",
                          "type":  "choice",
                          "stem":  "微分方程 y′ + y/x = x 满足 y(1)=1 的特解是（　）",
                          "options":  [
                                          "A. y = x²/3 + 1/(3x)",
                                          "B. y = x²/3 + 2/(3x)",
                                          "C. y = x² + 1/x",
                                          "D. y = x³/3 + 2/(3x)"
                                      ],
                          "answer":  "B",
                          "explain":  "积分因子 x：(xy)′ = x² ⇒ xy = x³/3 + C ⇒ y = x²/3 + C/x。y(1)=1 ⇒ 1/3+C=1 ⇒ C=2/3。",
                          "df":  110,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-11",
                          "sub":  "数学",
                          "kp":  "#35",
                          "type":  "choice",
                          "stem":  "微分方程 y′ = y·cos x 满足 y(0)=1 的特解是（　）",
                          "options":  [
                                          "A. y = cos x",
                                          "B. y = 1 + sin x",
                                          "C. y = e^(sin x)",
                                          "D. y = e^(cos x)"
                                      ],
                          "answer":  "C",
                          "explain":  "dy/y = cos x dx ⇒ ln y = sin x + C ⇒ y = C·e^(sin x)；y(0)=1 ⇒ C=1。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-12",
                          "sub":  "数学",
                          "kp":  "#8",
                          "type":  "choice",
                          "stem":  "函数 f(x) = x³ − 3x 在闭区间 [−2, 2] 上的最大值是（　）",
                          "options":  [
                                          "A. −2",
                                          "B. 0",
                                          "C. 1",
                                          "D. 2"
                                      ],
                          "answer":  "D",
                          "explain":  "f′=3x²−3=0 ⇒ x=±1。f(−2)=−2，f(−1)=2，f(1)=−2，f(2)=2 ⇒ 最大值 2。",
                          "df":  98,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-13",
                          "sub":  "数学",
                          "kp":  "#16",
                          "type":  "choice",
                          "stem":  "设 F(x) = ∫₀ˣ (t−1)e^(−t) dt，则 F 的极小值点是（　）",
                          "options":  [
                                          "A. x = 1",
                                          "B. x = 0",
                                          "C. x = −1",
                                          "D. x = 2"
                                      ],
                          "answer":  "A",
                          "explain":  "F′(x)=(x−1)e^(−x)，e^(−x)\u003e0 ⇒ F′ 的符号只由 x−1 决定：x\u003c1 时 F′\u003c0、x\u003e1 时 F′\u003e0 ⇒ x=1 为极小值点。",
                          "df":  105,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-14",
                          "sub":  "数学",
                          "kp":  "#26",
                          "type":  "choice",
                          "stem":  "函数 f(x,y) = √|xy| 在点 (0,0) 处（　）",
                          "options":  [
                                          "A. 连续且可微",
                                          "B. 连续但不可微",
                                          "C. 不连续",
                                          "D. 偏导数不存在"
                                      ],
                          "answer":  "B",
                          "explain":  "|f|≤√(|x||y|)→0 ⇒ 连续。f_x(0,0)=0、f_y(0,0)=0，但 [f(Δx,Δy)−0]/√(Δx²+Δy²) 沿 Δy=Δx 时为 |Δx|/(√2|Δx|)=1/√2 ↛ 0 ⇒ 不可微。",
                          "df":  115,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-15",
                          "sub":  "数学",
                          "kp":  "#1",
                          "type":  "choice",
                          "stem":  "极限 lim(x→0) (tan x − sin x)/x³ =（　）",
                          "options":  [
                                          "A. 0",
                                          "B. 1/3",
                                          "C. 1/2",
                                          "D. 1"
                                      ],
                          "answer":  "C",
                          "explain":  "tan x − sin x = sin x(1−cos x)/cos x ~ x·(x²/2) = x³/2 ⇒ 1/2。",
                          "df":  105,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-16",
                          "sub":  "数学",
                          "kp":  "#32",
                          "type":  "choice",
                          "stem":  "设 D = {(x,y) : x²+y² ≤ 1}，则 ∬_D |x| dxdy =（　）",
                          "options":  [
                                          "A. 2/3",
                                          "B. π/2",
                                          "C. 2π/3",
                                          "D. 4/3"
                                      ],
                          "answer":  "D",
                          "explain":  "利用关于两坐标轴的对称性 = 4·∬_{第一象限} x dA = 4∫₀^{π/2}cosθ dθ·∫₀¹r²dr = 4·1·(1/3) = 4/3。",
                          "df":  112,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-17",
                          "sub":  "数学",
                          "kp":  "#19",
                          "type":  "choice",
                          "stem":  "反常积分 ∫₁^{+∞} x^(−p) dx 收敛的充要条件是（　）",
                          "options":  [
                                          "A. p \u003e 1",
                                          "B. p ≥ 1",
                                          "C. p \u003c 1",
                                          "D. p \u003e 0"
                                      ],
                          "answer":  "A",
                          "explain":  "p≠1 时原函数 x^(1−p)/(1−p)，要 x→+∞ 时趋于 0 须 1−p\u003c0 即 p\u003e1；p=1 时为 ln x 发散。故 p\u003e1。",
                          "df":  96,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-18",
                          "sub":  "数学",
                          "kp":  "#21",
                          "type":  "choice",
                          "stem":  "曲线 y=√x（0≤x≤1）与 x 轴、直线 x=1 围成的区域绕 x 轴旋转所得旋转体体积为（　）",
                          "options":  [
                                          "A. π/4",
                                          "B. π/2",
                                          "C. π",
                                          "D. 2π"
                                      ],
                          "answer":  "B",
                          "explain":  "圆盘法：V = π∫₀¹(√x)²dx = π∫₀¹x dx = π/2。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-19",
                          "sub":  "数学",
                          "kp":  "#40",
                          "type":  "choice",
                          "stem":  "行列式 |1 1 1; 1 2 3; 1 4 9| =（　）",
                          "options":  [
                                          "A. 0",
                                          "B. 1",
                                          "C. 2",
                                          "D. 6"
                                      ],
                          "answer":  "C",
                          "explain":  "这是范德蒙德行列式（取 1,2,3 的幂）：(2−1)(3−1)(3−2) = 2。",
                          "df":  98,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-20",
                          "sub":  "数学",
                          "kp":  "#43",
                          "type":  "choice",
                          "stem":  "矩阵 A = (1 2 3; 2 4 6; 1 1 1) 的秩 r(A) =（　）",
                          "options":  [
                                          "A. 1",
                                          "B. 3",
                                          "C. 0",
                                          "D. 2"
                                      ],
                          "answer":  "D",
                          "explain":  "第二行 = 2×第一行 ⇒ 线性相关；第一、三行不成比例 ⇒ 秩为 2。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-21",
                          "sub":  "数学",
                          "kp":  "#42",
                          "type":  "choice",
                          "stem":  "设 A = (2 1; 1 1)，则 A⁻¹ =（　）",
                          "options":  [
                                          "A. (1 −1; −1 2)",
                                          "B. (1 1; 1 2)",
                                          "C. (−1 1; 1 −2)",
                                          "D. (2 −1; −1 1)"
                                      ],
                          "answer":  "A",
                          "explain":  "|A| = 2·1−1·1 = 1；A⁻¹ = (1/1)(1 −1; −1 2) = (1 −1; −1 2)。验：A·A⁻¹ = (1 0; 0 1)。",
                          "df":  95,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-22",
                          "sub":  "数学",
                          "kp":  "#44",
                          "type":  "choice",
                          "stem":  "设 α₁=(1,1,0)ᵀ、α₂=(0,1,1)ᵀ、α₃=(1,2,1)ᵀ，则（　）",
                          "options":  [
                                          "A. 线性无关",
                                          "B. 线性相关，且 α₃ = α₁ + α₂",
                                          "C. 线性相关，且 α₁ = α₂ + α₃",
                                          "D. 无法判断"
                                      ],
                          "answer":  "B",
                          "explain":  "α₁+α₂ = (1,2,1) = α₃ ⇒ 存在不全为零的系数使组合为 0 ⇒ 线性相关。",
                          "df":  102,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-23",
                          "sub":  "数学",
                          "kp":  "#45",
                          "type":  "choice",
                          "stem":  "设 A 是 4×5 矩阵，r(A)=3，则齐次方程组 Ax=0 的基础解系所含向量个数为（　）",
                          "options":  [
                                          "A. 3",
                                          "B. 5",
                                          "C. 2",
                                          "D. 1"
                                      ],
                          "answer":  "C",
                          "explain":  "基础解系个数 = n − r(A) = 5 − 3 = 2（n 是未知数个数＝列数）。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-24",
                          "sub":  "数学",
                          "kp":  "#48",
                          "type":  "choice",
                          "stem":  "设 3 阶矩阵 A 的特征值为 1、2、3，则 tr(A²) =（　）",
                          "options":  [
                                          "A. 6",
                                          "B. 36",
                                          "C. 12",
                                          "D. 14"
                                      ],
                          "answer":  "D",
                          "explain":  "A² 的特征值是 λ²：1、4、9；迹 = 特征值之和 = 1+4+9 = 14。注意不是 (1+2+3)²。",
                          "df":  102,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-25",
                          "sub":  "数学",
                          "kp":  "#51",
                          "type":  "choice",
                          "stem":  "二次型 f = x₁² + 2x₂² + 3x₃² + 2x₁x₂ 的正定性为（　）",
                          "options":  [
                                          "A. 正定",
                                          "B. 负定",
                                          "C. 不定",
                                          "D. 半正定"
                                      ],
                          "answer":  "A",
                          "explain":  "对称阵 A=(1 1 0; 1 2 0; 0 0 3)。顺序主子式：Δ₁=1\u003e0，Δ₂=2−1=1\u003e0，Δ₃=3\u003e0 ⇒ 正定。",
                          "df":  108,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-26",
                          "sub":  "数学",
                          "kp":  "#41",
                          "type":  "choice",
                          "stem":  "设 A 为 3 阶矩阵，|A| = 3，则 |A*| =（　）",
                          "options":  [
                                          "A. 3",
                                          "B. 9",
                                          "C. 27",
                                          "D. 1/3"
                                      ],
                          "answer":  "B",
                          "explain":  "|A*| = |A|^(n−1) = 3² = 9（n=3）。易错：误记成 |A|^(n)=27 或 |A| 本身。",
                          "df":  102,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-27",
                          "sub":  "数学",
                          "kp":  "#42",
                          "type":  "choice",
                          "stem":  "设 A 为 3 阶可逆矩阵，B 为 3×2 矩阵，则矩阵方程 AX = B 的解为（　）",
                          "options":  [
                                          "A. X = BA⁻¹",
                                          "B. X = B⁻¹A",
                                          "C. X = A⁻¹B",
                                          "D. X = AB⁻¹"
                                      ],
                          "answer":  "C",
                          "explain":  "两边左乘 A⁻¹：A⁻¹AX = A⁻¹B ⇒ X = A⁻¹B。注意 B 不是方阵，B⁻¹ 无意义。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-28",
                          "sub":  "数学",
                          "kp":  "#48",
                          "type":  "choice",
                          "stem":  "设 λ₁≠λ₂ 是矩阵 A 的两个不同特征值，α₁、α₂ 是分别对应的特征向量，则（　）",
                          "options":  [
                                          "A. α₁ 与 α₂ 可能线性相关",
                                          "B. α₁ + α₂ 仍是特征向量",
                                          "C. α₁ 与 α₂ 必正交",
                                          "D. α₁ 与 α₂ 线性无关"
                                      ],
                          "answer":  "D",
                          "explain":  "对应不同特征值的特征向量必线性无关（这是「不同特征值 ⇒ 可对角化」的依据）。正交只在 A 为实对称阵时才成立。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-29",
                          "sub":  "数学",
                          "kp":  "#49",
                          "type":  "choice",
                          "stem":  "设 A 与 B 相似，则下列结论错误的是（　）",
                          "options":  [
                                          "A. A 与 B 的迹相等",
                                          "B. A 与 B 有相同的特征值",
                                          "C. A 与 B 的行列式相等",
                                          "D. A 与 B 一定相等"
                                      ],
                          "answer":  "D",
                          "explain":  "相似只保证特征多项式相同（从而特征值、迹、行列式、秩相同），不保证矩阵相等。D 错误。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-30",
                          "sub":  "数学",
                          "kp":  "#50",
                          "type":  "choice",
                          "stem":  "设 A 是 n 阶正交矩阵，则 |A| =（　）",
                          "options":  [
                                          "A. 1",
                                          "B. ±1",
                                          "C. 0",
                                          "D. −1"
                                      ],
                          "answer":  "B",
                          "explain":  "AAᵀ=E ⇒ |A|²=1 ⇒ |A|=±1。旋转阵取 +1，反射类取 −1。",
                          "df":  96,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1106-31",
                          "sub":  "数学",
                          "kp":  "#51",
                          "type":  "choice",
                          "stem":  "二次型 f = x₁x₂ + x₂x₃ 的秩与正、负惯性指数分别为（　）",
                          "options":  [
                                          "A. 秩 2，p=2，q=0",
                                          "B. 秩 3，p=1，q=2",
                                          "C. 秩 2，p=1，q=1",
                                          "D. 秩 1，p=1，q=0"
                                      ],
                          "answer":  "C",
                          "explain":  "对称阵 A=(0 ½ 0; ½ 0 ½; 0 ½ 0)，特征值 ±√2/2 和 0 ⇒ 秩 2，正惯性 1、负惯性 1。易错：把秩当成 3。",
                          "df":  118,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1105"
                                   ]
                      },
                      {
                          "id":  "M1107-01",
                          "sub":  "数学",
                          "kp":  "#8",
                          "type":  "choice",
                          "stem":  "函数 f(x) = x³ − 3x² + 1 的单调递减区间是（　）",
                          "options":  [
                                          "A. (0, 2)",
                                          "B. (−∞, 0)",
                                          "C. (2, +∞)",
                                          "D. (0, +∞)"
                                      ],
                          "answer":  "A",
                          "explain":  "f′(x)=3x²−6x=3x(x−2)，f′\u003c0 ⇔ 0\u003cx\u003c2。易错：把 f′\u003e0 的区间当递减。",
                          "df":  95,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "M1107-02",
                          "sub":  "数学",
                          "kp":  "#11",
                          "type":  "choice",
                          "stem":  "函数 f(x)=x² 在区间 [0,2] 上满足拉格朗日中值定理结论的 ξ 是（　）",
                          "options":  [
                                          "A. 1/2",
                                          "B. 1",
                                          "C. 3/2",
                                          "D. 2"
                                      ],
                          "answer":  "B",
                          "explain":  "f(b)−f(a)=4−0=4，b−a=2，f′(ξ)=2ξ=4/2=2 ⇒ ξ=1。注意 ξ 必须在 (0,2) 内，四个选项都满足，靠等式定。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "M1107-03",
                          "sub":  "数学",
                          "kp":  "#17",
                          "type":  "choice",
                          "stem":  "定积分 ∫₀¹ x·eˣ dx =（　）",
                          "options":  [
                                          "A. e − 1",
                                          "B. e",
                                          "C. 1",
                                          "D. e − 2"
                                      ],
                          "answer":  "C",
                          "explain":  "分部：∫x eˣdx = x eˣ − eˣ，代 0→1 得 (e−e)−(0−1)=1。易错：得 e−1（漏了减 eˣ 那项）。",
                          "df":  98,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "M1107-04",
                          "sub":  "数学",
                          "kp":  "#17",
                          "type":  "choice",
                          "stem":  "定积分 ∫₀¹ x·√(1−x²) dx =（　）",
                          "options":  [
                                          "A. 1/2",
                                          "B. 2/3",
                                          "C. 1/4",
                                          "D. 1/3"
                                      ],
                          "answer":  "D",
                          "explain":  "令 u=1−x²，du=−2x dx ⇒ 原式 = (1/2)∫₀¹√u du = (1/2)·(2/3) = 1/3。易错：忘乘 1/2。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "M1107-05",
                          "sub":  "数学",
                          "kp":  "#38",
                          "type":  "choice",
                          "stem":  "微分方程 y″ − y = eˣ 的一个特解应设为（　）",
                          "options":  [
                                          "A. y* = A·eˣ",
                                          "B. y* = A·x·eˣ",
                                          "C. y* = A·x²·eˣ",
                                          "D. y* = A·cos x + B·sin x"
                                      ],
                          "answer":  "B",
                          "explain":  "特征方程 r²−1=0 ⇒ r=±1；右端 eˣ 对应 α=1 是**单根** ⇒ 乘 x，设 y*=A x eˣ。若设 Aeˣ 会代入得 0=eˣ，定不出 A。",
                          "df":  105,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "M1107-06",
                          "sub":  "数学",
                          "kp":  "#31",
                          "type":  "choice",
                          "stem":  "设 D = {(x,y) : 0≤x≤1，0≤y≤x}，则 ∬_D xy dxdy =（　）",
                          "options":  [
                                          "A. 1/8",
                                          "B. 1/4",
                                          "C. 1/6",
                                          "D. 1/2"
                                      ],
                          "answer":  "A",
                          "explain":  "∫₀¹x dx∫₀ˣ y dy = ∫₀¹ x·(x²/2)dx = (1/2)·(1/4) = 1/8。易错：把区域当成正方形（得 1/4）。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "M1107-07",
                          "sub":  "数学",
                          "kp":  "#17",
                          "type":  "choice",
                          "stem":  "定积分 ∫₋₁¹ (x³cos x + x²) dx =（　）",
                          "options":  [
                                          "A. 0",
                                          "B. 1/3",
                                          "C. 2/3",
                                          "D. 1"
                                      ],
                          "answer":  "C",
                          "explain":  "x³cos x 是奇函数，在对称区间上积分为 0；剩 ∫₋₁¹x²dx = 2/3。易错：整体当奇函数答 0。",
                          "df":  102,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "M1107-08",
                          "sub":  "数学",
                          "kp":  "#1",
                          "type":  "choice",
                          "stem":  "极限 lim(x→0) (arctan x − x)/x³ =（　）",
                          "options":  [
                                          "A. 1/3",
                                          "B. −1",
                                          "C. 1",
                                          "D. −1/3"
                                      ],
                          "answer":  "D",
                          "explain":  "arctan x = x − x³/3 + o(x³) ⇒ 分子 = −x³/3 ⇒ 极限 −1/3。易错：把 arctan 展开系数记成 +1/3。",
                          "df":  108,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "M1107-09",
                          "sub":  "数学",
                          "kp":  "#40",
                          "type":  "choice",
                          "stem":  "设 A 为 3 阶矩阵，|A| = 2，则 |2A| =（　）",
                          "options":  [
                                          "A. 16",
                                          "B. 8",
                                          "C. 4",
                                          "D. 32"
                                      ],
                          "answer":  "A",
                          "explain":  "|kA| = kⁿ|A|，n=3 ⇒ 2³×2 = 16。易错：只乘一次得 4，或记成 2×2=4。",
                          "df":  98,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "M1107-10",
                          "sub":  "数学",
                          "kp":  "#48",
                          "type":  "choice",
                          "stem":  "设 A 为 n 阶矩阵，满足 A² = E 且 A ≠ E，则 |A + E| =（　）",
                          "options":  [
                                          "A. 1",
                                          "B. 0",
                                          "C. −1",
                                          "D. 2"
                                      ],
                          "answer":  "B",
                          "explain":  "A²−E=0 ⇒ (A+E)(A−E)=0。若 |A+E|≠0 则 A+E 可逆，左乘其逆得 A−E=0 即 A=E，与题设矛盾 ⇒ |A+E|=0。",
                          "df":  115,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "M1107-11",
                          "sub":  "数学",
                          "kp":  "#48",
                          "type":  "choice",
                          "stem":  "设 3 阶矩阵 A 满足 A² − 3A + 2E = 0，则 A 的特征值只能是（　）",
                          "options":  [
                                          "A. −1 或 −2",
                                          "B. 0 或 1",
                                          "C. 1 或 2",
                                          "D. 2 或 3"
                                      ],
                          "answer":  "C",
                          "explain":  "若 λ 是特征值则 λ²−3λ+2=0 ⇒ (λ−1)(λ−2)=0 ⇒ λ=1 或 2。易错：直接解方程不说明「特征值必满足该方程」。",
                          "df":  110,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "M1107-12",
                          "sub":  "数学",
                          "kp":  "#43",
                          "type":  "choice",
                          "stem":  "向量组 α₁=(1,0,0)ᵀ、α₂=(0,1,0)ᵀ、α₃=(1,1,0)ᵀ 的秩为（　）",
                          "options":  [
                                          "A. 1",
                                          "B. 3",
                                          "C. 0",
                                          "D. 2"
                                      ],
                          "answer":  "D",
                          "explain":  "α₃ = α₁ + α₂，三者共面（z 分量全为 0）⇒ 极大无关组含 2 个 ⇒ 秩 2。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "M1107-13",
                          "sub":  "数学",
                          "kp":  "#47",
                          "type":  "choice",
                          "stem":  "设 A 为 m×n 矩阵，则非齐次线性方程组 Ax = b 有解的充要条件是（　）",
                          "options":  [
                                          "A. r(A) = r(A|b)",
                                          "B. r(A) = n",
                                          "C. |A| ≠ 0",
                                          "D. b ≠ 0"
                                      ],
                          "answer":  "A",
                          "explain":  "有解 ⇔ 系数矩阵与增广矩阵秩相等（Rouché–Capelli）。r(A)=n 只是唯一解的条件，不是有解的条件。",
                          "df":  100,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "M1107-14",
                          "sub":  "数学",
                          "kp":  "#18",
                          "type":  "choice",
                          "stem":  "反常积分 ∫₁^{+∞} (1/x²) dx =（　）",
                          "options":  [
                                          "A. 2",
                                          "B. 1",
                                          "C. 1/2",
                                          "D. 发散"
                                      ],
                          "answer":  "B",
                          "explain":  "原函数 −1/x，代 1→+∞ 得 0−(−1)=1。对照：p=2\u003e1 收敛。",
                          "df":  95,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "M1107-15",
                          "sub":  "数学",
                          "kp":  "#8",
                          "type":  "choice",
                          "stem":  "设 f′(x₀)=0，f″(x₀)\u003c0，则 f 在 x₀ 处（　）",
                          "options":  [
                                          "A. 取得极小值",
                                          "B. 不取得极值",
                                          "C. 取得极大值",
                                          "D. 无法判断"
                                      ],
                          "answer":  "C",
                          "explain":  "第二充分条件：一阶导为 0、二阶导小于 0 ⇒ 极大值（开口向下）。若 f″(x₀)=0 才需进一步判断。",
                          "df":  96,
                          "df_src":  "manual",
                          "from_big":  false,
                          "tags":  [
                                       "选填-1107"
                                   ]
                      },
                      {
                          "id":  "PZ2025-01",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "习近平强调，要“树立大农业观、大食物观，向耕地草原森林海洋、向植物动物微生物要热量、要蛋白，全方位多途径开发食物资源”“既向陆地要食物，也向海洋要食物，耕海牧渔，建设海上牧场、‘蓝色粮仓’”，构建多元化食物供给体系。“大农业观”“大食物观”突出体现的思维方式是（　）",
                          "options":  [
                                          "A. 极限思维",
                                          "B. 历史思维",
                                          "C. 系统思维",
                                          "D. 逆向思维"
                                      ],
                          "answer":  "C",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-02",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "马克思认为：“对人类生活形式的思索，从而对这些形式的科学分析，总是采取同实际发展相反的道路。这种思索是从事后开始的，就是说，是从发展过程的完成的结果开始的。”这种“从后思索法”所揭示的内涵是，历史的发展总是按照时间顺序从过去到现在以至未来，而对历史的认识则要遵循相反的顺序。下列表述与“从后思索法”相一致的是（　）",
                          "options":  [
                                          "A. 我思故我在",
                                          "B. 人体解剖对于猴体解剖是一把钥匙",
                                          "C. 逻辑与历史在各个具体环节上具有一致性",
                                          "D. 历史发展的一般进程拒斥个别发展阶段的特殊性"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-03",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "唯物史观从人民群众创造历史这一基本前提出发，既明确了人民群众是历史的创造者，也不否认个人在历史上的作用。习近平在纪念毛泽东同志诞辰 120 周年座谈会上，对如何评价历史人物作了精辟论述：“不能把历史顺境中的成功简单归功于个人，也不能把历史逆境中的挫折简单归咎于个人。不能用今天的时代条件、发展水平、认识水平去衡量和要求前人，不能苛求前人干出只有后人才能干出的业绩来。”这一论述表明（　）",
                          "options":  [
                                          "A. 杰出个人与人民群众的历史作用是同等的",
                                          "B. 杰出人物的智慧和性格能够改变历史发展的基本方向",
                                          "C. 杰出人物在逆境时发挥的历史作用比在顺境时更大",
                                          "D. 要从特定的历史条件出发对历史人物作具体全面的考察和评价"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-04",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "1916 年，列宁在《无产阶级革命的军事纲领》一文中指出，社会主义“将首先在一个或者几个国家内获得胜利，而其余的国家在一段时间内将仍然是资产阶级的或资产阶级以前的国家”。列宁得出这一结论的依据是（　）",
                          "options":  [
                                          "A. 世界各国无产阶级的国际大联盟已经形成",
                                          "B. 资本主义的普选制为社会主义革命创造了新条件",
                                          "C. 资本主义的发展在各个国家是极不平衡的",
                                          "D. 工人阶级的革命意识与经济发展水平呈正相关性"
                                      ],
                          "answer":  "C",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-05",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "独立自主是毛泽东思想活的灵魂。毛泽东在《反对本本主义》一文中指出：“中国革命斗争的胜利要靠中国同志了解中国情况。”这是独立自主思想最初的明确表述。毛泽东当时作出这一表述，主要是为了（　）",
                          "options":  [
                                          "A. 巩固和发展统一战线",
                                          "B. 反对党内存在的教条主义倾向",
                                          "C. 防止各种非无产阶级思想的侵蚀",
                                          "D. 改变红军中残留的旧军队的不良作风"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-06",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "邓小平理论作为中国特色社会主义理论体系的开篇之作，第一次比较系统地初步回答了建设中国特色社会主义的一系列基本问题。其中为建设中国特色社会主义提供总依据的是（　）",
                          "options":  [
                                          "A. 社会主义根本任务和发展战略理论",
                                          "B. 社会主义本质理论",
                                          "C. 社会主义初级阶段理论",
                                          "D. 社会主义社会矛盾学说"
                                      ],
                          "answer":  "C",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-07",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "任何文化要立得住、行得远，要有引领力、凝聚力、塑造力、辐射力，就必须有自己的主体性。习近平总书记指出：“中国共产党历来重视文化，新时代我们在道路自信、理论自信、制度自信的基础上增加了文化自信。文化自信就来自我们的文化主体性。”新时代这一主体性最有力的体现是（　）",
                          "options":  [
                                          "A. 创立习近平新时代中国特色社会主义思想",
                                          "B. 实现中华优秀传统文化创造性转化、创新性发展",
                                          "C. 铸牢中华民族共同体意识",
                                          "D. 把握中华文明发展规律"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-08",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "开放是中国式现代化的鲜明标识。在世界变局加速演进的背景下，开放不仅是推动我国高质量发展的必然选择，也是实现中华民族伟大复兴的关键一招。我国坚定不移扩大高水平对外开放，发展更高水平开放型经济，不断以中国新发展为世界提供新机遇。当前我国的高水平对外开放主要是指（　）",
                          "options":  [
                                          "A. 全局性开放",
                                          "B. 要素型开放",
                                          "C. 政策性开放",
                                          "D. 制度型开放"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-09",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "经过接续奋斗，我国社会建设全面加强，幼有所育、学有所教、劳有所得、病有所医、老有所养、住有所居、弱有所扶得到更好实现，人民对美好生活的向往不断变为现实。新时代加强社会建设的重要着力点是（　）",
                          "options":  [
                                          "A. 健全和完善社会保障体系",
                                          "B. 加强城乡社区治理",
                                          "C. 建立健全第三次分配机制",
                                          "D. 建设更高水平的平安中国"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-10",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "鸦片战争后，随着资本-帝国主义的侵入，中国社会经济发生了很大的变化。毛泽东在《中国革命和中国共产党》一文中指出，外国资本主义的侵入，破坏了中国自给自足的自然经济的基础，为中国资本主义生产的发展造成了某些客观的条件和可能，这是变化的一个方面；还有和这个变化同时存在的另一个方面，这就是（　）",
                          "options":  [
                                          "A. 封建地主的土地所有制遭到彻底破坏",
                                          "B. 帝国主义勾结中国封建势力压迫中国资本主义的发展",
                                          "C. 地方性农业经济的破产和统一的资本主义经济的形成",
                                          "D. 中国在政治上经济上完全成为西方的附庸"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-11",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "实现中华民族伟大复兴是中华民族近代以来最伟大的梦想。在近代中国，一些爱国人士提出“实业救国”的主张，并为此付出了巨大的努力，但并没有实现救国的目标。近代中国“实业救国”的道路之所以走不通，是因为（　）",
                          "options":  [
                                          "A. 民族独立和人民解放尚未实现",
                                          "B. 工业基础落后，工人阶级人数不多",
                                          "C. 各地区政治、经济、文化发展不平衡",
                                          "D. 农民日益贫困化以至大批破产"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-12",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "1945 年 4 月 23 日至 6 月 11 日，中国共产党第七次全国代表大会在延安举行。这是一次团结的大会，胜利的大会。七大的历史性贡献是（　）",
                          "options":  [
                                          "A. 把毛泽东思想确立为党的指导思想并写入党章",
                                          "B. 正式提出了民主集中制的组织原则",
                                          "C. 制定了反帝反封建的民主革命纲领",
                                          "D. 确立了思想建党政治建军原则"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-13",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "1981 年 6 月，党的十一届六中全会通过了《关于建国以来党的若干历史问题的决议》。《决议》彻底否定了“文化大革命”，对十一届三中全会以来逐步确立的适合中国情况的建设社会主义现代化建设的正确道路作了概括，强调（　）",
                          "options":  [
                                          "A. 党和国家的工作重心从农村转向城市",
                                          "B. 党的各项工作都必须服从和服务于经济建设",
                                          "C. 在经济建设中优先发展重工业",
                                          "D. 必须彻底克服教条主义和经验主义的思想"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-14",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "互联网是人们获取信息和交流沟通的重要渠道，深刻影响着每一个人的生活、工作、学习。移动支付信息、信用卡消费记录等，都是足以“定义”个体的数据信息。一旦这些信息被非法使用，会侵害当事人的隐私权。《民法典》规定，任何组织或者个人不得以刺探、侵扰、泄露、公开等方式侵害他人的隐私权。隐私权属于（　）",
                          "options":  [
                                          "A. 生命健康权",
                                          "B. 民主管理权",
                                          "C. 人格尊严权",
                                          "D. 通信自由权"
                                      ],
                          "answer":  "C",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-15",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "中国共产党第二十届中央委员会第三次全体会议，于 2024 年 7 月 15 日至 18 日在北京举行。全会审议通过了《中共中央关于进一步全面深化改革、推进中国式现代化的决定》。全会提出，中国式现代化的基础性、战略性支撑是（　）",
                          "options":  [
                                          "A. 高水平社会主义市场经济体制",
                                          "B. 科学的宏观调控、有效的政府治理",
                                          "C. 相互协调的物质文明和精神文明",
                                          "D. 教育、科技、人才"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-16",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "choice",
                          "stem":  "2024 年 9 月 4 日至 6 日，中非合作论坛北京峰会成功举行。习近平主席出席峰会开幕式并发表主旨讲话。本次峰会的重要成果之一是首次提出（　）",
                          "options":  [
                                          "A. 支持非盟成为二十国集团成员",
                                          "B. 欢迎更多非洲国家加入“金砖大家庭”",
                                          "C. 在非洲启动建设农业发展与减贫示范村",
                                          "D. 在非洲打造全球安全倡议“合作示范区”"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-17",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "与病毒的持久斗争和协同进化，是人类演化的重要推动力之一。一方面，病毒在使人类饱受疾病甚至死亡的困扰中，不断地对人类基因组进行利用与改造；另一方面，人类自身的免疫系统在积极对抗病毒入侵时，或有效清除外来微生物，或使得整合到人类基因组中的病毒序列逐渐被宿主细胞的遗传调控系统接管，以实现协同进化。从人类与病毒的关系可以类推出人与自然关系的正确判断有（　）",
                          "options":  [
                                          "A. 人与自然的关系纯粹是自然界的生物演变过程",
                                          "B. 人类社会活动的规律由生物进化的规律所决定",
                                          "C. 人与自然的和谐共生以自然界的客观规律为基础",
                                          "D. 人的活动的选择性与自然界的先在性是动态统一的"
                                      ],
                          "answer":  "CD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-18",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "戴上驱动气动手套，稳稳握住水杯，拿起、喝水、放下，截瘫患者自主“脑控”喝水……脑机接口技术在生物医学、智能机器人等领域取得重大进展。脑机接口建立了大脑与计算机或其他外部设备之间的直接通信通道，使个体无需经过传统的肌肉运动或神经系统，直接用大脑活动来控制外部设备或应用。用脑电活动控制动作这些过去只在科幻小说里出现的技术，现在正逐步成为现实。脑机接口技术的发展和应用表明，人类意识（　）",
                          "options":  [
                                          "A. 能够通过智能机器实现对象化现实化",
                                          "B. 能够被具有情感、意念、意志的智能机器所代替",
                                          "C. 能够还原为数据信息并取代人类社会交往的真情实感",
                                          "D. 能够物化为机器的物理运动从而延伸意识器官的功能"
                                      ],
                          "answer":  "AD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-19",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "竹的浑身都是宝。苏东坡曾经感叹：“食者竹笋，庇者竹瓦，载者竹筏，爨者竹薪，衣者竹皮，书者竹纸，履者竹鞋，真可谓一日不可无此君也耶？”竹的多样化功能表明，事物的价值（　）",
                          "options":  [
                                          "A. 随着主体、客体及其相互关系的变化而变化",
                                          "B. 随着主体的欲望、情感和兴趣的转移而变化",
                                          "C. 随着实践发展而由潜在价值转化为现实价值",
                                          "D. 随着客体属性的自然显露而转化为社会价值"
                                      ],
                          "answer":  "AC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核",
                          "dispute":  "eduego / kaoyan.cn 两份 PDF 标 ABC（文本完全相同，疑同源）；但武昌首义学院马院(带解析)、新东方、N诺考研多份、topzz 四方均给 AC。AC 亦符合马原教材（B 项「随主体欲望情感兴趣转移」属唯心主义价值论，D 项「随客体属性自然显露」属客观主义）。本库取 AC。"
                      },
                      {
                          "id":  "PZ2025-20",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "在分析商品使用价值与价值时，马克思指出：“一个物可以有用，而且是人类劳动产品，但不是商品。”下列选项中符合马克思所说的“一个物”的有（　）",
                          "options":  [
                                          "A. 中世纪农民为封建主生产作为代役租的粮食",
                                          "B. 农民为养活家人而生产并消费的农副产品",
                                          "C. 农业资本家为获取利润而生产的农产品",
                                          "D. 封建社会时期由佃农生产并上缴给地主的地租"
                                      ],
                          "answer":  "ABD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-21",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "随着工业中现代化、自动化服务和新工艺的广泛采用，新的生产管理方法和生产组织形式的广泛实行，当代资本主义社会的工人越来越多地在生产过程中从事监督者、调节者和操作者的工作，实现了从传统劳动方式向现代劳动方式的转变。这表明（　）",
                          "options":  [
                                          "A. 资本主义生产资料所有制性质正在发生根本的转变",
                                          "B. 资本主义生产关系也要适应生产力发展要求而调整",
                                          "C. 资本主义社会的阶级结构和社会阶层发生了新变化",
                                          "D. 资产阶级不对生产工具和生产关系进行革命就不能生存"
                                      ],
                          "answer":  "BCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-22",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "中国共产党的历史是一部不断推进马克思主义中国化时代化的历史；在这一历史进程中产生了毛泽东思想、邓小平理论、“三个代表”重要思想、科学发展观、习近平新时代中国特色社会主义思想。马克思主义中国化时代化的理论成果是一脉相承又与时俱进的关系，这主要体现在（　）",
                          "options":  [
                                          "A. 都面对共同的时代主题和历史任务",
                                          "B. 都贯穿实事求是、群众路线、独立自主的立场观点方法",
                                          "C. 都科学回答了时代提出的重大理论和实践课题",
                                          "D. 都以独创性的理论成果丰富和发展了马克思主义"
                                      ],
                          "answer":  "BCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-23",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "民营经济是我国非公有制经济的主要经济组织形式，是推动我国全面建设社会主义现代化强国的重要力量。截至 2024 年 9 月底，我国实有民营经济主体量已达 1.8 亿户，占经营主体总量的 96.37%，10 余年间增长超 4 倍。民营经济的迅速发展充分说明（　）",
                          "options":  [
                                          "A. 非公有制经济发展的政策制度环境不断优化",
                                          "B. 促进非公有制经济发展壮大的体制机制不断完善",
                                          "C. 非公有制经济在国民经济中的主导作用不断强化",
                                          "D. 非公有制经济发展活力不断提升"
                                      ],
                          "answer":  "ABD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-24",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "人民当家作主必须通过一定的制度予以保障。在上海虹桥街道古北市民中心有幅漫画：一道绚丽的“彩虹桥”悬挂天空，这一头是虹桥街道，那一头是全国人大，一只白鸽把信从这头捎到那头。虹桥街道是全国人大常委会法工委首批设立的 4 个基层立法联系点之一。设立基层立法联系点有利于（　）",
                          "options":  [
                                          "A. 健全汇集民智工作机制",
                                          "B. 完善民意表达平台和载体",
                                          "C. 践行全过程人民民主",
                                          "D. 丰富中国特色社会主义民主形式"
                                      ],
                          "answer":  "ABCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "eduego《2025全国硕士研究生招生考试试题及参考答案》PDF 全 33 题；Q19 另核"
                      },
                      {
                          "id":  "PZ2025-25",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "近些年，我国每年主要电器产品报废量超 2 亿台，手机废弃量达 4 亿部以上，其中蕴藏着大量有色金属、塑料、橡胶等资源。加快发展方式绿色转型，必须更加重视资源的再生循环利用，加快构建废弃物循环利用体系。据预测，到 2030 年，我国固废分类资源化利用的产值规模将达到 7-8 万亿元。推动废弃物循环利用有利于（　）",
                          "options":  [
                                          "A. 形成节约集约循环利用的资源观",
                                          "B. 转变资源利用方式、提高资源利用效率",
                                          "C. 实现生产系统和生活系统循环链接",
                                          "D. 科学推进水土流失综合治理"
                                      ],
                          "answer":  "ABC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2025-26",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "推动高质量发展，文化是重要支点。近年来，我国文化产业蓬勃发展，文化消费活力进一步增强，文化在经济活动中的作用越来越突出。文化之所以能够成为推动高质量发展的重要支点，是因为（　）",
                          "options":  [
                                          "A. 文化能为经济社会发展提供价值指引和精神力量",
                                          "B. 文化建设是解决新时代我国社会主要矛盾的根本途径",
                                          "C. 文化融入经济活动有助于激活发展动能、提升发展品质",
                                          "D. 文化繁荣有助于促进社会创新创造的活力动力"
                                      ],
                          "answer":  "ACD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2025-27",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "1921 年 7 月 23 日，中国共产党第一次全国代表大会在上海召开，宣告中国共产党正式成立。中国共产党成立的历史特点有（　）",
                          "options":  [
                                          "A. 从一开始就是一个以马克思列宁主义理论为基础的党",
                                          "B. 是在半封建半殖民地中国的农民运动基础上产生的政党",
                                          "C. 从一开始就是一个重视与其他党派或政治力量合作的党",
                                          "D. 是区别于第二国际旧式社会改良党的新型工人阶级革命政党"
                                      ],
                          "answer":  "AD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2025-28",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "党的六届六中全会是在抗日战争即将进入新阶段时召开的一次重要会议。毛泽东曾说过：“六中全会是决定中国之命运的。”下列关于六届六中全会表述正确的有（　）",
                          "options":  [
                                          "A. 会上毛泽东明确提出“马克思主义的中国化”命题",
                                          "B. 会议提出了由新民主主义社会向社会主义社会转变的发展方向",
                                          "C. 会议纠正了王明的右倾错误，统一了全党的思想和步调",
                                          "D. 会议指明了党内小资产阶级思想的来源、表现及纠正方法"
                                      ],
                          "answer":  "AC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2025-29",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "1992 年 1 月 18 日至 2 月 21 日，邓小平先后到武昌、深圳、珠海、上海等地视察，发表了重要谈话。他在谈话中提出的重要论断有（　）",
                          "options":  [
                                          "A. “革命是解放生产力，改革也是解放生产力”",
                                          "B. “走自己的道路，建设有中国特色的社会主义”",
                                          "C. “计划多一点还是市场多一点，不是社会主义与资本主义的本质区别”",
                                          "D. “在整个改革开放的过程中，必须始终注意坚持四项基本原则”"
                                      ],
                          "answer":  "ACD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2025-30",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "法治思维的要义是把对法治的尊崇、对法律的敬畏转化成思维方式和行为方式。法治思维内容十分丰富，其中之一是法律至上。法律至上表现为（　）",
                          "options":  [
                                          "A. 法律必须遵守，违反法律要受到惩罚",
                                          "B. 按照法律的逻辑来分析和解决一切社会问题",
                                          "C. 法律在本国主权范围内对所有人具有普遍的约束力",
                                          "D. 当同一项社会关系同时受到多种社会规范的调整而多种社会规范又相互矛盾时，要优先考虑法律规范的适用"
                                      ],
                          "answer":  "ACD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2025-31",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "集体主义是社会主义道德的原则，是调节国家利益、社会整体利益和个人利益关系的基本原则。集体主义强调（　）",
                          "options":  [
                                          "A. 个人利益应当无条件服从集体利益",
                                          "B. 国家利益高于个人利益",
                                          "C. 集体利益是个人所有利益的总和",
                                          "D. 重视和保障个人的正当利益"
                                      ],
                          "answer":  "BD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2025-32",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "2024 年 6 月 21 日，最高人民法院、最高人民检察院、公安部、国家安全部、司法部联合发布《关于依法惩治“台独”顽固分子分裂国家、煽动分裂国家犯罪的意见》，自发布之日起施行。其意义和作用体现在（　）",
                          "options":  [
                                          "A. 明确了各类“台独”分裂行径的犯罪性质、刑事责任和惩处程序",
                                          "B. 回应了两岸最大多数民众的诉求与期盼",
                                          "C. 彰显了捍卫国家主权、统一和领土完整的坚定立场",
                                          "D. 充实了反“台独”、反干涉的法律工具箱"
                                      ],
                          "answer":  "ABCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2025-33",
                          "sub":  "政治",
                          "topic":  "真题2025",
                          "type":  "multi",
                          "stem":  "金砖合作机制诞生于新兴市场和发展中国家群体性崛起的历史大潮中，牵动着世界格局演变和国际力量对比。成立 18 年来，金砖不断发展壮大，金砖国家的人口占全球近一半，经济总量占世界比重超过三成，对世界经济增长贡献率超过 50%。2024 年 10 月 22 日至 24 日，金砖国家领导人第十六次会晤在喀山举行，决定邀请新一批国家成为金砖伙伴国。金砖机制持续壮大，金砖合作常葆活力，关键在于（　）",
                          "options":  [
                                          "A. 以开放包容为襟怀",
                                          "B. 以合作共赢为目标",
                                          "C. 以公平正义为追求",
                                          "D. 以构建同盟为路径"
                                      ],
                          "answer":  "ABC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2025"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2026-01",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "“十五五”时期在基本实现社会主义现代化进程中具有承前启后的重要地位。习近平总书记在《关于〈中共中央关于制定国民经济和社会发展第十五个五年规划的建议〉的说明》中指出：“实现社会主义现代化是一个阶梯式递进、不断发展进步的历史过程，需要不懈努力、持续奋斗。”“阶梯式递进、不断发展进步”的过程是一个（　）\n①前进性与曲折性相统一的过程　②规律性与能动性相统一的过程　③连续性与非连续性相统一的过程　④直线性与循环性相统一的过程",
                          "options":  [
                                          "A. ①②③",
                                          "B. ①②④",
                                          "C. ①③④",
                                          "D. ②③④"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-02",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "一般认为，在重力的作用下，当树叶飘离枝头坠落到地面时，密度大的叶片正面更容易朝着下着地。科学研究表明，叶片的下落过程并非简单的直线下落，因为叶片形状并非完全对称，加之空气阻力、涡流和风等因素影响，叶片以翻滚和旋转的复杂运动形态下落。内部结构差异与外在形态变化在一定程度上影响着叶片的飘落点，旋转功能和空气阻力也是影响叶片在下降过程中朝向的因素。叶片下落的过程表明，事物运动的规律（　）",
                          "options":  [
                                          "A. 取决于外在因素作用的大小",
                                          "B. 是纯粹偶然因素作用的结果",
                                          "C. 取决于物质形态变化的规律",
                                          "D. 是各种因素相互作用的结果"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-03",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "《孙子兵法》将变化视作军事运行的常态认为“兵无常势，水无常形”要使战争主动权始终掌握在自己手中，就要根据不同的情况灵活的应对。由此可知，“兵无常势，水无常形”契合了（　）",
                          "options":  [
                                          "A. “原则是研究的出发点”的观点",
                                          "B. “理性是衡量一切的唯一尺度”的观点",
                                          "C. “意志自由只是借助于对事物的认识来作出决定”的观点",
                                          "D. “思维的本质在于把意识的因素联系合为一个统一体”的观点"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-04",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "列宁在谈到未来社会时写到：“我们可以绝对有把握地说，剥夺资本家一定会使人类社会的生产力蓬勃发展，但是，生产力将以什么样的速度向前发展，将以什么样的速度发展到打破分工，消灭脑劳动和体力劳动的对立，把劳动变为‘生活的第一需要’，这都是我们所不知道而且也不可能知道的。”这段话表明，对未来社会可以预见的是（　）",
                          "options":  [
                                          "A. 生产力发展的具体方式",
                                          "B. 生产力将有更大的发展",
                                          "C. 劳动成为生活的唯一需要",
                                          "D. 每个人获得无差别的全面发展"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-05",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "毛泽东同志在谈到中国革命经验时指出：“党的领导机关，包括全国性需要的、省的和县的负责同志，也要亲自调查一两个农村，解剖一两个‘麻雀’。这就叫作解剖学”毛泽东在此强调“解剖麻雀”的实际意义在于（　）",
                          "options":  [
                                          "A. 理论只有彻底，才能说服人",
                                          "B. 反对经验主义、尾巴主义和机会主义",
                                          "C. 没有革命的理论就不会有革命的实践",
                                          "D. 全面深入了解本国实际，发现本国革命的规律"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-06",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "1987 年 3 月 25 日，邓小平在审阅《关于草拟十三大报告大议的设想》时，对《设想》，提出十三大报告全篇拟以社会主义初级阶段作为立论的根据作出批示：“这个设计好。”《设想》的设计思路好就好在，它（　）",
                          "options":  [
                                          "A. 系统阐明了社会主义与共产主义的关系",
                                          "B. 提出我们的社会主义制度还处在社会主义初级阶段",
                                          "C. 明确了社会主义初级阶段是我们制定路线方针政策的出发点和根本依据",
                                          "D. 明确了发展生产力是社会主义现代化的根本任务"
                                      ],
                          "answer":  "C",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-07",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "中国特色社会主义制度是党和人民长期实践探索形成的，既具有社会主义的性质，又吸收了古今中外制度建设的有益成果。它是一个严密完整的科制度体系，其中有统治地位的是（　）",
                          "options":  [
                                          "A. 民族区域自治制度",
                                          "B. 党的领导制度",
                                          "C. 社会主义基本经济制度",
                                          "D. 全过程人民民主制度"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-08",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "完善公共安全体系，推动公共安全治理模式转型，是提高公共安全治理水平的一项重要内容。我国公共安全治理模式的转型至要是指（　）",
                          "options":  [
                                          "A. 从分散管理为主转向单一管理为主",
                                          "B. 以政府监督为主转向市场监督为主",
                                          "C. 从事后处置为主转向事前预防为主",
                                          "D. 危机疏导→危机干预"
                                      ],
                          "answer":  "C",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-09",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "绿色发展是中国式现代化的鲜明底色。环保曾是企业的“加分项”，而今却是生存的“及格线”，曾经无处堆放的工业废物，如今许多已成为可以生财的宝贝。消费者的思维也发生了潜移默化的转变。外卖选择无需餐具，出行才用共享单车，买家家电选一级能效……这些看得见摸得着的变化充分说明生态环境问题的解决归根到底取决于（　）",
                          "options":  [
                                          "A. 国土空间开发布局的优化",
                                          "B. 经济发展方式和生活方式的转变",
                                          "C. 生态文明制度体系的完善",
                                          "D. 山水林田湖草沙一体化保护和系统治理"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-10",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "1840 年，英国发动的鸦片战争以清政府的失败而告终。此后，西方列强通过一系列不平等条约在中国攫取大量特权，中国历史的发展因此发生重大转折，这要表现为（　）",
                          "options":  [
                                          "A. 中国出现资本主义因素",
                                          "B. 中国社会性质发生改变",
                                          "C. 地主阶级退出历史舞台",
                                          "D. 清朝统治集团发生分化"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-11",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "毛泽东在《中国共产党在民族战争中的地位》一文中指出：“遵义会议纠正了在‘第五次反围剿三斗争中所犯的左倾社会主义性质的严重的原则错误，团结了党和红军，使得党中央和红军主力胜利完成了长征，转到了抗日的前进阵地，执行了抗日民族统一战线的新政策。”“遵义会议之所以成为党的历史上一个生死攸关的转折点，是因为这次会议（　）",
                          "options":  [
                                          "A. 制定了抗日民族统一战线的策略总方针",
                                          "B. 确立了马克思主义建党建军原则",
                                          "C. 开辟了农村包围城市，武装夺取政权的道路",
                                          "D. 开启了中国共产党独立自主解决中国革命实际问题新阶段"
                                      ],
                          "answer":  "D",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-12",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "1948 年秋，中国人民解放军先后发动辽沈、淮海、平津三大战役。三大战役历时四个多月，取得决定性胜利，这表明（　）",
                          "options":  [
                                          "A. 国民党的主要军事力量基本上被摧毁",
                                          "B. 中国革命重心已经从农村转向城市",
                                          "C. 延续 22 年之久的国民党统治已经覆灭",
                                          "D. 人民解放军立刻转入全国性反攻的形势已经成熟"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-13",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "1992 年邓小平南方谈话和党的十四大召开后，我国的现代化建设事业进入从计划经济体制向社会主义市场经济体制转变的新阶段。这一阶段，建立社会主义市场经济体制的中心环节是（　）",
                          "options":  [
                                          "A. 价格体制改革",
                                          "B. 财政制度改革",
                                          "C. 国有企业改革",
                                          "D. 流通体制改革"
                                      ],
                          "answer":  "C",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-14",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "习近平强调我为什么要对青年讲社会主义核心价值观这个问题？是因为青年的价值取向决定了未来整个社会的价值取向，而青年又处于价值观形成和确立的时期，抓好这一时期的价值观养成十分重要。这就像穿衣服扣扣子一样，如果第一粒扣子扣错了，剩余的口子都会扣错。人生的扣子从一开始就要扣好。”习近平以人生的扣子“从一开始”就要扣好作比喻，主要强调了（　）",
                          "options":  [
                                          "A. 核心价值观是青年成长的关键",
                                          "B. 对青年价值观教育需抓早抓实",
                                          "C. 青年健康成长需要核心价值观引领",
                                          "D. 核心价值观教育是青年立身之本"
                                      ],
                          "answer":  "B",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-15",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "2025 年 10 月 24 日十四届全国人大常委会第十八次会议表决，通过了关于设立台湾光复纪念日的决定，以法律形式将 10 月 25 日设立为台湾光复纪念日。与“台湾光复纪念日”相关的历史事件是指 1945 年 10 月 25 日（　）",
                          "options":  [
                                          "A. 中国战区台湾省受降仪式在台北举行",
                                          "B. 中美英等国发表《开罗宣言》和《波茨坦公告》",
                                          "C. 日本无条件投降仪式在密苏里号战舰上举行",
                                          "D. 日本天皇发布《终战诏书》"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-16",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "choice",
                          "stem":  "2025 年 6 月 16 日，联合国大会表决通过一项决议，宣布每年 12 月 4 日为“反对单边强制措施国际日”。其目的在于（　）",
                          "options":  [
                                          "A. 敦促各国不采取、不颁布、不实行任何单边经济、金融或贸易措施",
                                          "B. 促进国际社会联合起来反对美国发动的单边“关税战”",
                                          "C. 彻底消除国际关系中的“单边主义”现象",
                                          "D. 重新确立指导国家间和平关系的规范和原则"
                                      ],
                          "answer":  "A",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-17",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "20 世纪 30 年代以来，一系列天文观测显示，宇宙中存在大量产生引力却不发光的“暗物质”。暗物质和可见世界的物质不同，它不参与电磁相互作用，不发光。不过科学家基于暗物质引力效应，能够测绘其在宇宙中的分布，进而探索宇宙的结构演化和星系形成。人们对暗物质的认识表明（　）",
                          "options":  [
                                          "A. 物质存在的客观性只有通过人民具体的感知而得以确证",
                                          "B. 物质不依赖于人的意识而存在，并能为人类的意识所反映",
                                          "C. 物质世界是外在于人类的、直观的、机械的、自在的对象",
                                          "D. 物质世界不是超越于人类理性所能理解的现象之外的“物自体”"
                                      ],
                          "answer":  "BD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-18",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "中国科学家发现，马铃薯中的 40%的基因来自番茄祖先“茄小姐”，另外 60%的基因则来自类马铃薯植物“薯先生”。这种杂交不仅形成了一个新物种，还催生出一个全新的器官——块茎。根据这一发现，科学家提出一条新的育种路径：利用番茄作为遗传底盘，导入块茎形成关键基因，培育出能“地下结土豆、地上长番茄”的新型作物。科学家能够利用基因技术进行新型作物的培育，是因为（　）",
                          "options":  [
                                          "A. 对客观事物规律的把握是人们正确活动的基础",
                                          "B. 事物之间的联系通常都是人们主观意志赋予的",
                                          "C. 改造客观世界的前提是人们必须先改造主观世界",
                                          "D. 人类改造世界的能力随着科学实践的发展而发展"
                                      ],
                          "answer":  "AD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-19",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "人类的知识和认知能力是建立在人的理性本身之上还是建立在外部感官经验基础之上，是一个长期争论的问题。有科学家认为，人的智慧并非独立依赖思维而产生，而是在长期进化中对外部世界的适应，是大脑、身体、环境交织作用的结果。随着人工智能的发展，具身智能通过具象的互动与反馈不断优化决策与行动，某种程度上实现了让机器像人类一样学习和思考的认知革新。这表明，人类认知能力（　）",
                          "options":  [
                                          "A. 随着生活实践的发展而发展",
                                          "B. 随着具身智能的发展而系统退化",
                                          "C. 随着认识工具的变革而深化演进",
                                          "D. 随着人与外部世界互动的加深而演进"
                                      ],
                          "answer":  "ACD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-20",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "杨振宁对科学美，尤其对物理和数学之美，有过长期的关注和深入的思考。他在《美与理论物理学》一文中说道：“如果把不同科学家的工作拿来比较一下，就会发现他们的取舍方针很不同，他们对于自然现象里的规律和其美与妙的了解不同，这就决定了他们的风格，也由此而决定了他们的工作的重要性。科学家对“科学美”的感受能够影响其研究视角和研究风格，这表明（　）",
                          "options":  [
                                          "A. 感性认识在认识过程中起着决定性的作用",
                                          "B. 科学研究中的创新思维既包括感性认识也包括理性认识",
                                          "C. 审美观照最能够揭示自然界事物发展的本质规律和发展趋势",
                                          "D. 审美情感等非理性因素对于人的认识活动具有激活、驱动作用"
                                      ],
                          "answer":  "BD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-21",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "探索文明源流不能忽视河流。黄河、长江、尼罗河、幼发拉底河、底格里斯河、恒河，都是文明的重要源头。河流对人类文明的作用不仅表现在物质方面，也显示于精神方面。所谓“同饮一江水”，说的就是长期生活在统一河畔、同一流域的人类群体，形成诸多共同的文化要素，进而产生共同的文化心态。河流对人类文明的作用表明（　）",
                          "options":  [
                                          "A. 文明之间的沟通交流主要是通过河流完成的",
                                          "B. 每一种文明都生长于特定的自然环境和民族传统",
                                          "C. 自然地理环境的优劣能加速或者延缓社会文明进步",
                                          "D. 地理环境在文明形态的形成发展中起着决定性的作用"
                                      ],
                          "answer":  "BC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-22",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "1956 年 8 月 24 日，毛泽东在同音乐工作者谈话时说：“作为中国人，不提倡中国的民族音乐是不行的。但是军乐队总不能用唢呐、胡琴……地球上有二十七亿人，如果唱一种曲子是不行的……演些外国音乐，不要害怕。隋朝、唐朝的九部乐、十部乐，多数是西域音乐，还有高丽、印度来的外国音乐。演外国音乐并没有使我们自己的音乐消亡了，我们的音乐继续在发展……应该越搞越中国化，而不是越搞越洋化。”毛泽东在这里借谈音乐问题阐述的处理中外文化关系的基本观点是（　）",
                          "options":  [
                                          "A. 要尊重文化的多样性",
                                          "B. 要有自己的文化自信",
                                          "C. 对外国的东西一概排斥或者全盘吸收都是错误的",
                                          "D. 要学习外国的长处，创造出有自己民族风格的东西"
                                      ],
                          "answer":  "ACD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-23",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "有效市场和有为政府相结合是中国特色社会主义市场经济的鲜明特征，也是我国在长期发展实践中积累的宝贵经验。有为政府的作用，是指政府在科学的宏观调控和有效的政府治理方面能（　）",
                          "options":  [
                                          "A. 弥补市场不足",
                                          "B. 直接干预各领域经济活动",
                                          "C. 引导市场更好发挥作用",
                                          "D. 规范市场竞争秩序"
                                      ],
                          "answer":  "ACD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-24",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "2025 年 12 月 18 日自由贸易港正式启动全岛封关。高标准建设海南自由贸易港是以习近平同志为核心的党中央着眼新时代全面深化改革开放作出的重大决策。高标准建设海南自由贸易港有利于（　）",
                          "options":  [
                                          "A. 引领新时代高水平对外开放",
                                          "B. 助力全国构建新发展格局",
                                          "C. 打造形态多样的开放高地",
                                          "D. 推动我国自由贸易试验区建设"
                                      ],
                          "answer":  "ABCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网/新东方/kaoyan.cn官方PDF/聚英 四源一致（20251220）"
                      },
                      {
                          "id":  "PZ2026-25",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "民营经济是社会主义市场经济的重要组成部分，是推进中国式现代化的生力军，是高质量发展的重要基础。2025 年 5 月 20 日，《中华人民共和国民营经济促进法》正式施行。该法的施行在我国民营经济发展史上的意义体现在（　）",
                          "options":  [
                                          "A. 它是我国第一部专门关于民营经济发展的基础性法律",
                                          "B. 它首次将“毫不动摇巩固和发展公有制经济，毫不动摇鼓励、支持、引导非公有制经济发展写进法律",
                                          "C. 它首次明确外商投资经济的法律地位",
                                          "D. 它首次在法律中规定“促进民营经济持续、健康、高质量发展，是国家长期坚持的重大方针政策"
                                      ],
                          "answer":  "ABD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2026-26",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "习近平总书记指出：“统一战线是党克敌制胜、执政兴国的重要法宝，是团结海内外全体中华儿女实现伟大复兴的重要法宝，必须长期坚持。”尽管统一战线在不同时期担负的历史任务有所不同，团结联合的范围对象有所变化，但始终不变的是（　）",
                          "options":  [
                                          "A. 大团结大联合的本质要求",
                                          "B. 凝聚人心、汇聚力量的作用",
                                          "C. 求同存异的原则",
                                          "D. 统战工作的政策策略"
                                      ],
                          "answer":  "ABC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2026-27",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "2018 年 5 月 2 日，习近平总书记在北京大学考察时说：“中国共产党的主要创始人和一些早期著名活动家，正是在北大工作或学习期间开始阅读马克思主义著作、传播马克思主义的，并推动了中国共产党的建立。”符合这一论述的史实是（　）",
                          "options":  [
                                          "A. 陈独秀创办《青年杂志》",
                                          "B. 李大钊组织成立马克思学说研究会",
                                          "C. 邓中夏在长辛店开办劳动补习学校",
                                          "D. 陈望道翻译《共产党宣言》"
                                      ],
                          "answer":  "BC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2026-28",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "80 年前，中国人民赢得了抗日战争的伟大胜利。党的十八大以来，习近平总书记多次鲜明指出“中国共产党的中流砥柱作用是中国人民抗日战争胜利的关键”，中国人民抗日战争胜利是中国共产党发挥中流砥柱作用的伟大胜利。中国共产党中流砥柱作用体现在（　）",
                          "options":  [
                                          "A. 坚持全面抗战路线",
                                          "B. 开辟敌后战场，开展游击战争",
                                          "C. 提出和实施持久战的战略总方针和人民战争的战略战术",
                                          "D. 提出集中优势兵力、各个歼灭敌人的作战原则"
                                      ],
                          "answer":  "ABC",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2026-29",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "党的十一届三中全会后，中国对外开放不断推进，并取得重大突破。截至党的十五大召开之前，中国对外开放取得的重大突破包括（　）",
                          "options":  [
                                          "A. 颁布《中华人民共和国中外合资经营企业法》",
                                          "B. 正式加入世界贸易组织",
                                          "C. 恢复在世界银行、国际货币基金组织的代表权",
                                          "D. 在深圳、珠海、汕头、厦门设置经济特区"
                                      ],
                          "answer":  "ACD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2026-30",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "作为一定的社会实践的产物，理想是处在特定历史条件下的人们对社会实践活动理性认识的结晶。这表明（　）",
                          "options":  [
                                          "A. 理想需要通过实践实现",
                                          "B. 实践是检验理想科学与否的标准",
                                          "C. 理想是社会实践活动的必备条件",
                                          "D. 实践能深化对理想的认识"
                                      ],
                          "answer":  "ABD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2026-31",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "马克思指出“没有无义务的权利，也没有无权利的义务。”正确理解法律权利与法律义务的关系，是培养法治思维的前提条件。法律权利与法律义务的关系是（　）",
                          "options":  [
                                          "A. 法律义务离开法律权利仍有履行的价值",
                                          "B. 所有法律权利和法律义务都具有复合性关系",
                                          "C. 法律权利的实现必须以相应法律义务的履行为条件",
                                          "D. 法律权利的存在和发展都必须以法律义务的存在和发展为条件"
                                      ],
                          "answer":  "CD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2026-32",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "2025 年 2 月 23 日党十八大以来第 13 个指导“三农”工作的中央一号文件《中共中央 国务院关于进一步深化农村改革扎实推进乡村全面振兴的意见》发布，在历年中央一号文件中首次指出“因地制宜发展农业新质生产力”。“农业新质生产力”主要体现在（　）",
                          "options":  [
                                          "A. 农村幸福宜居品质的持续提升",
                                          "B. 农业传统生产领域科技的原创性突破",
                                          "C. 先进生产要素的引入与集成",
                                          "D. 农业向生物制造等领域跨界突破"
                                      ],
                          "answer":  "BCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "PZ2026-33",
                          "sub":  "政治",
                          "topic":  "真题2026",
                          "type":  "multi",
                          "stem":  "中国历来重视发展与非洲国家的关系，对非洲国家重信守义。2025 年 4 月 24 日习近平总书记和来华进行国家访问的肯尼亚总统鲁托举行会谈并见证签署了 20 项中肯合作文件，内容涵盖共建“一带一路”！经济贸易、高新科技、人文交流、新闻传播等领域。习近平主席明确指出，无论国际风云如何变幻，中非关系“不会变”的是（　）",
                          "options":  [
                                          "A. 中非盟友关系不会变",
                                          "B. 中国真实亲诚对非政策理念不会变",
                                          "C. 中非患难与共、守望相助的初心不变",
                                          "D. 中非合作共赢、共同发展的根本宗旨不变"
                                      ],
                          "answer":  "BCD",
                          "key":  "",
                          "tags":  [
                                       "政治",
                                       "真题2026"
                                   ],
                          "df":  100,
                          "df_src":  "zhenti",
                          "answer_src":  "中考研网 / kaoyan.cn 官方试卷PDF / 聚英 / 中华网 四源一致；新东方未发布该段（哈尼 11-04 指出，已标注不可当已验证）"
                      },
                      {
                          "id":  "ZT2011-01",
                          "kp":  "#M04 蜗杆传动",
                          "topic":  "蜗杆传动·效率",
                          "df":  100,
                          "stem":  "蜗杆主动时，为提高蜗杆传动的效率，可（　）",
                          "options":  [
                                          "A. 增加蜗杆头数 z₁",
                                          "B. 增加蜗轮齿数 z₂",
                                          "C. 增加蜗杆特性系数 q",
                                          "D. 增加蜗杆模数 m"
                                      ],
                          "answer":  "A",
                          "key":  "蜗杆传动的效率随头数 z₁ 增加而提高（导程角增大、滑动摩擦减小）。增大 q 会使导程角变小、效率下降；增大 z₂ 只减小传动比；模数 m 与效率无直接关系。",
                          "fix":  "效率看头数：头数越多→导程角越大→效率越高；q 越大反而越差。",
                          "sub":  "专业课",
                          "type":  "choice",
                          "df_src":  "manual",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 25 · 原卷图 d19e408a（读图转录）",
                          "tags":  [
                                       "专业课",
                                       "真题-2011"
                                   ],
                          "year":  2011,
                          "page":  25,
                          "img":  "d19e408a"
                      },
                      {
                          "id":  "ZT2011-02",
                          "kp":  "#M04 螺栓联接",
                          "topic":  "紧螺栓·强度系数1.3",
                          "df":  100,
                          "stem":  "紧螺栓联接强度计算时，螺栓所受轴向拉力乘以 1.3，是（　）",
                          "options":  [
                                          "A. 防止松脱",
                                          "B. 保证足够的预紧力",
                                          "C. 计入扭转剪应力",
                                          "D. 计入弯曲应力"
                                      ],
                          "answer":  "C",
                          "key":  "拧紧时螺栓同时受拉与扭，按第四强度理论把拉应力乘 1.3（=√(1+3×(0.5)²)≈1.13 取整为 1.3 的工程近似）来等效计入扭转剪应力。",
                          "fix":  "1.3 的实际含义是「扭转剪应力的当量折算」，不是防松、也不是加大预紧力。",
                          "sub":  "专业课",
                          "type":  "choice",
                          "df_src":  "manual",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 25 · 原卷图 d19e408a（读图转录）",
                          "tags":  [
                                       "专业课",
                                       "真题-2011"
                                   ],
                          "year":  2011,
                          "page":  25,
                          "img":  "d19e408a"
                      },
                      {
                          "id":  "ZT2011-03",
                          "kp":  "#M01 齿轮强度",
                          "topic":  "接触疲劳·点蚀",
                          "df":  100,
                          "stem":  "齿面接触疲劳强度设计准则是针对齿轮（　）建立的",
                          "options":  [
                                          "A. 齿面点蚀",
                                          "B. 齿面胶合",
                                          "C. 齿面磨损",
                                          "D. 齿面变形"
                                      ],
                          "answer":  "A",
                          "key":  "接触疲劳强度准则对应的主要失效形式是齿面点蚀（疲劳麻点）；弯曲疲劳强度准则对应齿根折断。胶合、磨损、塑性变形属低速重载或润滑不良的失效，各另有校核条件。",
                          "fix":  "两条准则对两种失效：接触→点蚀，弯曲→折断。",
                          "sub":  "专业课",
                          "type":  "choice",
                          "df_src":  "manual",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 25 · 原卷图 d19e408a（读图转录）",
                          "tags":  [
                                       "专业课",
                                       "真题-2011"
                                   ],
                          "year":  2011,
                          "page":  25,
                          "img":  "d19e408a"
                      },
                      {
                          "id":  "ZT2011-04",
                          "kp":  "#M05 平衡",
                          "topic":  "动平衡·双面",
                          "df":  100,
                          "stem":  "在工业上，回转件的动平衡又称为（　）",
                          "options":  [
                                          "A. 单面平衡",
                                          "B. 双面平衡",
                                          "C. 双向平衡",
                                          "D. 动态主矢平衡"
                                      ],
                          "answer":  "B",
                          "key":  "动平衡是在两个平衡平面内同时加/减配重，故称双面平衡；静平衡只在单个平面内进行（单面平衡），适用于轴向尺寸小的盘状件。",
                          "fix":  "静平衡＝单面，动平衡＝双面；这是两个最常见的混淆点。",
                          "sub":  "专业课",
                          "type":  "choice",
                          "df_src":  "manual",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 25 · 原卷图 d19e408a（读图转录）",
                          "tags":  [
                                       "专业课",
                                       "真题-2011"
                                   ],
                          "year":  2011,
                          "page":  25,
                          "img":  "d19e408a"
                      },
                      {
                          "id":  "ZT2011-05",
                          "kp":  "#M06 链传动",
                          "topic":  "链传动·减小动载荷",
                          "df":  102,
                          "stem":  "在一定转速下，要减轻滚子链传动的运动不均匀性和动载荷，应该（　）",
                          "options":  [
                                          "A. 增大节距 p 和增加齿数 z₁",
                                          "B. 减小节距 p 和减少齿数 z₁",
                                          "C. 增大节距 p 和减少齿数 z₁",
                                          "D. 减小节距 p 和增加齿数 z₁"
                                      ],
                          "answer":  "D",
                          "key":  "链传动的不均匀性与动载荷随节距 p 增大、齿数 z₁ 减少而加剧，故应减小节距、增加齿数。齿数增加还降低多边形效应。",
                          "fix":  "两项同向才好：p 小、z 大 ⇒ 平稳。其它三项都有一项走反。",
                          "sub":  "专业课",
                          "type":  "choice",
                          "df_src":  "manual",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 25 · 原卷图 d19e408a（读图转录）",
                          "tags":  [
                                       "专业课",
                                       "真题-2011"
                                   ],
                          "year":  2011,
                          "page":  25,
                          "img":  "d19e408a"
                      },
                      {
                          "id":  "ZT2011-06",
                          "kp":  "#M03 键联接",
                          "topic":  "平键·工作面",
                          "df":  98,
                          "stem":  "普通平键是靠键的（　）来传递扭矩",
                          "options":  [
                                          "A. 上表面",
                                          "B. 下表面",
                                          "C. 上、下表面",
                                          "D. 两侧面"
                                      ],
                          "answer":  "D",
                          "key":  "普通平键为侧面工作（两侧面与轴、毂键槽侧面挤压传扭），上下面为间隙配合、不承载。切向键、楔键才靠上下（或楔紧）面工作。",
                          "fix":  "平键＝侧面挤压传递；楔键＝上下楔紧。部位不同，失效也不同（平键为挤压压溃）。",
                          "sub":  "专业课",
                          "type":  "choice",
                          "df_src":  "manual",
                          "src":  "新疆大学 2011 年 833 机械设计基础·一、单项选择题（真题原题）",
                          "tags":  [
                                       "专业课",
                                       "真题-2011"
                                   ],
                          "year":  2011,
                          "page":  25,
                          "note":  "11-10 逐题核字：本条已在库，仅补 year/page 元数据（题干／选项／答案逐字不动）。与 2016 卷第 5 题同题（选项 C 表述不同），跨年重考。"
                      },
                      {
                          "id":  "ZT2011-07",
                          "kp":  "#M02 轴·强度计算",
                          "topic":  "转轴·当量弯矩",
                          "df":  102,
                          "stem":  "对于转轴的强度计算，应按（　）计算",
                          "options":  [
                                          "A. 弯矩",
                                          "B. 扭矩",
                                          "C. 弯矩、扭矩合成的当量弯矩",
                                          "D. 力矩"
                                      ],
                          "answer":  "C",
                          "key":  "转轴同时承受弯矩与扭矩，按弯扭合成强度计算当量弯矩 M_e=√(M²+(αT)²)，α 为折合系数（按转矩变化性质取 0.3/0.6/1）。只按弯矩算会漏掉扭转的影响。",
                          "fix":  "转轴＝弯矩+扭矩；心轴只受弯；传动轴只受扭。先认轴的类型再选公式。",
                          "sub":  "专业课",
                          "type":  "choice",
                          "df_src":  "manual",
                          "src":  "新疆大学 2011 年 833 机械设计基础·一、单项选择题（真题原题）",
                          "tags":  [
                                       "专业课",
                                       "真题-2011"
                                   ],
                          "year":  2011,
                          "page":  25,
                          "note":  "11-10 逐题核字：本条已在库，仅补 year/page 元数据（题干／选项／答案逐字不动）。与 2016 卷第 6 题同题，跨年重考。"
                      },
                      {
                          "id":  "ZT2011-08",
                          "kp":  "#M01 轮系",
                          "topic":  "轮系分类",
                          "df":  96,
                          "stem":  "轮系运动时，各轮轴线位置固定不动的称为（　）",
                          "options":  [
                                          "A. 周转轮系",
                                          "B. 定轴轮系",
                                          "C. 行星轮系",
                                          "D. 复合轮系"
                                      ],
                          "answer":  "B",
                          "key":  "定轴轮系：所有齿轮轴线位置固定。周转轮系（含行星轮系）：至少一个齿轮轴线绕另一轴线转动。复合轮系：定轴与周转的组合。",
                          "fix":  "判据只有一个：轴线动不动。动＝周转，不动＝定轴。",
                          "sub":  "专业课",
                          "type":  "choice",
                          "df_src":  "manual",
                          "src":  "新疆大学 2011 年 833 机械设计基础·一、单项选择题（真题原题）",
                          "tags":  [
                                       "专业课",
                                       "真题-2011"
                                   ],
                          "year":  2011,
                          "page":  25,
                          "note":  "11-10 逐题核字：本条已在库，仅补 year/page 元数据（题干／选项／答案逐字不动）。与 2016 卷第 7 题同题，跨年重考。"
                      },
                      {
                          "id":  "ZT2010-01",
                          "year":  2010,
                          "page":  20,
                          "type":  "choice",
                          "stem":  "轮系运动时，各轮轴线位置固定不动的称为______。",
                          "options":  [
                                          "A. 周转轮系",
                                          "B. 定轴轮系",
                                          "C. 行星轮系",
                                          "D. 差动轮系"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 轮系",
                          "why":  "轴线全固定的轮系定义即定轴轮系。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 20 · 原卷图 b0927b9d（读图转录）",
                          "img":  "b0927b9d",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M01 轮系",
                          "df":  100,
                          "tags":  [
                                       "#M01 轮系"
                                   ]
                      },
                      {
                          "id":  "ZT2010-02",
                          "year":  2010,
                          "page":  20,
                          "type":  "choice",
                          "stem":  "在带传动中用______的方法可以使小带轮包角加大。",
                          "options":  [
                                          "A. 减小小带轮直径 d1",
                                          "B. 增大小带轮直径 d1",
                                          "C. 增大大带轮直径 d2",
                                          "D. 减小中心距 a"
                                      ],
                          "answer":  "B",
                          "kp":  "#M06 带传动",
                          "why":  "α1=180°-(d2-d1)/a×57.3°，增大d1使d2-d1减小、α1增大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 20 · 原卷图 b0927b9d（读图转录）",
                          "img":  "b0927b9d",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2010-03",
                          "year":  2010,
                          "page":  20,
                          "type":  "choice",
                          "stem":  "对齿面硬度≤350HBS的一对齿轮传动，选取齿面硬度时应使______。",
                          "options":  [
                                          "A. 小齿轮齿面硬度\u003c大齿轮齿面硬度",
                                          "B. 小齿轮齿面硬度=大齿轮齿面硬度",
                                          "C. 小齿轮齿面硬度\u003e大齿轮齿面硬度",
                                          "D. 小齿轮齿面硬度≤大齿轮齿面硬度"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 齿轮材料",
                          "why":  "软齿面配对时小齿轮硬度高于大齿轮，使两轮寿命接近。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 20 · 原卷图 b0927b9d（读图转录）",
                          "img":  "b0927b9d",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M01 齿轮材料",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮材料"
                                   ]
                      },
                      {
                          "id":  "ZT2010-04",
                          "year":  2010,
                          "page":  20,
                          "type":  "choice",
                          "stem":  "动平衡的条件是，回转件中各个质量产生的______。",
                          "options":  [
                                          "A. 离心力的合力等于零",
                                          "B. 离心力的合力偶矩等于零",
                                          "C. 离心力的合力和合力偶矩均等于零",
                                          "D. 离心力的合力和合力偶矩均不等于零"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "动平衡需合力与合力偶矩同时为零。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 20 · 原卷图 b0927b9d（读图转录）",
                          "img":  "b0927b9d",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "ZT2010-05",
                          "year":  2010,
                          "page":  20,
                          "type":  "choice",
                          "stem":  "一对相互啮合的齿轮传动，小齿轮材料为40Cr，大齿轮材料为45号钢，啮合处的接触应力______。",
                          "options":  [
                                          "A. σH1=σH2",
                                          "B. σH1\u003cσH2",
                                          "C. σH1\u003eσH2",
                                          "D. 不确定"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮强度",
                          "why":  "一对啮合齿轮的接触应力大小相等。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 20 · 原卷图 b0927b9d（读图转录）",
                          "img":  "b0927b9d",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M01 齿轮强度",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮强度"
                                   ]
                      },
                      {
                          "id":  "ZT2010-06",
                          "year":  2010,
                          "page":  21,
                          "type":  "choice",
                          "stem":  "普通平键是靠键的______来传递扭矩。",
                          "options":  [
                                          "A. 上表面",
                                          "B. 下表面",
                                          "C. 上、下表面",
                                          "D. 两侧面"
                                      ],
                          "answer":  "D",
                          "kp":  "#M03 键联接",
                          "why":  "平键工作面为两侧面，靠挤压传力。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 21 · 原卷图 1dd9e5c8（读图转录）",
                          "img":  "1dd9e5c8",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M03 键联接",
                          "df":  100,
                          "tags":  [
                                       "#M03 键联接"
                                   ]
                      },
                      {
                          "id":  "ZT2010-07",
                          "year":  2010,
                          "page":  21,
                          "type":  "choice",
                          "stem":  "对于转轴的强度计算，应按______计算。",
                          "options":  [
                                          "A. 弯矩",
                                          "B. 扭矩",
                                          "C. 弯矩、扭矩合成的当量弯矩",
                                          "D. 力矩"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 轴",
                          "why":  "转轴同时受弯扭，按当量弯矩校核。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 21 · 原卷图 1dd9e5c8（读图转录）",
                          "img":  "1dd9e5c8",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2010-08",
                          "year":  2010,
                          "page":  21,
                          "type":  "choice",
                          "stem":  "当两个被联接件之一太厚，不宜制成通孔，且联接不需经常拆装时，往往采用______。",
                          "options":  [
                                          "A. 螺栓联接",
                                          "B. 螺钉联接",
                                          "C. 双头螺柱联接",
                                          "D. 紧定螺钉联接"
                                      ],
                          "answer":  "C",
                          "kp":  "#M04 螺纹联接",
                          "why":  "厚件不通孔且少拆卸时用双头螺柱联接。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 21 · 原卷图 1dd9e5c8（读图转录）",
                          "img":  "1dd9e5c8",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2010-09",
                          "year":  2010,
                          "page":  21,
                          "type":  "choice",
                          "stem":  "铰链四杆机构中，若最短杆与最长杆长度之和小于其余两杆长度之和，当以______为机架时，恒有一个曲柄。",
                          "options":  [
                                          "A. 最短杆相邻边",
                                          "B. 最短杆",
                                          "C. 最短杆对边",
                                          "D. 任意杆"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "满足杆长和条件且取最短杆相邻杆为机架得曲柄摇杆机构，只有一个曲柄。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 21 · 原卷图 1dd9e5c8（读图转录）",
                          "img":  "1dd9e5c8",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2010-10",
                          "year":  2010,
                          "page":  21,
                          "type":  "choice",
                          "stem":  "凸轮机构从动件采用等速运动规律时______。",
                          "options":  [
                                          "A. 无冲击",
                                          "B. 有刚性冲击",
                                          "C. 有柔性冲击",
                                          "D. 任意冲击"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 凸轮机构",
                          "why":  "等速运动在起止点速度突变，产生刚性冲击。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 21 · 原卷图 1dd9e5c8（读图转录）",
                          "img":  "1dd9e5c8",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2010-11",
                          "year":  2010,
                          "page":  21,
                          "type":  "choice",
                          "stem":  "斜齿圆柱齿轮的模数和压力角之标准值是规定在轮齿的______。",
                          "options":  [
                                          "A. 端截面中",
                                          "B. 法截面中",
                                          "C. 轴截面中",
                                          "D. 分度面中"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 齿轮几何",
                          "why":  "斜齿轮标准参数取在法面。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 21 · 原卷图 1dd9e5c8（读图转录）",
                          "img":  "1dd9e5c8",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2010-12",
                          "year":  2010,
                          "page":  21,
                          "type":  "choice",
                          "stem":  "在以下间歇运动机构中，______机构更适应于高速工作情况。",
                          "options":  [
                                          "A. 凸轮间歇运动",
                                          "B. 不完全齿轮",
                                          "C. 棘轮",
                                          "D. 槽轮"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 间歇运动机构",
                          "why":  "凸轮式间歇运动机构运转平稳、可高速。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 21 · 原卷图 1dd9e5c8（读图转录）",
                          "img":  "1dd9e5c8",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M05 间歇运动机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 间歇运动机构"
                                   ]
                      },
                      {
                          "id":  "ZT2010-13",
                          "year":  2010,
                          "page":  21,
                          "type":  "choice",
                          "stem":  "在下列四种型号的滚动轴承中，只能承受径向载荷的是______。",
                          "options":  [
                                          "A. 6208",
                                          "B. 31208",
                                          "C. N208",
                                          "D. 5208"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 轴承",
                          "why":  "N型为圆柱滚子轴承，只承受径向载荷。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 21 · 原卷图 1dd9e5c8（读图转录）",
                          "img":  "1dd9e5c8",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2010-14",
                          "year":  2010,
                          "page":  21,
                          "type":  "choice",
                          "stem":  "转轴弯曲应力σb的应力循环特征为______。",
                          "options":  [
                                          "A. r=-1",
                                          "B. r=0",
                                          "C. r=+1",
                                          "D. -1\u003cr\u003c+1"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 轴",
                          "why":  "转轴弯曲应力为对称循环，r=-1。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 21 · 原卷图 1dd9e5c8（读图转录）",
                          "img":  "1dd9e5c8",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2010-15",
                          "year":  2010,
                          "page":  21,
                          "type":  "choice",
                          "stem":  "带传动中，若小带轮为主动轮，则带的最大应力发生在带的______处。",
                          "options":  [
                                          "A. 退出大带轮处",
                                          "B. 进入大带轮处",
                                          "C. 退出小带轮处",
                                          "D. 进入小带轮处"
                                      ],
                          "answer":  "D",
                          "kp":  "#M06 带传动",
                          "why":  "紧边进入小带轮处应力叠加最大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 21 · 原卷图 1dd9e5c8（读图转录）",
                          "img":  "1dd9e5c8",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "TK2010-01",
                          "year":  2010,
                          "page":  21,
                          "type":  "fill",
                          "stem":  "某圆锥滚子轴承，宽度系列为窄系列、直径系列为中系列，内径100mm，公差等级P2级，其代号为______。",
                          "options":  [

                                      ],
                          "answer":  "30220/P2",
                          "kp":  "#M02 轴承",
                          "why":  "类型3、尺寸系列32、内径02，精度后缀/P2。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 21 · 原卷图 1dd9e5c8（读图转录）",
                          "img":  "1dd9e5c8",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "TK2010-02",
                          "year":  2010,
                          "page":  22,
                          "type":  "fill",
                          "stem":  "用于联接的螺纹是______，其原因是______。",
                          "options":  [

                                      ],
                          "answer":  "三角形（普通）螺纹；升角小、当量摩擦角大，自锁性好",
                          "kp":  "#M04 螺纹联接",
                          "why":  "联接螺纹要求自锁，三角形螺纹当量摩擦角最大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 22 · 原卷图 91fb0e75（读图转录）",
                          "img":  "91fb0e75",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2010-03",
                          "year":  2010,
                          "page":  22,
                          "type":  "fill",
                          "stem":  "两渐开线齿轮啮合传动时，当两轮的______略有改变时，两齿轮仍能保持______，此特性称为齿轮传动的可分性。",
                          "options":  [

                                      ],
                          "answer":  "中心距；定传动比（瞬时传动比不变）",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "渐开线齿廓中心距变化不改变传动比，即可分性。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 22 · 原卷图 91fb0e75（读图转录）",
                          "img":  "91fb0e75",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "TK2010-04",
                          "year":  2010,
                          "page":  22,
                          "type":  "fill",
                          "stem":  "因为链传动______、______，因此适用于______速传动。",
                          "options":  [

                                      ],
                          "answer":  "无弹性滑动、平均传动比准确；低（中低）",
                          "kp":  "#M06 链传动",
                          "why":  "链传动无弹性滑动但多边形效应引起动载荷，宜低速。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 22 · 原卷图 91fb0e75（读图转录）",
                          "img":  "91fb0e75",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "TK2010-05",
                          "year":  2010,
                          "page":  22,
                          "type":  "fill",
                          "stem":  "实现流体动压润滑油膜的条件是______、______和______。",
                          "options":  [

                                      ],
                          "answer":  "两表面间有楔形间隙；有相对滑动速度且能带油从大口流向小口；润滑油有足够粘度且供油充分",
                          "kp":  "#M02 轴承",
                          "why":  "流体动压润滑三条件为标准表述。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2010 年真题卷 · 印刷页 22 · 原卷图 91fb0e75（读图转录）",
                          "img":  "91fb0e75",
                          "sub":  "专业课",
                          "topic":  "真题2010·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2011-09",
                          "year":  2011,
                          "page":  26,
                          "type":  "choice",
                          "stem":  "铰链四杆机构ABCD中，AB为曲柄，CD为摇杆，BC为连杆。若lAB=30mm，lBC=70mm，lCD=80mm，则机架最大杆长为______。",
                          "options":  [
                                          "A. 80mm",
                                          "B. 100mm",
                                          "C. 120mm",
                                          "D. 150mm"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "杆长条件 30+x≤70+80，x≤120mm。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 26 · 原卷图 26cd6936（读图转录）",
                          "img":  "26cd6936",
                          "sub":  "专业课",
                          "topic":  "真题2011·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2011-10",
                          "year":  2011,
                          "page":  26,
                          "type":  "choice",
                          "stem":  "凸轮机构中，从动件的运动规律取决于______。",
                          "options":  [
                                          "A. 凸轮轮廓的大小",
                                          "B. 凸轮轮廓的形状",
                                          "C. 基圆的大小",
                                          "D. 升距的大小"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 凸轮机构",
                          "why":  "从动件运动规律由凸轮廓线形状决定。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 26 · 原卷图 26cd6936（读图转录）",
                          "img":  "26cd6936",
                          "sub":  "专业课",
                          "topic":  "真题2011·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2011-11",
                          "year":  2011,
                          "page":  26,
                          "type":  "choice",
                          "stem":  "当两渐开线齿轮的中心距略有改变时，该对齿轮的______。",
                          "options":  [
                                          "A. 传动比不变，且啮合角也不变",
                                          "B. 传动比有变化，但啮合角不变",
                                          "C. 传动比不变，但啮合角有变化",
                                          "D. 传动比变化，啮合角也变化"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "渐开线可分性：传动比不变，啮合角随中心距变。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 26 · 原卷图 26cd6936（读图转录）",
                          "img":  "26cd6936",
                          "sub":  "专业课",
                          "topic":  "真题2011·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "ZT2011-12",
                          "year":  2011,
                          "page":  26,
                          "type":  "choice",
                          "stem":  "在以下间歇运动机构中______机构更适应于高速工作情况。",
                          "options":  [
                                          "A. 凸轮间歇运动",
                                          "B. 不完全齿轮",
                                          "C. 棘轮",
                                          "D. 槽轮"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 间歇运动机构",
                          "why":  "凸轮式间歇运动平稳，宜高速。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 26 · 原卷图 26cd6936（读图转录）",
                          "img":  "26cd6936",
                          "sub":  "专业课",
                          "topic":  "真题2011·#M05 间歇运动机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 间歇运动机构"
                                   ]
                      },
                      {
                          "id":  "ZT2011-14",
                          "year":  2011,
                          "page":  26,
                          "type":  "choice",
                          "stem":  "对于工作中载荷平稳，不发生相对位移，转速稳定且对中性好的两轴宜用______。",
                          "options":  [
                                          "A. 万向联轴器",
                                          "B. 弹性套柱销联轴器",
                                          "C. 刚性凸缘联轴器",
                                          "D. 齿式联轴器"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 联轴器与离合器",
                          "why":  "对中好、载荷平稳用刚性凸缘联轴器。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 26 · 原卷图 26cd6936（读图转录）",
                          "img":  "26cd6936",
                          "sub":  "专业课",
                          "topic":  "真题2011·#M02 联轴器与离合器",
                          "df":  100,
                          "tags":  [
                                       "#M02 联轴器与离合器"
                                   ]
                      },
                      {
                          "id":  "ZT2011-15",
                          "year":  2011,
                          "page":  26,
                          "type":  "choice",
                          "stem":  "三角带的公称长度是指______。",
                          "options":  [
                                          "A. 外圆周长",
                                          "B. 节线周长",
                                          "C. 内圆周长",
                                          "D. 内环长"
                                      ],
                          "answer":  "B",
                          "kp":  "#M06 带传动",
                          "why":  "V带公称长度以节线周长表示。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 26 · 原卷图 26cd6936（读图转录）",
                          "img":  "26cd6936",
                          "sub":  "专业课",
                          "topic":  "真题2011·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "TK2011-01",
                          "year":  2011,
                          "page":  26,
                          "type":  "fill",
                          "stem":  "已知减速直齿锥齿轮传动，小齿轮所受三个分力的大小分别为：Ft1=2360N，Fa1=272N，Fr1=816N，试分别指出大齿轮：Ft2=______N，Fa2=______N，Fr2=______。",
                          "options":  [

                                      ],
                          "answer":  "Ft2=2360N，Fa2=Fr1=816N，Fr2=Fa1=272N",
                          "kp":  "#M01 锥齿轮受力",
                          "why":  "锥齿轮主从动轮分力对应关系：圆周力相等，径向与轴向互换。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 26 · 原卷图 26cd6936（读图转录）",
                          "img":  "26cd6936",
                          "sub":  "专业课",
                          "topic":  "真题2011·#M01 锥齿轮受力",
                          "df":  100,
                          "tags":  [
                                       "#M01 锥齿轮受力"
                                   ]
                      },
                      {
                          "id":  "TK2011-02",
                          "year":  2011,
                          "page":  26,
                          "type":  "fill",
                          "stem":  "蜗杆传动中，蜗轮的轮缘材料通常采用______，蜗杆材料常采用______制造，这是因为______。",
                          "options":  [

                                      ],
                          "answer":  "青铜（锡青铜或铝青铜）；45钢（或40Cr）并淬火；减摩耐磨且蜗杆需较高强度",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "蜗轮用减摩材料、蜗杆用高强度钢，配对减磨。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 26 · 原卷图 26cd6936（读图转录）",
                          "img":  "26cd6936",
                          "sub":  "专业课",
                          "topic":  "真题2011·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "TK2011-03",
                          "year":  2011,
                          "page":  26,
                          "type":  "fill",
                          "stem":  "机构具有确定运动的条件为______的数目______机构的自由度。",
                          "options":  [

                                      ],
                          "answer":  "原动件；等于",
                          "kp":  "#M05 机构自由度",
                          "why":  "原动件数等于自由度数时运动确定。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 26 · 原卷图 26cd6936（读图转录）",
                          "img":  "26cd6936",
                          "sub":  "专业课",
                          "topic":  "真题2011·#M05 机构自由度",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构自由度"
                                   ]
                      },
                      {
                          "id":  "TK2011-04",
                          "year":  2011,
                          "page":  26,
                          "type":  "fill",
                          "stem":  "有一个角接触球轴承，宽度系列为窄系列、直径系列为中系列，内径为55mm，接触角25°，公差等级P4级，其代号为______。",
                          "options":  [

                                      ],
                          "answer":  "7311AC/P4",
                          "kp":  "#M02 轴承代号",
                          "why":  "7＝角接触球轴承；中系列 3＋窄系列 1＝31；内径 55÷5＝11；25°＝AC；公差＝/P4。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 26 · 原卷图 26cd6936（读图转录）",
                          "img":  "26cd6936",
                          "sub":  "专业课",
                          "topic":  "真题2011·#M02 轴承代号",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承代号"
                                   ],
                          "note":  "11-10 哈尼逐题核字纠错：原答案 73211AC/P4 多了「2」（把宽度窄系列 1 误写成宽系列 2）；7＋31＋11＋AC＋/P4 ⇒ 7311AC/P4。与 2016 卷第 9 题同题同参，答案必须一致。"
                      },
                      {
                          "id":  "TK2011-05",
                          "year":  2011,
                          "page":  27,
                          "type":  "fill",
                          "stem":  "带传动工作时，带的最大应力发生在______。",
                          "options":  [

                                      ],
                          "answer":  "紧边进入小带轮处（带绕入小带轮处）",
                          "kp":  "#M06 带传动",
                          "why":  "紧边拉力与弯曲应力在小轮处叠加最大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷 · 印刷页 27 · 原卷图 8431c4a1（读图转录）",
                          "img":  "8431c4a1",
                          "sub":  "专业课",
                          "topic":  "真题2011·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "TK2012-01",
                          "year":  2012,
                          "page":  31,
                          "type":  "fill",
                          "stem":  "由于组成运动副中两构件之间的____形式不同，运动副分为高副和低副。",
                          "options":  [

                                      ],
                          "answer":  "接触",
                          "kp":  "#M05 机构",
                          "why":  "面接触为低副、点线接触为高副。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 31 · 原卷图 ffdc54d8（读图转录）",
                          "img":  "ffdc54d8",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构"
                                   ]
                      },
                      {
                          "id":  "TK2012-02",
                          "year":  2012,
                          "page":  31,
                          "type":  "fill",
                          "stem":  "当机构的传动角等于0°（压力角等于90°）时，机构所处的位置称为____位置。",
                          "options":  [

                                      ],
                          "answer":  "死点",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "传动角为零即死点位置。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 31 · 原卷图 ffdc54d8（读图转录）",
                          "img":  "ffdc54d8",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "TK2012-03",
                          "year":  2012,
                          "page":  31,
                          "type":  "fill",
                          "stem":  "直齿圆柱齿轮传动中，只有当两个齿轮的____和____都相等时，这两个齿轮才能啮合。",
                          "options":  [

                                      ],
                          "answer":  "模数；压力角",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "正确啮合条件为模数、压力角分别相等。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 31 · 原卷图 ffdc54d8（读图转录）",
                          "img":  "ffdc54d8",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "TK2012-04",
                          "year":  2012,
                          "page":  31,
                          "type":  "fill",
                          "stem":  "摩擦式棘轮机构，是一种无____的棘轮，棘轮是通过与所谓棘爪的摩擦块之间的____而工作的。",
                          "options":  [

                                      ],
                          "answer":  "棘齿（齿）；摩擦（楔紧）",
                          "kp":  "#M05 间歇运动机构",
                          "why":  "摩擦式棘轮无齿，靠摩擦块楔紧传力。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 31 · 原卷图 ffdc54d8（读图转录）",
                          "img":  "ffdc54d8",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 间歇运动机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 间歇运动机构"
                                   ]
                      },
                      {
                          "id":  "TK2012-05",
                          "year":  2012,
                          "page":  31,
                          "type":  "fill",
                          "stem":  "槽轮机构主要由____、____、____和机架等构件组成。",
                          "options":  [

                                      ],
                          "answer":  "拨盘（曲柄）；槽轮；锁止（止动）盘",
                          "kp":  "#M05 间歇运动机构",
                          "why":  "槽轮机构由拨盘、槽轮、机架组成。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 31 · 原卷图 ffdc54d8（读图转录）",
                          "img":  "ffdc54d8",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 间歇运动机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 间歇运动机构"
                                   ]
                      },
                      {
                          "id":  "TK2012-06",
                          "year":  2012,
                          "page":  31,
                          "type":  "fill",
                          "stem":  "采用凸台或沉头座孔作为螺栓头或螺母的支承面是为了____。",
                          "options":  [

                                      ],
                          "answer":  "减小加工面积，并保证支承面与螺栓轴线垂直、减小附加弯曲应力",
                          "kp":  "#M04 螺纹联接",
                          "why":  "凸台使支承面垂直于轴线，避免偏心载荷。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 31 · 原卷图 ffdc54d8（读图转录）",
                          "img":  "ffdc54d8",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2012-07",
                          "year":  2012,
                          "page":  31,
                          "type":  "fill",
                          "stem":  "对于齿面硬度≤350HBS的齿轮传动，当两齿轮均采用45钢时，一般应采取的热处理方式为____。",
                          "options":  [

                                      ],
                          "answer":  "调质（小齿轮调质、大齿轮正火）",
                          "kp":  "#M01 齿轮材料",
                          "why":  "软齿面45钢常用调质处理。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 31 · 原卷图 ffdc54d8（读图转录）",
                          "img":  "ffdc54d8",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M01 齿轮材料",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮材料"
                                   ]
                      },
                      {
                          "id":  "TK2012-08",
                          "year":  2012,
                          "page":  31,
                          "type":  "fill",
                          "stem":  "蜗杆传动的滑动速度越大，所选润滑油的粘度值应越____。",
                          "options":  [

                                      ],
                          "answer":  "大（高）",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "滑动速度大发热多，需高粘度油维持油膜。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 31 · 原卷图 ffdc54d8（读图转录）",
                          "img":  "ffdc54d8",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "TK2012-09",
                          "year":  2012,
                          "page":  31,
                          "type":  "fill",
                          "stem":  "阿基米德圆柱蜗杆传动的中间平面是指____的平面。",
                          "options":  [

                                      ],
                          "answer":  "通过蜗杆轴线并垂直于蜗轮轴线",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "中间平面为蜗杆轴平面，蜗杆蜗轮在此相当于齿条与齿轮啮合。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 31 · 原卷图 ffdc54d8（读图转录）",
                          "img":  "ffdc54d8",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "TK2012-10",
                          "year":  2012,
                          "page":  31,
                          "type":  "fill",
                          "stem":  "按工作原理，操纵式离合器主要分为____、____、____三类。",
                          "options":  [

                                      ],
                          "answer":  "啮合式（牙嵌式）；摩擦式；电磁式",
                          "kp":  "#M02 联轴器与离合器",
                          "why":  "按工作原理分啮合、摩擦、电磁三类。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 31 · 原卷图 ffdc54d8（读图转录）",
                          "img":  "ffdc54d8",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M02 联轴器与离合器",
                          "df":  100,
                          "tags":  [
                                       "#M02 联轴器与离合器"
                                   ]
                      },
                      {
                          "id":  "ZT2012-01",
                          "year":  2012,
                          "page":  32,
                          "type":  "choice",
                          "stem":  "两构件通过内表面和外表面直接接触而组成的低副，都是回转副。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 机构",
                          "why":  "内外表面接触也可组成移动副等，不都是回转副。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 32 · 原卷图 b269da29（读图转录）",
                          "img":  "b269da29",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构"
                                   ]
                      },
                      {
                          "id":  "ZT2012-02",
                          "year":  2012,
                          "page":  32,
                          "type":  "choice",
                          "stem":  "压力角就是主动件所受驱动力的方向线与该点速度的方向线之间的夹角。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "压力角定义为力的方向线与速度方向线夹角。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 32 · 原卷图 b269da29（读图转录）",
                          "img":  "b269da29",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2012-03",
                          "year":  2012,
                          "page":  32,
                          "type":  "choice",
                          "stem":  "盘形凸轮的结构尺寸与基圆半径成正比。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 凸轮机构",
                          "why":  "基圆半径越大凸轮外形尺寸越大，两者成正比。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 32 · 原卷图 b269da29（读图转录）",
                          "img":  "b269da29",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ],
                          "note":  "11-10 七卷核字：2014 卷判断第 5 题与此**完全同题同答**（答案 A 对），按去重口径不重复入库；2014 卷该处登记为「同题重考」。"
                      },
                      {
                          "id":  "ZT2012-04",
                          "year":  2012,
                          "page":  32,
                          "type":  "choice",
                          "stem":  "在圆柱面上开有曲线凹槽轮廓的圆柱凸轮，它只适用于滚子式从动杆。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 凸轮机构",
                          "why":  "圆柱凸轮也可配尖顶或平底从动件，非只能配滚子。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 32 · 原卷图 b269da29（读图转录）",
                          "img":  "b269da29",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2012-05",
                          "year":  2012,
                          "page":  32,
                          "type":  "choice",
                          "stem":  "压力角的大小影响从动杆的运动规律。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 凸轮机构",
                          "why":  "压力角只影响受力，运动规律由廓线决定。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 32 · 原卷图 b269da29（读图转录）",
                          "img":  "b269da29",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2012-06",
                          "year":  2012,
                          "page":  32,
                          "type":  "choice",
                          "stem":  "滚子从动杆滚子半径选用得过小，将会使运动规律“失真”。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 凸轮机构",
                          "why":  "滚子半径过大才导致廓线相交而运动失真。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 32 · 原卷图 b269da29（读图转录）",
                          "img":  "b269da29",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ],
                          "note":  "11-10 七卷核字：2014 卷判断第 9 题与此同题同答（答案 B 错），按去重口径不重复入库；2014 卷该处登记为「同题重考」。"
                      },
                      {
                          "id":  "ZT2012-07",
                          "year":  2012,
                          "page":  32,
                          "type":  "choice",
                          "stem":  "斜齿圆柱齿轮计算基本参数是：标准模数，标准压力角，齿数和螺旋角。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮几何",
                          "why":  "斜齿轮以法面标准模数、压力角、齿数、螺旋角为基本参数。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 32 · 原卷图 b269da29（读图转录）",
                          "img":  "b269da29",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2012-08",
                          "year":  2012,
                          "page":  32,
                          "type":  "choice",
                          "stem":  "只有间歇运动机构，才能实现间歇运动。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 间歇运动机构",
                          "why":  "凸轮、连杆组合等也能实现间歇运动。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 32 · 原卷图 b269da29（读图转录）",
                          "img":  "b269da29",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 间歇运动机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 间歇运动机构"
                                   ]
                      },
                      {
                          "id":  "ZT2012-10",
                          "year":  2012,
                          "page":  32,
                          "type":  "choice",
                          "stem":  "利用曲柄摇杆机构带动的棘轮机构，棘轮的转向和曲柄的转向相同。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 间歇运动机构",
                          "why":  "棘轮单向间歇转动，与曲柄连续转向不必相同。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 32 · 原卷图 b269da29（读图转录）",
                          "img":  "b269da29",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 间歇运动机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 间歇运动机构"
                                   ]
                      },
                      {
                          "id":  "ZT2012-11",
                          "year":  2012,
                          "page":  33,
                          "type":  "choice",
                          "stem":  "曲柄摇杆机构的传动角是______。",
                          "options":  [
                                          "A. 连杆与从动摇杆之间所夹的余角",
                                          "B. 连杆与从动摇杆之间所夹的锐角",
                                          "C. 机构极位夹角的余角"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "传动角为连杆与摇杆所夹锐角。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 33 · 原卷图 4be3403c（读图转录）",
                          "img":  "4be3403c",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2012-12",
                          "year":  2012,
                          "page":  33,
                          "type":  "choice",
                          "stem":  "对于双摇杆机构，最短构件与最长构件长度之和______大于其余两构件长度之和。",
                          "options":  [
                                          "A. 一定",
                                          "B. 不一定",
                                          "C. 一定不"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "双摇杆不满足杆长条件，故最短加最长必大于其余两杆之和。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 33 · 原卷图 4be3403c（读图转录）",
                          "img":  "4be3403c",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2012-13",
                          "year":  2012,
                          "page":  33,
                          "type":  "choice",
                          "stem":  "______能把转动运动转换成往复直线运动，也可以把往复直线运动转换成转动运动。",
                          "options":  [
                                          "A. 曲柄摇杆机构",
                                          "B. 双曲柄机构",
                                          "C. 双摇杆机构",
                                          "D. 曲柄滑块机构",
                                          "E. 摆动导杆机构",
                                          "F. 转动导杆机构"
                                      ],
                          "answer":  "D",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "曲柄滑块实现转动与往复直线的互换。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 33 · 原卷图 4be3403c（读图转录）",
                          "img":  "4be3403c",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2012-14",
                          "year":  2012,
                          "page":  33,
                          "type":  "choice",
                          "stem":  "若使凸轮轮廓曲线在任何位置都不变尖，也不变成叉形，则滚子半径必须______凸轮理论轮廓外凸部分的最小曲率半径。",
                          "options":  [
                                          "A. 大于",
                                          "B. 小于",
                                          "C. 等于"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 凸轮机构",
                          "why":  "rr\u003cρmin 才不产生失真。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 33 · 原卷图 4be3403c（读图转录）",
                          "img":  "4be3403c",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ],
                          "note":  "11-10 跨卷同题留痕：三卷考同一条件 r_r＜ρ_min，但**问法主语与选项顺序各异，答案字母跟着变**。「2012 卷第 4 题（库内编号 ZT2012-14）问「滚子半径必须____最小曲率半径」，选项序 A 大于／B 小于／C 等于 ⇒ 答案 **B（小于）**。」库内本条答案经逐字核字确认无误；出卷／背诵一律照抄本卷选项，禁止按「同题」换算字母。"
                      },
                      {
                          "id":  "ZT2012-15",
                          "year":  2012,
                          "page":  33,
                          "type":  "choice",
                          "stem":  "当凸轮机构的从动件推程按等加速等减速规律运动时，推程开始和结束位置______。",
                          "options":  [
                                          "A. 存在刚性冲击",
                                          "B. 存在柔性冲击",
                                          "C. 存在冲击",
                                          "D. 存在刚性或柔性冲击"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 凸轮机构",
                          "why":  "等加速等减速加速度有限突变，产生柔性冲击。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 33 · 原卷图 4be3403c（读图转录）",
                          "img":  "4be3403c",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2012-16",
                          "year":  2012,
                          "page":  33,
                          "type":  "choice",
                          "stem":  "斜齿圆柱齿轮的标准模数和标准压力角在______上。",
                          "options":  [
                                          "A. 端面",
                                          "B. 轴面",
                                          "C. 主平面",
                                          "D. 法面"
                                      ],
                          "answer":  "D",
                          "kp":  "#M01 齿轮几何",
                          "why":  "斜齿轮标准值取在法面。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 33 · 原卷图 4be3403c（读图转录）",
                          "img":  "4be3403c",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2012-17",
                          "year":  2012,
                          "page":  33,
                          "type":  "choice",
                          "stem":  "一对渐开线齿轮连续传动的条件是______。",
                          "options":  [
                                          "A. εα\u003e1",
                                          "B. εα=1",
                                          "C. εα\u003c1"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "重合度大于1才能连续传动。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 33 · 原卷图 4be3403c（读图转录）",
                          "img":  "4be3403c",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "ZT2012-18",
                          "year":  2012,
                          "page":  33,
                          "type":  "choice",
                          "stem":  "槽轮机构的主动件在工作中是作______运动的。",
                          "options":  [
                                          "A. 往复摆动",
                                          "B. 等速旋转"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 间歇运动机构",
                          "why":  "槽轮机构主动件为拨盘，作连续等速转动。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 33 · 原卷图 4be3403c（读图转录）",
                          "img":  "4be3403c",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M05 间歇运动机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 间歇运动机构"
                                   ]
                      },
                      {
                          "id":  "ZT2012-19",
                          "year":  2012,
                          "page":  34,
                          "type":  "choice",
                          "stem":  "螺栓的材料性能等级标成6.8级，其数字6.8代表______。",
                          "options":  [
                                          "A. 对螺栓材料的强度要求",
                                          "B. 对螺栓的制造精度要求",
                                          "C. 对螺栓材料的刚度要求",
                                          "D. 对螺栓材料的耐腐蚀性要求"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 螺纹联接",
                          "why":  "6.8 表示抗拉强度与屈强比，属强度要求。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 34 · 原卷图 8ed77793（读图转录）",
                          "img":  "8ed77793",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2012-20",
                          "year":  2012,
                          "page":  34,
                          "type":  "choice",
                          "stem":  "悬置螺母的主要作用是______。",
                          "options":  [
                                          "A. 作为联接的防松装置",
                                          "B. 减小螺栓系统的刚度",
                                          "C. 使螺母中各圈螺纹受力较均匀",
                                          "D. 防止螺栓受弯曲载荷"
                                      ],
                          "answer":  "C",
                          "kp":  "#M04 螺纹联接",
                          "why":  "悬置螺母使各圈螺纹牙受力趋于均匀。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 34 · 原卷图 8ed77793（读图转录）",
                          "img":  "8ed77793",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2012-21",
                          "year":  2012,
                          "page":  34,
                          "type":  "choice",
                          "stem":  "对于连接用螺纹，主要要求连接可靠，自锁性能好，故常选用______。",
                          "options":  [
                                          "A. 升角小，单线三角形螺纹",
                                          "B. 升角大，双线三角形螺纹",
                                          "C. 升角小，单线梯形螺纹",
                                          "D. 升角大，双线矩形螺纹"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 螺纹联接",
                          "why":  "单线三角形螺纹升角小，自锁性好。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 34 · 原卷图 8ed77793（读图转录）",
                          "img":  "8ed77793",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2012-22",
                          "year":  2012,
                          "page":  34,
                          "type":  "choice",
                          "stem":  "在设计闭式硬齿面齿轮传动中，直径一定时应取较少的齿数，使模数增大以______。",
                          "options":  [
                                          "A. 提高齿面接触强度",
                                          "B. 提高轮齿的抗弯曲疲劳强度",
                                          "C. 减少加工切削量，提高生产率",
                                          "D. 提高抗塑性变形能力"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 齿轮强度",
                          "why":  "模数增大提高齿根弯曲强度。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 34 · 原卷图 8ed77793（读图转录）",
                          "img":  "8ed77793",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M01 齿轮强度",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮强度"
                                   ]
                      },
                      {
                          "id":  "ZT2012-23",
                          "year":  2012,
                          "page":  34,
                          "type":  "choice",
                          "stem":  "一对圆柱齿轮，通常把小齿轮的齿宽做得比大齿轮宽一些，其主要原因是______。",
                          "options":  [
                                          "A. 使传动平稳",
                                          "B. 提高传动效率",
                                          "C. 提高齿面接触强度",
                                          "D. 便于安装，保证接触线长度"
                                      ],
                          "answer":  "D",
                          "kp":  "#M01 齿轮设计",
                          "why":  "小轮略宽可补偿装配误差，保证全齿宽接触。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 34 · 原卷图 8ed77793（读图转录）",
                          "img":  "8ed77793",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M01 齿轮设计",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮设计"
                                   ]
                      },
                      {
                          "id":  "ZT2012-24",
                          "year":  2012,
                          "page":  34,
                          "type":  "choice",
                          "stem":  "蜗杆特性系数的定义是______。计算蜗杆传动的传动比时，公式______是错误的。",
                          "options":  [
                                          "A. q=d1/m，i=d2/d1",
                                          "B. q=d1/m，i=n2/n1",
                                          "C. q=d1m，i=ω2/ω1",
                                          "D. q=d1m，i=z2/z1"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "传动比不等于直径比 d2/d1，故 A 组中 i 公式错误。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 34 · 原卷图 8ed77793（读图转录）",
                          "img":  "8ed77793",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2012-25",
                          "year":  2012,
                          "page":  35,
                          "type":  "choice",
                          "stem":  "用______计算蜗杆传动比是错误的。",
                          "options":  [
                                          "A. i=ω1/ω2",
                                          "B. i=z2/z1",
                                          "C. i=n1/n2",
                                          "D. i=d1/d2"
                                      ],
                          "answer":  "D",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "蜗杆传动 i=z2/z1，不能用直径比。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 35 · 原卷图 36957575（读图转录）",
                          "img":  "36957575",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2012-26",
                          "year":  2012,
                          "page":  35,
                          "type":  "choice",
                          "stem":  "链条由于静强度不够而被拉断的现象，多发生在______情况下。",
                          "options":  [
                                          "A. 低速重载",
                                          "B. 高速重载",
                                          "C. 高速轻载",
                                          "D. 低速轻载"
                                      ],
                          "answer":  "A",
                          "kp":  "#M06 链传动",
                          "why":  "低速重载时链条静强度不足易拉断。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 35 · 原卷图 36957575（读图转录）",
                          "img":  "36957575",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "ZT2012-27",
                          "year":  2012,
                          "page":  35,
                          "type":  "choice",
                          "stem":  "采用______的措施不能有效地改善轴的刚度。",
                          "options":  [
                                          "A. 改用高强度合金钢",
                                          "B. 改变轴的直径",
                                          "C. 改变轴的支承位置",
                                          "D. 改变轴的结构"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 轴",
                          "why":  "刚度取决于弹性模量与截面，换材料提高强度而非刚度。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 35 · 原卷图 36957575（读图转录）",
                          "img":  "36957575",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2012-28",
                          "year":  2012,
                          "page":  35,
                          "type":  "choice",
                          "stem":  "在径向滑动轴承中，采用可倾瓦的目的在于______。",
                          "options":  [
                                          "A. 便于装配",
                                          "B. 使轴承具有自动调位能力",
                                          "C. 提高轴承的稳定性",
                                          "D. 增加润滑油流量，降低温升"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 轴承",
                          "why":  "可倾瓦提高油膜稳定性、抑制油膜振荡。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 35 · 原卷图 36957575（读图转录）",
                          "img":  "36957575",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2012-29",
                          "year":  2012,
                          "page":  35,
                          "type":  "choice",
                          "stem":  "在滑动轴承轴瓦或轴承衬的材料中，承载能力最高的是______。",
                          "options":  [
                                          "A. 灰铸铁",
                                          "B. 巴氏合金",
                                          "C. 铅锡青铜",
                                          "D. 铅青铜等铜基轴承合金"
                                      ],
                          "answer":  "D",
                          "kp":  "#M02 轴承",
                          "why":  "铜基轴承合金强度高，承载能力最高。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 35 · 原卷图 36957575（读图转录）",
                          "img":  "36957575",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2012-30",
                          "year":  2012,
                          "page":  35,
                          "type":  "choice",
                          "stem":  "采用三油楔或多油楔滑动轴承的目的在于______。",
                          "options":  [
                                          "A. 提高承载能力",
                                          "B. 增加润滑油油量",
                                          "C. 提高轴承的稳定性",
                                          "D. 减少摩擦发热"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 轴承",
                          "why":  "多油楔提高轴承运转稳定性。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2012 年真题卷 · 印刷页 35 · 原卷图 36957575（读图转录）",
                          "img":  "36957575",
                          "sub":  "专业课",
                          "topic":  "真题2012·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2013-01",
                          "year":  2013,
                          "page":  38,
                          "type":  "choice",
                          "stem":  "普通平键的截面尺寸是根据______按标准选择的。",
                          "options":  [
                                          "A. 传递转矩的大小",
                                          "B. 轮毂的长度",
                                          "C. 轴的直径"
                                      ],
                          "answer":  "C",
                          "kp":  "#M03 键联接",
                          "why":  "平键 b×h 按轴径查标准选取。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 38 · 原卷图 ea2f9536（读图转录）",
                          "img":  "ea2f9536",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M03 键联接",
                          "df":  100,
                          "tags":  [
                                       "#M03 键联接"
                                   ]
                      },
                      {
                          "id":  "ZT2013-02",
                          "year":  2013,
                          "page":  38,
                          "type":  "choice",
                          "stem":  "V带传动设计中，限制小带轮的最小直径主要是为了______。",
                          "options":  [
                                          "A. 限制弯曲应力",
                                          "B. 使结构紧凑",
                                          "C. 限制带轮包角"
                                      ],
                          "answer":  "A",
                          "kp":  "#M06 带传动",
                          "why":  "小轮直径过小使弯曲应力过大、带易疲劳。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 38 · 原卷图 ea2f9536（读图转录）",
                          "img":  "ea2f9536",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2013-03",
                          "year":  2013,
                          "page":  38,
                          "type":  "choice",
                          "stem":  "为实现间歇运动，可选用______。",
                          "options":  [
                                          "A. 螺旋机构",
                                          "B. 槽轮机构",
                                          "C. 带传动机构"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 间歇运动机构",
                          "why":  "槽轮机构是典型间歇运动机构。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 38 · 原卷图 ea2f9536（读图转录）",
                          "img":  "ea2f9536",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M05 间歇运动机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 间歇运动机构"
                                   ]
                      },
                      {
                          "id":  "ZT2013-04",
                          "year":  2013,
                          "page":  38,
                          "type":  "choice",
                          "stem":  "角接触球轴承和圆锥滚子轴承的轴向承载能力随接触角的增大而______。",
                          "options":  [
                                          "A. 增大",
                                          "B. 减少",
                                          "C. 不变"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 轴承",
                          "why":  "接触角越大，可承受的轴向载荷越大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 38 · 原卷图 ea2f9536（读图转录）",
                          "img":  "ea2f9536",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ],
                          "note":  "11-10 核字：原卷第 4 题选项 C 印作「不便」（疑为「不变」误印），库内作「不变」属**已订正**；答案 A「增大」不受影响。保留库内写法并留痕，不静默订正。"
                      },
                      {
                          "id":  "ZT2013-05",
                          "year":  2013,
                          "page":  38,
                          "type":  "choice",
                          "stem":  "链传动中，链条的节数最好为______，而链轮齿数为______。",
                          "options":  [
                                          "A. 奇数，偶数",
                                          "B. 偶数，奇数",
                                          "C. 5的倍数，偶数"
                                      ],
                          "answer":  "B",
                          "kp":  "#M06 链传动",
                          "why":  "链条偶数节、链轮奇数齿以均匀磨损。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 38 · 原卷图 ea2f9536（读图转录）",
                          "img":  "ea2f9536",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "ZT2013-06",
                          "year":  2013,
                          "page":  38,
                          "type":  "choice",
                          "stem":  "在从动件运动规律不变的情况下，若缩小凸轮基圆半径，则压力角______。",
                          "options":  [
                                          "A. 不变",
                                          "B. 变小",
                                          "C. 变大"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 凸轮机构",
                          "why":  "基圆半径减小则压力角增大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 38 · 原卷图 ea2f9536（读图转录）",
                          "img":  "ea2f9536",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2013-07",
                          "year":  2013,
                          "page":  38,
                          "type":  "choice",
                          "stem":  "既传递转矩，又传递弯矩的轴称为______。",
                          "options":  [
                                          "A. 心轴",
                                          "B. 转轴",
                                          "C. 传动轴"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴",
                          "why":  "同时受弯扭的轴为转轴。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 38 · 原卷图 ea2f9536（读图转录）",
                          "img":  "ea2f9536",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2013-08",
                          "year":  2013,
                          "page":  38,
                          "type":  "choice",
                          "stem":  "联接用的螺纹一般采用______螺纹，而传动用的螺纹一般采用______螺纹。",
                          "options":  [
                                          "A. 三角形，梯形",
                                          "B. 梯形，三角形",
                                          "C. 其它，三角形"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 螺纹联接",
                          "why":  "联接用三角形自锁好，传动用梯形效率高。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 38 · 原卷图 ea2f9536（读图转录）",
                          "img":  "ea2f9536",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2013-09",
                          "year":  2013,
                          "page":  39,
                          "type":  "choice",
                          "stem":  "非液体摩擦滑动轴承设计中，限制压强 p≤[p] 的目的是______。",
                          "options":  [
                                          "A. 防止因压力过大而发热",
                                          "B. 防止润滑油挤出，轴瓦过度磨损",
                                          "C. 防止因摩擦力矩大而起动难"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴承",
                          "why":  "限制比压防止油被挤出造成过度磨损。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 39 · 原卷图 43d19395（读图转录）",
                          "img":  "43d19395",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2013-10",
                          "year":  2013,
                          "page":  39,
                          "type":  "choice",
                          "stem":  "在铰链四杆机构中，若最短杆与最长杆长度之和小于其余两杆长度之和，则为了获得双曲柄机构，其机架应取______。",
                          "options":  [
                                          "A. 最短杆的相邻杆",
                                          "B. 最短杆的相对杆",
                                          "C. 最短杆"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "取最短杆为机架得双曲柄机构。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 39 · 原卷图 43d19395（读图转录）",
                          "img":  "43d19395",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2013-11",
                          "year":  2013,
                          "page":  39,
                          "type":  "choice",
                          "stem":  "一对钢制标准齿轮啮合传动时，两轮的σH1与σH2______，σF1与σF2______。",
                          "options":  [
                                          "A. 相等，不相等",
                                          "B. 相等，不一定",
                                          "C. 不一定，不一定"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮强度",
                          "why":  "接触应力相等，弯曲应力因齿数不同而不等。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 39 · 原卷图 43d19395（读图转录）",
                          "img":  "43d19395",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M01 齿轮强度",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮强度"
                                   ]
                      },
                      {
                          "id":  "ZT2013-12",
                          "year":  2013,
                          "page":  39,
                          "type":  "choice",
                          "stem":  "当两轴具有一定的相对偏移量，且载荷较平稳，要求传递较大扭矩时用______。",
                          "options":  [
                                          "A. 齿轮联轴器",
                                          "B. 凸缘联轴器",
                                          "C. 弹性柱销联轴器"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 联轴器与离合器",
                          "why":  "齿式联轴器可补偿偏移并传递大转矩。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 39 · 原卷图 43d19395（读图转录）",
                          "img":  "43d19395",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M02 联轴器与离合器",
                          "df":  100,
                          "tags":  [
                                       "#M02 联轴器与离合器"
                                   ]
                      },
                      {
                          "id":  "ZT2013-13",
                          "year":  2013,
                          "page":  39,
                          "type":  "choice",
                          "stem":  "曲柄摇杆机构中，当取______为原动件时会出现死点位置。",
                          "options":  [
                                          "A. 曲柄",
                                          "B. 摇杆"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "摇杆为原动件时曲柄与连杆共线处为死点。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 39 · 原卷图 43d19395（读图转录）",
                          "img":  "43d19395",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ],
                          "note":  "11-10 哈尼逐字核字：2013 原卷第 13 题**只有 A/B 两个选项**（不是漏印第三项），库内原有 C「连杆」为无据增补，按真题红线删除；答案 B（摇杆）不变。"
                      },
                      {
                          "id":  "ZT2013-14",
                          "year":  2013,
                          "page":  39,
                          "type":  "choice",
                          "stem":  "蜗杆传动的效率一般较其它传动低，这主要是因为在蜗杆传动中______。",
                          "options":  [
                                          "A. 蜗轮速度很低",
                                          "B. 蜗杆头数很少",
                                          "C. 蜗轮蜗杆的相对滑动速度很大"
                                      ],
                          "answer":  "C",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "相对滑动速度大，摩擦损失大效率低。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 39 · 原卷图 43d19395（读图转录）",
                          "img":  "43d19395",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2013-15",
                          "year":  2013,
                          "page":  39,
                          "type":  "choice",
                          "stem":  "设计滚子推杆盘形凸轮廓线时，其最小曲率半径 ρmin______滚子半径 rr 时，凸轮的实际廓线为一平滑曲线。",
                          "options":  [
                                          "A. 大于",
                                          "B. 小于",
                                          "C. 等于"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 凸轮机构",
                          "why":  "ρmin\u003err 才不会出现尖点或交叉。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 39 · 原卷图 43d19395（读图转录）",
                          "img":  "43d19395",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ],
                          "note":  "11-10 跨卷同题留痕：三卷考同一条件 r_r＜ρ_min，但**问法主语与选项顺序各异，答案字母跟着变**。「2013 卷第 15 题问「ρmin____rr」，选项序 A 大于／B 小于／C 等于 ⇒ 答案 **A（大于）**。」库内本条答案经逐字核字确认无误；出卷／背诵一律照抄本卷选项，禁止按「同题」换算字母。"
                      },
                      {
                          "id":  "TK2013-01",
                          "year":  2013,
                          "page":  39,
                          "type":  "fill",
                          "stem":  "根据滚动轴承代号，分别写出相应的含义：7312 表示轴承类型____，内径尺寸____mm；30220 表示轴承类型____，内径尺寸____mm。",
                          "options":  [

                                      ],
                          "answer":  "角接触球轴承，内径60mm；圆锥滚子轴承，内径100mm",
                          "kp":  "#M02 轴承代号",
                          "why":  "7312 内径12×5=60；30220 内径20×5=100。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 39 · 原卷图 43d19395（读图转录）",
                          "img":  "43d19395",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M02 轴承代号",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承代号"
                                   ]
                      },
                      {
                          "id":  "TK2013-02",
                          "year":  2013,
                          "page":  40,
                          "type":  "fill",
                          "stem":  "链传动中的动载荷，随着____、____增大而增大。",
                          "options":  [

                                      ],
                          "answer":  "链节距 p；链速（转速）",
                          "kp":  "#M06 链传动",
                          "why":  "节距大、速度高则多边形效应动载荷大。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 40 · 原卷图 c98b6f3b（读图转录）",
                          "img":  "c98b6f3b",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "TK2013-03",
                          "year":  2013,
                          "page":  40,
                          "type":  "fill",
                          "stem":  "带传动中，弹性滑动与打滑的区别是________。",
                          "options":  [

                                      ],
                          "answer":  "弹性滑动由带的弹性变形引起、不可避免；打滑由过载引起、可以避免",
                          "kp":  "#M06 带传动",
                          "why":  "两者成因与可否避免不同。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 40 · 原卷图 c98b6f3b（读图转录）",
                          "img":  "c98b6f3b",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "TK2013-04",
                          "year":  2013,
                          "page":  40,
                          "type":  "fill",
                          "stem":  "闭式软齿面齿轮传动，一般应按____强度进行设计，然后再校核____强度。",
                          "options":  [

                                      ],
                          "answer":  "齿面接触疲劳；齿根弯曲疲劳",
                          "kp":  "#M01 齿轮设计",
                          "why":  "软齿面先按接触强度定尺寸，再校核弯曲强度。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 40 · 原卷图 c98b6f3b（读图转录）",
                          "img":  "c98b6f3b",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M01 齿轮设计",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮设计"
                                   ]
                      },
                      {
                          "id":  "TK2013-05",
                          "year":  2013,
                          "page":  40,
                          "type":  "fill",
                          "stem":  "受轴向变载荷的紧螺栓联接，在工作载荷F和残余预紧力Qp不变的情况下，提高螺栓的疲劳强度可以减小____刚度及增加____刚度。",
                          "options":  [

                                      ],
                          "answer":  "螺栓；被联接件",
                          "kp":  "#M04 螺纹联接",
                          "why":  "减小螺栓刚度、增大被联接件刚度可降低应力幅。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2013 年真题卷 · 印刷页 40 · 原卷图 c98b6f3b（读图转录）",
                          "img":  "c98b6f3b",
                          "sub":  "专业课",
                          "topic":  "真题2013·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2014-01",
                          "year":  2014,
                          "page":  44,
                          "type":  "fill",
                          "stem":  "平面四杆机构共有____个速度瞬心，其中____个是绝对瞬心。",
                          "options":  [

                                      ],
                          "answer":  "6；3",
                          "kp":  "#M05 机构",
                          "why":  "四构件瞬心数 C(4,2)=6，与机架相关者3个为绝对瞬心。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 44 · 原卷图 63077edf（读图转录）",
                          "img":  "63077edf",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M05 机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构"
                                   ]
                      },
                      {
                          "id":  "TK2014-02",
                          "year":  2014,
                          "page":  44,
                          "type":  "fill",
                          "stem":  "螺纹联接的基本类型有____；____；____。",
                          "options":  [

                                      ],
                          "answer":  "螺栓联接；双头螺柱联接；螺钉联接（含紧定螺钉联接）",
                          "kp":  "#M04 螺纹联接",
                          "why":  "四种基本类型中紧定螺钉归螺钉类。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 44 · 原卷图 63077edf（读图转录）",
                          "img":  "63077edf",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2014-03",
                          "year":  2014,
                          "page":  44,
                          "type":  "fill",
                          "stem":  "对正常齿制的标准直齿圆柱齿轮，只要给出齿轮的____和____，即可计算出齿轮的几何尺寸。",
                          "options":  [

                                      ],
                          "answer":  "模数 m；齿数 z",
                          "kp":  "#M01 齿轮几何",
                          "why":  "标准齿轮几何尺寸由 m、z 完全确定。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 44 · 原卷图 63077edf（读图转录）",
                          "img":  "63077edf",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "TK2014-04",
                          "year":  2014,
                          "page":  44,
                          "type":  "fill",
                          "stem":  "用同一把刀具加工 m、Z、α 均相同的标准齿轮和变位齿轮，它们的分度圆、基圆和齿距均____。",
                          "options":  [

                                      ],
                          "answer":  "相同（相等）",
                          "kp":  "#M01 变位齿轮",
                          "why":  "变位不改变分度圆、基圆与齿距。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 44 · 原卷图 63077edf（读图转录）",
                          "img":  "63077edf",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M01 变位齿轮",
                          "df":  100,
                          "tags":  [
                                       "#M01 变位齿轮"
                                   ]
                      },
                      {
                          "id":  "TK2014-05",
                          "year":  2014,
                          "page":  44,
                          "type":  "fill",
                          "stem":  "对受轴向工作载荷作用的紧螺栓连接，当预紧力F\u0027和轴向工作载荷F一定时，为减小螺栓所受的总拉力F0，通常采用的方法是减小____的刚度或增大____的刚度。",
                          "options":  [

                                      ],
                          "answer":  "螺栓；被联接件",
                          "kp":  "#M04 螺纹联接",
                          "why":  "降低螺栓刚度、提高被联接件刚度使总拉力减小。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 44 · 原卷图 63077edf（读图转录）",
                          "img":  "63077edf",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2014-06",
                          "year":  2014,
                          "page":  44,
                          "type":  "fill",
                          "stem":  "动平衡了的刚性回转构件，____静平衡。",
                          "options":  [

                                      ],
                          "answer":  "一定（必然）满足",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "动平衡条件下合力已为零，静平衡自然满足。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 44 · 原卷图 63077edf（读图转录）",
                          "img":  "63077edf",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "TK2014-07",
                          "year":  2014,
                          "page":  44,
                          "type":  "fill",
                          "stem":  "在齿轮传动中，主动轮所受的圆周力Ft1与其回转方向____，而从动轮所受的圆周力Ft2与其回转方向____。",
                          "options":  [

                                      ],
                          "answer":  "相反；相同",
                          "kp":  "#M01 齿轮受力",
                          "why":  "主动轮阻力与转向相反，从动轮驱动力与转向相同。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 44 · 原卷图 63077edf（读图转录）",
                          "img":  "63077edf",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M01 齿轮受力",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮受力"
                                   ]
                      },
                      {
                          "id":  "TK2014-08",
                          "year":  2014,
                          "page":  44,
                          "type":  "fill",
                          "stem":  "材料、热处理及几何参数均相同的三种齿轮（即直齿圆柱齿轮、斜齿圆柱齿轮和直齿锥齿轮）传动中，承载能力最高的是____传动；承载能力最低的是____。",
                          "options":  [

                                      ],
                          "answer":  "斜齿圆柱齿轮；直齿锥齿轮",
                          "kp":  "#M01 齿轮传动",
                          "why":  "斜齿轮重合度大承载最高，锥齿轮作用在悬臂、承载最低。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 44 · 原卷图 63077edf（读图转录）",
                          "img":  "63077edf",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M01 齿轮传动",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮传动"
                                   ]
                      },
                      {
                          "id":  "TK2014-09",
                          "year":  2014,
                          "page":  44,
                          "type":  "fill",
                          "stem":  "在设计闭式硬齿面齿轮传动中，当直径d1一定时，应选取较少的齿数，使模数m增大以____强度。",
                          "options":  [

                                      ],
                          "answer":  "提高齿根弯曲疲劳",
                          "kp":  "#M01 齿轮强度",
                          "why":  "模数增大提高齿根弯曲强度。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 44 · 原卷图 63077edf（读图转录）",
                          "img":  "63077edf",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M01 齿轮强度",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮强度"
                                   ]
                      },
                      {
                          "id":  "TK2014-10",
                          "year":  2014,
                          "page":  44,
                          "type":  "fill",
                          "stem":  "阿基米德蜗杆和蜗轮在中间平面相当于____与____相啮合。因此蜗杆的____模数应与蜗轮的____模数相等。",
                          "options":  [

                                      ],
                          "answer":  "齿条；齿轮；轴向；端面",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "中间平面内蜗杆当量齿条，轴向模数等于蜗轮端面模数。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 44 · 原卷图 63077edf（读图转录）",
                          "img":  "63077edf",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "TK2014-11",
                          "year":  2014,
                          "page":  44,
                          "type":  "fill",
                          "stem":  "计算机构自由度时，应注意的三种情况是____；____；____。",
                          "options":  [

                                      ],
                          "answer":  "复合铰链；局部自由度；虚约束",
                          "kp":  "#M05 机构自由度",
                          "why":  "自由度计算三大特殊结构。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 44 · 原卷图 63077edf（读图转录）",
                          "img":  "63077edf",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M05 机构自由度",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构自由度"
                                   ]
                      },
                      {
                          "id":  "ZT2014-01",
                          "year":  2014,
                          "page":  45,
                          "type":  "choice",
                          "stem":  "点或线接触的运动副称为低副。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 机构",
                          "why":  "点线接触为高副。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 45 · 原卷图 e91b9f09（读图转录）",
                          "img":  "e91b9f09",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M05 机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构"
                                   ]
                      },
                      {
                          "id":  "ZT2014-02",
                          "year":  2014,
                          "page":  45,
                          "type":  "choice",
                          "stem":  "机器是构件之间具有确定的相对运动，并能完成有用的机械功或实现能量转换的构件的组合。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 机构",
                          "why":  "机器的定义包含确定运动与能量/功转换。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 45 · 原卷图 e91b9f09（读图转录）",
                          "img":  "e91b9f09",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M05 机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构"
                                   ]
                      },
                      {
                          "id":  "ZT2014-03",
                          "year":  2014,
                          "page":  45,
                          "type":  "choice",
                          "stem":  "通过离合器联接的两轴可在工作中随时分离。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 联轴器与离合器",
                          "why":  "离合器可随时分离接合，联轴器不能。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 45 · 原卷图 e91b9f09（读图转录）",
                          "img":  "e91b9f09",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M02 联轴器与离合器",
                          "df":  100,
                          "tags":  [
                                       "#M02 联轴器与离合器"
                                   ]
                      },
                      {
                          "id":  "ZT2014-04",
                          "year":  2014,
                          "page":  45,
                          "type":  "choice",
                          "stem":  "凸轮轮廓线上某点的压力角，是该点的切线方向与速度方向之间的夹角。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 凸轮机构",
                          "why":  "压力角是法线方向与速度方向的夹角。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 45 · 原卷图 e91b9f09（读图转录）",
                          "img":  "e91b9f09",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2014-06",
                          "year":  2014,
                          "page":  45,
                          "type":  "choice",
                          "stem":  "同一模数和同一压力角，但不同齿数的两个齿轮，可以使用一把齿轮刀具进行加工。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮加工",
                          "why":  "刀具按 m、α 选，与齿数无关。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 45 · 原卷图 e91b9f09（读图转录）",
                          "img":  "e91b9f09",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M01 齿轮加工",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮加工"
                                   ]
                      },
                      {
                          "id":  "ZT2014-07",
                          "year":  2014,
                          "page":  45,
                          "type":  "choice",
                          "stem":  "曲柄的极位夹角θ越大，机构的急回特性也越显著。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "K=(180+θ)/(180-θ)，θ增大急回更显著。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 45 · 原卷图 e91b9f09（读图转录）",
                          "img":  "e91b9f09",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2014-08",
                          "year":  2014,
                          "page":  45,
                          "type":  "choice",
                          "stem":  "压力角越大，则机构传力性能越差。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "压力角大则有效分力小、传力差。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 45 · 原卷图 e91b9f09（读图转录）",
                          "img":  "e91b9f09",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2014-10",
                          "year":  2014,
                          "page":  45,
                          "type":  "choice",
                          "stem":  "刚性转子的许用不平衡量可用质径积或偏心距表示。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "许用不平衡量两种等效表达。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 45 · 原卷图 e91b9f09（读图转录）",
                          "img":  "e91b9f09",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "ZT2014-11",
                          "year":  2014,
                          "page":  45,
                          "type":  "choice",
                          "stem":  "平面四杆机构中，如果最短杆与最长杆的长度之和小于或等于其余两杆长度之和，若最短杆是机架，这个机构叫做______。",
                          "options":  [
                                          "A. 曲柄摇杆机构",
                                          "B. 双摇杆机构",
                                          "C. 双曲柄机构"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "最短杆为机架得双曲柄机构。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 45 · 原卷图 e91b9f09（读图转录）",
                          "img":  "e91b9f09",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ],
                          "note":  "11-10 核字：原卷选择第 1 题 A 印「曲柄振杆机构」、B 印「双探杆机构」（均为误印），库内已订正为「曲柄摇杆机构」「双摇杆机构」；答案 C（双曲柄机构）不受影响。保留订正并留痕。"
                      },
                      {
                          "id":  "TK2014-12",
                          "year":  2014,
                          "page":  45,
                          "type":  "fill",
                          "stem":  "蜗杆的旋向应与蜗轮的旋向____。",
                          "options":  [

                                      ],
                          "answer":  "相同",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "蜗杆蜗轮旋向相同才能正确啮合。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 45 · 原卷图 e91b9f09（读图转录）",
                          "img":  "e91b9f09",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "TK2014-13",
                          "year":  2014,
                          "page":  45,
                          "type":  "fill",
                          "stem":  "带传动中，传动带在带轮上的滑动可分为____和____两种情况，其中____是带传动正常工作时所不允许的。",
                          "options":  [

                                      ],
                          "answer":  "弹性滑动；打滑；打滑",
                          "kp":  "#M06 带传动",
                          "why":  "弹性滑动正常存在，打滑属失效。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 45 · 原卷图 e91b9f09（读图转录）",
                          "img":  "e91b9f09",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "TK2014-14",
                          "year":  2014,
                          "page":  45,
                          "type":  "fill",
                          "stem":  "选择滑动轴承所用的润滑油时，对液体润滑轴承主要考虑润滑油的____，对不完全液体润滑轴承主要考虑润滑油的____。",
                          "options":  [

                                      ],
                          "answer":  "粘度；粘度（油性）",
                          "kp":  "#M02 轴承",
                          "why":  "两者均以粘度为选择主指标，后者还看油性。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 45 · 原卷图 e91b9f09（读图转录）",
                          "img":  "e91b9f09",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "TK2014-15",
                          "year":  2014,
                          "page":  45,
                          "type":  "fill",
                          "stem":  "凸轮机构中，____运动规律有刚性冲击，____运动规律有柔性冲击，____运动规律无冲击。",
                          "options":  [

                                      ],
                          "answer":  "等速；等加速等减速；正弦加速度（摆线）",
                          "kp":  "#M05 凸轮机构",
                          "why":  "三种运动规律的冲击特性。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 45 · 原卷图 e91b9f09（读图转录）",
                          "img":  "e91b9f09",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2014-12",
                          "year":  2014,
                          "page":  46,
                          "type":  "choice",
                          "stem":  "现要加工两个正常齿制渐开线标准直齿圆柱齿轮，齿轮1：m1=2mm，Z1=50；齿轮2：m2=4mm，Z2=25。这两只齿轮______加工。",
                          "options":  [
                                          "A. 可用同一把铣刀",
                                          "B. 可用同一把滚刀",
                                          "C. 不能用同一把刀具"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 齿轮加工",
                          "why":  "模数不同，刀具按模数选，不能共用。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 46 · 原卷图 291ca208（读图转录）",
                          "img":  "291ca208",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M01 齿轮加工",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮加工"
                                   ],
                          "note":  "11-10 核字：原卷选择第 2 题齿轮 2 的模数印作「m₁＝4mm」（应为 m₂），库内题干已订正为 m2=4mm；答案 C（不能用同一把刀具）不受影响。保留订正并留痕。"
                      },
                      {
                          "id":  "ZT2014-13",
                          "year":  2014,
                          "page":  46,
                          "type":  "choice",
                          "stem":  "一般来说，______更适合于较高的转速下工作。",
                          "options":  [
                                          "A. 滚子轴承",
                                          "B. 向心球轴承",
                                          "C. 推力球轴承"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴承",
                          "why":  "球轴承极限转速高，适合高转速。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 46 · 原卷图 291ca208（读图转录）",
                          "img":  "291ca208",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2014-14",
                          "year":  2014,
                          "page":  46,
                          "type":  "choice",
                          "stem":  "齿面的接触疲劳强度设计准则是以不产生______破坏为前提建立起来的。",
                          "options":  [
                                          "A. 疲劳点蚀",
                                          "B. 磨损",
                                          "C. 胶合"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮失效",
                          "why":  "接触疲劳对应点蚀。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 46 · 原卷图 291ca208（读图转录）",
                          "img":  "291ca208",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M01 齿轮失效",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮失效"
                                   ]
                      },
                      {
                          "id":  "ZT2014-15",
                          "year":  2014,
                          "page":  46,
                          "type":  "choice",
                          "stem":  "采用普通螺栓连接的凸缘联轴器，在传递转矩时______。",
                          "options":  [
                                          "A. 螺栓与螺栓孔配合面受挤压",
                                          "B. 螺栓受拉伸与扭转作用",
                                          "C. 螺栓同时受剪切与挤压"
                                      ],
                          "answer":  "B",
                          "kp":  "#M04 螺纹联接",
                          "why":  "普通螺栓靠预紧产生摩擦传矩，螺栓受拉与拧紧扭转。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 46 · 原卷图 291ca208（读图转录）",
                          "img":  "291ca208",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2014-16",
                          "year":  2014,
                          "page":  46,
                          "type":  "choice",
                          "stem":  "采用螺纹联接时，若被联接件厚度较大，且材料较软，强度较低，需要经常装拆的情况下，一般宜采用______。",
                          "options":  [
                                          "A. 螺栓联接",
                                          "B. 双头螺柱联接",
                                          "C. 紧定螺钉联接"
                                      ],
                          "answer":  "B",
                          "kp":  "#M04 螺纹联接",
                          "why":  "经常装拆且孔不宜攻螺纹时用双头螺柱。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 46 · 原卷图 291ca208（读图转录）",
                          "img":  "291ca208",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2014-17",
                          "year":  2014,
                          "page":  46,
                          "type":  "choice",
                          "stem":  "按初估轴直径公式 d≥C(P/n)^(1/3) 计算出的直径，通常作为阶梯轴的______的尺寸。",
                          "options":  [
                                          "A. 最大处直径",
                                          "B. 轴中间段直径",
                                          "C. 最小处直径"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 轴",
                          "why":  "按扭转估算的是轴的最小直径。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 46 · 原卷图 291ca208（读图转录）",
                          "img":  "291ca208",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2014-18",
                          "year":  2014,
                          "page":  46,
                          "type":  "choice",
                          "stem":  "滚动轴承轴向预紧的目的是______。",
                          "options":  [
                                          "A. 提高轴承的旋转精度",
                                          "B. 提高轴承的承载能力",
                                          "C. 降低轴承的运转噪音"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 轴承",
                          "why":  "预紧消除游隙、提高旋转精度与刚度。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 46 · 原卷图 291ca208（读图转录）",
                          "img":  "291ca208",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2014-19",
                          "year":  2014,
                          "page":  46,
                          "type":  "choice",
                          "stem":  "曲柄连杆机构中以______为主动件时，会出现死点。",
                          "options":  [
                                          "A. 曲柄",
                                          "B. 连杆",
                                          "C. 摇杆"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "曲柄滑块以滑块（或连杆）为原动件时死点。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 46 · 原卷图 291ca208（读图转录）",
                          "img":  "291ca208",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ],
                          "note":  "11-10 待核（不改答案）：本机把 p46 原图按行投影裁放 2 倍＋灰度增强复核，**原卷题干确为「曲柄连杆机构」**（「连杆」二字清楚，非「摇杆」印糊），但选项 C 是「摇杆」⇒ **原卷自带的机构名与选项矛盾**，不是转录错误。按曲柄摇杆机构死点应选 C，按曲柄滑块机构选项里无滑块。库内答 B「连杆」无可靠定论 ⇒ 挂待核、不判分、不改库。p46 清晰件已由本机核掉，不再向主人索取。"
                      },
                      {
                          "id":  "ZT2014-20",
                          "year":  2014,
                          "page":  46,
                          "type":  "choice",
                          "stem":  "当分度圆直径一定时，在满足轮齿弯曲强度的条件下，尽可能选取______。",
                          "options":  [
                                          "A. 较多的齿数",
                                          "B. 较大的模数",
                                          "C. 较宽的齿宽"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮设计",
                          "why":  "d 一定时齿数多则重合度大、传动平稳。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2014 年真题卷 · 印刷页 46 · 原卷图 291ca208（读图转录）",
                          "img":  "291ca208",
                          "sub":  "专业课",
                          "topic":  "真题2014·#M01 齿轮设计",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮设计"
                                   ]
                      },
                      {
                          "id":  "TK2015-01",
                          "year":  2015,
                          "page":  49,
                          "type":  "fill",
                          "stem":  "凸轮机构中，凸轮基圆半径愈____，压力角愈____，机构传动性能愈好。",
                          "options":  [

                                      ],
                          "answer":  "大；小",
                          "kp":  "#M05 凸轮机构",
                          "why":  "基圆大则压力角小，传动性能好。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 49 · 原卷图 7024e9da（读图转录）",
                          "img":  "7024e9da",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "TK2015-02",
                          "year":  2015,
                          "page":  49,
                          "type":  "fill",
                          "stem":  "螺纹的公称直径是指它的____，螺纹“M12×1.5”的含义为____。",
                          "options":  [

                                      ],
                          "answer":  "大径（外径）；公称直径12mm、螺距1.5mm的单线细牙普通螺纹",
                          "kp":  "#M04 螺纹联接",
                          "why":  "公称直径为大径，M12×1.5 为细牙螺纹。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 49 · 原卷图 7024e9da（读图转录）",
                          "img":  "7024e9da",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2015-03",
                          "year":  2015,
                          "page":  49,
                          "type":  "fill",
                          "stem":  "国标规定，三角带有____七种类型，代号\u0027B2240\u0027表示____。",
                          "options":  [

                                      ],
                          "answer":  "Y、Z、A、B、C、D、E；B型、基准长度2240mm",
                          "kp":  "#M06 带传动",
                          "why":  "V带七种型号，B2240 为B型长2240mm。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 49 · 原卷图 7024e9da（读图转录）",
                          "img":  "7024e9da",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "TK2015-04",
                          "year":  2015,
                          "page":  49,
                          "type":  "fill",
                          "stem":  "一标准直齿圆柱齿轮的齿距为15.7mm，齿顶圆直径为400mm，则该齿轮的齿数为____。",
                          "options":  [

                                      ],
                          "answer":  "78",
                          "kp":  "#M01 齿轮几何",
                          "why":  "p=πm→m=5；da=m(z+2)=400→z=78。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 49 · 原卷图 7024e9da（读图转录）",
                          "img":  "7024e9da",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "TK2015-05",
                          "year":  2015,
                          "page":  49,
                          "type":  "fill",
                          "stem":  "滚动轴承代号“6215”的含义是________。",
                          "options":  [

                                      ],
                          "answer":  "深沟球轴承，尺寸系列02，内径75mm",
                          "kp":  "#M02 轴承代号",
                          "why":  "6=深沟球，2=直径系列，15×5=75mm内径。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 49 · 原卷图 7024e9da（读图转录）",
                          "img":  "7024e9da",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M02 轴承代号",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承代号"
                                   ]
                      },
                      {
                          "id":  "TK2015-06",
                          "year":  2015,
                          "page":  49,
                          "type":  "fill",
                          "stem":  "转轴是指________，传动轴是指________。",
                          "options":  [

                                      ],
                          "answer":  "既受弯矩又受转矩的轴；只受转矩（不受弯矩）的轴",
                          "kp":  "#M02 轴",
                          "why":  "按受载分三类轴的定义。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 49 · 原卷图 7024e9da（读图转录）",
                          "img":  "7024e9da",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "TK2015-07",
                          "year":  2015,
                          "page":  49,
                          "type":  "fill",
                          "stem":  "键的剖面尺寸是由____确定的，而键长是由____确定的。",
                          "options":  [

                                      ],
                          "answer":  "轴的直径；轮毂长度",
                          "kp":  "#M03 键联接",
                          "why":  "b×h 由轴径定，长度按轮毂长取标准值。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 49 · 原卷图 7024e9da（读图转录）",
                          "img":  "7024e9da",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M03 键联接",
                          "df":  100,
                          "tags":  [
                                       "#M03 键联接"
                                   ]
                      },
                      {
                          "id":  "TK2015-08",
                          "year":  2015,
                          "page":  49,
                          "type":  "fill",
                          "stem":  "阿基米德蜗杆正确啮合的条件是________。",
                          "options":  [

                                      ],
                          "answer":  "蜗杆轴向模数等于蜗轮端面模数、蜗杆轴向压力角等于蜗轮端面压力角，且旋向相同",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "中间平面内当量齿条与齿轮啮合条件。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 49 · 原卷图 7024e9da（读图转录）",
                          "img":  "7024e9da",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "TK2015-09",
                          "year":  2015,
                          "page":  49,
                          "type":  "fill",
                          "stem":  "闭式软齿面齿轮传动的强度设计，首先按____强度条件计算，然后校核____强度。",
                          "options":  [

                                      ],
                          "answer":  "齿面接触疲劳；齿根弯曲疲劳",
                          "kp":  "#M01 齿轮设计",
                          "why":  "软齿面先接触后弯曲校核。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 49 · 原卷图 7024e9da（读图转录）",
                          "img":  "7024e9da",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M01 齿轮设计",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮设计"
                                   ]
                      },
                      {
                          "id":  "TK2015-10",
                          "year":  2015,
                          "page":  49,
                          "type":  "fill",
                          "stem":  "轮系通常分为____和____两种。",
                          "options":  [

                                      ],
                          "answer":  "定轴轮系；周转轮系",
                          "kp":  "#M01 轮系",
                          "why":  "按轴线是否固定分两类。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 49 · 原卷图 7024e9da（读图转录）",
                          "img":  "7024e9da",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M01 轮系",
                          "df":  100,
                          "tags":  [
                                       "#M01 轮系"
                                   ]
                      },
                      {
                          "id":  "TK2015-11",
                          "year":  2015,
                          "page":  49,
                          "type":  "fill",
                          "stem":  "闭式软齿面齿轮传动的设计准则是：________。",
                          "options":  [

                                      ],
                          "answer":  "按齿面接触疲劳强度设计，按齿根弯曲疲劳强度校核",
                          "kp":  "#M01 齿轮设计",
                          "why":  "软齿面主要失效为点蚀。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 49 · 原卷图 7024e9da（读图转录）",
                          "img":  "7024e9da",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M01 齿轮设计",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮设计"
                                   ]
                      },
                      {
                          "id":  "TK2015-12",
                          "year":  2015,
                          "page":  49,
                          "type":  "fill",
                          "stem":  "因为链传动________，因此适用于________速传动。",
                          "options":  [

                                      ],
                          "answer":  "无弹性滑动、平均传动比准确，但有多边形效应引起动载荷；低（中低）",
                          "kp":  "#M06 链传动",
                          "why":  "链传动宜低速，高速时动载荷大。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 49 · 原卷图 7024e9da（读图转录）",
                          "img":  "7024e9da",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "TK2015-13",
                          "year":  2015,
                          "page":  49,
                          "type":  "fill",
                          "stem":  "蜗轮蜗杆传动的中间平面是：________；在中间平面上，蜗轮蜗杆传动相当于________啮合传动。",
                          "options":  [

                                      ],
                          "answer":  "过蜗杆轴线并垂直于蜗轮轴线的平面；齿条与齿轮",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "中间平面内蜗杆当量齿条。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 49 · 原卷图 7024e9da（读图转录）",
                          "img":  "7024e9da",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "TK2015-14",
                          "year":  2015,
                          "page":  49,
                          "type":  "fill",
                          "stem":  "轴上零件的轴向固定方法有：________。",
                          "options":  [

                                      ],
                          "answer":  "轴肩（轴环）、套筒、圆螺母、弹性挡圈、轴端挡圈、紧定螺钉等",
                          "kp":  "#M02 轴",
                          "why":  "常用轴向固定方式列举。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 49 · 原卷图 7024e9da（读图转录）",
                          "img":  "7024e9da",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2015-01",
                          "year":  2015,
                          "page":  50,
                          "type":  "choice",
                          "stem":  "曲柄摇杆机构中，为提高机构的传力性能，应该______。",
                          "options":  [
                                          "A. 增大传动角 γ",
                                          "B. 减小传动角 γ",
                                          "C. 增大压力角 α"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "传动角越大有效分力越大、传力越好。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 50 · 原卷图 1ac7c82d（读图转录）",
                          "img":  "1ac7c82d",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2015-02",
                          "year":  2015,
                          "page":  50,
                          "type":  "choice",
                          "stem":  "曲柄摇杆机构中，摇杆为主动件时，______死点位置。",
                          "options":  [
                                          "A. 不存在",
                                          "B. 曲柄与连杆共线时为",
                                          "C. 摇杆与连杆共线时为"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "曲柄与连杆共线时传动角为零，出现死点。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 50 · 原卷图 1ac7c82d（读图转录）",
                          "img":  "1ac7c82d",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2015-03",
                          "year":  2015,
                          "page":  50,
                          "type":  "choice",
                          "stem":  "当导杆处于极限位置时，摆动导杆机构的导杆______与曲柄垂直。",
                          "options":  [
                                          "A. 一定",
                                          "B. 不一定",
                                          "C. 一定不"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "摆动导杆极限位置时曲柄与导杆垂直。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 50 · 原卷图 1ac7c82d（读图转录）",
                          "img":  "1ac7c82d",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2015-04",
                          "year":  2015,
                          "page":  50,
                          "type":  "choice",
                          "stem":  "滚压螺纹比车制螺纹______。",
                          "options":  [
                                          "A. 强度高，生产率低",
                                          "B. 强度低，生产率高",
                                          "C. 强度高，生产率高"
                                      ],
                          "answer":  "C",
                          "kp":  "#M04 螺纹制造",
                          "why":  "滚压使金属纤维连续、强度高且效率高。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 50 · 原卷图 1ac7c82d（读图转录）",
                          "img":  "1ac7c82d",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M04 螺纹制造",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹制造"
                                   ]
                      },
                      {
                          "id":  "ZT2015-05",
                          "year":  2015,
                          "page":  50,
                          "type":  "choice",
                          "stem":  "有单个紧螺栓连接，要求被连接件接合面不分离，已知螺栓与被连接件的刚度相同，螺栓的预紧力为F\u0027，当对连接施加轴向载荷，使螺栓的轴向工作载荷F与预紧力F\u0027相等时，则______。",
                          "options":  [
                                          "A. 被连接件发生分离，连接失效",
                                          "B. 被连接件将发生分离，连接不可靠",
                                          "C. 连接可靠，只要螺栓强度足够，可继续加载，直到轴向工作载荷F接近但小于预紧力F\u0027的两倍"
                                      ],
                          "answer":  "C",
                          "kp":  "#M04 螺纹联接",
                          "why":  "刚度相同时F=F\u0027仍有余压，可加载至F\u003c2F\u0027。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 50 · 原卷图 1ac7c82d（读图转录）",
                          "img":  "1ac7c82d",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2015-06",
                          "year":  2015,
                          "page":  50,
                          "type":  "choice",
                          "stem":  "普通螺栓联接的强度计算，主要是计算______。考虑拉伸和扭转的复合作用，应将拉伸载荷增大至原载荷______倍。",
                          "options":  [
                                          "A. 螺杆在螺纹部分的拉伸强度，1.3",
                                          "B. 螺纹工作面的挤压强度，1.3",
                                          "C. 螺纹部分的剪切强度，1"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 螺纹联接",
                          "why":  "按螺纹部分拉应力计算，乘1.3计入扭转。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 50 · 原卷图 1ac7c82d（读图转录）",
                          "img":  "1ac7c82d",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2015-15",
                          "year":  2015,
                          "page":  50,
                          "type":  "fill",
                          "stem":  "机构具有确定运动的条件是____。",
                          "options":  [

                                      ],
                          "answer":  "原动件数目等于机构自由度数",
                          "kp":  "#M05 机构自由度",
                          "why":  "原动件数=自由度数时运动确定。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 50 · 原卷图 1ac7c82d（读图转录）",
                          "img":  "1ac7c82d",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M05 机构自由度",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构自由度"
                                   ]
                      },
                      {
                          "id":  "ZT2015-09",
                          "year":  2015,
                          "page":  51,
                          "type":  "choice",
                          "stem":  "一对标准直齿圆柱齿轮，若z1=18，z2=72，则这对齿轮的弯曲应力______。",
                          "options":  [
                                          "A. σF1＞σF2",
                                          "B. σF1＜σF2",
                                          "C. σF1＝σF2"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮强度",
                          "why":  "齿数少齿形系数大，弯曲应力大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 51 · 原卷图 83e01c4c（读图转录）",
                          "img":  "83e01c4c",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M01 齿轮强度",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮强度"
                                   ]
                      },
                      {
                          "id":  "ZT2015-10",
                          "year":  2015,
                          "page":  51,
                          "type":  "choice",
                          "stem":  "______决定了从动件的运动规律。",
                          "options":  [
                                          "A. 凸轮转速",
                                          "B. 凸轮轮廓曲线",
                                          "C. 凸轮形状"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 凸轮机构",
                          "why":  "从动件运动规律由廓线决定。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 51 · 原卷图 83e01c4c（读图转录）",
                          "img":  "83e01c4c",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2015-11",
                          "year":  2015,
                          "page":  51,
                          "type":  "choice",
                          "stem":  "______用于计算蜗杆传动比是错误的。",
                          "options":  [
                                          "A. i=ω1/ω2",
                                          "B. d1/d2",
                                          "C. i=z2/z1"
                                      ],
                          "answer":  "B",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "传动比不等于直径比。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 51 · 原卷图 83e01c4c（读图转录）",
                          "img":  "83e01c4c",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2015-13",
                          "year":  2015,
                          "page":  51,
                          "type":  "choice",
                          "stem":  "选取V带型号，主要取决于______。",
                          "options":  [
                                          "A. 带的线速度",
                                          "B. 带的紧边拉力",
                                          "C. 带传递功率和小带轮转速"
                                      ],
                          "answer":  "C",
                          "kp":  "#M06 带传动",
                          "why":  "按计算功率与转速查选型图。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷 · 印刷页 51 · 原卷图 83e01c4c（读图转录）",
                          "img":  "83e01c4c",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "TK2016-01",
                          "year":  2016,
                          "page":  55,
                          "type":  "fill",
                          "stem":  "刚性回转构件的静平衡力学条件是____；动平衡力学条件是____。",
                          "options":  [

                                      ],
                          "answer":  "离心力的合力为零；离心力的合力与合力偶矩均为零",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "静平衡只消合力，动平衡还需消合力偶矩。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 55 · 原卷图 538b6c32（读图转录）",
                          "img":  "538b6c32",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "TK2016-02",
                          "year":  2016,
                          "page":  55,
                          "type":  "fill",
                          "stem":  "根据运动时各轮轴线位置是否固定可将轮系分为____和____两大类。",
                          "options":  [

                                      ],
                          "answer":  "定轴轮系；周转轮系",
                          "kp":  "#M01 轮系",
                          "why":  "按轴线是否固定分类。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 55 · 原卷图 538b6c32（读图转录）",
                          "img":  "538b6c32",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M01 轮系",
                          "df":  100,
                          "tags":  [
                                       "#M01 轮系"
                                   ]
                      },
                      {
                          "id":  "TK2016-03",
                          "year":  2016,
                          "page":  55,
                          "type":  "fill",
                          "stem":  "普通平键的宽和高（b×h）是根据____确定的，其工作面为____。",
                          "options":  [

                                      ],
                          "answer":  "轴的直径；两侧面",
                          "kp":  "#M03 键联接",
                          "why":  "b×h 按轴径查表，工作面是侧面。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 55 · 原卷图 538b6c32（读图转录）",
                          "img":  "538b6c32",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M03 键联接",
                          "df":  100,
                          "tags":  [
                                       "#M03 键联接"
                                   ]
                      },
                      {
                          "id":  "TK2016-04",
                          "year":  2016,
                          "page":  55,
                          "type":  "fill",
                          "stem":  "滚动轴承6308、N308、7308，其中承受径向载荷最大的是____；承受轴向载荷最大的是____；允许转速最高的是____。",
                          "options":  [

                                      ],
                          "answer":  "N308；7308；6308",
                          "kp":  "#M02 轴承",
                          "why":  "圆柱滚子径向承载最大、角接触球承受轴向、球轴承转速最高。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 55 · 原卷图 538b6c32（读图转录）",
                          "img":  "538b6c32",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "TK2016-05",
                          "year":  2016,
                          "page":  55,
                          "type":  "fill",
                          "stem":  "非液体摩擦滑动轴承的校核计算时应考虑的指标有____、____、____。",
                          "options":  [

                                      ],
                          "answer":  "比压 p；pv 值；滑动速度 v",
                          "kp":  "#M02 轴承",
                          "why":  "非液体摩擦三项校核指标。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 55 · 原卷图 538b6c32（读图转录）",
                          "img":  "538b6c32",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "TK2016-07",
                          "year":  2016,
                          "page":  55,
                          "type":  "fill",
                          "stem":  "蜗杆传动中，蜗轮的轮缘材料通常采用____，蜗杆材料常采用____制造，这是因为____。",
                          "options":  [

                                      ],
                          "answer":  "青铜；45钢（或40Cr）并淬火；减摩耐磨且蜗杆需较高强度",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "蜗轮减摩、蜗杆高强，配对使用。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 55 · 原卷图 538b6c32（读图转录）",
                          "img":  "538b6c32",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "TK2016-08",
                          "year":  2016,
                          "page":  55,
                          "type":  "fill",
                          "stem":  "机构具有确定运动的条件为____的数目____机构的自由度。",
                          "options":  [

                                      ],
                          "answer":  "原动件；等于",
                          "kp":  "#M05 机构自由度",
                          "why":  "原动件数等于自由度数。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 55 · 原卷图 538b6c32（读图转录）",
                          "img":  "538b6c32",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M05 机构自由度",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构自由度"
                                   ]
                      },
                      {
                          "id":  "TK2016-10",
                          "year":  2016,
                          "page":  55,
                          "type":  "fill",
                          "stem":  "带传动工作时，带的最大应力发生在________。",
                          "options":  [

                                      ],
                          "answer":  "紧边进入小带轮处",
                          "kp":  "#M06 带传动",
                          "why":  "紧边拉力与弯曲应力在小轮处叠加最大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 55 · 原卷图 538b6c32（读图转录）",
                          "img":  "538b6c32",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2016-01",
                          "year":  2016,
                          "page":  56,
                          "type":  "choice",
                          "stem":  "选用滑动轴承润滑油时，转速高、压力小时，应选用粘度较高的油。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴承",
                          "why":  "转速高压力小应选低粘度油以减小摩擦热。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 56 · 原卷图 82286c97（读图转录）",
                          "img":  "82286c97",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2016-02",
                          "year":  2016,
                          "page":  56,
                          "type":  "choice",
                          "stem":  "平键是靠键的上下面来传递载荷的。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M03 键联接",
                          "why":  "平键靠两侧面传力。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 56 · 原卷图 82286c97（读图转录）",
                          "img":  "82286c97",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M03 键联接",
                          "df":  100,
                          "tags":  [
                                       "#M03 键联接"
                                   ]
                      },
                      {
                          "id":  "ZT2016-03",
                          "year":  2016,
                          "page":  56,
                          "type":  "choice",
                          "stem":  "链节距越大，链速也越不均匀。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M06 链传动",
                          "why":  "节距大则多边形效应显著、速度波动大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 56 · 原卷图 82286c97（读图转录）",
                          "img":  "82286c97",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "ZT2016-04",
                          "year":  2016,
                          "page":  56,
                          "type":  "choice",
                          "stem":  "螺纹的螺旋升角愈小，螺纹的自锁性能愈好。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 螺纹联接",
                          "why":  "升角小于当量摩擦角才自锁，升角越小越易自锁。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 56 · 原卷图 82286c97（读图转录）",
                          "img":  "82286c97",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2016-05",
                          "year":  2016,
                          "page":  56,
                          "type":  "choice",
                          "stem":  "带传动中的弹性滑动是可以避免的。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M06 带传动",
                          "why":  "弹性滑动由带弹性变形引起，不可避免。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 56 · 原卷图 82286c97（读图转录）",
                          "img":  "82286c97",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2016-09",
                          "year":  2016,
                          "page":  56,
                          "type":  "choice",
                          "stem":  "在一定转速下，要减轻链传动的运动不均匀性和动载荷，应该______。",
                          "options":  [
                                          "A. 增大节距 p 和增加齿数 z1",
                                          "B. 减小节距 p 和减少齿数 z1",
                                          "C. 增大节距 p 和减少齿数 z1",
                                          "D. 减小节距 p 和增加齿数 z1"
                                      ],
                          "answer":  "D",
                          "kp":  "#M06 链传动",
                          "why":  "小节距多齿数减小多边形效应。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 56 · 原卷图 82286c97（读图转录）",
                          "img":  "82286c97",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "ZT2016-17",
                          "year":  2016,
                          "page":  57,
                          "type":  "choice",
                          "stem":  "下列类型的联轴器中，能补偿两轴的相对位移及可缓和冲击、吸收振动的是______。",
                          "options":  [
                                          "A. 凸缘联轴器",
                                          "B. 齿式联轴器",
                                          "C. 万向联轴器",
                                          "D. 弹性柱销联轴器"
                                      ],
                          "answer":  "D",
                          "kp":  "#M02 联轴器与离合器",
                          "why":  "弹性元件兼具补偿位移与缓冲吸振。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷 · 印刷页 57 · 原卷图 e3e60ed4（读图转录）",
                          "img":  "e3e60ed4",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M02 联轴器与离合器",
                          "df":  100,
                          "tags":  [
                                       "#M02 联轴器与离合器"
                                   ]
                      },
                      {
                          "id":  "ZT2017-01",
                          "year":  2017,
                          "page":  61,
                          "type":  "choice",
                          "stem":  "根据滚动轴承的代号6308C，得知该轴承的内径为________。",
                          "options":  [
                                          "A. 8mm",
                                          "B. 24mm",
                                          "C. 32mm",
                                          "D. 40mm"
                                      ],
                          "answer":  "D",
                          "kp":  "#M02 轴承代号",
                          "why":  "内径代号08×5=40mm。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 61 · 原卷图 0328b822（读图转录）",
                          "img":  "0328b822",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M02 轴承代号",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承代号"
                                   ]
                      },
                      {
                          "id":  "ZT2017-02",
                          "year":  2017,
                          "page":  61,
                          "type":  "choice",
                          "stem":  "对于连接用螺纹，主要要求连接可靠，自锁性能好，故常选用________。",
                          "options":  [
                                          "A. 梯形螺纹",
                                          "B. 三角形螺纹",
                                          "C. 矩形螺纹",
                                          "D. 锯齿形螺纹"
                                      ],
                          "answer":  "B",
                          "kp":  "#M04 螺纹联接",
                          "why":  "三角形螺纹自锁性最好。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 61 · 原卷图 0328b822（读图转录）",
                          "img":  "0328b822",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2017-01",
                          "year":  2017,
                          "page":  61,
                          "type":  "fill",
                          "stem":  "一对渐开线直齿圆柱齿轮正确啮合的条件是：这对齿轮的____和____相等。",
                          "options":  [

                                      ],
                          "answer":  "模数；压力角",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "正确啮合条件即 m、α 分别相等。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 61 · 原卷图 0328b822（读图转录）",
                          "img":  "0328b822",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "TK2017-02",
                          "year":  2017,
                          "page":  61,
                          "type":  "fill",
                          "stem":  "铰链四杆机构中，若各杆长度分别为a=30，b=50，c=80，d=90，当以a为机架，则该四杆机构为____。",
                          "options":  [

                                      ],
                          "answer":  "双曲柄机构",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "30+90=120≤50+80=130 满足杆长条件，取最短杆为机架得双曲柄。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 61 · 原卷图 0328b822（读图转录）",
                          "img":  "0328b822",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "TK2017-04",
                          "year":  2017,
                          "page":  61,
                          "type":  "fill",
                          "stem":  "国标规定，三角带有________共七种类型，代号“B2240”表示的含义是：________。",
                          "options":  [

                                      ],
                          "answer":  "Y、Z、A、B、C、D、E；B型、基准长度2240mm",
                          "kp":  "#M06 带传动",
                          "why":  "七种型号与代号含义。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 61 · 原卷图 0328b822（读图转录）",
                          "img":  "0328b822",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "TK2017-05",
                          "year":  2017,
                          "page":  61,
                          "type":  "fill",
                          "stem":  "对于闭式软齿面齿轮传动，主要按________强度进行设计，按________强度进行校核。",
                          "options":  [

                                      ],
                          "answer":  "齿面接触疲劳；齿根弯曲疲劳",
                          "kp":  "#M01 齿轮设计",
                          "why":  "软齿面主失效为点蚀。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 61 · 原卷图 0328b822（读图转录）",
                          "img":  "0328b822",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M01 齿轮设计",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮设计"
                                   ]
                      },
                      {
                          "id":  "TK2017-06",
                          "year":  2017,
                          "page":  61,
                          "type":  "fill",
                          "stem":  "滚动轴承代号“6312”的含义是：________。",
                          "options":  [

                                      ],
                          "answer":  "深沟球轴承，尺寸系列03，内径60mm",
                          "kp":  "#M02 轴承代号",
                          "why":  "6=深沟球，12×5=60mm。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 61 · 原卷图 0328b822（读图转录）",
                          "img":  "0328b822",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M02 轴承代号",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承代号"
                                   ]
                      },
                      {
                          "id":  "TK2017-07",
                          "year":  2017,
                          "page":  61,
                          "type":  "fill",
                          "stem":  "凸轮机构基圆半径越________，压力角越________，机构传动性能越好。",
                          "options":  [

                                      ],
                          "answer":  "大；小",
                          "kp":  "#M05 凸轮机构",
                          "why":  "基圆大则压力角小。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 61 · 原卷图 0328b822（读图转录）",
                          "img":  "0328b822",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "TK2017-08",
                          "year":  2017,
                          "page":  61,
                          "type":  "fill",
                          "stem":  "用于连接的螺纹是________，其原因是________。",
                          "options":  [

                                      ],
                          "answer":  "三角形（普通）螺纹；升角小、当量摩擦角大，自锁性好",
                          "kp":  "#M04 螺纹联接",
                          "why":  "联接螺纹要求自锁。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 61 · 原卷图 0328b822（读图转录）",
                          "img":  "0328b822",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2017-09",
                          "year":  2017,
                          "page":  61,
                          "type":  "fill",
                          "stem":  "蜗杆分度圆直径=________；蜗轮分度圆直径=________。",
                          "options":  [

                                      ],
                          "answer":  "d1=mq；d2=mz2",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "蜗杆直径由模数与直径系数乘积决定。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 61 · 原卷图 0328b822（读图转录）",
                          "img":  "0328b822",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2017-03",
                          "year":  2017,
                          "page":  62,
                          "type":  "choice",
                          "stem":  "设计链传动时链节数最好取________。",
                          "options":  [
                                          "A. 偶数",
                                          "B. 奇数",
                                          "C. 质数",
                                          "D. 链轮齿数的整数倍"
                                      ],
                          "answer":  "A",
                          "kp":  "#M06 链传动",
                          "why":  "偶数链节避免使用过渡链节。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 62 · 原卷图 8cf0d3f1（读图转录）",
                          "img":  "8cf0d3f1",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "ZT2017-04",
                          "year":  2017,
                          "page":  62,
                          "type":  "choice",
                          "stem":  "V带传动设计中，限制小带轮的最小直径主要是为了________。",
                          "options":  [
                                          "A. 使结构紧凑",
                                          "B. 限制弯曲应力",
                                          "C. 限制带轮包角",
                                          "D. 限制速度"
                                      ],
                          "answer":  "B",
                          "kp":  "#M06 带传动",
                          "why":  "直径过小使弯曲应力过大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 62 · 原卷图 8cf0d3f1（读图转录）",
                          "img":  "8cf0d3f1",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2017-05",
                          "year":  2017,
                          "page":  62,
                          "type":  "choice",
                          "stem":  "滚动轴承在基本额定动载荷C作用下，当基本额定寿命为10^6转时，其可靠度为________。",
                          "options":  [
                                          "A. 10%",
                                          "B. 80%",
                                          "C. 90%",
                                          "D. 99%"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 轴承",
                          "why":  "基本额定寿命对应可靠度90%、失效率10%。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 62 · 原卷图 8cf0d3f1（读图转录）",
                          "img":  "8cf0d3f1",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2017-06",
                          "year":  2017,
                          "page":  62,
                          "type":  "choice",
                          "stem":  "按纯扭矩设计计算的轴径，一般作为阶梯轴的________直径。",
                          "options":  [
                                          "A. 最大",
                                          "B. 平均",
                                          "C. 中间",
                                          "D. 最小"
                                      ],
                          "answer":  "D",
                          "kp":  "#M02 轴",
                          "why":  "按扭转初估的是最小轴径。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 62 · 原卷图 8cf0d3f1（读图转录）",
                          "img":  "8cf0d3f1",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2017-07",
                          "year":  2017,
                          "page":  62,
                          "type":  "choice",
                          "stem":  "渐开线标准齿轮的根切现象，发生在________。",
                          "options":  [
                                          "A. 模数较小时",
                                          "B. 模数较多时",
                                          "C. 齿数较少时",
                                          "D. 齿数较多时"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 齿轮加工",
                          "why":  "齿数小于最少齿数时根切。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 62 · 原卷图 8cf0d3f1（读图转录）",
                          "img":  "8cf0d3f1",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M01 齿轮加工",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮加工"
                                   ]
                      },
                      {
                          "id":  "ZT2017-08",
                          "year":  2017,
                          "page":  62,
                          "type":  "choice",
                          "stem":  "在凸轮机构常用从动件运动规律中，________运动规律无冲击。",
                          "options":  [
                                          "A. 一次多项式",
                                          "B. 二次多项式",
                                          "C. 正弦加速度",
                                          "D. 余弦加速度"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 凸轮机构",
                          "why":  "正弦加速度规律加速度无突变，无冲击。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 62 · 原卷图 8cf0d3f1（读图转录）",
                          "img":  "8cf0d3f1",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2017-09",
                          "year":  2017,
                          "page":  62,
                          "type":  "choice",
                          "stem":  "设计滚子推杆盘形凸轮廓线时，其最小曲率半径ρmin________滚子半径时，凸轮的实际廓线为一平滑曲线。",
                          "options":  [
                                          "A. 等于",
                                          "B. 小于",
                                          "C. 大于",
                                          "D. 任意"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 凸轮机构",
                          "why":  "ρmin\u003err 才平滑不失真。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 62 · 原卷图 8cf0d3f1（读图转录）",
                          "img":  "8cf0d3f1",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2017-10",
                          "year":  2017,
                          "page":  62,
                          "type":  "choice",
                          "stem":  "为了提高机构的传动性能，要求机构的最大压力角________许用压力角。",
                          "options":  [
                                          "A. 等于",
                                          "B. 小于",
                                          "C. 大于",
                                          "D. 任意"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "最大压力角须小于等于许用值。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 62 · 原卷图 8cf0d3f1（读图转录）",
                          "img":  "8cf0d3f1",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2017-11",
                          "year":  2017,
                          "page":  62,
                          "type":  "choice",
                          "stem":  "曲柄摇杆机构中，当取________为原动件时会出现死点位置。",
                          "options":  [
                                          "A. 曲柄",
                                          "B. 摇杆",
                                          "C. 连杆",
                                          "D. 任意杆"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "摇杆为原动件时出现死点。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 62 · 原卷图 8cf0d3f1（读图转录）",
                          "img":  "8cf0d3f1",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2017-12",
                          "year":  2017,
                          "page":  62,
                          "type":  "choice",
                          "stem":  "轮系运动时，各轮轴线位置固定不动的称为________。",
                          "options":  [
                                          "A. 定轴轮系",
                                          "B. 周转轮系",
                                          "C. 复合轮系",
                                          "D. 差动轮系"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 轮系",
                          "why":  "轴线固定即定轴轮系。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 62 · 原卷图 8cf0d3f1（读图转录）",
                          "img":  "8cf0d3f1",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M01 轮系",
                          "df":  100,
                          "tags":  [
                                       "#M01 轮系"
                                   ]
                      },
                      {
                          "id":  "ZT2017-13",
                          "year":  2017,
                          "page":  62,
                          "type":  "choice",
                          "stem":  "斜齿圆柱齿轮的标准模数和标准压力角取在________上。",
                          "options":  [
                                          "A. 端面",
                                          "B. 轴面",
                                          "C. 法面",
                                          "D. 曲面"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 齿轮几何",
                          "why":  "斜齿轮标准值在法面。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2017 年真题卷 · 印刷页 62 · 原卷图 8cf0d3f1（读图转录）",
                          "img":  "8cf0d3f1",
                          "sub":  "专业课",
                          "topic":  "真题2017·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2018-01",
                          "year":  2018,
                          "page":  66,
                          "type":  "choice",
                          "stem":  "选用滑动轴承润滑油时，转速高，压力大时，应选用粘度较高的油。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴承",
                          "why":  "转速高应选低粘度油，两句条件矛盾。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 66 · 原卷图 c5c2220a（读图转录）",
                          "img":  "c5c2220a",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2018-02",
                          "year":  2018,
                          "page":  66,
                          "type":  "choice",
                          "stem":  "平键是靠键的上下面来传递荷载的。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M03 键联接",
                          "why":  "平键靠两侧面传力。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 66 · 原卷图 c5c2220a（读图转录）",
                          "img":  "c5c2220a",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M03 键联接",
                          "df":  100,
                          "tags":  [
                                       "#M03 键联接"
                                   ]
                      },
                      {
                          "id":  "ZT2018-06",
                          "year":  2018,
                          "page":  66,
                          "type":  "choice",
                          "stem":  "在下列四种型号的滚动轴承中____必须成对使用。",
                          "options":  [
                                          "A. 深沟球轴承",
                                          "B. 圆柱滚子轴承",
                                          "C. 推力球轴承",
                                          "D. 圆锥滚子轴承"
                                      ],
                          "answer":  "D",
                          "kp":  "#M02 轴承",
                          "why":  "圆锥滚子轴承需成对（面对面/背对背）安装以承受双向轴向力。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 66 · 原卷图 c5c2220a（读图转录）",
                          "img":  "c5c2220a",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "TK2018-02",
                          "year":  2018,
                          "page":  66,
                          "type":  "fill",
                          "stem":  "带传动工作时，带的最大应力发生在____。",
                          "options":  [

                                      ],
                          "answer":  "紧边进入小带轮处",
                          "kp":  "#M06 带传动",
                          "why":  "紧边拉力与弯曲应力在此叠加最大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 66 · 原卷图 c5c2220a（读图转录）",
                          "img":  "c5c2220a",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "TK2018-04",
                          "year":  2018,
                          "page":  66,
                          "type":  "fill",
                          "stem":  "滚动轴承6308、N308、7308，其中承受径向荷载最大的是____；承受轴向荷载最大的是____；允许转速最高的是____。",
                          "options":  [

                                      ],
                          "answer":  "N308；7308；6308",
                          "kp":  "#M02 轴承",
                          "why":  "圆柱滚子径向最强、角接触球承轴向、球轴承转速高。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 66 · 原卷图 c5c2220a（读图转录）",
                          "img":  "c5c2220a",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2018-07",
                          "year":  2018,
                          "page":  67,
                          "type":  "choice",
                          "stem":  "刚性凸缘联轴器用四只铰制孔螺栓联接，螺栓中心的圆直径D=200mm，轴传递扭矩T=180N·m，则作用在每个螺栓上的力为________。",
                          "options":  [
                                          "A. 1800N",
                                          "B. 240N",
                                          "C. 450N",
                                          "D. 540N"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 联轴器与离合器",
                          "why":  "F=T/(D/2)/4=180/0.1/4=450N。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 67 · 原卷图 95a3ff08（读图转录）",
                          "img":  "95a3ff08",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M02 联轴器与离合器",
                          "df":  100,
                          "tags":  [
                                       "#M02 联轴器与离合器"
                                   ]
                      },
                      {
                          "id":  "ZT2018-08",
                          "year":  2018,
                          "page":  67,
                          "type":  "choice",
                          "stem":  "在蜗杆传动中，当其它条件相同时，增加蜗杆头数，则传动效率________。",
                          "options":  [
                                          "A. 增加",
                                          "B. 减小",
                                          "C. 保持不变"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "头数增加使导程角增大，效率提高。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 67 · 原卷图 95a3ff08（读图转录）",
                          "img":  "95a3ff08",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2018-09",
                          "year":  2018,
                          "page":  67,
                          "type":  "choice",
                          "stem":  "平带V带传动传递运动和动力主要是依靠________。",
                          "options":  [
                                          "A. 带的紧边拉力",
                                          "B. 带和带轮接触面间的摩擦力",
                                          "C. 带的预紧力",
                                          "D. 带的松边拉力"
                                      ],
                          "answer":  "B",
                          "kp":  "#M06 带传动",
                          "why":  "带传动靠摩擦传力。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 67 · 原卷图 95a3ff08（读图转录）",
                          "img":  "95a3ff08",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2018-10",
                          "year":  2018,
                          "page":  67,
                          "type":  "choice",
                          "stem":  "滚动轴承在基本额定动载荷C作用下，基本额定寿命为10^6转时，可靠度为________。",
                          "options":  [
                                          "A. 10%",
                                          "B. 80%",
                                          "C. 90%",
                                          "D. 99%"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 轴承",
                          "why":  "基本额定寿命定义对应可靠度90%。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 67 · 原卷图 95a3ff08（读图转录）",
                          "img":  "95a3ff08",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2018-11",
                          "year":  2018,
                          "page":  67,
                          "type":  "choice",
                          "stem":  "按承受载荷的性质分类，减速器中的齿轮轴属于________。",
                          "options":  [
                                          "A. 传动轴",
                                          "B. 转轴",
                                          "C. 固定心轴",
                                          "D. 转动心轴"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴",
                          "why":  "齿轮轴同时受弯扭，属转轴。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 67 · 原卷图 95a3ff08（读图转录）",
                          "img":  "95a3ff08",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2018-12",
                          "year":  2018,
                          "page":  67,
                          "type":  "choice",
                          "stem":  "一对齿轮要正确啮合，它们的________必须相等。",
                          "options":  [
                                          "A. 直径",
                                          "B. 宽度",
                                          "C. 模数",
                                          "D. 齿数"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "正确啮合要求模数与压力角相等。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 67 · 原卷图 95a3ff08（读图转录）",
                          "img":  "95a3ff08",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "ZT2018-13",
                          "year":  2018,
                          "page":  67,
                          "type":  "choice",
                          "stem":  "通常情况下，避免滚子从动件凸轮机构运动失真的合理措施是________。",
                          "options":  [
                                          "A. 增大滚子半径",
                                          "B. 增大压力角",
                                          "C. 增大基圆半径",
                                          "D. 减小基圆半径"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 凸轮机构",
                          "why":  "增大基圆使ρmin增大，避免rr\u003eρmin。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 67 · 原卷图 95a3ff08（读图转录）",
                          "img":  "95a3ff08",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2018-14",
                          "year":  2018,
                          "page":  67,
                          "type":  "choice",
                          "stem":  "标准平键联接的承载能力，通常取决于________。",
                          "options":  [
                                          "A. 轮毂的挤压强度",
                                          "B. 键的剪切强度",
                                          "C. 键的弯曲强度",
                                          "D. 键工作表面的挤压强度"
                                      ],
                          "answer":  "D",
                          "kp":  "#M03 键联接",
                          "why":  "平键按工作面挤压强度校核。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 67 · 原卷图 95a3ff08（读图转录）",
                          "img":  "95a3ff08",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M03 键联接",
                          "df":  100,
                          "tags":  [
                                       "#M03 键联接"
                                   ]
                      },
                      {
                          "id":  "ZT2018-15",
                          "year":  2018,
                          "page":  67,
                          "type":  "choice",
                          "stem":  "对于普通螺栓联接，在拧紧螺母时，螺栓所受的载荷是________。",
                          "options":  [
                                          "A. 拉力",
                                          "B. 扭矩",
                                          "C. 压力",
                                          "D. 拉力和扭矩"
                                      ],
                          "answer":  "D",
                          "kp":  "#M04 螺纹联接",
                          "why":  "拧紧时同时受拉与扭。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 67 · 原卷图 95a3ff08（读图转录）",
                          "img":  "95a3ff08",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2018-16",
                          "year":  2018,
                          "page":  68,
                          "type":  "choice",
                          "stem":  "对于铰链四杆机构，当满足杆长之和的条件时，若取________，将得到双曲柄机构。",
                          "options":  [
                                          "A. 最长杆",
                                          "B. 与最短杆相邻的构件",
                                          "C. 最短杆",
                                          "D. 与最短杆相对的构件"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "取最短杆为机架得双曲柄。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 68 · 原卷图 ad5b33a7（读图转录）",
                          "img":  "ad5b33a7",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2018-17",
                          "year":  2018,
                          "page":  68,
                          "type":  "choice",
                          "stem":  "轮系运动时，各轮轴线的位置固定不动的称为________。",
                          "options":  [
                                          "A. 定轴轮系",
                                          "B. 周转轮系",
                                          "C. 复合轮系",
                                          "D. 差动轮系"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 轮系",
                          "why":  "轴线固定即定轴轮系。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 68 · 原卷图 ad5b33a7（读图转录）",
                          "img":  "ad5b33a7",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M01 轮系",
                          "df":  100,
                          "tags":  [
                                       "#M01 轮系"
                                   ]
                      },
                      {
                          "id":  "ZT2018-18",
                          "year":  2018,
                          "page":  68,
                          "type":  "choice",
                          "stem":  "一个渐开线圆柱齿轮上有两个可见圆：________和两个不可见圆：________。",
                          "options":  [
                                          "A. 分度圆、齿顶圆；基圆、齿根圆",
                                          "B. 齿顶圆；基圆、分度圆、齿根圆",
                                          "C. 分度圆、基圆；齿顶圆、齿根圆",
                                          "D. 齿顶圆、齿根圆；分度圆、基圆"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮几何",
                          "why":  "可见为分度圆与齿顶圆，不可见为基圆与齿根圆。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 68 · 原卷图 ad5b33a7（读图转录）",
                          "img":  "ad5b33a7",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2018-19",
                          "year":  2018,
                          "page":  68,
                          "type":  "choice",
                          "stem":  "为减小飞轮的重量和尺寸，应将飞轮安装在机器的________。",
                          "options":  [
                                          "A. 低速轴",
                                          "B. 高速轴",
                                          "C. 根据具体问题确定",
                                          "D. 任意轴"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "飞轮装高速轴可减小所需转动惯量。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 68 · 原卷图 ad5b33a7（读图转录）",
                          "img":  "ad5b33a7",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "ZT2018-20",
                          "year":  2018,
                          "page":  68,
                          "type":  "choice",
                          "stem":  "对于齿面硬度HB≤350的闭式齿轮传动，设计时一般________。",
                          "options":  [
                                          "A. 先按接触强度条件计算",
                                          "B. 先按弯曲强度条件计算",
                                          "C. 先按磨损条件计算",
                                          "D. 先按胶合条件计算"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮设计",
                          "why":  "软齿面按接触强度设计。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2018 年真题卷 · 印刷页 68 · 原卷图 ad5b33a7（读图转录）",
                          "img":  "ad5b33a7",
                          "sub":  "专业课",
                          "topic":  "真题2018·#M01 齿轮设计",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮设计"
                                   ]
                      },
                      {
                          "id":  "TK2019-01",
                          "year":  2019,
                          "page":  72,
                          "type":  "fill",
                          "stem":  "铰链四杆机构处于死点位置时，其传动角γ=____，而压力角α=____。",
                          "options":  [

                                      ],
                          "answer":  "0°；90°",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "死点处传动角为零、压力角为90°。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 72 · 原卷图 7e465998（读图转录）",
                          "img":  "7e465998",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "TK2019-02",
                          "year":  2019,
                          "page":  72,
                          "type":  "fill",
                          "stem":  "带传动工作时带所受的应力由____、____、____三部分组成。",
                          "options":  [

                                      ],
                          "answer":  "紧边（松边）拉应力；离心拉应力；弯曲应力",
                          "kp":  "#M06 带传动",
                          "why":  "带中应力三部分组成。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 72 · 原卷图 7e465998（读图转录）",
                          "img":  "7e465998",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "TK2019-03",
                          "year":  2019,
                          "page":  72,
                          "type":  "fill",
                          "stem":  "普通平键的宽和高(b×h)是根据____确定的，其工作面为____。",
                          "options":  [

                                      ],
                          "answer":  "轴的直径；两侧面",
                          "kp":  "#M03 键联接",
                          "why":  "b×h 按轴径选，侧面为工作面。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 72 · 原卷图 7e465998（读图转录）",
                          "img":  "7e465998",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M03 键联接",
                          "df":  100,
                          "tags":  [
                                       "#M03 键联接"
                                   ]
                      },
                      {
                          "id":  "TK2019-04",
                          "year":  2019,
                          "page":  72,
                          "type":  "fill",
                          "stem":  "轴上零件的轴向固定方法有：____、____、____、____。",
                          "options":  [

                                      ],
                          "answer":  "轴肩（轴环）；套筒；圆螺母；弹性挡圈（轴端挡圈、紧定螺钉等）",
                          "kp":  "#M02 轴",
                          "why":  "常用轴向固定四类。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 72 · 原卷图 7e465998（读图转录）",
                          "img":  "7e465998",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "TK2019-05",
                          "year":  2019,
                          "page":  72,
                          "type":  "fill",
                          "stem":  "螺纹连接的常用防松方法有：____、____、____、____。",
                          "options":  [

                                      ],
                          "answer":  "摩擦防松（双螺母、弹簧垫圈）；机械防松（开口销、止动垫片、串联钢丝）；粘接防松（厌氧胶）；永久（破坏螺纹副）防松（点焊、冲点）",
                          "kp":  "#M04 螺纹联接",
                          "why":  "按防松原理分四类。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 72 · 原卷图 7e465998（读图转录）",
                          "img":  "7e465998",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2019-06",
                          "year":  2019,
                          "page":  72,
                          "type":  "fill",
                          "stem":  "已知减速直齿齿轮传动，小齿轮所受三个分力的大小分别为：Ft1=2360N，Fa1=272N，Fr1=816N，试分别指出大齿轮：Ft2=____N，Fa2=____N，Fr2=____N。",
                          "options":  [

                                      ],
                          "answer":  "Ft2=2360N，Fa2=816N，Fr2=272N",
                          "kp":  "#M01 锥齿轮受力",
                          "why":  "锥齿轮主从动分力对调关系。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 72 · 原卷图 7e465998（读图转录）",
                          "img":  "7e465998",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M01 锥齿轮受力",
                          "df":  100,
                          "tags":  [
                                       "#M01 锥齿轮受力"
                                   ]
                      },
                      {
                          "id":  "TK2019-07",
                          "year":  2019,
                          "page":  72,
                          "type":  "fill",
                          "stem":  "机构具有确定运动的条件是________。",
                          "options":  [

                                      ],
                          "answer":  "原动件数目等于机构自由度数",
                          "kp":  "#M05 机构自由度",
                          "why":  "原动件数等于自由度数。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 72 · 原卷图 7e465998（读图转录）",
                          "img":  "7e465998",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M05 机构自由度",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构自由度"
                                   ]
                      },
                      {
                          "id":  "TK2019-08",
                          "year":  2019,
                          "page":  72,
                          "type":  "fill",
                          "stem":  "有一个角接触球轴承，宽度系列为窄系列，直径系列为中系列，内径为55mm，接触角25°，公差等级P4级，其代号为________。",
                          "options":  [

                                      ],
                          "answer":  "73211AC/P4",
                          "kp":  "#M02 轴承代号",
                          "why":  "7＋32＋11（55mm），α25°记AC，/P4。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 72 · 原卷图 7e465998（读图转录）",
                          "img":  "7e465998",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M02 轴承代号",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承代号"
                                   ]
                      },
                      {
                          "id":  "TK2019-09",
                          "year":  2019,
                          "page":  72,
                          "type":  "fill",
                          "stem":  "刚性回转构件的静平衡力学条件是________；动平衡力学条件是________。",
                          "options":  [

                                      ],
                          "answer":  "离心力的合力为零；离心力的合力与合力偶矩均为零",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "静/动平衡力学条件。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 72 · 原卷图 7e465998（读图转录）",
                          "img":  "7e465998",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "ZT2019-01",
                          "year":  2019,
                          "page":  73,
                          "type":  "choice",
                          "stem":  "选用滑动轴承的润滑油时，转速高、压力小时，应选用粘度较高的油。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴承",
                          "why":  "转速高压力小应选低粘度油。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 73 · 原卷图 ec2c3678（读图转录）",
                          "img":  "ec2c3678",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2019-02",
                          "year":  2019,
                          "page":  73,
                          "type":  "choice",
                          "stem":  "蜗杆传动，蜗杆头数越多，传动效率越低。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "头数多导程角大，效率更高。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 73 · 原卷图 ec2c3678（读图转录）",
                          "img":  "ec2c3678",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2019-03",
                          "year":  2019,
                          "page":  73,
                          "type":  "choice",
                          "stem":  "平键是靠键的上下面来传递载荷。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M03 键联接",
                          "why":  "平键靠两侧面传力。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 73 · 原卷图 ec2c3678（读图转录）",
                          "img":  "ec2c3678",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M03 键联接",
                          "df":  100,
                          "tags":  [
                                       "#M03 键联接"
                                   ]
                      },
                      {
                          "id":  "ZT2019-04",
                          "year":  2019,
                          "page":  73,
                          "type":  "choice",
                          "stem":  "当机构的原动件数少于或等于机构的自由度时，机构具有确定的运动。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 机构自由度",
                          "why":  "必须原动件数等于自由度数才有确定运动。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 73 · 原卷图 ec2c3678（读图转录）",
                          "img":  "ec2c3678",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M05 机构自由度",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构自由度"
                                   ]
                      },
                      {
                          "id":  "ZT2019-06",
                          "year":  2019,
                          "page":  73,
                          "type":  "choice",
                          "stem":  "飞轮可以用来调节非周期性速度波动。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "飞轮调节周期性速度波动，非周期需调速器。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 73 · 原卷图 ec2c3678（读图转录）",
                          "img":  "ec2c3678",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "ZT2019-07",
                          "year":  2019,
                          "page":  73,
                          "type":  "choice",
                          "stem":  "增大齿轮的模数，可以提高齿轮的接触强度。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 齿轮强度",
                          "why":  "接触强度主要随直径增大，模数增大提高弯曲强度。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 73 · 原卷图 ec2c3678（读图转录）",
                          "img":  "ec2c3678",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M01 齿轮强度",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮强度"
                                   ]
                      },
                      {
                          "id":  "ZT2019-11",
                          "year":  2019,
                          "page":  73,
                          "type":  "choice",
                          "stem":  "蜗杆传动的效率一般较其它传动低，这主要是因为在蜗杆传动中________。",
                          "options":  [
                                          "A. 蜗轮速度很低",
                                          "B. 蜗杆头数很少",
                                          "C. 蜗轮蜗杆相对滑动速度很大",
                                          "D. 传动比大"
                                      ],
                          "answer":  "C",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "相对滑动速度大，摩擦损失大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 73 · 原卷图 ec2c3678（读图转录）",
                          "img":  "ec2c3678",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2019-13",
                          "year":  2019,
                          "page":  74,
                          "type":  "choice",
                          "stem":  "设计滚子推杆盘形凸轮轮廓线时，其最小曲率半径ρmin________滚子半径rr时，凸轮的实际廓线为一平滑曲线。",
                          "options":  [
                                          "A. 等于",
                                          "B. 小于",
                                          "C. 大于",
                                          "D. 小于零"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 凸轮机构",
                          "why":  "ρmin\u003err 才平滑。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 74 · 原卷图 4c9c894d（读图转录）",
                          "img":  "4c9c894d",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2019-14",
                          "year":  2019,
                          "page":  74,
                          "type":  "choice",
                          "stem":  "既传递转矩又承受弯矩的轴称为________。",
                          "options":  [
                                          "A. 心轴",
                                          "B. 传动轴",
                                          "C. 曲轴",
                                          "D. 转轴"
                                      ],
                          "answer":  "D",
                          "kp":  "#M02 轴",
                          "why":  "同时受弯扭即转轴。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 74 · 原卷图 4c9c894d（读图转录）",
                          "img":  "4c9c894d",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2019-16",
                          "year":  2019,
                          "page":  74,
                          "type":  "choice",
                          "stem":  "紧螺栓联接强度计算时，螺栓所受轴向拉力乘以1.3，是________。",
                          "options":  [
                                          "A. 防止松脱",
                                          "B. 保证足够的预紧力",
                                          "C. 计入扭转剪应力",
                                          "D. 计入弯曲应力"
                                      ],
                          "answer":  "C",
                          "kp":  "#M04 螺纹联接",
                          "why":  "1.3 计入拧紧扭转剪应力。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 74 · 原卷图 4c9c894d（读图转录）",
                          "img":  "4c9c894d",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2019-17",
                          "year":  2019,
                          "page":  74,
                          "type":  "choice",
                          "stem":  "齿面接触疲劳强度设计准则是针对________失效建立的。",
                          "options":  [
                                          "A. 齿面点蚀",
                                          "B. 齿面胶合",
                                          "C. 齿面磨损",
                                          "D. 齿面变形"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮失效",
                          "why":  "接触疲劳对应点蚀。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 74 · 原卷图 4c9c894d（读图转录）",
                          "img":  "4c9c894d",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M01 齿轮失效",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮失效"
                                   ]
                      },
                      {
                          "id":  "ZT2019-18",
                          "year":  2019,
                          "page":  74,
                          "type":  "choice",
                          "stem":  "在工业上，回转件的动平衡又称为________。",
                          "options":  [
                                          "A. 单面平衡",
                                          "B. 双面平衡",
                                          "C. 双向平衡",
                                          "D. 动态主矢平衡"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "动平衡即双面平衡。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 74 · 原卷图 4c9c894d（读图转录）",
                          "img":  "4c9c894d",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "ZT2019-19",
                          "year":  2019,
                          "page":  74,
                          "type":  "choice",
                          "stem":  "在一定转速下，要减轻滚子链传动的运动不均匀性和动载荷，应该________。",
                          "options":  [
                                          "A. 增大节距p和增加齿数z1",
                                          "B. 减小节距p和减少齿数z1",
                                          "C. 增大节距p和减少齿数z1",
                                          "D. 减小节距p和增加齿数z1"
                                      ],
                          "answer":  "D",
                          "kp":  "#M06 链传动",
                          "why":  "小节距多齿数减小多边形效应。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 74 · 原卷图 4c9c894d（读图转录）",
                          "img":  "4c9c894d",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "ZT2019-21",
                          "year":  2019,
                          "page":  74,
                          "type":  "choice",
                          "stem":  "在以下间歇运动机构中，________机构更适应于高速工作情况。",
                          "options":  [
                                          "A. 凸轮间歇运动",
                                          "B. 不完全齿轮",
                                          "C. 棘轮",
                                          "D. 槽轮"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 间歇运动机构",
                          "why":  "凸轮式间歇运动平稳宜高速。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 74 · 原卷图 4c9c894d（读图转录）",
                          "img":  "4c9c894d",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M05 间歇运动机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 间歇运动机构"
                                   ]
                      },
                      {
                          "id":  "ZT2019-22",
                          "year":  2019,
                          "page":  74,
                          "type":  "choice",
                          "stem":  "对于工作中载荷平稳，不发生相对位移，转速稳定且对中性好的两轴宜用________。",
                          "options":  [
                                          "A. 万向联轴器",
                                          "B. 弹性套柱销联轴器",
                                          "C. 刚性凸缘联轴器",
                                          "D. 齿式联轴器"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 联轴器与离合器",
                          "why":  "对中良好、载荷平稳用刚性凸缘联轴器。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 74 · 原卷图 4c9c894d（读图转录）",
                          "img":  "4c9c894d",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M02 联轴器与离合器",
                          "df":  100,
                          "tags":  [
                                       "#M02 联轴器与离合器"
                                   ]
                      },
                      {
                          "id":  "ZT2019-23",
                          "year":  2019,
                          "page":  75,
                          "type":  "choice",
                          "stem":  "在常用的螺纹联接中，自锁性能最好的是________。",
                          "options":  [
                                          "A. 三角形螺纹",
                                          "B. 梯形螺纹",
                                          "C. 锯齿形螺纹",
                                          "D. 矩形螺纹"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 螺纹联接",
                          "why":  "三角形螺纹当量摩擦角最大，自锁最好。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 75 · 原卷图 49f39aa5（读图转录）",
                          "img":  "49f39aa5",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2019-24",
                          "year":  2019,
                          "page":  75,
                          "type":  "choice",
                          "stem":  "正变位齿轮与同样m、z、α的标准直齿圆柱齿轮比较，其齿顶圆齿厚将________。",
                          "options":  [
                                          "A. 减小",
                                          "B. 增大",
                                          "C. 不变",
                                          "D. 不确定"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 变位齿轮",
                          "why":  "正变位刀具远离轮心，齿顶变尖、齿顶圆齿厚减小；负变位反之。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 75 · 原卷图 49f39aa5（读图转录）",
                          "img":  "49f39aa5",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M01 变位齿轮",
                          "df":  100,
                          "tags":  [
                                       "#M01 变位齿轮"
                                   ]
                      },
                      {
                          "id":  "ZT2019-25",
                          "year":  2019,
                          "page":  75,
                          "type":  "choice",
                          "stem":  "为了减小飞轮的重量和尺寸，应将飞轮安装在机器的________。",
                          "options":  [
                                          "A. 低速轴",
                                          "B. 中速轴",
                                          "C. 高速轴",
                                          "D. 根据具体问题具体确定"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "高速轴所需转动惯量小。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2019 年真题卷 · 印刷页 75 · 原卷图 49f39aa5（读图转录）",
                          "img":  "49f39aa5",
                          "sub":  "专业课",
                          "topic":  "真题2019·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "ZT2020-01",
                          "year":  2020,
                          "page":  78,
                          "type":  "choice",
                          "stem":  "凸轮机构为高副机构，易于磨损，所以通常多用于传力不大的控制机构。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 凸轮机构",
                          "why":  "高副易磨损，故用于轻载控制。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 78 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2020-02",
                          "year":  2020,
                          "page":  78,
                          "type":  "choice",
                          "stem":  "蜗杆传动中增加蜗杆头数可以提高传动效率。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "头数多导程角大、效率高。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 78 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "TK2020-01",
                          "year":  2020,
                          "page":  78,
                          "type":  "fill",
                          "stem":  "回转运动变为往复摆动的是____机构，回转运动变为往复直线的是____机构。",
                          "options":  [

                                      ],
                          "answer":  "曲柄摇杆（铰链四杆）；曲柄滑块",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "四杆机构四种基本变换。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 78 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "TK2020-02",
                          "year":  2020,
                          "page":  78,
                          "type":  "fill",
                          "stem":  "常用的间歇运动机构有____、____、____和____。",
                          "options":  [

                                      ],
                          "answer":  "棘轮机构；槽轮机构；不完全齿轮机构；凸轮式间歇运动机构",
                          "kp":  "#M05 间歇运动机构",
                          "why":  "四类常用间歇运动机构。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 78 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M05 间歇运动机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 间歇运动机构"
                                   ]
                      },
                      {
                          "id":  "TK2020-03",
                          "year":  2020,
                          "page":  78,
                          "type":  "fill",
                          "stem":  "齿轮传动的主要失效形式有____、____、____、____、____五种。",
                          "options":  [

                                      ],
                          "answer":  "轮齿折断；齿面点蚀；齿面磨损；齿面胶合；齿面塑性变形",
                          "kp":  "#M01 齿轮失效",
                          "why":  "五种主要失效形式。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 78 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M01 齿轮失效",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮失效"
                                   ]
                      },
                      {
                          "id":  "TK2020-04",
                          "year":  2020,
                          "page":  78,
                          "type":  "fill",
                          "stem":  "非矩形螺纹的自锁条件是____。",
                          "options":  [

                                      ],
                          "answer":  "螺纹升角小于等于当量摩擦角（λ≤φv）",
                          "kp":  "#M04 螺纹联接",
                          "why":  "自锁条件为升角不大于当量摩擦角。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 78 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2020-05",
                          "year":  2020,
                          "page":  78,
                          "type":  "fill",
                          "stem":  "7215C的含义为____轴承，宽度系列为____，C为____，内径为____。",
                          "options":  [

                                      ],
                          "answer":  "角接触球；1（窄）；接触角15°；75mm",
                          "kp":  "#M02 轴承代号",
                          "why":  "7=角接触球，15×5=75mm内径，C记α=15°。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 78 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M02 轴承代号",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承代号"
                                   ]
                      },
                      {
                          "id":  "TK2020-06",
                          "year":  2020,
                          "page":  78,
                          "type":  "fill",
                          "stem":  "蜗杆传动主要由____和____组成。",
                          "options":  [

                                      ],
                          "answer":  "蜗杆；蜗轮",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "蜗杆传动两大基本件。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 78 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "TK2020-07",
                          "year":  2020,
                          "page":  78,
                          "type":  "fill",
                          "stem":  "直齿圆柱齿轮传动的正确啮合的条件是____。",
                          "options":  [

                                      ],
                          "answer":  "两轮模数相等、压力角相等",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "正确啮合条件。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 78 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "TK2020-08",
                          "year":  2020,
                          "page":  78,
                          "type":  "fill",
                          "stem":  "对于闭式软齿面齿轮传动，主要按____强度设计，再按____强度进行校核。",
                          "options":  [

                                      ],
                          "answer":  "齿面接触疲劳；齿根弯曲疲劳",
                          "kp":  "#M01 齿轮设计",
                          "why":  "软齿面先接触后弯曲。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 78 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M01 齿轮设计",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮设计"
                                   ]
                      },
                      {
                          "id":  "TK2020-09",
                          "year":  2020,
                          "page":  78,
                          "type":  "fill",
                          "stem":  "轴承分为____和____。",
                          "options":  [

                                      ],
                          "answer":  "滑动轴承；滚动轴承",
                          "kp":  "#M02 轴承",
                          "why":  "按摩擦性质分两类。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 78 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "TK2020-10",
                          "year":  2020,
                          "page":  78,
                          "type":  "fill",
                          "stem":  "螺纹连接的基本类型有____、____、____、____。",
                          "options":  [

                                      ],
                          "answer":  "螺栓连接；双头螺柱连接；螺钉连接；紧定螺钉连接",
                          "kp":  "#M04 螺纹联接",
                          "why":  "四种基本类型。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 78 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2020-03",
                          "year":  2020,
                          "page":  79,
                          "type":  "choice",
                          "stem":  "四杆机构处于死点位置时传动角为0°。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "死点传动角为零。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 79 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2020-04",
                          "year":  2020,
                          "page":  79,
                          "type":  "choice",
                          "stem":  "角接触球轴承承受轴向载荷的能力，随接触角α的增大而减少。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴承",
                          "why":  "接触角越大轴向承载能力越大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 79 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2020-05",
                          "year":  2020,
                          "page":  79,
                          "type":  "choice",
                          "stem":  "斜齿圆柱齿轮的模数有法向模数和端面模数两种，其中以端面模数为标准值。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 齿轮几何",
                          "why":  "斜齿轮以法向模数为标准值。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 79 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2020-06",
                          "year":  2020,
                          "page":  79,
                          "type":  "choice",
                          "stem":  "在蜗杆传动中，蜗杆与蜗轮的旋向相同，且它们的螺旋角相等。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "旋向相同但蜗杆导程角等于蜗轮螺旋角，角度名称不同。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 79 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2020-07",
                          "year":  2020,
                          "page":  79,
                          "type":  "choice",
                          "stem":  "刚性转子的静平衡是单面平衡，动平衡是双面平衡。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "静平衡单面、动平衡双面。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 79 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "ZT2020-08",
                          "year":  2020,
                          "page":  79,
                          "type":  "choice",
                          "stem":  "齿轮齿面采用的是热处理方式表面淬火和渗碳淬火。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮材料",
                          "why":  "硬齿面常用表面淬火与渗碳淬火。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 79 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M01 齿轮材料",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮材料"
                                   ]
                      },
                      {
                          "id":  "ZT2020-09",
                          "year":  2020,
                          "page":  79,
                          "type":  "choice",
                          "stem":  "四杆机构在死点位置时，传动角为90°，压力角为0°。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "死点处传动角0°、压力角90°。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 79 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2020-10",
                          "year":  2020,
                          "page":  79,
                          "type":  "choice",
                          "stem":  "在下列四种型号的滚动轴承中，______必须成对使用。",
                          "options":  [
                                          "A. 深沟球轴承",
                                          "B. 圆柱滚子轴承",
                                          "C. 推力球轴承",
                                          "D. 圆锥滚子轴承"
                                      ],
                          "answer":  "D",
                          "kp":  "#M02 轴承",
                          "why":  "圆锥滚子轴承需成对安装以承受双向轴向力。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 79 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2020-11",
                          "year":  2020,
                          "page":  79,
                          "type":  "choice",
                          "stem":  "当轴作单向回转时，平键的工作面在______，楔键的工作面在键的______。",
                          "options":  [
                                          "A. 上、下两面",
                                          "B. 上表面或下表面",
                                          "C. 一侧面",
                                          "D. 两侧面"
                                      ],
                          "answer":  "D",
                          "kp":  "#M03 键联接",
                          "why":  "平键工作面为两侧面（本题选项仅覆盖第一空）。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 79 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M03 键联接",
                          "df":  100,
                          "tags":  [
                                       "#M03 键联接"
                                   ]
                      },
                      {
                          "id":  "ZT2020-12",
                          "year":  2020,
                          "page":  79,
                          "type":  "choice",
                          "stem":  "带传动不能保证精确的传动比，其原因是______。",
                          "options":  [
                                          "A. 带容易变形和磨损",
                                          "B. 带在带轮上打滑",
                                          "C. 带的弹性滑动",
                                          "D. 带的材料不遵守胡克定律"
                                      ],
                          "answer":  "C",
                          "kp":  "#M06 带传动",
                          "why":  "弹性滑动使带速滞后。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 79 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2020-13",
                          "year":  2020,
                          "page":  79,
                          "type":  "choice",
                          "stem":  "常用来传递空间两交错轴运动的齿轮机构是______。",
                          "options":  [
                                          "A. 直齿圆柱齿轮",
                                          "B. 斜齿圆柱齿轮",
                                          "C. 直齿圆锥齿轮",
                                          "D. 蜗轮蜗杆"
                                      ],
                          "answer":  "D",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "蜗杆传动用于交错轴传动。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 79 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2020-14",
                          "year":  2020,
                          "page":  79,
                          "type":  "choice",
                          "stem":  "渐开线齿廓上各点的压力角______。",
                          "options":  [
                                          "A. 不同",
                                          "B. 相同",
                                          "C. 等于0°",
                                          "D. 无法确定"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮几何",
                          "why":  "渐开线各点压力角随半径变化。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 79 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2020-16",
                          "year":  2020,
                          "page":  79,
                          "type":  "choice",
                          "stem":  "滚子链的外链板和销轴间为______，而套筒和销轴间为______。",
                          "options":  [
                                          "A. 过盈配合",
                                          "B. 间隙配合",
                                          "C. 过渡配合",
                                          "D. 无法确定"
                                      ],
                          "answer":  "A",
                          "kp":  "#M06 链传动",
                          "why":  "外链板与销轴过盈，套筒与销轴间隙（选项仅覆盖第一空）。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 79 · 原卷图 24879e19（读图转录）",
                          "img":  "24879e19",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "ZT2020-17",
                          "year":  2020,
                          "page":  80,
                          "type":  "choice",
                          "stem":  "下列链传动的平均传动比公式中，错误的是______。",
                          "options":  [
                                          "A. i=n1/n2",
                                          "B. i=d2/d1",
                                          "C. i=z2/z1",
                                          "D. i=T2/T1"
                                      ],
                          "answer":  "B",
                          "kp":  "#M06 链传动",
                          "why":  "平均传动比按齿数或转速，不用分度圆直径比。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 80 · 原卷图 31e1fb2e（读图转录）",
                          "img":  "31e1fb2e",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "ZT2020-19",
                          "year":  2020,
                          "page":  80,
                          "type":  "choice",
                          "stem":  "依据受载情况分类，减速器的高速轴属于______。",
                          "options":  [
                                          "A. 传动轴",
                                          "B. 心轴",
                                          "C. 转轴",
                                          "D. 钢丝软轴"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 轴",
                          "why":  "既受弯又受扭为转轴。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 80 · 原卷图 31e1fb2e（读图转录）",
                          "img":  "31e1fb2e",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2020-20",
                          "year":  2020,
                          "page":  80,
                          "type":  "choice",
                          "stem":  "在铰链四杆机构ABCD中，若lAB=70mm，lBC=150mm，lCD=110mm，lAD=90mm，若以AB杆为机架可获得______。",
                          "options":  [
                                          "A. 双摇杆机构",
                                          "B. 双曲柄机构",
                                          "C. 曲柄摇杆机构",
                                          "D. 曲柄滑块机构"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "70+150\u003e110+90 不满足杆长条件，得双摇杆机构。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 80 · 原卷图 31e1fb2e（读图转录）",
                          "img":  "31e1fb2e",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2020-21",
                          "year":  2020,
                          "page":  80,
                          "type":  "choice",
                          "stem":  "圆柱齿轮传动的中心距不变，减小模数、增加齿数，可以______。",
                          "options":  [
                                          "A. 提高齿轮的弯曲强度",
                                          "B. 提高齿面的接触强度",
                                          "C. 改善齿轮传动的平稳性",
                                          "D. 减少齿轮的塑性变形"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 齿轮设计",
                          "why":  "齿数多重合度大，传动更平稳。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 80 · 原卷图 31e1fb2e（读图转录）",
                          "img":  "31e1fb2e",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M01 齿轮设计",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮设计"
                                   ]
                      },
                      {
                          "id":  "ZT2020-22",
                          "year":  2020,
                          "page":  80,
                          "type":  "choice",
                          "stem":  "齿轮根切现象，往往发生在______的场合。",
                          "options":  [
                                          "A. 齿数较多",
                                          "B. 模数较大",
                                          "C. 齿数较少",
                                          "D. 模数较小"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 齿轮加工",
                          "why":  "齿数少于最少齿数产生根切。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 80 · 原卷图 31e1fb2e（读图转录）",
                          "img":  "31e1fb2e",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M01 齿轮加工",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮加工"
                                   ]
                      },
                      {
                          "id":  "ZT2020-23",
                          "year":  2020,
                          "page":  80,
                          "type":  "choice",
                          "stem":  "下列机构中，______机构具有急回特性。",
                          "options":  [
                                          "A. 曲柄摇杆机构",
                                          "B. 摆动导杆机构",
                                          "C. 对心曲柄滑块机构",
                                          "D. 偏置曲柄滑块机构"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "曲柄摇杆机构有极位夹角，具急回特性。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 80 · 原卷图 31e1fb2e（读图转录）",
                          "img":  "31e1fb2e",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2020-24",
                          "year":  2020,
                          "page":  80,
                          "type":  "choice",
                          "stem":  "当凸轮机构的从动件作简谐运动规律运动时，在凸轮机构中会产生______冲击。",
                          "options":  [
                                          "A. 刚性",
                                          "B. 柔性",
                                          "C. 刚性和柔性",
                                          "D. 无"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 凸轮机构",
                          "why":  "简谐（余弦加速度）规律加速度突变有限，产生柔性冲击。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2020 年真题卷 · 印刷页 80 · 原卷图 31e1fb2e（读图转录）",
                          "img":  "31e1fb2e",
                          "sub":  "专业课",
                          "topic":  "真题2020·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "TK2021-01",
                          "year":  2021,
                          "page":  83,
                          "type":  "fill",
                          "stem":  "两构件通过____接触组成的运动副称为高副，通过____接触组成的运动副称为低副。",
                          "options":  [

                                      ],
                          "answer":  "点或线；面",
                          "kp":  "#M05 机构",
                          "why":  "高副点线接触、低副面接触。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 83 · 原卷图 9bcddd27（读图转录）",
                          "img":  "9bcddd27",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M05 机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构"
                                   ]
                      },
                      {
                          "id":  "TK2021-02",
                          "year":  2021,
                          "page":  83,
                          "type":  "fill",
                          "stem":  "铰链四杆机构中，若各杆长度分别为a＝30、b＝50、c＝80、d＝90，当以a为机架，则该四杆机构为____。",
                          "options":  [

                                      ],
                          "answer":  "双曲柄机构",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "30+90≤50+80 且取最短杆为机架。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 83 · 原卷图 9bcddd27（读图转录）",
                          "img":  "9bcddd27",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "TK2021-03",
                          "year":  2021,
                          "page":  83,
                          "type":  "fill",
                          "stem":  "因为链传动具有________的缺点，因此只适用于________传动。",
                          "options":  [

                                      ],
                          "answer":  "多边形效应造成运动不均匀、有冲击和动载荷；低（中低）速",
                          "kp":  "#M06 链传动",
                          "why":  "多边形效应限制链传动速度。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 83 · 原卷图 9bcddd27（读图转录）",
                          "img":  "9bcddd27",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "TK2021-04",
                          "year":  2021,
                          "page":  83,
                          "type":  "fill",
                          "stem":  "螺纹的公称直径是指它的________，螺纹“M12×1.5”的含义为________。",
                          "options":  [

                                      ],
                          "answer":  "大径（外径）；公称直径12mm、螺距1.5mm的单线细牙普通螺纹",
                          "kp":  "#M04 螺纹联接",
                          "why":  "公称直径为大径。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 83 · 原卷图 9bcddd27（读图转录）",
                          "img":  "9bcddd27",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2021-05",
                          "year":  2021,
                          "page":  83,
                          "type":  "fill",
                          "stem":  "平键联接中，________面是工作面；楔键联接中，________面是工作面。",
                          "options":  [

                                      ],
                          "answer":  "两侧；上、下（顶面与底面）",
                          "kp":  "#M03 键联接",
                          "why":  "平键侧面传力，楔键上下楔紧传力。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 83 · 原卷图 9bcddd27（读图转录）",
                          "img":  "9bcddd27",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M03 键联接",
                          "df":  100,
                          "tags":  [
                                       "#M03 键联接"
                                   ]
                      },
                      {
                          "id":  "TK2021-08",
                          "year":  2021,
                          "page":  83,
                          "type":  "fill",
                          "stem":  "一对渐开线直齿圆柱齿轮正确啮合的条件是：这对齿轮的________和________相等。",
                          "options":  [

                                      ],
                          "answer":  "模数；压力角",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "正确啮合条件。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 83 · 原卷图 9bcddd27（读图转录）",
                          "img":  "9bcddd27",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "TK2021-09",
                          "year":  2021,
                          "page":  83,
                          "type":  "fill",
                          "stem":  "齿轮常见的失效形式有________、________、________、________、________。",
                          "options":  [

                                      ],
                          "answer":  "轮齿折断；齿面点蚀；齿面磨损；齿面胶合；齿面塑性变形",
                          "kp":  "#M01 齿轮失效",
                          "why":  "五种主要失效形式。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 83 · 原卷图 9bcddd27（读图转录）",
                          "img":  "9bcddd27",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M01 齿轮失效",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮失效"
                                   ]
                      },
                      {
                          "id":  "ZT2021-01",
                          "year":  2021,
                          "page":  84,
                          "type":  "choice",
                          "stem":  "在机构中，如果两构件之一是静止的，则瞬心的绝对速度等于零，称为绝对瞬心。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 机构",
                          "why":  "绝对瞬心定义。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 84 · 原卷图 b94dfeb0（读图转录）",
                          "img":  "b94dfeb0",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M05 机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构"
                                   ]
                      },
                      {
                          "id":  "ZT2021-02",
                          "year":  2021,
                          "page":  84,
                          "type":  "choice",
                          "stem":  "在曲柄摇杆机构中，当曲柄为原动件时，机构会出现死点。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "摇杆为原动件时才出现死点。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 84 · 原卷图 b94dfeb0（读图转录）",
                          "img":  "b94dfeb0",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2021-03",
                          "year":  2021,
                          "page":  84,
                          "type":  "choice",
                          "stem":  "凸轮机构中，凸轮最大压力角出现于凸轮轮廓坡度较陡的位置。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 凸轮机构",
                          "why":  "廓线越陡压力角越大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 84 · 原卷图 b94dfeb0（读图转录）",
                          "img":  "b94dfeb0",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2021-04",
                          "year":  2021,
                          "page":  84,
                          "type":  "choice",
                          "stem":  "采用展成法加工标准齿轮渐开线齿廓时，不发生根切的最少齿数是17。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮加工",
                          "why":  "α=20°、ha*=1 时 zmin=17。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 84 · 原卷图 b94dfeb0（读图转录）",
                          "img":  "b94dfeb0",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M01 齿轮加工",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮加工"
                                   ]
                      },
                      {
                          "id":  "ZT2021-05",
                          "year":  2021,
                          "page":  84,
                          "type":  "choice",
                          "stem":  "渐开线的形状取决于基圆大小，基圆越大，渐开线越平直。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮几何",
                          "why":  "基圆无穷大时渐开线成直线（齿条）。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 84 · 原卷图 b94dfeb0（读图转录）",
                          "img":  "b94dfeb0",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2021-06",
                          "year":  2021,
                          "page":  84,
                          "type":  "choice",
                          "stem":  "经过动平衡的回转件不一定能保证静平衡。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "动平衡必然满足静平衡。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 84 · 原卷图 b94dfeb0（读图转录）",
                          "img":  "b94dfeb0",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "ZT2021-07",
                          "year":  2021,
                          "page":  84,
                          "type":  "choice",
                          "stem":  "闭式硬齿面齿轮传动，应先按齿面接触疲劳强度进行设计，再按弯曲疲劳强度校核。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 齿轮设计",
                          "why":  "硬齿面先按齿根弯曲强度设计。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 84 · 原卷图 b94dfeb0（读图转录）",
                          "img":  "b94dfeb0",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M01 齿轮设计",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮设计"
                                   ]
                      },
                      {
                          "id":  "ZT2021-08",
                          "year":  2021,
                          "page":  84,
                          "type":  "choice",
                          "stem":  "在带传动中，弹性滑动是可以避免的，而打滑是不可避免的。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M06 带传动",
                          "why":  "弹性滑动不可避免，打滑可以避免。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 84 · 原卷图 b94dfeb0（读图转录）",
                          "img":  "b94dfeb0",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2021-09",
                          "year":  2021,
                          "page":  84,
                          "type":  "choice",
                          "stem":  "工作时既传递扭矩又承受弯矩的轴称为传动轴。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴",
                          "why":  "既受弯又受扭为转轴。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 84 · 原卷图 b94dfeb0（读图转录）",
                          "img":  "b94dfeb0",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2021-10",
                          "year":  2021,
                          "page":  84,
                          "type":  "choice",
                          "stem":  "通过离合器联接的两轴，在机器工作时可随时分离。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 联轴器与离合器",
                          "why":  "离合器可随时分离接合。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 84 · 原卷图 b94dfeb0（读图转录）",
                          "img":  "b94dfeb0",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M02 联轴器与离合器",
                          "df":  100,
                          "tags":  [
                                       "#M02 联轴器与离合器"
                                   ]
                      },
                      {
                          "id":  "ZT2021-11",
                          "year":  2021,
                          "page":  84,
                          "type":  "choice",
                          "stem":  "有急回运动特性的平面连杆机构的行程速比系数K的取值范围是______。",
                          "options":  [
                                          "A. K=1",
                                          "B. K\u003c1",
                                          "C. K\u003e1",
                                          "D. K=0"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "有急回特性时 K\u003e1。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 84 · 原卷图 b94dfeb0（读图转录）",
                          "img":  "b94dfeb0",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "TK2021-10",
                          "year":  2021,
                          "page":  84,
                          "type":  "fill",
                          "stem":  "齿轮传动中，规定齿距p与π的比值称为________，用字母________表示。",
                          "options":  [

                                      ],
                          "answer":  "模数；m",
                          "kp":  "#M01 齿轮几何",
                          "why":  "m=p/π 定义为模数。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 84 · 原卷图 b94dfeb0（读图转录）",
                          "img":  "b94dfeb0",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2021-12",
                          "year":  2021,
                          "page":  85,
                          "type":  "choice",
                          "stem":  "设计滚子推杆盘形凸轮轮廓线时，其最小曲率半径ρmin______滚子半径时，凸轮的实际廓线为一平滑曲线。",
                          "options":  [
                                          "A. 等于",
                                          "B. 小于",
                                          "C. 大于",
                                          "D. 任意"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 凸轮机构",
                          "why":  "ρmin\u003err 才平滑。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 85 · 原卷图 d6ccb559（读图转录）",
                          "img":  "d6ccb559",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2021-13",
                          "year":  2021,
                          "page":  85,
                          "type":  "choice",
                          "stem":  "在带、链、齿轮组成的多级减速传动中，链传动应放在______。",
                          "options":  [
                                          "A. 高速级",
                                          "B. 中速级",
                                          "C. 低速级",
                                          "D. 任意位置均可"
                                      ],
                          "answer":  "C",
                          "kp":  "#M06 链传动",
                          "why":  "链传动宜低速，放低速级。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 85 · 原卷图 d6ccb559（读图转录）",
                          "img":  "d6ccb559",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "ZT2021-14",
                          "year":  2021,
                          "page":  85,
                          "type":  "choice",
                          "stem":  "正常情况下，避免滚子从动件凸轮机构运动失真的合理措施是______。",
                          "options":  [
                                          "A. 增大滚子半径",
                                          "B. 减小滚子半径",
                                          "C. 增大基圆半径",
                                          "D. 减小基圆半径"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 凸轮机构",
                          "why":  "增大基圆使ρmin增大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 85 · 原卷图 d6ccb559（读图转录）",
                          "img":  "d6ccb559",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2021-15",
                          "year":  2021,
                          "page":  85,
                          "type":  "choice",
                          "stem":  "渐开线齿廓基圆上的压力角______。",
                          "options":  [
                                          "A. \u003c0°",
                                          "B. \u003c0°",
                                          "C. =0°",
                                          "D. =20°"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 齿轮几何",
                          "why":  "基圆上压力角为零。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 85 · 原卷图 d6ccb559（读图转录）",
                          "img":  "d6ccb559",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2021-16",
                          "year":  2021,
                          "page":  85,
                          "type":  "choice",
                          "stem":  "一对渐开线齿轮连续传动的条件为______。",
                          "options":  [
                                          "A. ε≥1",
                                          "B. ε≥2",
                                          "C. ε≤1",
                                          "D. ε≥1.3"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "重合度不小于1即可连续传动。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 85 · 原卷图 d6ccb559（读图转录）",
                          "img":  "d6ccb559",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "ZT2021-17",
                          "year":  2021,
                          "page":  85,
                          "type":  "choice",
                          "stem":  "影响齿轮承载能力大小的主要参数是______。",
                          "options":  [
                                          "A. 齿数",
                                          "B. 模数",
                                          "C. 压力角",
                                          "D. 分度圆直径"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 齿轮强度",
                          "why":  "模数直接决定齿根弯曲强度与轮齿尺寸。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 85 · 原卷图 d6ccb559（读图转录）",
                          "img":  "d6ccb559",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M01 齿轮强度",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮强度"
                                   ]
                      },
                      {
                          "id":  "ZT2021-18",
                          "year":  2021,
                          "page":  85,
                          "type":  "choice",
                          "stem":  "阿基米德圆柱蜗杆的______模数，应符合标准值。",
                          "options":  [
                                          "A. 端面",
                                          "B. 法面",
                                          "C. 轴面"
                                      ],
                          "answer":  "C",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "阿基米德蜗杆以轴向模数为标准值。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 85 · 原卷图 d6ccb559（读图转录）",
                          "img":  "d6ccb559",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2021-19",
                          "year":  2021,
                          "page":  85,
                          "type":  "choice",
                          "stem":  "一般工况的闭式齿轮传动的主要失效形式是______。",
                          "options":  [
                                          "A. 齿面点蚀",
                                          "B. 轮齿折断",
                                          "C. 齿面磨损",
                                          "D. 齿面胶合"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮失效",
                          "why":  "闭式软齿面主要失效为点蚀。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 85 · 原卷图 d6ccb559（读图转录）",
                          "img":  "d6ccb559",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M01 齿轮失效",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮失效"
                                   ]
                      },
                      {
                          "id":  "ZT2021-20",
                          "year":  2021,
                          "page":  85,
                          "type":  "choice",
                          "stem":  "对于齿面硬度≤350的闭式齿轮传动，设计时一般______。",
                          "options":  [
                                          "A. 先按接触强度条件计算",
                                          "B. 先按弯曲强度条件计算",
                                          "C. 先按磨损条件计算",
                                          "D. 先按胶合条件计算"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮设计",
                          "why":  "软齿面先按接触强度设计。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2021 年真题卷 · 印刷页 85 · 原卷图 d6ccb559（读图转录）",
                          "img":  "d6ccb559",
                          "sub":  "专业课",
                          "topic":  "真题2021·#M01 齿轮设计",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮设计"
                                   ]
                      },
                      {
                          "id":  "ZT2022-01",
                          "year":  2022,
                          "page":  89,
                          "type":  "choice",
                          "stem":  "凸轮机构中，从动件按等速运动规律运动时引起刚性冲击。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 凸轮机构",
                          "why":  "等速规律速度突变，产生刚性冲击。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 89 · 原卷图 f9fbde60（读图转录）",
                          "img":  "f9fbde60",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "TK2022-01",
                          "year":  2022,
                          "page":  89,
                          "type":  "fill",
                          "stem":  "铰链四杆机构中，若各杆长度分别为：a=50mm，b=40mm，c=55mm，d=70mm，则以a为机架，则该四杆机构为____。",
                          "options":  [

                                      ],
                          "answer":  "双摇杆机构",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "最短40＋最长70=110\u003e50+55=105，不满足杆长条件。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 89 · 原卷图 f9fbde60（读图转录）",
                          "img":  "f9fbde60",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "TK2022-02",
                          "year":  2022,
                          "page":  89,
                          "type":  "fill",
                          "stem":  "曲柄摇杆机构中，已知曲柄等速转动，极位夹角为30°，若回程时间t2=5s，则工作行程所用时间t1=____。",
                          "options":  [

                                      ],
                          "answer":  "7s",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "K=(180+30)/(180-30)=1.4，t1=1.4×5=7s。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 89 · 原卷图 f9fbde60（读图转录）",
                          "img":  "f9fbde60",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "TK2022-03",
                          "year":  2022,
                          "page":  89,
                          "type":  "fill",
                          "stem":  "型号6216的滚动轴承类型为____，内径尺寸为____。",
                          "options":  [

                                      ],
                          "answer":  "深沟球轴承；80mm",
                          "kp":  "#M02 轴承代号",
                          "why":  "6=深沟球，16×5=80mm。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 89 · 原卷图 f9fbde60（读图转录）",
                          "img":  "f9fbde60",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M02 轴承代号",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承代号"
                                   ]
                      },
                      {
                          "id":  "TK2022-04",
                          "year":  2022,
                          "page":  89,
                          "type":  "fill",
                          "stem":  "蜗杆传动中，蜗杆分度圆直径为36mm，端面模数为3mm，则蜗杆的直径系数为____。",
                          "options":  [

                                      ],
                          "answer":  "12",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "q=d1/m=36/3=12。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 89 · 原卷图 f9fbde60（读图转录）",
                          "img":  "f9fbde60",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "TK2022-05",
                          "year":  2022,
                          "page":  89,
                          "type":  "fill",
                          "stem":  "根据承受载荷的性质不同，轴可分为____、____和____三种。",
                          "options":  [

                                      ],
                          "answer":  "转轴；心轴；传动轴",
                          "kp":  "#M02 轴",
                          "why":  "按受载分三类。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 89 · 原卷图 f9fbde60（读图转录）",
                          "img":  "f9fbde60",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "TK2022-06",
                          "year":  2022,
                          "page":  89,
                          "type":  "fill",
                          "stem":  "连接结构简单，常用于连接较薄的被连接件，且不宜装拆。螺纹连接包括普通螺栓连接和____螺栓连接。",
                          "options":  [

                                      ],
                          "answer":  "铰制孔（配合）",
                          "kp":  "#M04 螺纹联接",
                          "why":  "螺栓连接分普通与铰制孔两类。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 89 · 原卷图 f9fbde60（读图转录）",
                          "img":  "f9fbde60",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2022-07",
                          "year":  2022,
                          "page":  89,
                          "type":  "fill",
                          "stem":  "斜齿圆柱齿轮具有____模数和____模数。",
                          "options":  [

                                      ],
                          "answer":  "端面；法向",
                          "kp":  "#M01 齿轮几何",
                          "why":  "斜齿轮有端面模数与法向模数。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 89 · 原卷图 f9fbde60（读图转录）",
                          "img":  "f9fbde60",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "TK2022-08",
                          "year":  2022,
                          "page":  89,
                          "type":  "fill",
                          "stem":  "当主动件作连续运动时，从动件能够产生周期性的时停时动的运动机构为____机构。",
                          "options":  [

                                      ],
                          "answer":  "间歇运动",
                          "kp":  "#M05 间歇运动机构",
                          "why":  "时停时动即间歇运动机构。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 89 · 原卷图 f9fbde60（读图转录）",
                          "img":  "f9fbde60",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M05 间歇运动机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 间歇运动机构"
                                   ]
                      },
                      {
                          "id":  "TK2022-09",
                          "year":  2022,
                          "page":  89,
                          "type":  "fill",
                          "stem":  "机构平衡的条件是机构的____分别为0。",
                          "options":  [

                                      ],
                          "answer":  "总惯性力与总惯性力偶矩",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "机构平衡需合力与合力偶矩为零。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 89 · 原卷图 f9fbde60（读图转录）",
                          "img":  "f9fbde60",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "TK2022-10",
                          "year":  2022,
                          "page":  89,
                          "type":  "fill",
                          "stem":  "已知减速直齿轮传动，小齿轮所受三个分力的大小分别为：Ft1=2360N、Fa1=272N，Fr1=816N。则大齿轮：Ft2=____N、Fa2=____N、Fr2=____N。",
                          "options":  [

                                      ],
                          "answer":  "Ft2=2360N，Fa2=816N，Fr2=272N",
                          "kp":  "#M01 锥齿轮受力",
                          "why":  "圆周力相等，径向与轴向互换。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 89 · 原卷图 f9fbde60（读图转录）",
                          "img":  "f9fbde60",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M01 锥齿轮受力",
                          "df":  100,
                          "tags":  [
                                       "#M01 锥齿轮受力"
                                   ]
                      },
                      {
                          "id":  "ZT2022-02",
                          "year":  2022,
                          "page":  90,
                          "type":  "choice",
                          "stem":  "高副两元素之间相对运动有滚动和滑动时，其瞬心就在两元素的接触点。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 机构",
                          "why":  "纯滚动时接触点即瞬心。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 90 · 原卷图 c407ab6c（读图转录）",
                          "img":  "c407ab6c",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M05 机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构"
                                   ]
                      },
                      {
                          "id":  "ZT2022-03",
                          "year":  2022,
                          "page":  90,
                          "type":  "choice",
                          "stem":  "增大构件的惯性，是机构通过死点位置的唯一办法。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "还可加飞轮、多组机构错列等，非唯一。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 90 · 原卷图 c407ab6c（读图转录）",
                          "img":  "c407ab6c",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2022-04",
                          "year":  2022,
                          "page":  90,
                          "type":  "choice",
                          "stem":  "对于机器的非周期性速度波动，可以通过安装飞轮来调节。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "飞轮只调节周期性波动。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 90 · 原卷图 c407ab6c（读图转录）",
                          "img":  "c407ab6c",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "ZT2022-05",
                          "year":  2022,
                          "page":  90,
                          "type":  "choice",
                          "stem":  "若机构的自由度数为1，原动件数目也为1，则机构有确定的运动。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 机构自由度",
                          "why":  "原动件数等于自由度数。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 90 · 原卷图 c407ab6c（读图转录）",
                          "img":  "c407ab6c",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M05 机构自由度",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构自由度"
                                   ]
                      },
                      {
                          "id":  "ZT2022-06",
                          "year":  2022,
                          "page":  90,
                          "type":  "choice",
                          "stem":  "与滑动轴承相比，滚动轴承具有摩擦系数小，效率高，润滑简单等优点。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 轴承",
                          "why":  "滚动摩擦阻力小。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 90 · 原卷图 c407ab6c（读图转录）",
                          "img":  "c407ab6c",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2022-07",
                          "year":  2022,
                          "page":  90,
                          "type":  "choice",
                          "stem":  "槽轮机构除了常用于实现间歇运动外，还能实现超越运动。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 间歇运动机构",
                          "why":  "超越运动由棘轮/超越离合器实现。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 90 · 原卷图 c407ab6c（读图转录）",
                          "img":  "c407ab6c",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M05 间歇运动机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 间歇运动机构"
                                   ]
                      },
                      {
                          "id":  "ZT2022-09",
                          "year":  2022,
                          "page":  90,
                          "type":  "choice",
                          "stem":  "设计键连接时，剖面尺寸b×h通常根据所传递的转矩大小选择。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M03 键联接",
                          "why":  "b×h 按轴径选择，不按转矩。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 90 · 原卷图 c407ab6c（读图转录）",
                          "img":  "c407ab6c",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M03 键联接",
                          "df":  100,
                          "tags":  [
                                       "#M03 键联接"
                                   ]
                      },
                      {
                          "id":  "ZT2022-10",
                          "year":  2022,
                          "page":  90,
                          "type":  "choice",
                          "stem":  "一组同一型号轴承在同一条件下运转，其可靠度为90%，能达到或超过的寿命称为基本额定寿命。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 轴承",
                          "why":  "基本额定寿命定义为可靠度90%的寿命。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 90 · 原卷图 c407ab6c（读图转录）",
                          "img":  "c407ab6c",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2022-11",
                          "year":  2022,
                          "page":  90,
                          "type":  "choice",
                          "stem":  "曲柄滑块机构中，往往用一个偏心轮代替______。",
                          "options":  [
                                          "A. 曲柄",
                                          "B. 机架",
                                          "C. 滑块",
                                          "D. 连杆"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "偏心轮等效于曲柄。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 90 · 原卷图 c407ab6c（读图转录）",
                          "img":  "c407ab6c",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2022-12",
                          "year":  2022,
                          "page":  90,
                          "type":  "choice",
                          "stem":  "当采用套筒作轴向定位时，为了使零件的端面靠紧定位面，安装零件的轴段长度应______零件轮毂的宽度。",
                          "options":  [
                                          "A. 大于",
                                          "B. 小于",
                                          "C. 等于",
                                          "D. 以上都不对"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴",
                          "why":  "轴段略短于轮毂宽度才能保证端面靠紧。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 90 · 原卷图 c407ab6c（读图转录）",
                          "img":  "c407ab6c",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2022-13",
                          "year":  2022,
                          "page":  91,
                          "type":  "choice",
                          "stem":  "一个渐开线圆柱齿轮上有两个可见圆______和两个不可见圆______。",
                          "options":  [
                                          "A. 分度圆、齿顶圆；基圆、齿根圆",
                                          "B. 齿顶圆、基圆；分度圆、齿根圆",
                                          "C. 分度圆、基圆；齿顶圆、齿根圆",
                                          "D. 齿顶圆、齿根圆；分度圆、基圆"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮几何",
                          "why":  "可见为分度圆与齿顶圆。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 91 · 原卷图 8ef70252（读图转录）",
                          "img":  "8ef70252",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2022-14",
                          "year":  2022,
                          "page":  91,
                          "type":  "choice",
                          "stem":  "渐开线直齿圆柱齿轮中，齿距p，法向齿距pn，基圆齿距pb三者之间的关系为________。",
                          "options":  [
                                          "A. pb=pn\u003cp",
                                          "B. pb\u003cpn\u003cp",
                                          "C. pb\u003epn\u003ep",
                                          "D. pb\u003epn=p"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮几何",
                          "why":  "法向齿距等于基圆齿距，基圆齿距小于分度圆齿距。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 91 · 原卷图 8ef70252（读图转录）",
                          "img":  "8ef70252",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2022-15",
                          "year":  2022,
                          "page":  91,
                          "type":  "choice",
                          "stem":  "带传动的弹性滑动和打滑区别在于：弹性滑动________；打滑________。",
                          "options":  [
                                          "A. 是失效可避免；不是失效不可避免",
                                          "B. 是失效不可避免；不是失效可避免",
                                          "C. 不是失效不可避免；是失效可避免",
                                          "D. 不是失效可避免；是失效不可避免"
                                      ],
                          "answer":  "D",
                          "kp":  "#M06 带传动",
                          "why":  "弹性滑动非失效且不可避免，打滑是失效但可避免。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 91 · 原卷图 8ef70252（读图转录）",
                          "img":  "8ef70252",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2022-16",
                          "year":  2022,
                          "page":  91,
                          "type":  "choice",
                          "stem":  "一对能正确啮合传动的渐开线直齿圆柱齿轮必须满足________。",
                          "options":  [
                                          "A. 齿形相同",
                                          "B. 模数相等，齿厚等于齿槽宽",
                                          "C. 模数相等，分度圆压力角相等",
                                          "D. 啮合角等于分度圆压力角"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "正确啮合条件为 m、α 分别相等。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 91 · 原卷图 8ef70252（读图转录）",
                          "img":  "8ef70252",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "ZT2022-17",
                          "year":  2022,
                          "page":  91,
                          "type":  "choice",
                          "stem":  "链传动中链条的节数最好为________，而链轮齿数为________。",
                          "options":  [
                                          "A. 奇数；偶数",
                                          "B. 偶数；奇数",
                                          "C. 5的倍数；偶数",
                                          "D. 5的倍数；奇数"
                                      ],
                          "answer":  "B",
                          "kp":  "#M06 链传动",
                          "why":  "链节偶数、链轮奇数齿。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 91 · 原卷图 8ef70252（读图转录）",
                          "img":  "8ef70252",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "ZT2022-18",
                          "year":  2022,
                          "page":  91,
                          "type":  "choice",
                          "stem":  "轴的最小直径的初步估算，是按________进行的。",
                          "options":  [
                                          "A. 扭转强度",
                                          "B. 弯曲强度",
                                          "C. 剪切强度",
                                          "D. 弯扭合成强度"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 轴",
                          "why":  "按扭矩初估最小轴径。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 91 · 原卷图 8ef70252（读图转录）",
                          "img":  "8ef70252",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2022-20",
                          "year":  2022,
                          "page":  91,
                          "type":  "choice",
                          "stem":  "对于齿面硬度HBS≤350的闭式齿轮传动，设计时一般________。",
                          "options":  [
                                          "A. 先按接触强度条件计算",
                                          "B. 先按弯曲强度条件计算",
                                          "C. 先按磨损条件计算",
                                          "D. 先按胶合条件计算"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮设计",
                          "why":  "软齿面按接触强度设计。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 91 · 原卷图 8ef70252（读图转录）",
                          "img":  "8ef70252",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M01 齿轮设计",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮设计"
                                   ]
                      },
                      {
                          "id":  "ZT2022-21",
                          "year":  2022,
                          "page":  92,
                          "type":  "choice",
                          "stem":  "通用的闭式齿轮传动，其润滑方法根据齿轮的圆周速度大小而定。当齿轮的圆周速度v\u003c12m/s时，闭式齿轮传动可采用________润滑方式。",
                          "options":  [
                                          "A. 油润滑",
                                          "B. 喷油润滑",
                                          "C. 人工润滑",
                                          "D. 以上都不是"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮润滑",
                          "why":  "v\u003c12m/s 可用浸油（油池）润滑。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 92 · 原卷图 0b70103f（读图转录）",
                          "img":  "0b70103f",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M01 齿轮润滑",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮润滑"
                                   ]
                      },
                      {
                          "id":  "ZT2022-22",
                          "year":  2022,
                          "page":  92,
                          "type":  "choice",
                          "stem":  "对于连接螺纹，要求连接可靠，自锁性能好，常选用________。",
                          "options":  [
                                          "A. 升角小，单线三角形螺纹",
                                          "B. 升角大，双线三角形螺纹",
                                          "C. 升角小，单线梯形螺纹",
                                          "D. 升角大，双线矩形螺纹"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 螺纹联接",
                          "why":  "单线三角形螺纹自锁最好。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 92 · 原卷图 0b70103f（读图转录）",
                          "img":  "0b70103f",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2022-24",
                          "year":  2022,
                          "page":  92,
                          "type":  "choice",
                          "stem":  "蜗杆传动中，蜗轮的螺旋角β与蜗杆的导程角γ________。",
                          "options":  [
                                          "A. 相等",
                                          "B. 不相等",
                                          "C. 无关系",
                                          "D. 之和为90°"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "正确啮合时β=γ且旋向相同。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 92 · 原卷图 0b70103f（读图转录）",
                          "img":  "0b70103f",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2022-25",
                          "year":  2022,
                          "page":  92,
                          "type":  "choice",
                          "stem":  "在螺纹受拉力的螺纹连接中，螺纹危险截面面积用________计算。",
                          "options":  [
                                          "A. 计算直径dc",
                                          "B. 螺纹小径d1",
                                          "C. 螺纹大径d",
                                          "D. 螺纹中径d2"
                                      ],
                          "answer":  "B",
                          "kp":  "#M04 螺纹联接",
                          "why":  "危险截面按小径计算面积。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2022 年真题卷 · 印刷页 92 · 原卷图 0b70103f（读图转录）",
                          "img":  "0b70103f",
                          "sub":  "专业课",
                          "topic":  "真题2022·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2023-01",
                          "year":  2023,
                          "page":  96,
                          "type":  "fill",
                          "stem":  "在铰链四杆机构中，若各杆长度分别为：a=30mm，b=50mm，c=65mm，d=70mm，当以a为机架时，则此机构为____。",
                          "options":  [

                                      ],
                          "answer":  "双曲柄机构",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "30+70=100≤50+65=115 且取最短杆为机架。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 96 · 原卷图 647a5396（读图转录）",
                          "img":  "647a5396",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "TK2023-02",
                          "year":  2023,
                          "page":  96,
                          "type":  "fill",
                          "stem":  "带传动工作时，带的最大应力发生在____，带传动的打滑总是发生在____。",
                          "options":  [

                                      ],
                          "answer":  "紧边进入小带轮处；小带轮上",
                          "kp":  "#M06 带传动",
                          "why":  "小轮包角小，先在小轮打滑。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 96 · 原卷图 647a5396（读图转录）",
                          "img":  "647a5396",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "TK2023-03",
                          "year":  2023,
                          "page":  96,
                          "type":  "fill",
                          "stem":  "在国家标准中，普通螺纹的牙型角是____，梯形螺纹的牙侧角是____。",
                          "options":  [

                                      ],
                          "answer":  "60°；15°",
                          "kp":  "#M04 螺纹联接",
                          "why":  "普通螺纹牙型角60°，梯形牙侧角15°。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 96 · 原卷图 647a5396（读图转录）",
                          "img":  "647a5396",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2023-04",
                          "year":  2023,
                          "page":  96,
                          "type":  "fill",
                          "stem":  "斜齿圆柱齿轮具有端面模数和____两种模数，其中以____模数作为标准模数。",
                          "options":  [

                                      ],
                          "answer":  "法向；法向",
                          "kp":  "#M01 齿轮几何",
                          "why":  "斜齿轮标准模数为法向模数。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 96 · 原卷图 647a5396（读图转录）",
                          "img":  "647a5396",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "TK2023-05",
                          "year":  2023,
                          "page":  96,
                          "type":  "fill",
                          "stem":  "滚动轴承代号“6206”表示____轴承，轴承的内径尺寸是____。",
                          "options":  [

                                      ],
                          "answer":  "深沟球；30mm",
                          "kp":  "#M02 轴承代号",
                          "why":  "6=深沟球，06×5=30mm。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 96 · 原卷图 647a5396（读图转录）",
                          "img":  "647a5396",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M02 轴承代号",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承代号"
                                   ]
                      },
                      {
                          "id":  "TK2023-06",
                          "year":  2023,
                          "page":  96,
                          "type":  "fill",
                          "stem":  "在连杆机构中，压力角与传动角互为____，压力角越小，机构的传动性能越____。",
                          "options":  [

                                      ],
                          "answer":  "余角；好",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "两者互余，压力角小传力好。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 96 · 原卷图 647a5396（读图转录）",
                          "img":  "647a5396",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "TK2023-07",
                          "year":  2023,
                          "page":  96,
                          "type":  "fill",
                          "stem":  "在齿轮传动设计中，齿形系数YFa的值，直齿圆柱齿轮按____选取，而斜齿圆柱齿轮按____选取。",
                          "options":  [

                                      ],
                          "answer":  "齿数；当量齿数",
                          "kp":  "#M01 齿轮强度",
                          "why":  "斜齿轮按当量齿数查 YFa。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 96 · 原卷图 647a5396（读图转录）",
                          "img":  "647a5396",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M01 齿轮强度",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮强度"
                                   ]
                      },
                      {
                          "id":  "TK2023-08",
                          "year":  2023,
                          "page":  96,
                          "type":  "fill",
                          "stem":  "滚动轴承的外圈与轴承座孔间的配合属于____制，内圈与轴颈间的配合属于____制。",
                          "options":  [

                                      ],
                          "answer":  "基轴；基孔",
                          "kp":  "#M02 轴承配合",
                          "why":  "外圈与座孔基轴制、内圈与轴基孔制。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 96 · 原卷图 647a5396（读图转录）",
                          "img":  "647a5396",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M02 轴承配合",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承配合"
                                   ]
                      },
                      {
                          "id":  "ZT2023-01",
                          "year":  2023,
                          "page":  97,
                          "type":  "choice",
                          "stem":  "为便于确定直齿圆柱齿轮机构外廓尺寸，直齿锥齿轮的几何尺寸计算以小端为标准。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 齿轮几何",
                          "why":  "直齿锥齿轮以大端为计算标准。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 97 · 原卷图 4c830bcc（读图转录）",
                          "img":  "4c830bcc",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2023-02",
                          "year":  2023,
                          "page":  97,
                          "type":  "choice",
                          "stem":  "选用滑动轴承润滑油时，在载荷大、温度高时，应选用黏度较大的润滑油。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 轴承",
                          "why":  "重载高温需高粘度油维持油膜。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 97 · 原卷图 4c830bcc（读图转录）",
                          "img":  "4c830bcc",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2023-03",
                          "year":  2023,
                          "page":  97,
                          "type":  "choice",
                          "stem":  "在曲柄摇杆机构中，若以曲柄为主动件，最小传动角可能出现在曲柄与机架两次共线位置之一处。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "最小传动角出现在曲柄与机架共线的两位置之一。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 97 · 原卷图 4c830bcc（读图转录）",
                          "img":  "4c830bcc",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2023-04",
                          "year":  2023,
                          "page":  97,
                          "type":  "choice",
                          "stem":  "带传动的弹性滑动是失效可以避免，而打滑是失效不可以避免。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M06 带传动",
                          "why":  "弹性滑动不可避免、非失效；打滑是失效但可避免。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 97 · 原卷图 4c830bcc（读图转录）",
                          "img":  "4c830bcc",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2023-05",
                          "year":  2023,
                          "page":  97,
                          "type":  "choice",
                          "stem":  "传动轴是既传递转矩又承受弯矩的轴。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴",
                          "why":  "既受弯又受扭的是转轴。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 97 · 原卷图 4c830bcc（读图转录）",
                          "img":  "4c830bcc",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2023-06",
                          "year":  2023,
                          "page":  97,
                          "type":  "choice",
                          "stem":  "直齿锥齿轮的最少齿数大于当量圆柱齿轮的最少齿数。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 齿轮几何",
                          "why":  "锥齿轮 zmin=17cosδ，小于当量圆柱齿轮的最少齿数。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 97 · 原卷图 4c830bcc（读图转录）",
                          "img":  "4c830bcc",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2023-07",
                          "year":  2023,
                          "page":  97,
                          "type":  "choice",
                          "stem":  "滑动轴承轴瓦上的油沟，应开在轴瓦的非承载区。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 轴承",
                          "why":  "油沟开在非承载区以免破坏油膜。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 97 · 原卷图 4c830bcc（读图转录）",
                          "img":  "4c830bcc",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2023-08",
                          "year":  2023,
                          "page":  97,
                          "type":  "choice",
                          "stem":  "采用普通螺母时，旋合圈数越多，载荷分布不均匀的程度也越显著，所以采用圈数多的厚螺母，并不能提高连接强度。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 螺纹联接",
                          "why":  "各圈螺纹牙载荷不均，厚螺母无益。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 97 · 原卷图 4c830bcc（读图转录）",
                          "img":  "4c830bcc",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2023-09",
                          "year":  2023,
                          "page":  97,
                          "type":  "choice",
                          "stem":  "链传动时，链节数为偶数时不需要采用过渡链节。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M06 链传动",
                          "why":  "偶数链节可直接闭合，无需过渡链节。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 97 · 原卷图 4c830bcc（读图转录）",
                          "img":  "4c830bcc",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ]
                      },
                      {
                          "id":  "ZT2023-10",
                          "year":  2023,
                          "page":  97,
                          "type":  "choice",
                          "stem":  "在滚子从动件凸轮机构中，滚子半径选用过小，将会使从动件运动规律“失真”。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 凸轮机构",
                          "why":  "滚子半径过大才导致失真。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 97 · 原卷图 4c830bcc（读图转录）",
                          "img":  "4c830bcc",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2023-11",
                          "year":  2023,
                          "page":  97,
                          "type":  "choice",
                          "stem":  "在润滑、密封不良的闭式蜗杆传动中，蜗轮轮齿的主要失效形式是________。",
                          "options":  [
                                          "A. 齿面胶合",
                                          "B. 齿面磨损",
                                          "C. 齿面点蚀",
                                          "D. 齿面塑性变形"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "润滑密封不良时易发生胶合。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 97 · 原卷图 4c830bcc（读图转录）",
                          "img":  "4c830bcc",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "TK2023-09",
                          "year":  2023,
                          "page":  97,
                          "type":  "fill",
                          "stem":  "一对齿轮啮合时，其大小齿轮接触应力值的关系是____。",
                          "options":  [

                                      ],
                          "answer":  "相等（σH1=σH2）",
                          "kp":  "#M01 齿轮强度",
                          "why":  "啮合面接触应力相等。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 97 · 原卷图 4c830bcc（读图转录）",
                          "img":  "4c830bcc",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M01 齿轮强度",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮强度"
                                   ]
                      },
                      {
                          "id":  "TK2023-10",
                          "year":  2023,
                          "page":  97,
                          "type":  "fill",
                          "stem":  "圆柱蜗杆传动正确啮合的条件是______、______。",
                          "options":  [

                                      ],
                          "answer":  "蜗杆轴向模数等于蜗轮端面模数；蜗杆轴向压力角等于蜗轮端面压力角（且旋向相同）",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "中间平面内模数与压力角对应相等。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 97 · 原卷图 4c830bcc（读图转录）",
                          "img":  "4c830bcc",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2023-12",
                          "year":  2023,
                          "page":  98,
                          "type":  "choice",
                          "stem":  "为了使一对齿轮能正确进入啮合，它们必须相同的是________。",
                          "options":  [
                                          "A. 齿数",
                                          "B. 宽度",
                                          "C. 基圆齿距",
                                          "D. 直径"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "正确啮合要求基圆齿距相等。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 98 · 原卷图 9936fe6a（读图转录）",
                          "img":  "9936fe6a",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "ZT2023-13",
                          "year":  2023,
                          "page":  98,
                          "type":  "choice",
                          "stem":  "按基本额定动载荷选定的滚动轴承，在预定的使用期限内使其破坏率最大________。",
                          "options":  [
                                          "A. 5%",
                                          "B. 10%",
                                          "C. 1%",
                                          "D. 50%"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴承",
                          "why":  "基本额定寿命对应失效率10%。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 98 · 原卷图 9936fe6a（读图转录）",
                          "img":  "9936fe6a",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2023-14",
                          "year":  2023,
                          "page":  98,
                          "type":  "choice",
                          "stem":  "在蜗杆传动中，在模数一定的情况下，增大蜗杆的直径系数，蜗杆的刚度将________。",
                          "options":  [
                                          "A. 提高",
                                          "B. 降低",
                                          "C. 不变",
                                          "D. 可能提高，可能降低"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "直径系数增大使蜗杆直径增大，刚度提高。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 98 · 原卷图 9936fe6a（读图转录）",
                          "img":  "9936fe6a",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2023-15",
                          "year":  2023,
                          "page":  98,
                          "type":  "choice",
                          "stem":  "在高速、重载的齿轮传动中，较软齿面的主要的失效形式是________。",
                          "options":  [
                                          "A. 齿面磨损",
                                          "B. 齿面塑性变形",
                                          "C. 齿面胶合",
                                          "D. 齿面点蚀"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 齿轮失效",
                          "why":  "高速重载易发生胶合。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 98 · 原卷图 9936fe6a（读图转录）",
                          "img":  "9936fe6a",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M01 齿轮失效",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮失效"
                                   ]
                      },
                      {
                          "id":  "ZT2023-16",
                          "year":  2023,
                          "page":  98,
                          "type":  "choice",
                          "stem":  "在凸轮机构常用的从动件运动规律中，________运动规律无冲击。",
                          "options":  [
                                          "A. 一次多项式",
                                          "B. 二次多项式",
                                          "C. 正弦加速度",
                                          "D. 余弦加速度"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 凸轮机构",
                          "why":  "正弦加速度无冲击。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 98 · 原卷图 9936fe6a（读图转录）",
                          "img":  "9936fe6a",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2023-17",
                          "year":  2023,
                          "page":  98,
                          "type":  "choice",
                          "stem":  "在下列四种型号的滚动轴承中，________必须成对使用。",
                          "options":  [
                                          "A. 深沟球轴承",
                                          "B. 圆柱滚子轴承",
                                          "C. 推力球轴承",
                                          "D. 圆锥滚子轴承"
                                      ],
                          "answer":  "D",
                          "kp":  "#M02 轴承",
                          "why":  "圆锥滚子轴承需成对安装。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 98 · 原卷图 9936fe6a（读图转录）",
                          "img":  "9936fe6a",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2023-19",
                          "year":  2023,
                          "page":  98,
                          "type":  "choice",
                          "stem":  "在牙嵌式离合器中，________形状的牙只能单向工作。",
                          "options":  [
                                          "A. 三角形",
                                          "B. 梯形",
                                          "C. 锯齿形",
                                          "D. 矩形"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 联轴器与离合器",
                          "why":  "锯齿形牙只能单向传动。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 98 · 原卷图 9936fe6a（读图转录）",
                          "img":  "9936fe6a",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M02 联轴器与离合器",
                          "df":  100,
                          "tags":  [
                                       "#M02 联轴器与离合器"
                                   ]
                      },
                      {
                          "id":  "ZT2023-20",
                          "year":  2023,
                          "page":  98,
                          "type":  "choice",
                          "stem":  "在载荷中等冲击，频繁启动和正反转、两轴对中不准确的情况下，联结两轴宜采用________联轴器。",
                          "options":  [
                                          "A. 固定式刚性",
                                          "B. 刚性补偿式",
                                          "C. 安全",
                                          "D. 弹性"
                                      ],
                          "answer":  "D",
                          "kp":  "#M02 联轴器与离合器",
                          "why":  "弹性联轴器可补偿偏移并缓冲。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 98 · 原卷图 9936fe6a（读图转录）",
                          "img":  "9936fe6a",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M02 联轴器与离合器",
                          "df":  100,
                          "tags":  [
                                       "#M02 联轴器与离合器"
                                   ]
                      },
                      {
                          "id":  "ZT2023-21",
                          "year":  2023,
                          "page":  99,
                          "type":  "choice",
                          "stem":  "对于平面连杆机构，当________时，机构处于死点位置。",
                          "options":  [
                                          "A. 传动角γ=90°",
                                          "B. 传动角γ=0°",
                                          "C. 压力角α=0°",
                                          "D. 压力角α=45°"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "死点处传动角为零。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 99 · 原卷图 54ef092c（读图转录）",
                          "img":  "54ef092c",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2023-22",
                          "year":  2023,
                          "page":  99,
                          "type":  "choice",
                          "stem":  "在正常工作条件下，滚动轴承的主要失效形式是________。",
                          "options":  [
                                          "A. 滚动体破裂",
                                          "B. 滚动体与滚道的工作表面产生疲劳点蚀",
                                          "C. 保持架破坏",
                                          "D. 滚道磨蚀"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴承",
                          "why":  "正常条件下为疲劳点蚀。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 99 · 原卷图 54ef092c（读图转录）",
                          "img":  "54ef092c",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2023-23",
                          "year":  2023,
                          "page":  99,
                          "type":  "choice",
                          "stem":  "在带传动中，当中心距和小带轮的直径一定时，若增大传动比，则小带轮的包角________。",
                          "options":  [
                                          "A. 增大",
                                          "B. 不变",
                                          "C. 减小",
                                          "D. 无影响"
                                      ],
                          "answer":  "C",
                          "kp":  "#M06 带传动",
                          "why":  "传动比增大使d2-d1增大，α1减小。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 99 · 原卷图 54ef092c（读图转录）",
                          "img":  "54ef092c",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2023-24",
                          "year":  2023,
                          "page":  99,
                          "type":  "choice",
                          "stem":  "刚性凸缘联轴器用四只铰制孔螺栓连接，螺栓中心的圆直径D=200mm，轴传递的扭矩T=180N·m，则作用在每个螺栓上的力为________。",
                          "options":  [
                                          "A. 800N",
                                          "B. 240N",
                                          "C. 450N",
                                          "D. 540N"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 联轴器与离合器",
                          "why":  "F=T/(D/2)/4=450N。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 99 · 原卷图 54ef092c（读图转录）",
                          "img":  "54ef092c",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M02 联轴器与离合器",
                          "df":  100,
                          "tags":  [
                                       "#M02 联轴器与离合器"
                                   ]
                      },
                      {
                          "id":  "ZT2023-25",
                          "year":  2023,
                          "page":  99,
                          "type":  "choice",
                          "stem":  "下列措施中，不能有效改善轴的刚度的是________。",
                          "options":  [
                                          "A. 改变轴的直径",
                                          "B. 改变轴的结构",
                                          "C. 改变轴的支撑位置",
                                          "D. 轴改用高强度合金钢材料"
                                      ],
                          "answer":  "D",
                          "kp":  "#M02 轴",
                          "why":  "刚度取决于弹性模量与截面，换材料无效。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2023 年真题卷 · 印刷页 99 · 原卷图 54ef092c（读图转录）",
                          "img":  "54ef092c",
                          "sub":  "专业课",
                          "topic":  "真题2023·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "TK2024-01",
                          "year":  2024,
                          "page":  103,
                          "type":  "fill",
                          "stem":  "在铰链四杆机构中，若各杆长度分别为：lAB=240mm，lBC=600mm，lCD=400mm，lAD=500mm，要使该机构成为双曲柄机构，应取____为机架；要使该机构成为双摇杆机构，应取____为机架。",
                          "options":  [

                                      ],
                          "answer":  "AB（最短杆）；CD（最短杆的对面杆）",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "240+600=840≤400+500=900 满足杆长条件，取最短杆得双曲柄、取其对面杆得双摇杆。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 103 · 原卷图 15fdda0d（读图转录）",
                          "img":  "15fdda0d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "TK2024-02",
                          "year":  2024,
                          "page":  103,
                          "type":  "fill",
                          "stem":  "螺栓连接包括普通螺栓和____连接，其中螺栓与孔有间隙的属于____。",
                          "options":  [

                                      ],
                          "answer":  "铰制孔（配合）；普通螺栓连接",
                          "kp":  "#M04 螺纹联接",
                          "why":  "按孔与杆配合性质分类。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 103 · 原卷图 15fdda0d（读图转录）",
                          "img":  "15fdda0d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2024-03",
                          "year":  2024,
                          "page":  103,
                          "type":  "fill",
                          "stem":  "若螺纹M10的当量摩擦角为6.6°，螺纹升角为3°，能自锁的原因是________________。",
                          "options":  [

                                      ],
                          "answer":  "螺纹升角3°小于当量摩擦角6.6°",
                          "kp":  "#M04 螺纹联接",
                          "why":  "升角小于当量摩擦角即满足自锁条件。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 103 · 原卷图 15fdda0d（读图转录）",
                          "img":  "15fdda0d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2024-04",
                          "year":  2024,
                          "page":  103,
                          "type":  "fill",
                          "stem":  "斜齿圆柱齿轮重合度随螺旋角的增大而____，若螺旋角过大，则会产生较大的____力。",
                          "options":  [

                                      ],
                          "answer":  "增大；轴向",
                          "kp":  "#M01 齿轮几何",
                          "why":  "螺旋角增大轴向分力增大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 103 · 原卷图 15fdda0d（读图转录）",
                          "img":  "15fdda0d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "TK2024-05",
                          "year":  2024,
                          "page":  103,
                          "type":  "fill",
                          "stem":  "摆动导杆机构中，导杆摆角φ=30°，则行程速比系数K=____。",
                          "options":  [

                                      ],
                          "answer":  "1.4",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "K=(180+φ)/(180-φ)=210/150=1.4。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 103 · 原卷图 15fdda0d（读图转录）",
                          "img":  "15fdda0d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "TK2024-06",
                          "year":  2024,
                          "page":  103,
                          "type":  "fill",
                          "stem":  "根据摩擦的性质轴承分为____和____。",
                          "options":  [

                                      ],
                          "answer":  "滑动轴承；滚动轴承",
                          "kp":  "#M02 轴承",
                          "why":  "按摩擦性质分类。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 103 · 原卷图 15fdda0d（读图转录）",
                          "img":  "15fdda0d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "TK2024-07",
                          "year":  2024,
                          "page":  103,
                          "type":  "fill",
                          "stem":  "齿轮常用热处理方法中，通过____和____可获得软齿面齿轮。",
                          "options":  [

                                      ],
                          "answer":  "调质；正火（常化）",
                          "kp":  "#M01 齿轮材料",
                          "why":  "调质与正火属软齿面处理。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 103 · 原卷图 15fdda0d（读图转录）",
                          "img":  "15fdda0d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M01 齿轮材料",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮材料"
                                   ]
                      },
                      {
                          "id":  "TK2024-08",
                          "year":  2024,
                          "page":  103,
                          "type":  "fill",
                          "stem":  "槽轮机构由____、____和机架组成。",
                          "options":  [

                                      ],
                          "answer":  "拨盘（曲柄）；槽轮",
                          "kp":  "#M05 间歇运动机构",
                          "why":  "槽轮机构三大构件。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 103 · 原卷图 15fdda0d（读图转录）",
                          "img":  "15fdda0d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M05 间歇运动机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 间歇运动机构"
                                   ]
                      },
                      {
                          "id":  "TK2024-09",
                          "year":  2024,
                          "page":  103,
                          "type":  "fill",
                          "stem":  "回转件的动平衡是指____________。",
                          "options":  [

                                      ],
                          "answer":  "使回转件各质量产生的离心力的合力与合力偶矩均为零的平衡",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "动平衡的力学含义。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 103 · 原卷图 15fdda0d（读图转录）",
                          "img":  "15fdda0d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "TK2024-10",
                          "year":  2024,
                          "page":  103,
                          "type":  "fill",
                          "stem":  "根据承受的载荷，轴可以分为传动轴、心轴和____三种。",
                          "options":  [

                                      ],
                          "answer":  "转轴",
                          "kp":  "#M02 轴",
                          "why":  "三类轴之转轴。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 103 · 原卷图 15fdda0d（读图转录）",
                          "img":  "15fdda0d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2024-01",
                          "year":  2024,
                          "page":  104,
                          "type":  "choice",
                          "stem":  "曲柄摇杆机构，以摇杆为原动件，曲柄为从动件，当摇杆与连杆共线时为死点。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "死点出现在曲柄与连杆共线时。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 104 · 原卷图 8fba0775（读图转录）",
                          "img":  "8fba0775",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2024-02",
                          "year":  2024,
                          "page":  104,
                          "type":  "choice",
                          "stem":  "当两构件组成滑动副时，其瞬心位于过接触点的法线上。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 机构",
                          "why":  "移动副瞬心在垂直于导路方向的无穷远处。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 104 · 原卷图 8fba0775（读图转录）",
                          "img":  "8fba0775",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M05 机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 机构"
                                   ]
                      },
                      {
                          "id":  "ZT2024-03",
                          "year":  2024,
                          "page":  104,
                          "type":  "choice",
                          "stem":  "尖顶从动件与凸轮轮廓接触，磨损快，常用于受力较大的高速凸轮机构。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 凸轮机构",
                          "why":  "尖顶从动件磨损快，只宜低速轻载。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 104 · 原卷图 8fba0775（读图转录）",
                          "img":  "8fba0775",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2024-04",
                          "year":  2024,
                          "page":  104,
                          "type":  "choice",
                          "stem":  "一对渐开线直齿圆柱齿轮连续传动的条件是重合度大于1。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "重合度大于1即可连续传动。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 104 · 原卷图 8fba0775（读图转录）",
                          "img":  "8fba0775",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "ZT2024-05",
                          "year":  2024,
                          "page":  104,
                          "type":  "choice",
                          "stem":  "若增大带传动包角，能够提高其传递的圆周力。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M06 带传动",
                          "why":  "包角增大提高摩擦力上限。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 104 · 原卷图 8fba0775（读图转录）",
                          "img":  "8fba0775",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2024-06",
                          "year":  2024,
                          "page":  104,
                          "type":  "choice",
                          "stem":  "动平衡在工业上被称为单面平衡。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "动平衡为双面平衡。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 104 · 原卷图 8fba0775（读图转录）",
                          "img":  "8fba0775",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "ZT2024-07",
                          "year":  2024,
                          "page":  104,
                          "type":  "choice",
                          "stem":  "大多蜗杆传动，其传动尺寸由齿面接触疲劳强度决定，此计算的目的是防止蜗轮齿面疲劳点蚀和胶合。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "蜗杆传动按蜗轮齿面接触强度设计。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 104 · 原卷图 8fba0775（读图转录）",
                          "img":  "8fba0775",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2024-08",
                          "year":  2024,
                          "page":  104,
                          "type":  "choice",
                          "stem":  "斜齿轮的法面模数取标准值，端面模数非标准值。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮几何",
                          "why":  "斜齿轮标准值在法面。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 104 · 原卷图 8fba0775（读图转录）",
                          "img":  "8fba0775",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2024-09",
                          "year":  2024,
                          "page":  104,
                          "type":  "choice",
                          "stem":  "螺纹连接中，螺栓结构简单，常用于较厚被连接件，且不宜经常拆卸的场合。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M04 螺纹联接",
                          "why":  "较厚件且少拆卸多用双头螺柱连接。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 104 · 原卷图 8fba0775（读图转录）",
                          "img":  "8fba0775",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2024-10",
                          "year":  2024,
                          "page":  104,
                          "type":  "choice",
                          "stem":  "带传动不能保证准确的传动比，其原因是在带传动上存在打滑。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M06 带传动",
                          "why":  "原因是弹性滑动而非打滑。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 104 · 原卷图 8fba0775（读图转录）",
                          "img":  "8fba0775",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2024-11",
                          "year":  2024,
                          "page":  105,
                          "type":  "choice",
                          "stem":  "按接触疲劳强度公式设计齿轮时，[σH]应该取____计算。",
                          "options":  [
                                          "A. [σH]1",
                                          "B. [σH]2",
                                          "C. max{[σH]1,[σH]2}",
                                          "D. min{[σH]1,[σH]2}"
                                      ],
                          "answer":  "D",
                          "kp":  "#M01 齿轮强度",
                          "why":  "两轮许用接触应力取较小值计算。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 105 · 原卷图 c37aa96d（读图转录）",
                          "img":  "c37aa96d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M01 齿轮强度",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮强度"
                                   ]
                      },
                      {
                          "id":  "ZT2024-12",
                          "year":  2024,
                          "page":  105,
                          "type":  "choice",
                          "stem":  "普通V带传动，根据____选择。",
                          "options":  [
                                          "A. 计算功率",
                                          "B. 小带轮的转速",
                                          "C. 带的功率和小带轮转速",
                                          "D. 带的速度"
                                      ],
                          "answer":  "C",
                          "kp":  "#M06 带传动",
                          "why":  "按计算功率与小轮转速选带型。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 105 · 原卷图 c37aa96d（读图转录）",
                          "img":  "c37aa96d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2024-13",
                          "year":  2024,
                          "page":  105,
                          "type":  "choice",
                          "stem":  "渐开线齿廓上基圆上的压力角____。",
                          "options":  [
                                          "A. 相等；不等于零",
                                          "B. 相等；等于零",
                                          "C. 不相等；不等于零",
                                          "D. 不相等；不等于零"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 齿轮几何",
                          "why":  "基圆上压力角恒为零。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 105 · 原卷图 c37aa96d（读图转录）",
                          "img":  "c37aa96d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2024-14",
                          "year":  2024,
                          "page":  105,
                          "type":  "choice",
                          "stem":  "在闭式软齿面减速齿轮传动中，若小齿轮采用45钢调质处理，大齿轮采用45钢正火处理，则它们的齿面接触应力____。",
                          "options":  [
                                          "A. σH1\u003eσH2",
                                          "B. σH1\u003cσH2",
                                          "C. σH1=σH2",
                                          "D. 不确定"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 齿轮强度",
                          "why":  "一对啮合齿轮接触应力相等。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 105 · 原卷图 c37aa96d（读图转录）",
                          "img":  "c37aa96d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M01 齿轮强度",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮强度"
                                   ]
                      },
                      {
                          "id":  "ZT2024-15",
                          "year":  2024,
                          "page":  105,
                          "type":  "choice",
                          "stem":  "如图所示的偏置曲柄滑块机构，标注的∠1为____。",
                          "options":  [
                                          "A. 传动角",
                                          "B. 压力角",
                                          "C. 螺旋角",
                                          "D. 导程角"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "该角为力方向与速度方向夹角即压力角。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 105 · 原卷图 c37aa96d（读图转录）",
                          "img":  "c37aa96d",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2024-16",
                          "year":  2024,
                          "page":  105,
                          "type":  "choice",
                          "stem":  "一对标准直齿圆柱齿轮正确啮合的条件是____。",
                          "options":  [
                                          "A. 模数相等，压力角相等",
                                          "B. 模数相等，压力角不等",
                                          "C. 模数不等，压力角相等",
                                          "D. 模数不等，压力角不等"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "正确啮合条件。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 105 · 原卷图 a162fd37（读图转录）",
                          "img":  "a162fd37",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "ZT2024-18",
                          "year":  2024,
                          "page":  106,
                          "type":  "fill",
                          "stem":  "斜齿圆锥齿轮弯曲强度计算公式中应力修正系数Ysa根据________确定。",
                          "options":  [

                                      ],
                          "answer":  "当量齿数（及变位系数）",
                          "kp":  "#M01 齿轮强度",
                          "why":  "Ysa 按当量齿数查取；原卷该题未印选项。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 106 · 原卷图 a162fd37（读图转录）",
                          "img":  "a162fd37",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M01 齿轮强度",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮强度"
                                   ]
                      },
                      {
                          "id":  "ZT2024-19",
                          "year":  2024,
                          "page":  106,
                          "type":  "choice",
                          "stem":  "________不属于利用附加摩擦力防松。",
                          "options":  [
                                          "A. 弹簧垫圈",
                                          "B. 对顶螺母",
                                          "C. 尼龙圈锁紧螺母",
                                          "D. 止动垫片"
                                      ],
                          "answer":  "D",
                          "kp":  "#M04 螺纹联接",
                          "why":  "止动垫片属机械防松。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 106 · 原卷图 a162fd37（读图转录）",
                          "img":  "a162fd37",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2024-20",
                          "year":  2024,
                          "page":  106,
                          "type":  "fill",
                          "stem":  "蜗杆受到圆周力800N，轴向力3750N，径向力1364N，则蜗轮受到的圆周力为________。",
                          "options":  [

                                      ],
                          "answer":  "3750N",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "蜗轮圆周力等于蜗杆轴向力；原卷该题未印选项。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 106 · 原卷图 a162fd37（读图转录）",
                          "img":  "a162fd37",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2024-21",
                          "year":  2024,
                          "page":  106,
                          "type":  "choice",
                          "stem":  "要求轴上零件定位准确，不便于拆装的轴应做成________。",
                          "options":  [
                                          "A. 光轴",
                                          "B. 阶梯轴",
                                          "C. 挠性钢丝轴",
                                          "D. 曲轴"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴",
                          "why":  "阶梯轴便于轴向定位。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 106 · 原卷图 a162fd37（读图转录）",
                          "img":  "a162fd37",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2024-22",
                          "year":  2024,
                          "page":  106,
                          "type":  "choice",
                          "stem":  "凸轮机构发生自锁的原因是________。",
                          "options":  [
                                          "A. 压力角过大",
                                          "B. 驱动力矩过大"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 凸轮机构",
                          "why":  "压力角过大致使有效分力不足而自锁。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 106 · 原卷图 a162fd37（读图转录）",
                          "img":  "a162fd37",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2024-23",
                          "year":  2024,
                          "page":  106,
                          "type":  "choice",
                          "stem":  "普通螺栓的公称直径为________。",
                          "options":  [
                                          "A. 大径",
                                          "B. 中径",
                                          "C. 小径",
                                          "D. 半径"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 螺纹联接",
                          "why":  "公称直径指大径。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 106 · 原卷图 a162fd37（读图转录）",
                          "img":  "a162fd37",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2024-24",
                          "year":  2024,
                          "page":  106,
                          "type":  "fill",
                          "stem":  "蜗杆传动正确啮合条件为________。",
                          "options":  [

                                      ],
                          "answer":  "蜗杆轴向模数=蜗轮端面模数、蜗杆轴向压力角=蜗轮端面压力角，且旋向相同",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "中间平面内模数与压力角对应相等；原卷该题未印选项。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 106 · 原卷图 a162fd37（读图转录）",
                          "img":  "a162fd37",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2024-25",
                          "year":  2024,
                          "page":  106,
                          "type":  "fill",
                          "stem":  "滚动轴承，额定动载荷和额定寿命的关系为________。",
                          "options":  [

                                      ],
                          "answer":  "L10=(C/P)^ε（寿命与载荷比的ε次方成正比，球轴承ε=3、滚子轴承ε=10/3）",
                          "kp":  "#M02 轴承",
                          "why":  "额定动载荷与寿命的经验关系式；原卷该题未印选项。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2024 年真题卷 · 印刷页 106 · 原卷图 a162fd37（读图转录）",
                          "img":  "a162fd37",
                          "sub":  "专业课",
                          "topic":  "真题2024·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "TK2025-01",
                          "year":  2025,
                          "page":  111,
                          "type":  "fill",
                          "stem":  "某普通V带传动，传递功率P=7.5kW，带速v=10m/s，紧边拉力是松边拉力的两倍，即F1=2F2，则紧边拉力F1=________。",
                          "options":  [

                                      ],
                          "answer":  "1500N",
                          "kp":  "#M06 带传动",
                          "why":  "P=(F1-F2)v → 7500=F2×10 → F2=750N，F1=1500N。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 111 · 原卷图 933dccc7（读图转录）",
                          "img":  "933dccc7",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "TK2025-02",
                          "year":  2025,
                          "page":  111,
                          "type":  "fill",
                          "stem":  "普通平键的标记为：GB/T 1096 键16×10×100，表示其键高为________，键长为________。",
                          "options":  [

                                      ],
                          "answer":  "10mm；100mm",
                          "kp":  "#M03 键联接",
                          "why":  "标记顺序为宽×高×长。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 111 · 原卷图 933dccc7（读图转录）",
                          "img":  "933dccc7",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M03 键联接",
                          "df":  100,
                          "tags":  [
                                       "#M03 键联接"
                                   ]
                      },
                      {
                          "id":  "TK2025-03",
                          "year":  2025,
                          "page":  111,
                          "type":  "fill",
                          "stem":  "三角形螺纹主要有________和________。前者多用于________连接，后者用于各种管道的________连接。",
                          "options":  [

                                      ],
                          "answer":  "粗牙螺纹；细牙螺纹；一般（普通）紧固；紧密（密封）",
                          "kp":  "#M04 螺纹联接",
                          "why":  "细牙螺纹自锁好、密封性好。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 111 · 原卷图 933dccc7（读图转录）",
                          "img":  "933dccc7",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2025-04",
                          "year":  2025,
                          "page":  111,
                          "type":  "fill",
                          "stem":  "一对蜗轮蜗杆传动，蜗杆的圆周力Ft=800N、轴向力Fa=3750N、径向力Fr=1364N，则对应蜗轮的圆周力Ft=________，轴向力Fa=________。",
                          "options":  [

                                      ],
                          "answer":  "Ft2=3750N；Fa2=800N",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "蜗轮圆周力等于蜗杆轴向力，蜗轮轴向力等于蜗杆圆周力。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 111 · 原卷图 933dccc7（读图转录）",
                          "img":  "933dccc7",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "TK2025-05",
                          "year":  2025,
                          "page":  111,
                          "type":  "fill",
                          "stem":  "在直齿圆柱齿轮传动与斜齿圆柱齿轮传动中，斜齿圆柱齿轮传动比直齿圆柱齿轮传动的重合度____，斜齿轮比直齿圆柱齿轮承载能力要____。",
                          "options":  [

                                      ],
                          "answer":  "大；强（大）",
                          "kp":  "#M01 齿轮传动",
                          "why":  "斜齿轮重合度大、承载能力高。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 111 · 原卷图 933dccc7（读图转录）",
                          "img":  "933dccc7",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M01 齿轮传动",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮传动"
                                   ]
                      },
                      {
                          "id":  "TK2025-06",
                          "year":  2025,
                          "page":  111,
                          "type":  "fill",
                          "stem":  "铰制孔用螺栓连接中，螺栓的外径等于螺纹孔的内径，螺栓杆与孔是____配合，承受____向载荷。",
                          "options":  [

                                      ],
                          "answer":  "过渡（过盈）；横向",
                          "kp":  "#M04 螺纹联接",
                          "why":  "铰制孔螺栓靠杆与孔挤压承受横向载荷。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 111 · 原卷图 933dccc7（读图转录）",
                          "img":  "933dccc7",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "TK2025-08",
                          "year":  2025,
                          "page":  111,
                          "type":  "fill",
                          "stem":  "圆柱齿轮啮合时，一对轮齿啮合的起始点是从动轮的________与啮合线的交点，终止点是主动轮________与啮合线的交点。",
                          "options":  [

                                      ],
                          "answer":  "齿顶圆；齿顶圆",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "啮合起止点均为齿顶圆与啮合线交点。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 111 · 原卷图 933dccc7（读图转录）",
                          "img":  "933dccc7",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "ZT2025-01",
                          "year":  2025,
                          "page":  112,
                          "type":  "choice",
                          "stem":  "任何平面四杆机构位于死点位置时，都是不利的，应当尽量避免。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "死点可用于夹紧、锁止等场合，并非都是不利。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 112 · 原卷图 336de3ad（读图转录）",
                          "img":  "336de3ad",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2025-03",
                          "year":  2025,
                          "page":  112,
                          "type":  "choice",
                          "stem":  "单个齿轮既有分度圆，又有节圆。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 齿轮几何",
                          "why":  "节圆是啮合时才有的概念，单个齿轮无节圆。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 112 · 原卷图 336de3ad（读图转录）",
                          "img":  "336de3ad",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2025-04",
                          "year":  2025,
                          "page":  112,
                          "type":  "choice",
                          "stem":  "主轴的平均转速越大，主轴需要加的飞轮的转动惯量越大。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "转速越高所需飞轮惯量越小。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 112 · 原卷图 336de3ad（读图转录）",
                          "img":  "336de3ad",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "ZT2025-05",
                          "year":  2025,
                          "page":  112,
                          "type":  "choice",
                          "stem":  "凸轮机构中，从动件在升程时，若按简谐运动规律运动，会产生柔性冲击。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 凸轮机构",
                          "why":  "简谐运动加速度有限突变，产生柔性冲击。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 112 · 原卷图 336de3ad（读图转录）",
                          "img":  "336de3ad",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2025-06",
                          "year":  2025,
                          "page":  112,
                          "type":  "choice",
                          "stem":  "一对直齿圆锥齿轮正确啮合的条件是两轮模数相等、压力角相等和两轮的锥距相等。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 齿轮啮合",
                          "why":  "锥齿轮啮合条件是大端模数与压力角相等且锥顶重合。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 112 · 原卷图 336de3ad（读图转录）",
                          "img":  "336de3ad",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M01 齿轮啮合",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮啮合"
                                   ]
                      },
                      {
                          "id":  "ZT2025-07",
                          "year":  2025,
                          "page":  112,
                          "type":  "choice",
                          "stem":  "当采用套筒作轴向定位时，为了使零件的端面靠紧定位面，安装零件的轴段长度应小于零件轮毂的宽度。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 轴",
                          "why":  "轴段略短才能保证端面靠紧。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 112 · 原卷图 336de3ad（读图转录）",
                          "img":  "336de3ad",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2025-08",
                          "year":  2025,
                          "page":  112,
                          "type":  "choice",
                          "stem":  "正弦加速度运动规律不会产生柔性冲击。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 凸轮机构",
                          "why":  "正弦加速度既无刚性也无柔性冲击。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 112 · 原卷图 336de3ad（读图转录）",
                          "img":  "336de3ad",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2025-09",
                          "year":  2025,
                          "page":  112,
                          "type":  "choice",
                          "stem":  "平面连杆机构的急回特性可以用以缩短非工作时间，提高生产效率。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "急回缩短空回时间。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 112 · 原卷图 336de3ad（读图转录）",
                          "img":  "336de3ad",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2025-10",
                          "year":  2025,
                          "page":  112,
                          "type":  "choice",
                          "stem":  "在基本额定动载荷C作用下，滚动轴承的基本额定寿命为10^6转时，其可靠度为99%。",
                          "options":  [
                                          "A. 正确",
                                          "B. 错误"
                                      ],
                          "answer":  "B",
                          "kp":  "#M02 轴承",
                          "why":  "基本额定寿命对应可靠度90%。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 112 · 原卷图 336de3ad（读图转录）",
                          "img":  "336de3ad",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "TK2025-09",
                          "year":  2025,
                          "page":  112,
                          "type":  "fill",
                          "stem":  "四杆机构的急回运动特性可以由行程速比系数K和极位夹角θ表示，极位夹角θ越____，急回运动越显著。",
                          "options":  [

                                      ],
                          "answer":  "大",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "K随θ增大而增大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 112 · 原卷图 336de3ad（读图转录）",
                          "img":  "336de3ad",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "TK2025-10",
                          "year":  2025,
                          "page":  112,
                          "type":  "fill",
                          "stem":  "凸轮机构中，基圆半径____，压力角____，传动效率越高。",
                          "options":  [

                                      ],
                          "answer":  "越大；越小",
                          "kp":  "#M05 凸轮机构",
                          "why":  "基圆大则压力角小、效率高。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 112 · 原卷图 336de3ad（读图转录）",
                          "img":  "336de3ad",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ]
                      },
                      {
                          "id":  "ZT2025-11",
                          "year":  2025,
                          "page":  113,
                          "type":  "choice",
                          "stem":  "V带轮是采用实心式、轮辐式还是腹板式，取决于________。",
                          "options":  [
                                          "A. 带的横截面尺寸",
                                          "B. 传递的功率",
                                          "C. 带轮的直径",
                                          "D. 带的线速度"
                                      ],
                          "answer":  "C",
                          "kp":  "#M06 带传动",
                          "why":  "带轮结构形式按直径大小选定。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 113 · 原卷图 36acabf4（读图转录）",
                          "img":  "36acabf4",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2025-12",
                          "year":  2025,
                          "page":  113,
                          "type":  "choice",
                          "stem":  "轴肩固定时，为保证轴上零件与轴肩端面接触良好，轴上零件轮毂孔的倒角高度C与轴肩圆角半径r0之间的关系是________。",
                          "options":  [
                                          "A. C≤r0",
                                          "B. C＜r0",
                                          "C. C＝r0",
                                          "D. C＞r0"
                                      ],
                          "answer":  "D",
                          "kp":  "#M02 轴",
                          "why":  "倒角高度须大于轴肩圆角半径才能靠紧。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 113 · 原卷图 36acabf4（读图转录）",
                          "img":  "36acabf4",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2025-13",
                          "year":  2025,
                          "page":  113,
                          "type":  "choice",
                          "stem":  "经计算强度时，为简化计算，一般将对直齿锥齿轮传动转化为其________的一对当量直齿轮进行强度计算。",
                          "options":  [
                                          "A. 大端",
                                          "B. 小端",
                                          "C. 齿宽中点",
                                          "D. 距大端1/3齿宽"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 锥齿轮受力",
                          "why":  "锥齿轮按齿宽中点当量直齿轮计算。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 113 · 原卷图 36acabf4（读图转录）",
                          "img":  "36acabf4",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M01 锥齿轮受力",
                          "df":  100,
                          "tags":  [
                                       "#M01 锥齿轮受力"
                                   ]
                      },
                      {
                          "id":  "ZT2025-14",
                          "year":  2025,
                          "page":  113,
                          "type":  "choice",
                          "stem":  "现有两个标准直齿圆柱齿轮。齿轮1：m1=3mm，z1=25；齿轮2：m2=4mm，z2=48。则它们的齿形系数________。",
                          "options":  [
                                          "A. Y_Fa1＞Y_Fa2",
                                          "B. Y_Fa1＜Y_Fa2",
                                          "C. Y_Fa1＝Y_Fa2",
                                          "D. 不确定"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮强度",
                          "why":  "YFa 只随齿数增大而减小，z1\u003cz2 故 YFa1\u003eYFa2。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 113 · 原卷图 36acabf4（读图转录）",
                          "img":  "36acabf4",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M01 齿轮强度",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮强度"
                                   ]
                      },
                      {
                          "id":  "ZT2025-15",
                          "year":  2025,
                          "page":  113,
                          "type":  "choice",
                          "stem":  "在下列铰链四杆机构中，若以BC杆为机架，则能形成双摇杆机构的是________。①AB=70mm，BC=95mm，CD=80mm，AD=60mm ②AB=80mm，BC=85mm，CD=70mm，AD=55mm ③AB=70mm，BC=60mm，CD=80mm，AD=85mm ④AB=70mm，BC=85mm，CD=80mm，AD=60mm",
                          "options":  [
                                          "A. ①②③",
                                          "B. ②③④",
                                          "C. ①②④",
                                          "D. ①③④"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "①不满足杆长条件；②④满足但机架为最短杆对边，均为双摇杆。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 113 · 原卷图 36acabf4（读图转录）",
                          "img":  "36acabf4",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ]
                      },
                      {
                          "id":  "ZT2025-16",
                          "year":  2025,
                          "page":  114,
                          "type":  "choice",
                          "stem":  "V带传动中，主动带轮圆周速度为v1，从动带轮圆周速度为v2，带速为v，则它们之间存在的关系是________。",
                          "options":  [
                                          "A. v1=v2=v",
                                          "B. v1＞v＞v2",
                                          "C. v1＜v＜v2",
                                          "D. v＞v1＞v2"
                                      ],
                          "answer":  "B",
                          "kp":  "#M06 带传动",
                          "why":  "弹性滑动使带速介于两轮圆周速度之间。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 114 · 原卷图 c7f4878e（读图转录）",
                          "img":  "c7f4878e",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2025-17",
                          "year":  2025,
                          "page":  114,
                          "type":  "choice",
                          "stem":  "渐开线齿轮采用齿条型刀具加工时，刀具向轮坯中心靠近，是采用________。",
                          "options":  [
                                          "A. 正变位",
                                          "B. 负变位",
                                          "C. 零变位",
                                          "D. 无法确定"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 变位齿轮",
                          "why":  "刀具靠近轮心为负变位。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 114 · 原卷图 c7f4878e（读图转录）",
                          "img":  "c7f4878e",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M01 变位齿轮",
                          "df":  100,
                          "tags":  [
                                       "#M01 变位齿轮"
                                   ]
                      },
                      {
                          "id":  "ZT2025-18",
                          "year":  2025,
                          "page":  114,
                          "type":  "choice",
                          "stem":  "滚动轴承周向固定应采用________配合制。",
                          "options":  [
                                          "A. 内圈与轴和外圈与轴承座孔都采用基孔制",
                                          "B. 内圈与轴和外圈与轴承座孔都采用基轴制",
                                          "C. 内圈与轴采用基孔制，外圈与轴承座孔采用基轴制",
                                          "D. 内圈与轴采用基轴制，外圈与轴承座孔采用基孔制"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 轴承配合",
                          "why":  "内圈随轴转用基孔制，外圈用基轴制。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 114 · 原卷图 c7f4878e（读图转录）",
                          "img":  "c7f4878e",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M02 轴承配合",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承配合"
                                   ]
                      },
                      {
                          "id":  "ZT2025-19",
                          "year":  2025,
                          "page":  114,
                          "type":  "choice",
                          "stem":  "一对圆柱齿轮传动，小齿轮分度圆直径d1=50mm，齿宽b1=55mm，大齿轮分度圆直径d2=90mm，齿宽b2=50mm，则齿宽系数φd=________。",
                          "options":  [
                                          "A. 1.1",
                                          "B. 5/9",
                                          "C. 1",
                                          "D. 1.3"
                                      ],
                          "answer":  "C",
                          "kp":  "#M01 齿轮设计",
                          "why":  "φd=b2/d1=50/50=1（取小轮齿宽与大轮齿宽较小者）。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 114 · 原卷图 c7f4878e（读图转录）",
                          "img":  "c7f4878e",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M01 齿轮设计",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮设计"
                                   ]
                      },
                      {
                          "id":  "ZT2025-20",
                          "year":  2025,
                          "page":  114,
                          "type":  "choice",
                          "stem":  "螺纹连接防松方法有多种，其中在连接中采用弹簧垫圈是属于________的一种。",
                          "options":  [
                                          "A. 摩擦防松",
                                          "B. 机械防松",
                                          "C. 粘合防松",
                                          "D. 冲点防松"
                                      ],
                          "answer":  "A",
                          "kp":  "#M04 螺纹联接",
                          "why":  "弹簧垫圈靠压紧力产生摩擦防松。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 114 · 原卷图 c7f4878e（读图转录）",
                          "img":  "c7f4878e",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2025-21",
                          "year":  2025,
                          "page":  114,
                          "type":  "choice",
                          "stem":  "代号为3108、3208、3308的滚动轴承________不同。",
                          "options":  [
                                          "A. 外径",
                                          "B. 内径",
                                          "C. 精度",
                                          "D. 类型"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 轴承代号",
                          "why":  "内径均为40mm，宽度与直径系列不同故外径不同。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 114 · 原卷图 c7f4878e（读图转录）",
                          "img":  "c7f4878e",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M02 轴承代号",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承代号"
                                   ]
                      },
                      {
                          "id":  "ZT2025-22",
                          "year":  2025,
                          "page":  114,
                          "type":  "choice",
                          "stem":  "轮系中的惰轮常用于改变________。",
                          "options":  [
                                          "A. 轮系传动比的大小",
                                          "B. 从动齿轮的转向",
                                          "C. 传动距离",
                                          "D. 以上都是"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 轮系",
                          "why":  "惰轮不改变传动比大小，只改变转向。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 114 · 原卷图 c7f4878e（读图转录）",
                          "img":  "c7f4878e",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M01 轮系",
                          "df":  100,
                          "tags":  [
                                       "#M01 轮系"
                                   ]
                      },
                      {
                          "id":  "ZT2025-23",
                          "year":  2025,
                          "page":  114,
                          "type":  "choice",
                          "stem":  "斜齿圆柱齿轮的模数和压力角，在________上取标准值。",
                          "options":  [
                                          "A. 端面",
                                          "B. 法面",
                                          "C. 轴面",
                                          "D. 任意面"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 齿轮几何",
                          "why":  "斜齿轮标准值在法面。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 114 · 原卷图 1b8aff10（读图转录）",
                          "img":  "1b8aff10",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M01 齿轮几何",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮几何"
                                   ]
                      },
                      {
                          "id":  "ZT2025-24",
                          "year":  2025,
                          "page":  115,
                          "type":  "choice",
                          "stem":  "下述热处理方式中，不能获得硬齿面的是________。",
                          "options":  [
                                          "A. 调质",
                                          "B. 表面淬火",
                                          "C. 渗碳淬火",
                                          "D. 渗氮"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮材料",
                          "why":  "调质属软齿面处理。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 115 · 原卷图 1b8aff10（读图转录）",
                          "img":  "1b8aff10",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M01 齿轮材料",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮材料"
                                   ]
                      },
                      {
                          "id":  "ZT2025-25",
                          "year":  2025,
                          "page":  115,
                          "type":  "choice",
                          "stem":  "带传动产生弹性滑动的原因是________。",
                          "options":  [
                                          "A. 带与带轮间的摩擦系数较小",
                                          "B. 带绕过带轮产生了离心力",
                                          "C. 带的紧边和松边存在拉力差",
                                          "D. 带传递的中心距大"
                                      ],
                          "answer":  "C",
                          "kp":  "#M06 带传动",
                          "why":  "紧松边拉力差使带产生弹性变形差。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2025 年真题卷 · 印刷页 115 · 原卷图 1b8aff10（读图转录）",
                          "img":  "1b8aff10",
                          "sub":  "专业课",
                          "topic":  "真题2025·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2015-12",
                          "year":  2015,
                          "page":  51,
                          "type":  "choice",
                          "stem":  "链传动中，链节数最好为____，而链轮齿数为____。",
                          "options":  [
                                          "A. 奇数，偶数",
                                          "B. 偶数，奇数",
                                          "C. 5 的倍数，偶数"
                                      ],
                          "answer":  "B",
                          "kp":  "#M06 链传动",
                          "why":  "链节数取偶数可避免过渡链节（附加弯矩、降低承载）；链轮齿数取奇数使链节与轮齿磨损均匀。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷（828）· 本机页序 p51 · 原卷第 12／15 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M06 链传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 链传动"
                                   ],
                          "note":  "2015 卷第 12 题与第 15 题同卷重复（措辞仅差「链节数」／「链条的节数」），按去重口径合并为 1 条，考次＝2；src 含 p51 第 12／15 题。"
                      },
                      {
                          "id":  "ZT2015-14",
                          "year":  2015,
                          "page":  51,
                          "type":  "choice",
                          "stem":  "在下列四种型号的滚动轴承中，只能承受径向载荷的是____。",
                          "options":  [
                                          "A. N208",
                                          "B. 31208",
                                          "C. 6208",
                                          "D. 5208"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 轴承",
                          "why":  "N 前缀为圆柱滚子轴承，只承受径向载荷；31208 圆锥滚子、6208 深沟球均可承受轴向分量。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2015 年真题卷（828）· 本机页序 p51 · 原卷第 14 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2015·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "TK2016-06",
                          "year":  2016,
                          "page":  55,
                          "type":  "fill",
                          "stem":  "已知减速直齿锥齿轮传动，小齿轮所受三个分力的大小分别为：Ft1＝2360N，Fa1＝272N，Fr1＝816N，试分别指出大齿轮 Ft2＝____N，Fa2＝____N，Fr2＝____N。",
                          "options":  [

                                      ],
                          "answer":  "2360；816；272",
                          "kp":  "#M01 齿轮设计",
                          "why":  "直齿锥齿轮主从动轮：圆周力等值反向 Ft2＝Ft1；从动轮轴向力＝主动轮径向力 Fa2＝Fr1；从动轮径向力＝主动轮轴向力 Fr2＝Fa1。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 6 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M01 齿轮设计",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮设计"
                                   ]
                      },
                      {
                          "id":  "TK2016-09",
                          "year":  2016,
                          "page":  55,
                          "type":  "fill",
                          "stem":  "有一个角接触球轴承，宽度系列为窄系列、直径系列为中系列，内径为 55mm，接触角 25°，公差等级 P4 级，其代号为____。",
                          "options":  [

                                      ],
                          "answer":  "7311AC/P4",
                          "kp":  "#M02 轴承代号",
                          "why":  "7＝角接触球轴承；中系列＋窄系列＝31；内径 55÷5＝11；25°＝AC；公差＝/P4。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 9 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M02 轴承代号",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承代号"
                                   ]
                      },
                      {
                          "id":  "ZT2016-18",
                          "year":  2016,
                          "page":  55,
                          "type":  "choice",
                          "stem":  "紧螺栓联接强度计算时，螺栓所受轴向拉力乘 1.3 是为____。",
                          "options":  [
                                          "A. 防止松脱",
                                          "B. 保证足够的预紧力",
                                          "C. 计入扭转剪应力",
                                          "D. 计入弯曲应力"
                                      ],
                          "answer":  "C",
                          "kp":  "#M04 螺纹联接",
                          "why":  "拧紧时螺栓同时受拉伸与扭转剪应力，用 1.3 把拉应力放大计入复合作用（当量应力法）。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 1 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M04 螺纹联接",
                          "df":  100,
                          "tags":  [
                                       "#M04 螺纹联接"
                                   ]
                      },
                      {
                          "id":  "ZT2016-19",
                          "year":  2016,
                          "page":  55,
                          "type":  "choice",
                          "stem":  "齿面接触疲劳强度设计准则是针对齿轮____建立的。",
                          "options":  [
                                          "A. 齿面点蚀",
                                          "B. 齿面胶合",
                                          "C. 齿面磨损",
                                          "D. 齿面变形"
                                      ],
                          "answer":  "A",
                          "kp":  "#M01 齿轮强度",
                          "why":  "接触疲劳以齿面点蚀为判据；弯曲疲劳以轮齿折断为判据。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 2 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M01 齿轮强度",
                          "df":  100,
                          "tags":  [
                                       "#M01 齿轮强度"
                                   ]
                      },
                      {
                          "id":  "ZT2016-20",
                          "year":  2016,
                          "page":  55,
                          "type":  "choice",
                          "stem":  "在工业上，回转件的动平衡又称为____。",
                          "options":  [
                                          "A. 单面平衡",
                                          "B. 双面平衡",
                                          "C. 双向平衡",
                                          "D. 动态主矢平衡"
                                      ],
                          "answer":  "B",
                          "kp":  "#M05 机械平衡与调速",
                          "why":  "动平衡需两个校正平面，称双面平衡；静平衡为单面平衡。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 3 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M05 机械平衡与调速",
                          "df":  100,
                          "tags":  [
                                       "#M05 机械平衡与调速"
                                   ]
                      },
                      {
                          "id":  "ZT2016-21",
                          "year":  2016,
                          "page":  55,
                          "type":  "choice",
                          "stem":  "普通平键是靠键的____来传递扭矩。",
                          "options":  [
                                          "A. 上表面",
                                          "B. 下表面",
                                          "C. 侧面",
                                          "D. 两侧面"
                                      ],
                          "answer":  "D",
                          "kp":  "#M03 键联接",
                          "why":  "平键工作面为两侧面，靠侧面与键槽侧壁挤压传载；上表面与轮毂槽底有间隙（底面只定位）。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 5 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M03 键联接",
                          "df":  100,
                          "tags":  [
                                       "#M03 键联接"
                                   ]
                      },
                      {
                          "id":  "ZT2016-22",
                          "year":  2016,
                          "page":  55,
                          "type":  "choice",
                          "stem":  "对于转轴的强度计算，应按____计算。",
                          "options":  [
                                          "A. 弯矩",
                                          "B. 扭矩",
                                          "C. 弯矩、扭矩合成的当量弯矩",
                                          "D. 力矩"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 轴",
                          "why":  "转轴同时受弯矩与扭矩，按当量弯矩作弯扭合成强度计算。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 6 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ]
                      },
                      {
                          "id":  "ZT2016-23",
                          "year":  2016,
                          "page":  55,
                          "type":  "choice",
                          "stem":  "轮系运动时，各轮轴线位置固定不动的称为____。",
                          "options":  [
                                          "A. 周转轮系",
                                          "B. 定轴轮系",
                                          "C. 行星轮系",
                                          "D. 复合轮系"
                                      ],
                          "answer":  "B",
                          "kp":  "#M01 轮系",
                          "why":  "各轮轴线位置固定＝定轴轮系；有轴线绕另一轴线回转＝周转（行星）轮系。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 7 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M01 轮系",
                          "df":  100,
                          "tags":  [
                                       "#M01 轮系"
                                   ]
                      },
                      {
                          "id":  "ZT2016-24",
                          "year":  2016,
                          "page":  55,
                          "type":  "choice",
                          "stem":  "铰链四杆机构 ABCD 中，AB 为曲柄，CD 为摇杆，BC 为连杆。若 l_AB＝30mm，l_BC＝70mm，l_CD＝80mm，则机架最大杆长为____。",
                          "options":  [
                                          "A. 80mm",
                                          "B. 100mm",
                                          "C. 120mm",
                                          "D. 150mm"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 平面连杆机构",
                          "why":  "曲柄存在条件：最短杆为连架杆，且最短＋最长 ≤ 其余两杆之和。设机架 x，x＞80 时 30＋x ≤ 70＋80 ⇒ x ≤ 120；取等时 30＋120＝150＝70＋80，按 ≤ 判据成立。",
                          "confidence":  "中",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 8 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M05 平面连杆机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 平面连杆机构"
                                   ],
                          "note":  "曲柄条件按「最短＋最长 ≤ 其余两杆之和」取等成立 ⇒ C（120mm）；若按严格小于，最大整数 119mm，选项中最大可行值为 B（100mm）。司南枚举验算两版均闭合（≤：40–120；\u003c：41–119）。按教材 ≤ 判据定 C。"
                      },
                      {
                          "id":  "ZT2016-25",
                          "year":  2016,
                          "page":  55,
                          "type":  "choice",
                          "stem":  "设计滚子推杆盘形凸轮廓线时，其最小曲率半径 ρ_min____滚子半径 r_r 时，凸轮的实际廓线为一平滑曲线。",
                          "options":  [
                                          "A. 等于",
                                          "B. 小于",
                                          "C. 大于",
                                          "D. 小于零"
                                      ],
                          "answer":  "C",
                          "kp":  "#M05 凸轮机构",
                          "why":  "ρ_min＞r_r 实际廓线平滑；＝时出现尖点；＜时实际廓线相交、运动失真。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 9 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M05 凸轮机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 凸轮机构"
                                   ],
                          "note":  "11-10 跨卷同题留痕：三卷考同一条件 r_r＜ρ_min，但**问法主语与选项顺序各异，答案字母跟着变**。「2016 卷第 9 题问「ρmin____rr」，选项序 A 等于／B 小于／C 大于／D 小于零 ⇒ 答案 **C（大于）**。」库内本条答案经逐字核字确认无误；出卷／背诵一律照抄本卷选项，禁止按「同题」换算字母。"
                      },
                      {
                          "id":  "ZT2016-26",
                          "year":  2016,
                          "page":  55,
                          "type":  "choice",
                          "stem":  "在以下间歇运动机构中，____机构更适应于高速工作情况。",
                          "options":  [
                                          "A. 凸轮间歇运动",
                                          "B. 不完全齿轮",
                                          "C. 棘轮",
                                          "D. 槽轮"
                                      ],
                          "answer":  "A",
                          "kp":  "#M05 间歇运动机构",
                          "why":  "凸轮式间歇机构无刚性冲击、分度精确，适应高速；棘轮／槽轮／不完全齿轮冲击大。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 10 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M05 间歇运动机构",
                          "df":  100,
                          "tags":  [
                                       "#M05 间歇运动机构"
                                   ]
                      },
                      {
                          "id":  "ZT2016-27",
                          "year":  2016,
                          "page":  55,
                          "type":  "choice",
                          "stem":  "蜗杆传动的效率一般较其它传动低，这主要是因为蜗杆在传动中____。",
                          "options":  [
                                          "A. 蜗轮速度很低",
                                          "B. 蜗杆头数很少",
                                          "C. 蜗杆蜗轮相对滑动速度很大",
                                          "D. 传动比大"
                                      ],
                          "answer":  "C",
                          "kp":  "#M04 蜗杆传动",
                          "why":  "齿面相对滑动速度大、摩擦损失大，是效率低的根本原因。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 11 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M04 蜗杆传动",
                          "df":  100,
                          "tags":  [
                                       "#M04 蜗杆传动"
                                   ]
                      },
                      {
                          "id":  "ZT2016-28",
                          "year":  2016,
                          "page":  55,
                          "type":  "choice",
                          "stem":  "在下列四种型号的滚动轴承中，只能承受径向载荷的是____。",
                          "options":  [
                                          "A. 6208",
                                          "B. 31208",
                                          "C. N208",
                                          "D. 5208"
                                      ],
                          "answer":  "C",
                          "kp":  "#M02 轴承",
                          "why":  "N＝圆柱滚子轴承，只受径向；6208 深沟球、31208 圆锥滚子可受轴向分量。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 13 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ]
                      },
                      {
                          "id":  "ZT2016-29",
                          "year":  2016,
                          "page":  55,
                          "type":  "choice",
                          "stem":  "转轴弯曲应力 σ_b 的应力循环特征为____。",
                          "options":  [
                                          "A. r＝−1",
                                          "B. r＝0",
                                          "C. r＝1",
                                          "D. −1＜r＜1"
                                      ],
                          "answer":  "A",
                          "kp":  "#M02 轴",
                          "why":  "轴旋转一周各点弯曲应力对称循环 ⇒ r＝σ_min/σ_max＝−1；扭转切应力为脉动循环 r＝0，勿混。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 14 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M02 轴",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴"
                                   ],
                          "note":  "选项 B/C 顺序被「新研辅导团队」水印压住，待明晚 300dpi 清晰件核；答案 A（r＝−1）不受顺序影响。"
                      },
                      {
                          "id":  "ZT2016-30",
                          "year":  2016,
                          "page":  55,
                          "type":  "choice",
                          "stem":  "选取 V 带型号，主要取决于____。",
                          "options":  [
                                          "A. 带的线速度",
                                          "B. 带传递功率和小带轮转速",
                                          "C. 带的有效拉力",
                                          "D. 带的紧边拉力"
                                      ],
                          "answer":  "B",
                          "kp":  "#M06 带传动",
                          "why":  "V 带选型图以计算功率 P_ca 与小带轮转速 n₁ 查型号；线速度用于带速校核。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2016 年真题卷（828）· 本机页序 p55 · 原卷第 15 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2016·#M06 带传动",
                          "df":  100,
                          "tags":  [
                                       "#M06 带传动"
                                   ]
                      },
                      {
                          "id":  "ZT2011-13",
                          "year":  2011,
                          "page":  26,
                          "type":  "choice",
                          "stem":  "在下列四种型号的滚动轴承中，只能承受径向载荷的是____。",
                          "options":  [
                                          "A. 6208",
                                          "B. 31208",
                                          "C. 5208",
                                          "D. N208"
                                      ],
                          "answer":  "D",
                          "kp":  "#M02 轴承",
                          "why":  "N 前缀圆柱滚子轴承只受径向；6208 深沟球、31208 圆锥滚子可受轴向分量。",
                          "confidence":  "高",
                          "src":  "新疆大学 机械设计基础 2011 年真题卷（833）· 本机页序 p26 · 原卷第 13 题（读图转录）",
                          "sub":  "专业课",
                          "topic":  "真题2011·#M02 轴承",
                          "df":  100,
                          "tags":  [
                                       "#M02 轴承"
                                   ],
                          "note":  "⚠ 选项顺序与 2010／2016 卷不同：那两年 N208 在 C 位，**2011 卷在 D 位**，同题换位，勿按记忆答 C。"
                      },
                      {
                          "id":  "M1113-01",
                          "kp":  "#49",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "相似·特征值与秩",
                          "stem":  "设 A、B 均为 3 阶矩阵，且 A 与 B 相似，则下列结论一定成立的是（　）",
                          "options":  [
                                          "A. A 与 B 合同",
                                          "B. A 与 B 的列向量组等价",
                                          "C. A 与 B 有相同的特征值与相同的秩",
                                          "D. A 与 B 都可对角化"
                                      ],
                          "answer":  "C",
                          "key":  "相似 ⇒ 特征多项式相同 ⇒ 特征值、迹、行列式、秩都同；**合同≠相似**：合同保的是惯性指数（该工具只对实对称有效），而且**对称性在合同下保持**——(CᵀAC)ᵀ = CᵀAᵀC，要它对称须 A = Aᵀ。A 未给对称 ⇒ 不合同。反例：A=[[1,1],[0,2]] 与 diag(1,2) 特征多项式同为 (λ−1)(λ−2) ⇒ 相似，但一个非对称一个对称 ⇒ **不合同**",
                          "df":  102,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "线代专项"
                                   ]
                      },
                      {
                          "id":  "M1113-02",
                          "kp":  "#51",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "合同·惯性指数",
                          "stem":  "设 A 为 3 阶实对称矩阵，二次型 f = xᵀAx。若 A 与 B = diag(1, 1, −2) 合同，则（　）",
                          "options":  [
                                          "A. A 的特征值必为 1、1、−2",
                                          "B. A 的正惯性指数为 2、负惯性指数为 1",
                                          "C. A 的秩为 1",
                                          "D. A 与 B 相似"
                                      ],
                          "answer":  "B",
                          "key":  "合同 ⇒ 同秩、同正负惯性指数；B 的惯性指数 (2,1) ⇒ A 也是；特征值不必相同（A 错）",
                          "df":  104,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "线代专项"
                                   ]
                      },
                      {
                          "id":  "M1113-03",
                          "kp":  "#51",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "合同·保秩",
                          "stem":  "设 A、B 均为 3 阶实对称矩阵，且 A 与 B 合同，则（　）",
                          "options":  [
                                          "A. A 与 B 一定相似",
                                          "B. A 与 B 一定不相似",
                                          "C. A = B",
                                          "D. A 与 B 的秩一定相等"
                                      ],
                          "answer":  "D",
                          "key":  "合同 ⇒ 保秩（B = CᵀAC，C 可逆）⇒ D 对；合同**推不出相似**（相似要看特征值/特征多项式），故 A、B 都错；C 显然错",
                          "df":  100,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "线代专项"
                                   ]
                      },
                      {
                          "id":  "M1113-04",
                          "kp":  "#48",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "不可对角化·Jordan块",
                          "stem":  "设 A = [[1, 1], [0, 1]]，则（　）",
                          "options":  [
                                          "A. A 的特征值为 1、1 且 A 可对角化",
                                          "B. A 与 E 相似",
                                          "C. A 是实对称矩阵",
                                          "D. A 不可对角化"
                                      ],
                          "answer":  "D",
                          "key":  "λ=1 是二重根，但 r(A−E)=1 ⇒ 只有 1 个线性无关特征向量 ⇒ 不可对角化（Jordan 块）",
                          "df":  100,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "线代专项"
                                   ]
                      },
                      {
                          "id":  "M1113-05",
                          "kp":  "#48",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "可对角化·几何重",
                          "stem":  "设 3 阶矩阵 A 的特征值为 1、1、2，且 A 可对角化，则 r(A − E) =（　）",
                          "options":  [
                                          "A. 1",
                                          "B. 2",
                                          "C. 0",
                                          "D. 3"
                                      ],
                          "answer":  "A",
                          "key":  "λ=1 代数重 2、可对角化 ⇒ 几何重 2 ⇒ n − r(A−E) = 2 ⇒ r = 1",
                          "df":  104,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "线代专项"
                                   ]
                      },
                      {
                          "id":  "M1113-06",
                          "kp":  "#51",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "二次型·规范形",
                          "stem":  "二次型 f = x₁² + 2x₁x₂ + 2x₂² 的规范形是（　）",
                          "options":  [
                                          "A. y₁² − y₂²",
                                          "B. y₁² + y₂²",
                                          "C. −y₁² − y₂²",
                                          "D. y₁² + 2y₂²"
                                      ],
                          "answer":  "B",
                          "key":  "矩阵 [[1,1],[1,2]]：Δ₁=1\u003e0、Δ₂=1\u003e0 ⇒ 正定 ⇒ 规范形 y₁²+y₂²",
                          "df":  102,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "线代专项"
                                   ]
                      },
                      {
                          "id":  "M1113-07",
                          "kp":  "#48",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "幂等矩阵·特征值",
                          "stem":  "设 3 阶矩阵 A 满足 A² = A，则（　）",
                          "options":  [
                                          "A. A 一定是正交矩阵",
                                          "B. A 的特征值只能是 0 或 1，且 A 可对角化",
                                          "C. A 的秩必为 1",
                                          "D. A 一定可逆"
                                      ],
                          "answer":  "B",
                          "key":  "A²=A ⇒ 最小多项式无重根 ⇒ 可对角化；特征值 λ²=λ ⇒ λ∈{0,1}",
                          "df":  100,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "线代专项"
                                   ]
                      },
                      {
                          "id":  "M1113-08",
                          "kp":  "#51",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "合同·保秩",
                          "stem":  "设 A、B 均为 n 阶矩阵，且 A 与 B 合同，则（　）",
                          "options":  [
                                          "A. |A| = |B|",
                                          "B. A 与 B 有相同的特征值",
                                          "C. A 与 B 的秩相等",
                                          "D. A = B"
                                      ],
                          "answer":  "C",
                          "key":  "合同：B = CᵀAC（C 可逆）⇒ 秩不变；行列式、特征值都**不**保持。**注意**：合同对任意方阵都有定义，只是「惯性指数」这套工具只对实对称矩阵有效——别把工具适用范围当成定义范围",
                          "df":  100,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "线代专项"
                                   ]
                      },
                      {
                          "id":  "M1113-09",
                          "kp":  "#51",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "惯性指数·秩分解",
                          "stem":  "设实对称矩阵 A 的秩为 3，正惯性指数为 2，则 A 的负惯性指数为（　）",
                          "options":  [
                                          "A. 0",
                                          "B. 2",
                                          "C. 1",
                                          "D. 3"
                                      ],
                          "answer":  "C",
                          "key":  "秩 3 = 正惯性 + 负惯性 ⇒ 负惯性 = 3 − 2 = 1",
                          "df":  102,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "线代专项"
                                   ]
                      },
                      {
                          "id":  "M1113-10",
                          "kp":  "#49",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "转置矩阵·相似与合同",
                          "stem":  "设 A 为 n 阶矩阵，则 A 与 Aᵀ（　）",
                          "options":  [
                                          "A. 一定相等",
                                          "B. 一定有相同的特征向量",
                                          "C. 一定不相似",
                                          "D. 一定相似"
                                      ],
                          "answer":  "D",
                          "key":  "任意方阵 A 与 Aᵀ **恒相似**（特征矩阵等价、特征多项式相同）；**也恒合同**（存在 C 使 CᵀAC = Aᵀ，如 A=[[1,2],[3,4]] 取 C=[[1,5],[0,−1]] 即得）。所以 B 写成「一定有相同的特征向量」才是假命题（题设也已删掉多余的「可逆」——A 与 Aᵀ 恒相似与可逆无关）——A、Aᵀ 特征向量一般不相等",
                          "df":  106,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "线代专项"
                                   ]
                      },
                      {
                          "id":  "M1113-11",
                          "kp":  "#51",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "二次型·不定",
                          "stem":  "二次型 f = 2x₁x₂ 的矩阵为 A，则 f（　）",
                          "options":  [
                                          "A. 正定",
                                          "B. 负定",
                                          "C. 不定",
                                          "D. 半正定"
                                      ],
                          "answer":  "C",
                          "key":  "矩阵 [[0,1],[1,0]] 特征值 ±1 ⇒ 一正一负 ⇒ 不定",
                          "df":  104,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "线代专项"
                                   ]
                      },
                      {
                          "id":  "M1113-12",
                          "kp":  "#49",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "实对称·相似⇒合同",
                          "stem":  "设 A、B 均为 3 阶实对称矩阵，且 A 与 B 相似，则（　）",
                          "options":  [
                                          "A. A 与 B 一定合同",
                                          "B. A 与 B 一定不合同",
                                          "C. A = B",
                                          "D. 无法判断是否合同"
                                      ],
                          "answer":  "A",
                          "key":  "实对称 + 相似 ⇒ 特征值相同 ⇒ 正负惯性指数相同 ⇒ 合同（这是实对称的特权）",
                          "df":  102,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "线代专项"
                                   ]
                      },
                      {
                          "id":  "M1113-13",
                          "kp":  "#48",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "幂等矩阵·行列式",
                          "stem":  "设 A 为 3 阶矩阵，满足 A² = A，则 |A + E| =（　）",
                          "options":  [
                                          "A. 2",
                                          "B. 4",
                                          "C. 8",
                                          "D. 不能确定"
                                      ],
                          "answer":  "D",
                          "key":  "A²=A ⇒ λ∈{0,1}；|A+E| = Π(λᵢ+1)，有几个 λ=1 就乘几个 2 ⇒ 介于 1 到 8 之间、**信息不足，不能确定**（若题意另给 r(A) 才能定）",
                          "df":  104,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "线代专项"
                                   ]
                      },
                      {
                          "id":  "M1113-14",
                          "kp":  "#48",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "Jordan型·不可对角化",
                          "stem":  "设 A = [[2, 1, 0], [0, 2, 0], [0, 0, 1]]，则（　）",
                          "options":  [
                                          "A. A 可对角化",
                                          "B. A 不可对角化",
                                          "C. A 是实对称矩阵",
                                          "D. A 正定"
                                      ],
                          "answer":  "B",
                          "key":  "A−2E = [[0,1,0],[0,0,0],[0,0,−1]]，r=2 ⇒ 几何重 3−2=1 \u003c 代数重 2 ⇒ 不可对角化（Jordan 块）。**注意**：我初稿写的是 [[2,0,0],[0,2,1],[0,0,1]]，那个 r(A−2E)=1 ⇒ 几何重 2 ⇒ **可**对角化，答案是 A——初稿错了，已换成 Jordan 型",
                          "df":  106,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "线代专项"
                                   ]
                      },
                      {
                          "id":  "M1113-15",
                          "kp":  "#1",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "极限·ln差化比",
                          "stem":  "lim(x→∞) x·[ln(x + 1) − ln x] =（　）",
                          "options":  [
                                          "A. 1",
                                          "B. 0",
                                          "C. 1/2",
                                          "D. e"
                                      ],
                          "answer":  "A",
                          "key":  "先化 ln 的差为比：x·ln((x+1)/x) = ln(1+1/x)/(1/x)。令 t=1/x→0⁺ ⇒ ln(1+t)/t → **1**（不用泰勒，用「ln(1+t) ~ t」一次即出）。干扰项：0 是「以为差值趋 0」，e 是把它当成 (1+1/x)^x 的底",
                          "df":  105,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "高数"
                                   ]
                      },
                      {
                          "id":  "M1113-16",
                          "kp":  "#17",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "定积分·sin³",
                          "stem":  "∫₀^{π/2} sin³x dx =（　）",
                          "options":  [
                                          "A. 1/3",
                                          "B. 2/3",
                                          "C. 1",
                                          "D. 4/3"
                                      ],
                          "answer":  "B",
                          "key":  "沃利斯：∫₀^{π/2}sin³ = 2/3",
                          "df":  100,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "高数"
                                   ]
                      },
                      {
                          "id":  "M1113-17",
                          "kp":  "#8",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "极值·三次函数",
                          "stem":  "函数 f(x) = x³ − 6x² + 9x 的极大值为（　）",
                          "options":  [
                                          "A. 0",
                                          "B. 2",
                                          "C. 4",
                                          "D. 6"
                                      ],
                          "answer":  "C",
                          "key":  "f′ = 3x²−12x+9 = 3(x−1)(x−3)；f(1) = 1−6+9 = 4 为极大，f(3) = 0 为极小 ⇒ 极大值 4",
                          "df":  105,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "高数"
                                   ]
                      },
                      {
                          "id":  "M1113-18",
                          "kp":  "#32",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "二重积分·极坐标",
                          "stem":  "∬_D x² dxdy，其中 D 为圆域 x² + y² ≤ 1，则其值为（　）",
                          "options":  [
                                          "A. π/2",
                                          "B. π/3",
                                          "C. 2π/3",
                                          "D. π/4"
                                      ],
                          "answer":  "D",
                          "key":  "∫₀^{2π}∫₀¹ r²cos²θ·r dr dθ = (∫₀^{2π}cos²θ dθ)(∫₀¹ r³dr) = π·(1/4) = π/4",
                          "df":  108,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "高数"
                                   ]
                      },
                      {
                          "id":  "M1113-19",
                          "kp":  "#37",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "微分方程·一阶线性",
                          "stem":  "微分方程 y′ + y = e^{−x} 的通解为（　）",
                          "options":  [
                                          "A. (x + C)e^{−x}",
                                          "B. Ce^{−x}",
                                          "C. e^{−x} + C",
                                          "D. (x² + C)e^{−x}"
                                      ],
                          "answer":  "A",
                          "key":  "积分因子 eˣ：(yeˣ)′ = 1 ⇒ yeˣ = x + C",
                          "df":  105,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "高数"
                                   ]
                      },
                      {
                          "id":  "M1113-20",
                          "kp":  "#26",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "全微分·对数函数",
                          "stem":  "设 z = ln(x² + y)，则 dz 在点 (1, 1) 处为（　）",
                          "options":  [
                                          "A. dx + dy/2",
                                          "B. dx + dy",
                                          "C. 2dx + dy",
                                          "D. dx/2 + dy"
                                      ],
                          "answer":  "A",
                          "key":  "z_x = 2x/(x²+y) = 2/2 = 1，z_y = 1/(x²+y) = 1/2（在 (1,1)）⇒ dz = dx + dy/2",
                          "df":  105,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "高数"
                                   ]
                      },
                      {
                          "id":  "S2-2026-18",
                          "kp":  "#16",
                          "sub":  "数学",
                          "type":  "text",
                          "topic":  "变限积分·换元后判连续",
                          "stem":  "已知 g(x) 为连续函数，f(x) ＝ ∫₀^{x²} g(xt) dt，求 f′(x)，且判断 f′(x) 在 x ＝ 0 处的连续性。",
                          "options":  [

                                      ],
                          "answer":  "f′(x) ＝ [3x³g(x³) − ∫₀^{x³} g(u)du] / x²（x ≠ 0）；f′(0) ＝ 0；f′(x) 在 x＝0 处连续",
                          "explain":  "换元 u＝xt ⇒ f(x)＝(1/x)∫₀^{x³}g(u)du（x≠0），求导得 f′(x)＝[3x³g(x³)−∫₀^{x³}g(u)du]/x²。f′(0)＝lim f(x)/x＝lim x·g(ξ)＝0。又 lim_{x→0}[3x³g(x³)−∫₀^{x³}g]/x²＝0 ⇒ 连续。关键：换元带出的 1/x 必须留到求导之后，提前约掉就错。",
                          "df":  112,
                          "df_src":  "dsh3",
                          "from_big":  true,
                          "tags":  [
                                       "真题",
                                       "11-13替换料"
                                   ]
                      },
                      {
                          "id":  "S2-2026-11",
                          "kp":  "#19",
                          "sub":  "数学",
                          "type":  "fill",
                          "topic":  "反常积分·两端定阶判收敛",
                          "stem":  "p 为常数，反常积分 ∫₀^{+∞} arctan x / [x^p (x + 1)] dx 收敛，则 p 的取值范围是 ______",
                          "options":  [

                                      ],
                          "answer":  "(0,2)",
                          "key":  "x→0⁺：arctan x ~ x，分母 ~ x^p ⇒ 被积 ~ x^{1−p}，需 1−p \u003e −1 ⇒ p \u003c 2；x→+∞：arctan x → π/2，分母 ~ x^{p+1} ⇒ 被积 ~ x^{−(p+1)}，需 p+1 \u003e 1 ⇒ p \u003e 0。交集 (0,2)。常见错：只判 +∞ 端得 p\u003e0；或把 0 端写成需 1−p\u003e0（那是判有界不是判收敛）。",
                          "df":  105,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "真题",
                                       "11-13替换料"
                                   ]
                      },
                      {
                          "id":  "S2-2025-17",
                          "kp":  "#15",
                          "sub":  "数学",
                          "type":  "text",
                          "topic":  "有理积分·部分分式",
                          "stem":  "计算 ∫₀¹ 1/((x + 1)(x² − 2x + 2)) dx。",
                          "options":  [

                                      ],
                          "answer":  "(3/10)ln2 + π/10",
                          "explain":  "拆部分分式：1/[(x+1)(x²−2x+2)] ＝ (1/5)/(x+1) + (−x+3)/(5(x²−2x+2))。配方 x²−2x+2＝(x−1)²+1，−x+3＝−½(2x−2)+2。原函数 F(x)＝(1/5)ln(x+1) − (1/10)ln(x²−2x+2) + (2/5)arctan(x−1)。F(1)＝(1/5)ln2，F(0)＝−(1/10)ln2 − π/10 ⇒ 结果 (3/10)ln2 + π/10 ≈ 0.522103。",
                          "df":  110,
                          "df_src":  "dsh3",
                          "from_big":  true,
                          "tags":  [
                                       "真题",
                                       "11-13替换料"
                                   ]
                      },
                      {
                          "id":  "S2-2025-13",
                          "kp":  "#17",
                          "sub":  "数学",
                          "type":  "fill",
                          "topic":  "黎曼和·定积分定义",
                          "stem":  "lim(n→∞) (1/n²) [ ln(1/n) + 2 ln(2/n) + … + (n−1) ln((n−1)/n) ] ＝ ______",
                          "options":  [

                                      ],
                          "answer":  "−1/4",
                          "key":  "(1/n²)·k ln(k/n) ＝ (1/n)·[(k/n)ln(k/n)] ⇒ 黎曼和，f(x)＝x ln x 于 [0,1]；∫₀¹ x ln x dx ＝ [x²/2·ln x − x²/4]₀¹ ＝ −1/4。同判据（提 1/n 化黎曼和）在库内已有 M1106-04，仅被积函数不同，标 same-criteria 保留。",
                          "df":  100,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "真题",
                                       "11-13替换料",
                                       "同判据:M1106-04"
                                   ]
                      },
                      {
                          "id":  "S2-2023-19",
                          "kp":  "#20",
                          "sub":  "数学",
                          "type":  "text",
                          "topic":  "定积分应用·反常面积与旋转体",
                          "stem":  "已知平面区域 D ＝ {(x, y) | 0 ≤ y ≤ 1/(x√(1 + x²)), x ≥ 1}。(1) 求 D 的面积；(2) 求 D 绕 x 轴旋转所成旋转体的体积。",
                          "options":  [

                                      ],
                          "answer":  "(1) ln(1+√2)；(2) π − π²/4",
                          "explain":  "(1) 面积＝∫₁^∞ dx/(x√(1+x²))，令 x＝tan t ⇒ 被积 ＝ 1/sin t，t 从 π/4 到 π/2；∫(1/sin t)dt＝ln|tan(t/2)| ⇒ 0 − ln(√2−1)＝ln(1+√2) ≈ 0.881374。(2) V＝π∫₁^∞ dx/[x²(1+x²)]＝π∫(1/x² − 1/(1+x²))dx＝π[(0−π/2)−(−1−π/4)]＝π(1−π/4) ≈ 0.674192。",
                          "df":  118,
                          "df_src":  "dsh3",
                          "from_big":  true,
                          "tags":  [
                                       "真题",
                                       "11-13替换料"
                                   ]
                      },
                      {
                          "id":  "S2-2024-09",
                          "kp":  "#43",
                          "sub":  "数学",
                          "type":  "choice",
                          "topic":  "伴随矩阵·推秩",
                          "stem":  "设 A 为 4 阶矩阵，A* 为 A 的伴随矩阵，若 A(A − A*) ＝ O 且 A ≠ A*，则 r(A) 取值为（　）",
                          "options":  [
                                          "A. 0 或 1",
                                          "B. 1 或 3",
                                          "C. 2 或 3",
                                          "D. 1 或 2"
                                      ],
                          "answer":  "D",
                          "key":  "A(A−A*)＝O ⇒ A²＝AA*＝|A|E。若 |A|≠0 ⇒ A*＝|A|A⁻¹＝A，与 A≠A* 矛盾 ⇒ |A|＝0 ⇒ A²＝O ⇒ r(A) ≤ 4/2＝2；A＝O 会导致 A＝A*，故 A≠O ⇒ r(A) ≥ 1 ⇒ r(A)∈{1,2}。",
                          "df":  112,
                          "df_src":  "dsh3",
                          "tags":  [
                                       "真题",
                                       "11-13替换料"
                                   ]
                      }
                  ]
};
