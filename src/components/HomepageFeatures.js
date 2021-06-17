import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '一门深入，长时熏修',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        学习一定要记住老祖宗的话，一门深入，长时熏修，你才真的学到。看个一遍、二遍、三遍，这个东西虽然学过了，但没用处。我们每个人自己想想，从小上小学、中学、大学、研究所，也学了二十几年。今天在生活上，在工作上，你能用上几分之几？百分之九十九是所学非所用。我们的时间、精力浪费了，白费了。为什么古大德他学了管用？没有别的，他学得少，一个科目，同时不准学两个科目。这是我们中国老祖宗几千年的教学方法，一门学会了再学第二。一门要怎样才叫学会？务必要学到变成自己的思想见解，变成自己的言论行为，这叫学会了。你全用上，你才可以学第二门。有些同学要跟我学，我说我没有别的方法教你。古圣先贤、我的老师教导我这个方法，我可以传给你，你可以如法泡制会有成就，就是一门深入，长时熏修。学一样东西，我的标准是三十遍，认真学三十遍，我得利益。得什么利益？我在生活上用得上。基本的课程不多，按照印光法师的顺序《感应篇》、《了凡四训》这摆在第一，这是德行教育。有这个基础，你再学《弟子规》，再学四维八德，非常有受用。
      </>
    ),
  },
  {
    title: '世出世法，以诚为本',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        诚则能感圣应。不诚则无感，圣无有应。譬如月丽中天，影现万川。水若昏浊鼓荡，月影便难显现。由水所致，非月之咎。故曰，欲得佛法实益，须向恭敬中求。有一分恭敬，即消一分罪业，增一分福慧。有十分恭敬，即消十分罪业，增十分福慧。若无恭敬，则但结远缘，难得实益。倘更亵渎，则获罪无量矣。又卷三第十六七八三页，牖慧之颂与注，内多有禅机。此等语句，唯实有所悟者，方知意旨。不可以文义卜度推求。纵令智同生知，亦是愈推愈远。禅家语句，悉皆如是。倘能主敬存诚，执持菩萨圣号。一旦业消智朗，则所有禅机语句，一一了然。如开门见山，拨云见月矣。
      </>
    ),
  },
  {
    title: '敦倫盡分，閑邪存誠，老實念佛，求生淨土',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        無論在家出家。必須上敬下和。忍人所不能忍。行人所不能行。代人之勞。成人之美。靜坐常思己過。閑談不論人非。行住坐臥。穿衣吃飯。從朝至暮。從暮至朝。一句佛號。不令間斷。或小聲念。或默念。除念佛外。不起別念。若或妄念一起。當下就要教他消滅。常生慚愧之心及懺悔心。縱有修持。總覺我工夫很淺。不自矜夸。只管自家。不管人家。只看好樣子。不看壞樣子。看一切人都是菩薩。唯我一人實是凡夫。果能依我所說修行。決定可生西方極樂世界。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
