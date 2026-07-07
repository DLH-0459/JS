// ==UserScript==
// @name         New Userscript 1
// @namespace    http://tampermonkey.net/
// @version      2026-06-11
// @description  Elaborate on bullet points by user
// @author       You
// @match        *://old.reddit.com/r/explainlikeimfive/comments/3ye7j7/eli5why_is_wikipedia_considered_unreliable_yet/
// @icon         http://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    let comment = document.querySelectorAll("div.usertext-body.md-container > div")[3];
    let bq = document.querySelectorAll("blockquote")[0];
    let desc_x = `Your right to edit Wikipedia ends at the nose of some wack gatekeeper who is more willing to waste everyone&rsquo;s time and effort in edit wars than you. If you don&rsquo;t have unlimited time and persistence, you won&rsquo;t (and can&rsquo;t) win, no matter how correct you are.`;
    let dur = (new Date()).getFullYear() - 2010;

    comment.innerHTML = `
    <p>I agree with this poster, I just wanted to expand that the combination of editor bias and bad summaries of sources together (rather than in isolation) are the biggest reasons the site is unreliable. A lot of Wikipedians have their own pet sources they like; often times they haven&rsquo;t gone to the library lately, and many sources (both in print and online) have not been updated or synthesised with the current beliefs on things, so many articles end up being more representative of whatever sources were available to the editors who last touched them, and not necessarily of everything available.</p>

    <p>There are three massive obstacles that are almost guaranteed to eventually drive away anyone who&rsquo;s dumb enough to attempt editing Wikipedia in a serious and constructive manner:</p>

    <ol>
        <li>
            <p><strong>Poor sourcing policies.</strong></p>
            <p>Wikipedia explicitly gives an extremely strong preference for secondary sources and recently published accounts over primary sources. Both of these effectively equate to a requirement that the documentation be as distant as possible from the actual evidence. That is the exact opposite of what an expert will do, so experts are effectively prohibited from using good practice. While Wikipedia&rsquo;s policies do not explicitly forbid directly citing primary sources, some policies do firmly declare, for example, <a href="https://en.wikipedia.org/wiki/Wikipedia:No_original_research#Primary,_secondary_and_tertiary_sources"><i>&ldquo;<b>do not</b> analyze, synthesize, interpret, or evaluate material found in a primary source yourself; instead, refer to [&lsquo;reliable&rsquo;] (whatever that word means on Wikipedia anymore) secondary sources that do so.&rdquo;</i></a> This is the opposite of what experts actually do.</p>

            <p>In fields that are inherently controversial (history, religion, politics, and social issues), bias and misinterpretation are endemic and difficult to control for and Wikipedia&rsquo;s deference to secondary sources is damaging but perhaps unsurprising. While Wikipedia has the best chance of getting things right in STEM topics (hard maths and sciences), since facts are verifiable and correct answers and standards exist, STEM topics are almost always dense with information, and most journalists are not experts in any scientific field. As a result, secondary sources like news articles and popular science outlets are routinely full of (sometimes intentional) inaccuracies. Despite this, a factually wrong science news article from a major outlet would still carry much more procedural weight than the peer-reviewed paper it (mis)represents, because the article is a &ldquo;[&lsquo;reliable&rsquo;] secondary source&rdquo; and any interpretation of the paper itself will be dismissed as &ldquo;original research&rdquo; (again, whatever that term means anymore). This rule has been weaponised into one of the most effective agenda-pushing tools on Wikipedia, despite being designed to prevent agendas from being pushed.</p>
        </li>
        <li>
            <p><strong>Their core content policies are an appeal to majority.*</strong></p>
            <p>If you look at their policy on &ldquo;Verifiability&rdquo; (again, whatever that word means anymore), you&rsquo;ll see that their threshold for inclusion is whether or not it can be &ldquo;verified&rdquo; by &ldquo;reliable&rdquo; sources, not about whether or not it is true. So if most or all secondary, tertiary, etc. sources repeat a flawed account of something, Wikipedia will perpetuate the flawed account, even if the primary sources are correct. In any case where the majority of sources are incorrect or obsolete, any content that states what is the most true or accurate will be a minority viewpoint, and it will fail verification because prioritising it will be considered &ldquo;giving it undue weight&rdquo; and any interpretation of the correct viewpoints will, again, be dismissed as &ldquo;original research&rdquo; if it came from a primary source. This creates even more room for error:</p>
            <ul>
                <li>
                    <p><strong>Textbook lag:</strong></p>
                    <p>Even in STEM, widely-used media outlets, websites, and textbooks often contain statements and conventions that are oversimplified or outright wrong, that have been propagated for a long time.* Textbooks are especially problematic, as they often lag behind the most up-to-date research by 10 years or more. Despite this, Wikipedia&rsquo;s sourcing policies work against editors trying to reflect current consensus among experts by citing papers and other primary sources directly, so they often lose to those citing popular websites and news articles.</p>
                </li>
                <li>
                    <p><strong>Circular reporting:</strong></p>
                    <p>Also known as &ldquo;citogenesis,&rdquo; circular reporting on Wikipedia happens when journalists pull content from Wikipedia articles, then at some point the journalists&rsquo; articles are considered &ldquo;reliable sources,&rdquo; and then <i>those news articles get used as references on those Wikipedia articles.</i> Since errors can easily get laundered into a false consensus, Wikipedia and the sources it cites basically jerk each other off, and media activists and malicious actors can completely manufacture events and viewpoints using this vulnerability.</p>
                </li>
                <li>
                    <p><strong>No mechanisms for reliably weighing the quality of sources:</strong></p>
                    <p>On Wikipedia, a review in a mid-tier journal written in 2003, meta-analysis in a top-tier journal written 5 years ago, news article written this year, and even some random person&rsquo;s blog (at least in some cases) would all carry roughly equal weight under their sourcing policies, provided all of them can be considered &ldquo;reliable.&rdquo; But when editors try to weigh which sources are &ldquo;better&rdquo; or &ldquo;more reliable,&rdquo; the outcome is often decided by what, or how many, editors voted or participated in relevant discussions, or by whatever agendas are being pushed by the groups of users and administrators who essentially &ldquo;own&rdquo; certain articles or policies, not by any epistemic standard.</p>
                </li>
            </ul>
        </li>
        <li>
            <p><strong>&ldquo;Dispute resolution&rdquo; is an arms race.</strong></p>
            <p>Bureaucracy and edit wars are won by those who are most familiar with years of rules, not by those who are the most correct. And even if someone is completely unable to wield Wikipedia policies and all those years of arbitration and bureaucracy as weapons, they can still win, (again) not because they were the most correct, but because they <i>outlasted</i> everyone else, regardless of how right or wrong the majority were.</p>
        </li>
    </ol>
    <hr />
    <p>*&nbsp;Some very important policies in certain areas, even STEM topics, are really, really bad.** A good example is <a href="https://en.wikipedia.org/wiki/MOS:COMPUNITS">MOS:COMPUNITS</a>, a policy that governs articles on computers by effectively forcing users to use the obsolete &ldquo;customary&rdquo; convention of using SI prefixes (&ldquo;KB,&rdquo; &ldquo;MB,&rdquo; &ldquo;GB,&rdquo; etc.) for binary (power of 1,024) values when the majority of &ldquo;reliable&rdquo; sources use it, while effectively prohibiting the use of the modern terminology (SI prefixes for powers of 1,000) or clearer IEC prefixes (&ldquo;KiB,&rdquo; &ldquo;MiB,&rdquo; &ldquo;GiB,&rdquo; etc.) unless the majority of sources use them that way. This policy is so absolutely awful that it desperately needs a complete rewrite from scratch. But this is the policy governing units of bits and bytes&mdash;as such, it affects thousands of articles across an enormous topic, involving an enormous industry, and where an awful lot of people have an awful lot invested. Fixing even one article that uses the &ldquo;customary&rdquo; convention or bringing just one paragraph of this policy up to modern standards in any way are both grounds for a major conflict akin to a second United States Civil War. Fixing <i>every single article</i> on Wiki that does this <i>and</i> rewriting the whole policy from scratch? Forget it. ${desc_x}</p><br />

    <p>**&nbsp;Explanations:</p>

    <p>MOS:COMPUNITS claims that the SI prefixes are &ldquo;ambiguous in usage.&rdquo; While that is true among companies and many people, it is not true among the standards published by standards bodies. The SI prefixes mean powers of 1,000 and <i>not powers of 1,024</i>, while the IEC binary prefixes (KiB, MiB, GiB, TiB, etc.) mean powers of 1,024. This has been the internationally-accepted position since 1998, when the IEC first released their standard on the binary prefixes, and (most) competent experts in computing will use these terms correctly and support their correct usage.</p>

    <p>However, the industry was sloppy for a very long time: back in the early days of computing, storage and memory sizes were relatively small, so professionals in the industry could get away with calling &ldquo;KB&rdquo; 1,024 and &ldquo;MB&rdquo; 1,048,576, instead of 1,000 and 1,000,000. But as storage increased in size and density, and became more accessible to the general public, this difference of 2.4% between a KB and KiB and 4.9% between a MB and MiB, grows to 7.4% for GB vs. GiB, 10% for TB vs TiB, and 12.6% for PB vs. PiB.</p>

    <p>Many hard drive manufacturers, however, advertised their storage capacities using 1,000-based units, and they were actually using the terminology correctly. When professionals in the industry saw this, they chose to accuse storage manufacturers of deliberately deceiving customers, using them as a convenient scapegoat, rather than recognising and correcting their own longstanding misuse of the prefixes, a largely dishonest framing that persists even to this day. Even if the storage manufacturers using 1,000-based units <i>were</i> trying to scam customers, <i>they (mostly) spoke the truth</i> when it came to capacities.</p>

    <p>(What is just as problematic is the fact that, although engineers and programmers are supposed to be mature adults who prioritise facts over feelings, responses by so many of these &ldquo;professionals&rdquo; to this particular issue have frequently been of dismissiveness, blame-shifting, God complexes, and an extremely irrational and stubborn insistence that entrenched bad practice is somehow more legitimate than standards that exist precisely to ensure consistency and fix bad practices, because they think that knowing more about computing than standards bodies do somehow makes them untouchable.)</p>

    <p>The practical result is that the obsolete customary convention is still deeply entrenched nowadays, and whether the SI prefixes mean powers of 1,000 or 1,024 depends on what you&rsquo;re reading. On Wikipedia, they do this as well, and by doing so they are perpetuating a long-standing malpractice.</i></p>

    <p>And as if this wasn&rsquo;t already bad enough, there are <b><i>17 pages</i></b> of arguments involving people trying to get the community to fix this policy, bringing forth all sorts of perfectly valid concerns (including the ones I brought up), only to end up drowning in cult-like procedural resistance and condescension from people more interested in defending rules than actually engaging with any of our concerns, and I believe that the number of additional times this has happened since the 17<sup>th</sup> archive, including the argument I had, could easily make up another page. MOS:COMPUNITS in its current form institutionalises at least six logical fallacies at once:</p>

    <ol>
        <li>
            <p><strong>Appeal to majority:</strong></p>
            <p>This is the most obvious one: As with all of their core content policies, the entire premise of this policy in its current form rests on the idea that whatever most sources do is what Wikipedia should do. They don&rsquo;t care to distinguish between a majority that is correct and a majority that is merely entrenched.</p>
        </li>
        <li>
            <p><strong>Appeal to tradition:</strong></p>
            <p>The implicit argument here is that, since the customary convention has been in use for decades, that alone somehow makes it legimitate. In the arguments found in the talk page archives, the community constantly tries to present &ldquo;the industry simply did not embrace the IEC prefixes&rdquo; as a conclusion, instead of acknowledging it as a problem that needs to be addressed.</p>
        </li>
        <li>
            <p><strong>Appeal to nature:</strong></p>
            <p>&ldquo;The industry <i>does</i> behave this way, therefore they <i>should.</i>&rdquo; The critical distinction needed between &ldquo;is&ldquo; and &ldquo;ought&ldquo; is entirely (and deliberately) omitted here.</p>
        </li>
        <li>
            <p><strong>Appeal to consequences:</strong></p>
            <p>The community consistently attempts to prevent people from overcoming familiarity bias by attempting to use the unfamiliarity of the IEC prefixes as a reason to avoid them, when an encyclopedia&rsquo;s entire purpose is to inform readers of things, even if they do not already know about it. If anything, the lack of familiarity with the IEC binary prefixes is actually an argument <i>in favour of</i> using (and explaining) them, not against it.</p>
        </li>
        <li>
            <p><strong>False equivalence:</strong></p>
            <p>The policy treats the customary convention&mdash;an informal, improper industry hack&mdash;as being equal (even if only roughly so) to internationally-ratified standards backed by the IEC, ISO, BIPM, and NIST. <i>The entire reason why standards and standards bodies exist is to ensure consistency in how terms are defined and used,</i> and the use of SI prefixes for powers of 1,024 instead of 1,000 by computing &ldquo;professionals&rdquo; goes against these goals.</p>
        </li>
        <li>
            <p><strong>Reverse onus:</strong></p>
            <p>The community attempts to push the burden of proof onto those who want to use the modern standard terminology, under the incorrect and incredibly misleading assumption that defenders of the customary convention somehow hold the default position.</p>
        </li>
    </ol>

    <p>I&rsquo;ve seen many people say that the last two points would be an appeal to authority, but that&rsquo;s merely a red herring masquerading as neutrality. Citing the IEC, ISO, BIPM, or NIST on what a standardised unit means is not an appeal to an irrelevant authority; these are the exact institutions whose entire purpose is to answer precisely this kind of question. Saying &ldquo;citing the IEC&rsquo;s definition of a kilobyte is just an appeal to authority&rdquo; is like saying that it&rsquo;s an appeal to authority to cite the Oxford English Dictionary on what a word means.</p>

    <hr />

    <p><strong>END RESULT:</strong> I created a Wikipedia account in 2017, and had a mostly good time editing for the next seven years. But in 2024, after discovering this policy, trying to bring my concerns to the community, being completely stonewalled like everyone else, and finding out that Wikipedia&rsquo;s problems run far deeper than I initially thought, I ended up abandoning my account entirely, and have no intention of ever returning. What ended up happening, to myself and everyone else that tried to get MOS:COMPUNITS fixed, is that all of us almost got our accounts banned, because the community thought that our criticisms, all of which were entirely truthful and necessary, somehow meant that we were all just contrarians who just wanted to be crazy or different for its own sake. The way Wikipedia and their model currently works basically means that a thousand users armed with an industry&rsquo;s beliefs and a majority of sources that mirror those beliefs, even if among those beliefs is a long-standing, completely unjustifiable resistance towards correcting broken practices, will somehow be considered more reliable than someone like me, knowing what I do, going in and redoing things to modern factual standards, and if you try to be revolutionary, you won&rsquo;t win the arbitration process. So we end up with the &ldquo;verifiable,&rdquo; but completely obsolete conventions used on thousands of articles about computers that you see today, and this is just one small example out of countless other problems that Wikipedia has.</p>

    <p>Between the misinformation, poor policies, poor choices of sources, and (in some cases) entire sections that don&rsquo;t belong or are wholly misleading, there&rsquo;s not a huge amount to salvage on Wikipedia that can&rsquo;t be found elsewhere, because even in STEM subjects, there are times where they manage to get even definite, capital-F Facts and Formulæ wrong.</p>
    `;
    bq.innerHTML = `<p>${desc_x}</p>`;
})();
