// Function to calculate the 2000th secret number for a given initial secret number
function calculate2000thSecretNumber(initialSecret) {
    const MODULO = 16777216;
    let secret = initialSecret;

    for (let i = 0; i < 2000; i++) {
        // Step 1: Multiply by 64 and mix into secret
        secret ^= (secret * 64) % MODULO;
        secret %= MODULO;

        // Step 2: Divide by 32 (integer division), mix into secret
        secret ^= Math.floor(secret / 32);
        secret %= MODULO;

        // Step 3: Multiply by 2048 and mix into secret
        secret ^= (secret * 2048) % MODULO;
        secret %= MODULO;
    }

    return secret;
}

// Function to calculate the sum of the 2000th secret number for each buyer
function sum2000thSecrets(buyers) {
    return buyers.reduce((sum, initialSecret) => {
        return sum + calculate2000thSecretNumber(initialSecret);
    }, 0);
}

// Example input (initial secret numbers for buyers)
const inputStr = `16373349
15186552
1622193
11783676
6308445
7167439
13211695
16575287
10006062
14564917
1410644
16226718
4865544
15658564
3144783
696348
13617752
4962735
13587455
3893435
13268580
9985093
6930066
8069196
2212379
7511818
9495832
1815382
6654430
16175030
484196
13026535
3914064
1317355
2890997
9190625
11163581
14978106
6133480
5997085
12188758
2713255
10454072
5561825
13604475
3878629
12830415
10434576
3879278
10682564
2605846
15762134
4936490
15225214
12595436
7163822
12559020
14525345
10155776
2458408
3371733
14930168
4141237
960273
2550548
4393428
14849462
7962748
6950442
3309146
11936130
5191277
5015819
13695237
5002034
1588253
9088844
7289529
566954
551958
360360
5405133
7680885
2637286
7739695
5597297
12293718
11142064
6309898
7281786
13866147
14009693
15290196
406862
5840686
2429464
13032275
6741280
9933179
12602207
15995973
7506633
6032561
5645567
8295770
13933300
2006930
3463201
3474596
13986569
8800607
15182560
9770933
12265538
1294438
3776204
13358137
15608542
2288007
2317632
16657467
2472456
12255151
13217169
11600332
12145224
16524513
10231002
8973712
11792265
14896373
16387689
6657584
7206616
15970494
6919351
10761189
15715283
7274980
684648
9384532
13507702
780291
6295233
9530227
6343838
8231521
8941271
14864317
4920019
2890155
10430942
4166120
6474612
12863180
14250227
11347523
15916832
15872532
6657826
5906253
3770247
11211900
3201676
15247722
1936192
1162951
8562967
6624901
15505449
7826409
2570087
4751151
4500768
1050619
8541627
6447372
8984910
15636349
13969554
10596795
434781
10790557
11096367
8843520
10265854
8907153
15630481
6171827
16373222
16619771
8461484
11791395
3939896
6679433
661663
644778
13692618
13067250
8604358
15555045
5927698
4375441
12920024
15287916
6357203
2443706
14798729
14317074
16502174
8499700
15284879
11219866
3064110
2951970
1439874
6807886
12233845
9972361
13031843
4837731
11360943
16057205
16424504
487395
15338833
3580470
9770788
5882303
8177404
11582133
280098
11161368
3159462
9022461
8127750
6635258
16550709
14108026
10174896
8691867
4634277
5731484
1613876
8354052
417868
390443
11557987
12550936
10619801
8785703
3042265
8123204
12626108
9500360
11034766
16369325
14131973
4872371
2518553
2486117
9346760
11831814
8626116
16007998
14828649
16481397
10289176
10658018
5234671
9205242
6340994
323162
431661
5264738
1167497
12977345
10511293
412680
10182687
2319803
7211149
8916423
2856357
5621837
8062377
7464283
2584977
2272016
12557299
159945
12400832
8497447
16094004
3691170
8789780
5260568
6675127
7103844
13943645
11479200
5359837
13644091
1279028
2548159
13496231
12975561
9503488
5458839
14996018
2032811
12505943
16510023
13960256
5204390
10991240
2781142
6994587
14929527
10851145
8278565
2032403
6352211
9905518
5766970
12371463
1944127
724687
10152106
9468975
6669147
7814812
15726721
7004724
11251515
5940450
822547
1358605
13926755
6146626
5301534
6638262
16368610
15625610
16592921
4267738
8469732
579423
3269367
10359655
14314492
15965419
7308713
1144736
4865978
4086613
14411863
12490359
2352336
15545238
13437139
8293406
11509765
16643930
15685629
13810869
6626989
12968098
15952783
10485205
10781262
1705214
2579110
9551955
3755666
2981791
4284792
361003
6303864
3500203
4932321
13984706
10415652
5329388
8322076
448776
16745329
12334674
16482198
16752595
1772477
11925625
11372267
5376749
3694887
4977193
3494165
3507668
4310974
15681672
3012734
1853918
4539313
7283890
9081867
13925320
12240884
9460595
11773493
5460495
1434162
10688227
1017147
3347050
12469562
8367880
9367257
12146897
7743345
6543543
3498063
2260527
7414558
3789190
854110
15104396
14656924
799222
11414445
603622
12467400
2419129
10421335
1974868
9153079
1100407
4448917
16671530
9747921
5796194
4617791
5456612
2816183
13219003
11632253
14723669
11598167
10923343
15199799
16577163
14550454
10457881
6365170
7166226
10271995
11457613
16560713
16179934
12537934
14536016
3393257
3228748
12818707
1141621
8243157
5064356
8465035
506318
2009554
9865115
852669
10101722
5273159
15128046
11068793
9386867
3951182
4714972
11898912
7306033
11269026
13584828
1108153
6955544
16115171
406558
14277252
11044471
10019605
2427685
4440374
11442617
9097354
5497248
5033359
16163616
9942299
910182
13608405
14688622
9610869
8517869
3692116
2052317
12767318
10763207
6575285
2744608
9114079
2557924
6979713
15215499
2273719
3993030
2653935
13156914
3547480
11339203
12983120
6939209
11725333
7390574
12336215
12283119
9361992
7190497
719761
15146578
13174472
3582277
12792883
2898442
10277677
9494354
11852663
14258584
9833068
7199947
15158128
16073980
11350088
4228881
10138728
11918003
7086687
9372635
16497729
15407495
12803379
11572194
5323416
2658612
2014493
11169533
14188215
14349369
14175535
2437278
8641937
7971553
986393
6081010
4906299
12991269
4320135
6413065
16145540
9646052
15883038
4622209
9958259
13087150
505055
16166632
13342850
16402817
1725167
5265123
14068109
5502891
4272608
6755968
8837744
11557985
15051814
4165817
8421727
7479731
8600316
5652771
2833888
9413870
11745535
2415368
8732271
9217496
4689092
2271752
11361686
2609626
11041836
13190412
7411013
2520473
13190045
7246599
16497142
9563745
1797697
9227626
15966748
9956207
4478256
13738095
12098825
15848252
1512161
16295578
10316372
10170266
7998838
6536356
15104873
10466030
3138882
2203391
6168512
13493661
10548411
11473832
12975298
16112477
5896994
14013329
16072745
16666920
4412274
10375236
2159138
359511
9766095
15746444
5308195
4107951
5294132
14634491
7834600
15411199
7604316
3476752
5286805
932246
14488526
12266602
10689646
16570298
1301912
12825620
10876422
2508580
679600
9640530
8888397
16221604
15599602
14599848
13082649
5962517
7457444
15812581
13836376
13230099
1807057
2741988
3944766
2385947
3679003
12663189
15191331
8274497
12913813
15864948
544791
2911243
16117239
2108927
4812606
11268763
10724291
14100790
4346751
1787155
4980275
5993258
4354797
15510727
13222290
7359942
6521281
7518909
7731501
14115011
13267351
5092088
12534874
1342065
3622890
16761606
7143180
14956161
16230049
10946433
1356829
6961778
358077
13814110
3790343
2512729
12335352
3409233
9532075
391411
14042695
2173659
12687354
13583294
1945094
4084558
3866772
5939369
8881279
13310054
4976914
13913724
7747146
3220521
9631601
4200584
10086146
8248625
13270531
610686
14733135
10410415
7229874
7702901
13106011
5866826
14272397
8036615
5272129
16414756
5177214
15231586
9020631
6688129
8632510
8922540
8106465
16178102
11444166
1249731
13204057
12428172
5848261
9559707
6374914
6248342
16153646
3669182
8694332
6228631
4911278
15472502
9244257
5917629
11509209
8003090
15224237
4126241
7832816
6116956
3019269
11293679
9042119
3692561
4212864
16325223
12683800
5861460
8055787
7731205
3097293
11978409
13497854
15978287
5108603
6835142
13300018
6175494
6099671
1683413
9696932
4419383
2660936
2466346
5187725
15731749
12999803
3527286
13530707
1776674
5012174
14125980
3991088
1405483
4866957
6839535
15480296
13057055
14173531
2345090
559858
2707281
9280192
4855418
11175617
6349854
13708174
15177451
16351470
6541606
14362621
16332709
15022616
8023780
16487028
8350427
7805768
7210364
16318596
16256978
14502351
3718848
8094034
3873320
16677481
1090298
2553455
7464761
6927238
14947631
9389169
8123927
1048927
448846
15018178
9277011
15835794
2296130
8899283
14739047
12666018
11793042
3296917
10206477
14784709
7336719
4703513
9495287
4236798
8238327
11619706
13944261
8702336
7020526
15235987
4858536
15338706
16238902
2560705
1388905
5262873
11948259
635065
11927482
4740466
1961944
13532837
1809329
15416830
15098348
14464251
6482747
13053395
12813540
10254357
15177688
5179552
2655888
15077442
14209736
9642322
8828670
4323101
3114952
11973280
9782635
2413810
11736379
11768002
1895547
12385187
3023131
6671150
7096854
15126493
12946560
1326976
13637249
14155134
1694948
7279145
4014623
3102701
3820588
16775639
10233789
1796753
12501169
2808552
5588856
360436
491034
2597978
10783153
3292928
4313246
5258043
6805522
14670963
3948447
1752957
11616561
6925092
10161151
788882
4982783
2223798
8424348
16258605
3438621
12849734
2824060
15306953
5798108
12162593
7411452
15002005
612307
8877270
9349385
13808538
8433368
15706128
13799150
7763928
689528
9080872
1141691
14417202
13670688
8781338
2613599
10958585
14231199
7513431
2908869
3592148
5738750
191009
12263941
3836073
989773
258164
185517
1476132
13807729
14946045
4732812
14616379
395259
1990793
3832070
16051957
13184655
7281704
378401
1234807
4393872
10557605
4588722
5443375
11038084
4971078
6538750
15509137
2235118
4958582
1720835
7637183
12882790
14833120
13098537
16590572
313098
15583896
2597828
13134093
14542017
5358897
2749708
7469569
16101432
14000701
13284206
12678383
11969816
16057698
356890
13107467
14871189
14901553
7920801
2902953
589609
6699791
15426852
11930053
632124
1253623
9759017
7794134
13395016
1196403
13316499
10074097
6466613
4950269
6750860
8345818
6811539
4596500
2127142
9922529
2347717
2934676
7683986
15465143
10463056
6084176
9808757
2789830
1571084
2745034
6923680
7128537
14480452
13100961
15435979
11727095
1193379
11816111
14358374
10919888
4936772
6593268
7549084
7167474
1356063
8584763
7465921
182633
11872988
14834942
4539693
14542163
15791904
12395354
6215996
16298539
2728010
8068302
2840496
14758267
9561589
16554573
10585126
1469628
3390622
15881623
1997159
2218022
13564747
3289063
5983898
4500757
11950672
536567
8820754
14321831
3506708
2660827
2558837
12246291
16263437
11481509
11462981
12088073
7346970
5355424
12379803
5007195
5687059
3961308
5501400
7179219
7225167
7707157
603771
7986188
11007202
5650522
14921750
15109032
8499310
8272255
6356027
9111097
15733894
15813728
14162153
14333311
13717998
3381490
629119
3566768
5473116
15599738
6123920
8882607
10066398
12213720
12366892
8588287
11725445
10323833
13441328
10917777
6860461
16554390
14508579
154425
10706917
12643960
11013836
11508457
11230315
9153282
14190667
6611062
6561520
9762626
1239523
10681818
4739480
8828088
6805993
4242828
13549075
5139970
10163548
14594976
15239424
2174194
11736746
10334453
922382
2577541
11331044
11348934
420793
11305719
11142983
13830764
12023289
7064838
15310458
7854374
3738575
15515084
10046008
2098735
16367700
3395006
14262078
15233868
13229474
3297067
11420505
4056424
13845211
6221365
6935628
8762535
11111304
2301303
2192119
6876606
4586110
4742807
2491313
10740500
1696968
9961136
9574949
15351165
12421682
280823
9950016
1633318
10452578
10520092
11953106
11539810
7138560
7306201
14567520
4278738
9396678
15801765
6572926
1891444
8810760
6573274
6102406
10895290
9444096
6482854
16591881
11711992
12016083
3416538
7115408
13192419
3513697
10878246
10371705
1180915
2459060
5635707
1791640
4843773
9489200
7640118
7045682
16690221
6201237
9032540
3593090
1036305
2093689
8016251
5626237
7880011
10863588
15735777
8158433
12794551
1656444
15546255
14186199
13540575
11799814
10589931
4115813
7040163
8078024
6635077
7192811
4515067
16005380
366169
10770301
10419905
10680985
9655165
558247
12157764
13993941
13533359
10401630
9975187
4824183
16137881
7364187
6599407
5902077
14004160
10374668
14454812
2680746
451376
3904580
14255807
9506003
644788
8025769
2983687
5633680
6280991
13793912
506476
803659
13470028
3956894
16461640
9082460
11413394
7408034
3110512
8916846
11951540
2024150
11017984
4155978
5668894
13013866
6165701
7655534
14840270
12547516
5410504
7753180
13282961
14512393
5097596
13450892
12835913
6294295
3095869
9621282
7714183
14887395
1428922
429994
14926177
16692356
16717288
5386145
4736873
11329954
11893516
7648451
3498662
7926441
5310556
5447643
13409013
4578999
15085715
11442478
16027809
14229723
16373683
3628819
4919773
3189670
5813509
13507038
11429056
14989911
8910381
6852170
11739561
15644443
529400
6776962
14096718
3026881
15580203
1694471
10442350
16410657
1999995
6142911
12203249
830741
4355396
14396413
2367095
9330033
5128824
5475163
14356075
11766192
16439725
9252623
6903172
10485835
8689877
11216031
11201811
11543980
10327480
14126530
2899374
15053998
5938642
7413952
9419220
6402334
9338005
14262958
12630936
16237181
10704557
9385114
6968337
8307593
4124456
12668920
3883776
9081947
1710828
14741127
8924495
3457806
13753112
4394070
3336272
4004544
2237291
9651358
10538487
2548892
13599212
16572866
5276497
11338542
6501514
3101484
14112020
9701314
8581975
11660871
3323534
5506282
15943314
8411305
16245869
14015057
2412935
2522387
5965456
2213428
10482360
2677248
1391047
11176316
1741222
4260676
521094
1756763
16269002
4646760
6780347
1888161
194120
12431753
5193597
14457504
11019505
3782575
16400371
5662561
10222864
3072284
12595900
9125205
11856029
12795176
12851251
6477374
1172525
12216358
12306279
10350627
4844791
5174560
1487608
10230375
8931345
5429011
3026178
766945
13587698
2359324
2277411
10752210
7972084
6145511
15469547
7436777
2766952
11374248
15755632
13001320
10666887
2076188
16013424
3957848
1682748
13753351
10040883
618584
2147181
3953441
13982878
4746278
16008972
5852570
12833042
8851783
10981852
11170029
4384591
2239867
2818912
4905776
9464899
7862927
10069501
8015309
6571707
14662715
711639
14328366
10301443
13265450
1890408
7397867
10673148
7877669
16214870
2716343
10960572
7081859
4134494
8948888
15314115
10369402
997029
10372032
7367082
2640594
12881164
11322608
745415
8442011
14498948
5687361
13348957
8168494
15971475
15456472
12617747
2479228
2716845
2284900
10294518
16504072
8674818
8954600
1837768
11527532
16308422
3749620
2895482
7596081
10195734
15213905
5685880
13167372
12940720
11832534
13251097
12045858
10007014
8269122
2509484
16266733
15324993
2726364
16247740
15223974
3586625
821211
4396472
3272374
2155481
9140672
2772420
14379681
8863229
10872640
8361592
10801741
4059351
11624850
4644687
11297291
3199208
15883217
2187023
11746271
16153692
5393242
8282068
11451365
2830504
14105368
2334023
15806272
1936489
5045070
6649487
8749886
6924336
13988717
3822765
5273475
3028679
9749083
8860534
12154364
11300379
13213939
12000769
15204162
1394879
10325832
8881965
574364
14543005
10010085
4918050
5392765
3500306
10501455
10004171
7881607
7003462
10681794
7706115
2253684
16212535
7117934
10325959
8984114
1482330
8538228
15349964
15911287
8619614
11496761
9015290
14704054
148213
10674150
8746184
7113228
4280863`;
const buyers = inputStr.split(/\r?\n/).map((str)=>Number(str.trim()));

// Calculate the result
const result = sum2000thSecrets(buyers);
console.log("Sum of the 2000th secret numbers:", result);