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
    let x = "Your right to edit Wikipedia by swinging your sledgehammer dead-ends immediately at the nose of some wack nerd who is better at citing years of arbitration and bureaucracy or wasting people&#39;s time (or both) than you are. If you are not thoroughly familiar with the dispute resolution process, and you do not have the tenacity of someone with nothing else to do and nothing left to lose, you will not and cannot win, no matter how right or wrong you are.";

    comment.innerHTML = `
    <p><span style="background-color: yellow;">I agree with this poster, I just wanted to expand that the combination of editor bias and bad summaries of sources together (rather than in isolation) are the biggest reasons the site is unreliable. A lot of Wikipedians have their own pet sources they like; often times they haven&#39;t gone to the library lately, and many sources (both in print and online) have not been updated or synthesised with the current beliefs on things, so many articles end up being more representative of whatever sources were available to the editors who last touched them, and not necessarily of everything available.</span></p>

    <p><span style="background-color: yellow;">There are three massive obstacles that are effectively guaranteed to eventually drive away any person dumb enough to attempt editing Wikipedia in a serious and constructive manner:</span></p>

    <ol>
        <li>
            <p><span style="background-color: yellow;"><strong>Their sourcing policies systematically separate claims from evidence:</strong></span></p>
            <p><span style="background-color: yellow;">Wikipedia explicitly gives an extremely strong preference for secondary, tertiary, etc. sources and recently published accounts over primary sources, regardless of the topic. Both of these effectively equate to a requirement that the documentation be as distant as possible from the actual evidence. That is the exact opposite of what an expert will do, so experts are effectively prohibited from using good practice. While Wikipedia&#39;s policies do not forbid directly citing primary sources, some policies do firmly declare, for example, <i>&quot;<b>do not</b> analyze, synthesize, interpret, or evaluate material found in a primary source yourself; instead, refer to reliable secondary sources that do so.&quot;</i> This is the opposite of what experts actually do.</span></p>
        </li>
        <li>
            <p><span style="background-color: yellow;"><strong>Their core content policies are an appeal to majority:*</strong></span></p>
            <p><span style="background-color: yellow;">Wikipedia often defers to prevailing usage in sources rather than enforcing correct, standardised definitions.</span></p>
            <p><span style="background-color: yellow;">If you look at their poicy on &quot;Verifiability,&quot; you&#39;ll see that their threshold for inclusion is whether or not it can be &quot;verified&quot; by &quot;reliable&quot; sources, not about whether or not it is true. So if, for example, 80% or more of &quot;reliable&quot; secondary (and beyond) sources repeat a flawed account of something, Wikipedia will perpetuate that, because content that states what is the most true or accurate will be a minority viewpoint, and it will fail verification because prioritising it will be considered &quot;giving it undue weight.&quot; This creates even more room for error:</span></p>
            <ul>
                <li>
                    <p><span style="background-color: yellow;"><strong>Textbook lag:</strong></span></p>
                    <p><span style="background-color: yellow;">Even in the hard maths and sciences, widely-used media outlets, websites, and textbooks often contain statements and conventions that are oversimplified or outright wrong, that have been propagated for decades.* Editors trying to reflect current consensus among experts by citing papers and other primary sources directly will very often lose to those citing popular textbooks and news articles.</span></p>
                </li>
                <li>
                    <p><span style="background-color: yellow;"><strong>Circular reporting:</strong></span></p>
                    <p><span style="background-color: yellow;">Also known as &quot;citogenesis,&quot; situations often arise where journalists will cite a Wikipedia article, then at some point their articles are considered &quot;reliable sources,&quot; and then those sources get used as a reference on that Wikipedia article. This launders errors into a false consensus, and is a very well-known problem even within Wikipedia&#39;s community, but their policies don&#39;t do a good job of preventing it.</span></p>
                </li>
                <li>
                    <p><span style="background-color: yellow;"><strong>Insufficient mechanisms for weighing the quality of sources:</strong></span></p>
                    <p><span style="background-color: yellow;">When editors on Wikipedia try to weigh which sources are &quot;better&quot; or &quot;more reliable,&quot; it is often done by how many editors vote or participate in relevant discussions, not by any epistemic standard.</span></p>
                </li>
            </ul>
        </li>
        <li>
            <p><span style="background-color: yellow;"><strong>&quot;Dispute resolution&quot; is an arms race:</strong></span></p>
            <p><span style="background-color: yellow;">Bureaucracy and edit wars are won by those who are most (A)&nbsp;familiar with years of rules, or (B)&nbsp;prepared to waste others&#39; time, or both, and rarely by those who are the most correct.</span></p>
        </li>
    </ol>

    <hr />

    <p><span style="background-color: yellow;">*&nbsp;Some very important policies in certain areas are really, really, really bad:</span>

    <p><span style="background-color: yellow;">MOS:COMPUNITS is the best example I know of. This policy is a section of Wikipedia&#39;s Manual of Style that governs articles about computers by telling users how file size units should be written: whether the SI units for bytes (&quot;kilobyte,&quot; &quot;megabyte,&quot; &quot;gigabyte,&quot;) mean powers of 1,000 or 1,024. The modern standard answer to this question is <i>not ambiguous:</i> The SI prefixes (KB, MB, GB, TB etc.) mean powers of 1000 and <i>not powers of 1,024.</i> The IEC binary prefixes (KiB, MiB, GiB, TiB, etc.) means powers of 1024. This has been the internationally-accepted position since 1998, when the IEC first released their standard on the binary prefixes, and competent experts in computing will use these terms correctly and advocate for their correct usage.</span></p>

    <p><span style="background-color: yellow;">However, the industry was sloppy for a very long time: back in the early days of computing, storage and memory sizes were relatively small, so professionals in the industry could get away with calling &quot;KB&quot; 1,024 and &quot;MB&quot; 1,048,576, instead of 1,000 and 1,000,000. But as storage increased in size and density, and became more accessible to the general public, this difference of 2.4% between a KB and KiB and 4.9% between a MB and MiB, grows to 7.4% for GB vs. GiB, 10% for TB vs TiB, and 12.6% for PB vs. PiB.</span></p>

    <p><span style="background-color: yellow;">Many hard drive manufacturers, however, advertised their storage capacities using 1,000-based units, and they were actually using the terminology correctly. When professionals in the industry saw this, they chose to accuse storage manufacturers of deliberately deceiving customers, using them as a convenient scapegoat, rather than recognising and correcting their own longstanding misuse of the prefixes, a largely dishonest framing that persists even to this day. Even if the storage manufacturers using 1,000-based units <i>were</i> trying to scam customers, <i>they (mostly) spoke the truth</i> when it came to capacities.</span></p>

    <p><span style="background-color: yellow;">(What is just as problematic is the fact that the attitude that tends to accompany any attempt to correct this often consists of appeals to tradition, superiority complexes towards those who advocate for standards, and a reflexive defensiveness more befitting a personal slight than a technical correction. Engineers and programmers are supposed to be professionals who prioritise accuracy over comfort, yet the response to this particular issue is frequently been one of dismissiveness, blame-shifting, and an extremely irrational and stubborn insistence that entrenched bad practice is somehow more legitimate than standards that exist precisely to ensure consistency and fix bad and outdated practices.)</span></p>

    <p><span style="background-color: yellow;">The practical result is that whether the SI prefixes mean powers of 1,000 or 1,024 depends on which article you&#39;re reading. This is not a neutral reflection of source usage; instead, it is an outright ban on the use of correct practice and enforcement of bad practice. Wikipedia has always been infamous for being unreliable, since allowing anyone to edit inherently makes it vulnerable to vandalism and disruptive editing which constantly requires editors to make corrections, but another part of this is that, ironically, <i>many of their policies <b>prevent</b> factual corrections.</i></span></p>

    <p><span style="background-color: yellow;">MOS:COMPUNITS is a textbook example of institutionalised arrogance, and it is so broken that it needs to be completely rewritten from scratch. But this policy is about articles on computers&mdash;a massive topic, involving a massive industry, a massive number of Wikipedia articles, and a massive number of websites, and one where a massive number of people have a massive amount invested. Even <i>attempting</i> to challenge this policy in any way, or correcting even a single article that uses the outdated customary convention, is a recipe for a conflict akin to a second United States Civil War. Fixing <i>every single article</i> on Wikipedia that does this or getting the community to actually fix the policy without the Wikimedia Foundation forcing them to? Forget it. <i>${x}</i></span></p>

    <p><span style="background-color: yellow;"><strong><span style="display: inline-block; padding-right: 0.05em;">END RESULT</span>:</strong> I created a Wikipedia account in 2017, and had a mostly good time editing for the next seven years. In 2024, when I discovered this policy, I tried to bring my concerns to the community, only to end up drowning in cult-like procedural resistance and condescension from people more interested in rules than actually engaging with my concerns. Shortly afterwards, I found that there are <i>17 entire pages</i> of arguments involving people trying to get the community to fix it, only to be completely stonewalled, just like I did. I ended up abandoning my account entirely, since I quickly realised that the outcome is almost always predictable&mdash;anyone who attempts to challenge something this entrenched will be treated as a contrarian who just wants to be crazy, and not as someone raising a legitimate concern. Wikipedia&#39;s model basically means that a thousand editors armed with a majority of sources that mirror an industry&#39;s beliefs, even if those beliefs include long-standing, completely unjustified resistance towards correcting faulty practices, will somehow be considered more reliable than 10 or so people like me, approaching the question with no axe to grind, and who actually care about accuracy and consistency, going in and redoing things to modern factual standards, and if you try too hard to be revolutionary, you will not win the arbitration process. So we end up in a situation where thousands of articles use conventions which are well-sourced and widely verifiable, but entirely obsolete, and that&#39;s just one small example out of countless others.</span></p>
    `;
    bq.innerHTML = `<p><span style="background-color: yellow;">${x}</span></p>`;
})();
