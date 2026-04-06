// ==UserScript==
// @name         New Userscript 1
// @namespace    http://tampermonkey.net/
// @version      2026-03-17
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
    let x = "Your right to edit Wikipedia by swinging your sledgehammer dead-ends immediately at the nose of some wack nerd who is better at citing years of arbitration and bureaucracy or wasting people&#39;s time in pissing contests (or both) than you are. If you are not thoroughly familiar with the dispute resolution process, and you do not have the tenacity of someone with nothing else to do and nothing left to lose, you will not and cannot win, no matter how right or wrong you are.";

    comment.innerHTML = `
    <p><span style="background-color: yellow;">I agree with this poster, I just wanted to expand that the combination of editor bias and bad summaries of sources together (rather than in isolation) are the biggest reasons the site is unreliable. A lot of Wikipedians have their own pet sources they like; often times they haven&#39;t gone to the library lately, and many sources (both in print and online) have not been updated or synthesised with the current beliefs on things, so many articles end up being more representative of whatever sources were available to the editors who last touched them, and not necessarily of everything available.</span></p>

    <p><span style="background-color: yellow;">There are three massive obstacles that are effectively guaranteed to eventually drive away any person dumb enough to attempt editing Wikipedia in a serious and constructive manner:</span></p>

    <ol>
        <li>
            <p><span style="background-color: yellow;"><strong>Their sourcing policies systematically separate claims from evidence:</strong></span></p>
            <p><span style="background-color: yellow;">Wikipedia explicitly gives an extremely strong preference for secondary, tertiary, etc. sources and recently published accounts over primary sources, regardless of the topic. Both of these effectively equate to a requirement that the documentation be as distant as possible from the actual evidence. That is the exact opposite of what an expert will do, so experts are effectively prohibited from using good practice. While Wikipedia&#39;s policies do not forbid directly citing primary sources, some policies do firmly declare, for example, <a href="https://en.wikipedia.org/wiki/Wikipedia:No_original_research#Primary,_secondary_and_tertiary_sources"><i>&quot;<b>do not</b> analyze, synthesize, interpret, or evaluate material found in a primary source yourself; instead, refer to reliable secondary sources that do so.&quot;</i></a> This is the opposite of what experts actually do.</span></p>
        </li>
        <li>
            <p><span style="background-color: yellow;"><strong>Their core content policies are an appeal to majority:*</strong></span></p>
            <p><span style="background-color: yellow;">If you look at their policy on &quot;Verifiability,&quot; you&#39;ll see that their threshold for inclusion is whether or not it can be &quot;verified&quot; by &quot;reliable&quot; sources, not about whether or not it is true. So if, for example, 80% or more of &quot;reliable&quot; secondary (and beyond) sources repeat a flawed account of something, Wikipedia will perpetuate that, because content that states what is the most true or accurate will be a minority viewpoint, and it will fail verification because prioritising it will be considered &quot;giving it undue weight.&quot; This creates even more room for error:</span></p>
            <ul>
                <li>
                    <p><span style="background-color: yellow;"><strong>Textbook lag:</strong></span></p>
                    <p><span style="background-color: yellow;">Even in the hard maths and sciences, widely-used media outlets, websites, and textbooks often contain statements and conventions that are oversimplified or outright wrong, that have been propagated for decades.* Textbooks often lag behind the most up-to-date research by 10 years or more. Despite this, Wikipedia&#39;s sourcing policies work against editors trying to reflect current consensus among experts by citing papers and other primary sources directly, so they often lose to those citing popular textbooks and news articles.</span></p>
                </li>
                <li>
                    <p><span style="background-color: yellow;"><strong>Circular reporting:</strong></span></p>
                    <p><span style="background-color: yellow;">Also known as &quot;citogenesis,&quot; circular reporting on Wikipedia happens when journalists cite a Wikipedia article, then at some point the journalists&#39; articles are considered &quot;reliable sources,&quot; and then <i>those news articles get used as a reference on that Wikipedia article.</i> Any errors that get caught in this can easily get laundered into a false consensus. But as well-known as this problem is, even within Wikipedia itself, their policies don&#39;t do a good job of preventing or deterring it, and the community don&#39;t seem to care that much.</span></p>
                </li>
                <li>
                    <p><span style="background-color: yellow;"><strong>No mechanisms for reliably weighing the quality of sources:</strong></span></p>
                    <p><span style="background-color: yellow;">On Wikipedia, a review article in a mid-tier journal written in 2003 and a meta-analysis in a top-tier journal written in 2026 would carry roughly equal weight under their sourcing policies, provided both can be considered &quot;reliable.&quot; When editors try to weigh which sources are &quot;better&quot; or &quot;more reliable,&quot; the outcome is often decided by what, or how many, editors voted or participated in relevant discussions, not by any epistemic standard.</span></p>
                </li>
            </ul>
        </li>
        <li>
            <p><span style="background-color: yellow;"><strong>&quot;Dispute resolution&quot; is an arms race:</strong></span></p>
            <p><span style="background-color: yellow;">Bureaucracy and edit wars are won by those who are most familiar with years of rules, or prepared to waste others&#39; time, or both, and rarely by those who are the most correct.</span></p>
        </li>
    </ol>
    <hr />
    <p><span style="background-color: yellow;">*&nbsp;Some important policies in certain areas are really, really, really bad. MOS:COMPUNITS is an excellent example of this:</span>

    <p><span style="background-color: yellow;">MOS:COMPUNITS is a a policy that is part of Wikipedia&#39;s Manual of Style. It governs articles about computers by telling users how file size units should be written: whether the SI units for bytes (&quot;kilobyte,&quot; &quot;megabyte,&quot; &quot;gigabyte,&quot;) mean powers of 1,000 or 1,024.</span></p>
    
    <p><span style="background-color: yellow;">The modern standard answer to this question is <i>not ambiguous:</i> The SI prefixes (KB, MB, GB, TB etc.) mean powers of 1000 and <i>not powers of 1,024.</i> The IEC binary prefixes (KiB, MiB, GiB, TiB, etc.) means powers of 1024. This has been the internationally-accepted position since 1998, when the IEC first released their standard on the binary prefixes, and competent experts in computing will use these terms correctly and advocate for their correct usage.</span></p>

    <p><span style="background-color: yellow;">However, the industry was sloppy for a very long time: back in the early days of computing, storage and memory sizes were relatively small, so professionals in the industry could get away with calling &quot;KB&quot; 1,024 and &quot;MB&quot; 1,048,576, instead of 1,000 and 1,000,000. But as storage increased in size and density, and became more accessible to the general public, this difference of 2.4% between a KB and KiB and 4.9% between a MB and MiB, grows to 7.4% for GB vs. GiB, 10% for TB vs TiB, and 12.6% for PB vs. PiB.</span></p>

    <p><span style="background-color: yellow;">Many hard drive manufacturers, however, advertised their storage capacities using 1,000-based units, and they were actually using the terminology correctly. When professionals in the industry saw this, they chose to accuse storage manufacturers of deliberately deceiving customers, using them as a convenient scapegoat, rather than recognising and correcting their own longstanding misuse of the prefixes, a largely dishonest framing that persists even to this day. Even if the storage manufacturers using 1,000-based units <i>were</i> trying to scam customers, <i>they (mostly) spoke the truth</i> when it came to capacities.</span></p>

    <p><span style="background-color: yellow;">(What is just as problematic is the fact that the attitude that tends to accompany any attempt to correct this often consists of appeals to tradition, superiority complexes towards those who advocate for standards, and a reflexive defensiveness more befitting a personal slight than a technical correction. Engineers and programmers are supposed to be professionals who prioritise facts over feelings, yet responses to this particular issue have frequently been of dismissiveness, blame-shifting, elitism, and an extremely irrational and stubborn insistence that entrenched bad practice is somehow more legitimate than standards that exist precisely to ensure consistency and fix bad and outdated practices, just because programmers know more about computing than standards bodies do.)</span></p>

    <p><span style="background-color: yellow;">The practical result is that whether the SI prefixes mean powers of 1,000 or 1,024 depends on which article you&#39;re reading, and Wikipedia doesn&#39;t even <i>allow</i> the use of the IEC binary prefixes in general, because in their view, &quot;nobody uses them, so we shouldn&#39;t either.&quot; This is not a neutral reflection of source usage; instead, it is an outright ban on the use of correct practice and enforcement of bad practice. Wikipedia has always been infamous for being unreliable, since allowing anyone to edit inherently makes it vulnerable to vandalism and disruptive editing which constantly requires editors to make corrections, but another part of this is that, ironically, <i>many of their policies <b>prevent</b> people from being able to make factual corrections.</i></span></p>

    <p><span style="background-color: yellow;">MOS:COMPUNITS is a textbook example of institutionalised arrogance, and it is so ass-backwards that it needs to be completely rewritten from scratch. But this policy is about articles on computers&mdash;a topic that is massive in scale, involves a massive industry, a massive number of Wikipedia articles, and a massive number of web pages, and where a massive number of people have a massive amount invested. Even <i>attempting</i> to challenge this policy in any way, or correcting even a single article that uses the outdated customary convention, is a recipe for a conflict akin to a second United States Civil War. Fixing <i>every single article</i> on Wikipedia that does this or getting the community to actually fix the policy without the Wikimedia Foundation forcing them to? Forget it. <i>${x}</i></span></p>

    <p><span style="background-color: yellow;"><strong><span style="display: inline-block; padding-right: 0.05em;">END RESULT</span>:</strong> I created a Wikipedia account in 2017, and had a mostly good time editing for the next seven years. In 2024, when I discovered this policy, I tried to bring my concerns to the community, only to end up drowning in cult-like procedural resistance and condescension from people more interested in rules than actually engaging with my concerns. Shortly afterwards, I found that there are <i>17 entire pages</i> of arguments involving people trying to get the community to fix it, bringing all sorts of concerns which included the ones I brought up, only to be completely stonewalled, just like I did. I ended up abandoning my account entirely, since I quickly realised that the outcome is almost always predictable&mdash;anyone who attempts to challenge something this entrenched will be treated as a contrarian who just wants to be crazy, and not as someone raising a legitimate concern. Wikipedia&#39;s model basically means that a thousand editors armed with a majority of sources that mirror an industry&#39;s beliefs, even if those beliefs include long-standing, completely unjustified resistance towards correcting faulty practices, will somehow be considered more reliable than 10 or so people like me, approaching the question with no axe to grind, and who actually care about accuracy and consistency, going in and redoing things to modern factual standards, and if you try too hard to be revolutionary, you will not win the arbitration process. So we end up in a situation where thousands of Wikipedia&#39;s articles on computers use conventions which are well-sourced and widely verifiable, but entirely obsolete, and that&#39;s just one small example out of countless others.</span></p>
    `;
    bq.innerHTML = `<p><span style="background-color: yellow;">${x}</span></p>`;
})();
